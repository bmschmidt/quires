/* eslint:disable */
// @ts-nocheck
// old code, not checking.

import { default as OpenSeadragon, Rect, Point } from 'openseadragon';
import { select } from 'd3-selection';
import 'd3-transition';
import { easePolyOut } from 'd3-ease';
//import merge from 'scrollership/src/merge.js'

// a plugin for OSD.
add_svgability(OpenSeadragon);

export default class Dragon {
	constructor(tileSource) {
		this.tileSource = tileSource;
		this._query = {};
		this.tiles = new Set();
		if (tileSource) {
			this.tiles.add(tileSource);
		}
		this.background_color = '#000F';
		this.duration = 5000;
	}

	bind(container) {
		this.container = select(container);
		const options = {
			constrainDuringPan: true,
			element: select(container).node(),
			minZoomLevel: 1,
			prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
			showNavigator: true,
			visibilityRatio: 1,
			animationTime: 5
		};
		if (this.tiles.size) {
			options.tileSources = [];
			for (let tile of this.tiles) {
				options.tileSources.push(tile);
			}
		}
		this.viewer = OpenSeadragon(options);
		this.bound = true;
	}

	set query(q) {
		this._query = q;
	}

	get query() {
		const zoom = this.current_zoom();
		this._query.zoom = zoom;
		return this._query;
	}

	create_annotation_layer() {
		if (this.annotation_layer) {
			return;
		}

		select('.openseadragon-container')
			.transition(this.duration)
			.style('background', this.background_color);

		const overlay = this.viewer.svgOverlay();
		const g = overlay.node();
		const svg = select(g.parentElement);

		const gradient = svg.append('radialGradient').attr('id', 'circle_penumbra');

		gradient.append('stop').attr('offset', '50%').attr('stop-color', '#000F');
		gradient.append('stop').attr('offset', '100%').attr('stop-color', '#0000');

		const mask = svg.append('mask').attr('id', 'mask1');

		mask
			.append('rect')
			.attr('x', 0)
			.attr('y', 0)
			.attr('width', 1.02)
			.attr('height', 3)
			.style('transform', 'translate(-0.1, 0)')
			.style('fill', 'white');

		mask
			.append('circle')
			.attr('cx', 0.5)
			.attr('cy', 0.5)
			.attr('r', 0.25)
			.attr('fill', "url('#circle_penumbra')");

		const bounds = select(g)
			.append('rect')
			.attr('width', '100%')
			.attr('height', '101%')
			.attr('fill', this.background_color)
			.attr('mask', "url('#mask1'");

		this.annotation_layer = {
			bounds,
			mask,
			gradient,
			overlay
		};
	}

	prepare_seaclick() {
		const { viewer } = this;
		viewer.innerTracker.pressHandler = ({ position }) => {
			//            preventDefault()
			const location = new Point(parseInt(position.x), parseInt(position.y));
			const { x, y } = viewer.viewport.pointFromPixel(location);
			const size = this.current_zoom[2] * 0.2;
			const event = new CustomEvent('build_circle', { bubbles: true, detail: { x, y, size } });
			this.container.node().dispatchEvent(event);
		};
	}

	update_annotations(callouts = []) {
		if (!this.annotation_layer) {
			return;
		}
		if (callouts.length === 0) {
			this.annotation_layer.bounds
				.transition(this.duration)
				// zero opacity
				.attr('fill', this.background_color)
				.attr('opacity', 0);
			return;
		}
		this.prepare_seaclick();

		this.annotation_layer.bounds
			.transition(this.duration)
			.attr('fill', this.background_color)
			.attr('opacity', 1);

		this.annotation_layer.mask
			.selectAll('circle')
			.data(callouts)
			.join(
				(enter) => enter.append('circle').attr('r', 0).attr('fill', "url('#circle_penumbra')"),
				(update) => update,
				(exit) =>
					exit.call((exit) =>
						exit
							.transition()
							.duration(this.duration)
							.attr('r', callouts.length * 2)
							.remove()
					)
			)
			.filter((d) => d)
			.transition()
			.ease(easePolyOut.exponent(4))
			.duration(this.duration)
			.attr('cx', (d) => d.x)
			.attr('cy', (d) => d.y)
			.attr('r', (d) => d.size);
	}

	async plotAPI(query) {
		this.create_annotation_layer();
		if (!query.zoom) {
			this._query.zoom = undefined;
		}
		this._query = { ...this._query, ...query };
		query = this._query;
		if (query.source_url && !this.tiles.has(query.source_url)) {
			const r = new Promise((resolve, reject) => {
				this.viewer.addTiledImage({
					tileSource: query.source_url,
					success: () => {
						this.create_annotation_layer();
						resolve(true);
					}
				});
			});
			await r;
			this.tiles.add(query.source_url);
			this.create_annotation_layer();
		}

		const { viewer } = this;
		let { callouts, zoom } = query;
		if (!callouts) callouts = [];

		this.update_annotations(callouts);
		if (zoom) {
			viewer.viewport.fitBounds(new Rect(...zoom.slice(0, 4)));
		}
	}

	circle(size = 0.5) {
		const [x, y, width, height] = this.current_zoom();
		return {
			x: x + width / 2,
			y: y + height / 2,
			size: Math.min(width, height) * size
		};
	}

	current_zoom() {
		const { x, y, width, height, degrees } = this.viewer.viewport.getBounds(true);
		return [x, y, width, height];
	}
}

// OpenSeadragon SVG Overlay plugin 0.0.5

/*

Slightly altered from https://github.com/openseadragon/svg-overlay

Copyright (C) 2016 svg-overlay contributors

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.

- Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

- Neither the name of the copyright holder nor the names of its contributors
  may be used to endorse or promote products derived from this software
  without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
©
*/

function add_svgability($) {
	var svgNS = 'http://www.w3.org/2000/svg';

	// ----------
	$.Viewer.prototype.svgOverlay = function () {
		if (this._svgOverlayInfo) {
			return this._svgOverlayInfo;
		}

		this._svgOverlayInfo = new Overlay(this);
		return this._svgOverlayInfo;
	};

	// ----------
	var Overlay = function (viewer) {
		var self = this;

		this._viewer = viewer;
		this._containerWidth = 0;
		this._containerHeight = 0;

		this._svg = document.createElementNS(svgNS, 'svg');
		this._svg.style.position = 'absolute';
		this._svg.style.left = 0;
		this._svg.style.top = 0;
		this._svg.style.width = '100%';
		this._svg.style.height = '100%';
		this._viewer.canvas.appendChild(this._svg);

		this._node = document.createElementNS(svgNS, 'g');
		this._svg.appendChild(this._node);

		this._viewer.addHandler('animation', function () {
			self.resize();
		});

		this._viewer.addHandler('open', function () {
			self.resize();
		});

		this._viewer.addHandler('rotate', function (evt) {
			self.resize();
		});

		this._viewer.addHandler('resize', function () {
			self.resize();
		});

		this.resize();
	};

	// ----------
	Overlay.prototype = {
		// ----------
		node: function () {
			return this._node;
		},

		// ----------
		resize: function () {
			if (this._containerWidth !== this._viewer.container.clientWidth) {
				this._containerWidth = this._viewer.container.clientWidth;
				this._svg.setAttribute('width', this._containerWidth);
			}

			if (this._containerHeight !== this._viewer.container.clientHeight) {
				this._containerHeight = this._viewer.container.clientHeight;
				this._svg.setAttribute('height', this._containerHeight);
			}

			var p = this._viewer.viewport.pixelFromPoint(new $.Point(0, 0), true);
			var zoom = this._viewer.viewport.getZoom(true);
			var rotation = this._viewer.viewport.getRotation();
			// TODO: Expose an accessor for _containerInnerSize in the OSD API so we don't have to use the private variable.
			var scale = this._viewer.viewport._containerInnerSize.x * zoom;
			this._node.setAttribute(
				'transform',
				'translate(' + p.x + ',' + p.y + ') scale(' + scale + ') rotate(' + rotation + ')'
			);
		},

		// ----------
		onClick: function (node, handler) {
			// TODO: Fast click for mobile browsers

			new $.MouseTracker({
				element: node,
				clickHandler: handler
			}).setTracking(true);
		}
	};
}
