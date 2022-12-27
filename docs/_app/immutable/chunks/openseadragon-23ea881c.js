function Re(re, O) {
	for (var e = 0; e < O.length; e++) {
		const t = O[e];
		if (typeof t != 'string' && !Array.isArray(t)) {
			for (const i in t)
				if (i !== 'default' && !(i in re)) {
					const o = Object.getOwnPropertyDescriptor(t, i);
					o && Object.defineProperty(re, i, o.get ? o : { enumerable: !0, get: () => t[i] });
				}
		}
	}
	return Object.freeze(Object.defineProperty(re, Symbol.toStringTag, { value: 'Module' }));
}
var be =
		typeof globalThis < 'u'
			? globalThis
			: typeof window < 'u'
			? window
			: typeof global < 'u'
			? global
			: typeof self < 'u'
			? self
			: {},
	we = {},
	De = {
		get exports() {
			return we;
		},
		set exports(re) {
			we = re;
		}
	};
(function (re) {
	//! openseadragon 4.0.0
	//! Built on 2022-12-16
	//! Git commit: v4.0.0-0-8e6196a
	//! http://openseadragon.github.io
	//! License: http://openseadragon.github.io/license/
	function O(e) {
		return new O.Viewer(e);
	}
	(function (e) {
		e.version = {
			versionStr: '4.0.0',
			major: parseInt('4', 10),
			minor: parseInt('0', 10),
			revision: parseInt('0', 10)
		};
		var t = {
				'[object Boolean]': 'boolean',
				'[object Number]': 'number',
				'[object String]': 'string',
				'[object Function]': 'function',
				'[object Array]': 'array',
				'[object Date]': 'date',
				'[object RegExp]': 'regexp',
				'[object Object]': 'object'
			},
			i = Object.prototype.toString,
			o = Object.prototype.hasOwnProperty;
		(e.isFunction = function (h) {
			return e.type(h) === 'function';
		}),
			(e.isArray =
				Array.isArray ||
				function (h) {
					return e.type(h) === 'array';
				}),
			(e.isWindow = function (h) {
				return h && typeof h == 'object' && 'setInterval' in h;
			}),
			(e.type = function (h) {
				return h == null ? String(h) : t[i.call(h)] || 'object';
			}),
			(e.isPlainObject = function (h) {
				if (
					!h ||
					O.type(h) !== 'object' ||
					h.nodeType ||
					e.isWindow(h) ||
					(h.constructor &&
						!o.call(h, 'constructor') &&
						!o.call(h.constructor.prototype, 'isPrototypeOf'))
				)
					return !1;
				var n;
				for (var r in h) n = r;
				return n === void 0 || o.call(h, n);
			}),
			(e.isEmptyObject = function (h) {
				for (var n in h) return !1;
				return !0;
			}),
			(e.freezeObject = function (h) {
				return (
					Object.freeze
						? (e.freezeObject = Object.freeze)
						: (e.freezeObject = function (n) {
								return n;
						  }),
					e.freezeObject(h)
				);
			}),
			(e.supportsCanvas = (function () {
				var h = document.createElement('canvas');
				return !!(e.isFunction(h.getContext) && h.getContext('2d'));
			})()),
			(e.isCanvasTainted = function (h) {
				var n = !1;
				try {
					h.getContext('2d').getImageData(0, 0, 1, 1);
				} catch {
					n = !0;
				}
				return n;
			}),
			(e.supportsAddEventListener = (function () {
				return !!(document.documentElement.addEventListener && document.addEventListener);
			})()),
			(e.supportsRemoveEventListener = (function () {
				return !!(document.documentElement.removeEventListener && document.removeEventListener);
			})()),
			(e.supportsEventListenerOptions = (function () {
				var h = 0;
				if (e.supportsAddEventListener)
					try {
						var n = {
							get capture() {
								return h++, !1;
							},
							get once() {
								return h++, !1;
							},
							get passive() {
								return h++, !1;
							}
						};
						window.addEventListener('test', null, n), window.removeEventListener('test', null, n);
					} catch {
						h = 0;
					}
				return h >= 3;
			})()),
			(e.getCurrentPixelDensityRatio = function () {
				if (e.supportsCanvas) {
					var h = document.createElement('canvas').getContext('2d'),
						n = window.devicePixelRatio || 1,
						r =
							h.webkitBackingStorePixelRatio ||
							h.mozBackingStorePixelRatio ||
							h.msBackingStorePixelRatio ||
							h.oBackingStorePixelRatio ||
							h.backingStorePixelRatio ||
							1;
					return Math.max(n, 1) / r;
				} else return 1;
			}),
			(e.pixelDensityRatio = e.getCurrentPixelDensityRatio());
	})(O),
		(function (e) {
			e.extend = function () {
				var r,
					s,
					l,
					d,
					f,
					y,
					v = arguments[0] || {},
					T = arguments.length,
					w = !1,
					x = 1;
				for (
					typeof v == 'boolean' && ((w = v), (v = arguments[1] || {}), (x = 2)),
						typeof v != 'object' && !O.isFunction(v) && (v = {}),
						T === x && ((v = this), --x);
					x < T;
					x++
				)
					if (((r = arguments[x]), r !== null || r !== void 0))
						for (s in r) {
							var _ = Object.getOwnPropertyDescriptor(r, s);
							if (_ !== void 0) {
								if (_.get || _.set) {
									Object.defineProperty(v, s, _);
									continue;
								}
								d = _.value;
							} else {
								e.console.warn('Could not copy inherited property "' + s + '".');
								continue;
							}
							v !== d &&
								(w && d && (O.isPlainObject(d) || (f = O.isArray(d)))
									? ((l = v[s]),
									  f
											? ((f = !1), (y = l && O.isArray(l) ? l : []))
											: (y = l && O.isPlainObject(l) ? l : {}),
									  (v[s] = O.extend(w, y, d)))
									: d !== void 0 && (v[s] = d));
						}
				return v;
			};
			var t = function () {
				if (typeof navigator != 'object') return !1;
				var r = navigator.userAgent;
				return typeof r != 'string'
					? !1
					: r.indexOf('iPhone') !== -1 || r.indexOf('iPad') !== -1 || r.indexOf('iPod') !== -1;
			};
			e.extend(e, {
				DEFAULT_SETTINGS: {
					xmlPath: null,
					tileSources: null,
					tileHost: null,
					initialPage: 0,
					crossOriginPolicy: !1,
					ajaxWithCredentials: !1,
					loadTilesWithAjax: !1,
					ajaxHeaders: {},
					splitHashDataForPost: !1,
					panHorizontal: !0,
					panVertical: !0,
					constrainDuringPan: !1,
					wrapHorizontal: !1,
					wrapVertical: !1,
					visibilityRatio: 0.5,
					minPixelRatio: 0.5,
					defaultZoomLevel: 0,
					minZoomLevel: null,
					maxZoomLevel: null,
					homeFillsViewer: !1,
					clickTimeThreshold: 300,
					clickDistThreshold: 5,
					dblClickTimeThreshold: 300,
					dblClickDistThreshold: 20,
					springStiffness: 6.5,
					animationTime: 1.2,
					gestureSettingsMouse: {
						dragToPan: !0,
						scrollToZoom: !0,
						clickToZoom: !0,
						dblClickToZoom: !1,
						dblClickDragToZoom: !1,
						pinchToZoom: !1,
						zoomToRefPoint: !0,
						flickEnabled: !1,
						flickMinSpeed: 120,
						flickMomentum: 0.25,
						pinchRotate: !1
					},
					gestureSettingsTouch: {
						dragToPan: !0,
						scrollToZoom: !1,
						clickToZoom: !1,
						dblClickToZoom: !0,
						dblClickDragToZoom: !0,
						pinchToZoom: !0,
						zoomToRefPoint: !0,
						flickEnabled: !0,
						flickMinSpeed: 120,
						flickMomentum: 0.25,
						pinchRotate: !1
					},
					gestureSettingsPen: {
						dragToPan: !0,
						scrollToZoom: !1,
						clickToZoom: !0,
						dblClickToZoom: !1,
						dblClickDragToZoom: !1,
						pinchToZoom: !1,
						zoomToRefPoint: !0,
						flickEnabled: !1,
						flickMinSpeed: 120,
						flickMomentum: 0.25,
						pinchRotate: !1
					},
					gestureSettingsUnknown: {
						dragToPan: !0,
						scrollToZoom: !1,
						clickToZoom: !1,
						dblClickToZoom: !0,
						dblClickDragToZoom: !1,
						pinchToZoom: !0,
						zoomToRefPoint: !0,
						flickEnabled: !0,
						flickMinSpeed: 120,
						flickMomentum: 0.25,
						pinchRotate: !1
					},
					zoomPerClick: 2,
					zoomPerScroll: 1.2,
					zoomPerDblClickDrag: 1.2,
					zoomPerSecond: 1,
					blendTime: 0,
					alwaysBlend: !1,
					autoHideControls: !0,
					immediateRender: !1,
					minZoomImageRatio: 0.9,
					maxZoomPixelRatio: 1.1,
					smoothTileEdgesMinZoom: 1.1,
					iOSDevice: t(),
					pixelsPerWheelLine: 40,
					pixelsPerArrowPress: 40,
					autoResize: !0,
					preserveImageSizeOnResize: !1,
					minScrollDeltaTime: 50,
					rotationIncrement: 90,
					showSequenceControl: !0,
					sequenceControlAnchor: null,
					preserveViewport: !1,
					preserveOverlays: !1,
					navPrevNextWrap: !1,
					showNavigationControl: !0,
					navigationControlAnchor: null,
					showZoomControl: !0,
					showHomeControl: !0,
					showFullPageControl: !0,
					showRotationControl: !1,
					showFlipControl: !1,
					controlsFadeDelay: 2e3,
					controlsFadeLength: 1500,
					mouseNavEnabled: !0,
					showNavigator: !1,
					navigatorElement: null,
					navigatorId: null,
					navigatorPosition: null,
					navigatorSizeRatio: 0.2,
					navigatorMaintainSizeRatio: !1,
					navigatorTop: null,
					navigatorLeft: null,
					navigatorHeight: null,
					navigatorWidth: null,
					navigatorAutoResize: !0,
					navigatorAutoFade: !0,
					navigatorRotate: !0,
					navigatorBackground: '#000',
					navigatorOpacity: 0.8,
					navigatorBorderColor: '#555',
					navigatorDisplayRegionColor: '#900',
					degrees: 0,
					flipped: !1,
					opacity: 1,
					preload: !1,
					compositeOperation: null,
					imageSmoothingEnabled: !0,
					placeholderFillStyle: null,
					subPixelRoundingForTransparency: null,
					showReferenceStrip: !1,
					referenceStripScroll: 'horizontal',
					referenceStripElement: null,
					referenceStripHeight: null,
					referenceStripWidth: null,
					referenceStripPosition: 'BOTTOM_LEFT',
					referenceStripSizeRatio: 0.2,
					collectionRows: 3,
					collectionColumns: 0,
					collectionLayout: 'horizontal',
					collectionMode: !1,
					collectionTileSize: 800,
					collectionTileMargin: 80,
					imageLoaderLimit: 0,
					maxImageCacheCount: 200,
					timeout: 3e4,
					useCanvas: !0,
					prefixUrl: '/images/',
					navImages: {
						zoomIn: {
							REST: 'zoomin_rest.png',
							GROUP: 'zoomin_grouphover.png',
							HOVER: 'zoomin_hover.png',
							DOWN: 'zoomin_pressed.png'
						},
						zoomOut: {
							REST: 'zoomout_rest.png',
							GROUP: 'zoomout_grouphover.png',
							HOVER: 'zoomout_hover.png',
							DOWN: 'zoomout_pressed.png'
						},
						home: {
							REST: 'home_rest.png',
							GROUP: 'home_grouphover.png',
							HOVER: 'home_hover.png',
							DOWN: 'home_pressed.png'
						},
						fullpage: {
							REST: 'fullpage_rest.png',
							GROUP: 'fullpage_grouphover.png',
							HOVER: 'fullpage_hover.png',
							DOWN: 'fullpage_pressed.png'
						},
						rotateleft: {
							REST: 'rotateleft_rest.png',
							GROUP: 'rotateleft_grouphover.png',
							HOVER: 'rotateleft_hover.png',
							DOWN: 'rotateleft_pressed.png'
						},
						rotateright: {
							REST: 'rotateright_rest.png',
							GROUP: 'rotateright_grouphover.png',
							HOVER: 'rotateright_hover.png',
							DOWN: 'rotateright_pressed.png'
						},
						flip: {
							REST: 'flip_rest.png',
							GROUP: 'flip_grouphover.png',
							HOVER: 'flip_hover.png',
							DOWN: 'flip_pressed.png'
						},
						previous: {
							REST: 'previous_rest.png',
							GROUP: 'previous_grouphover.png',
							HOVER: 'previous_hover.png',
							DOWN: 'previous_pressed.png'
						},
						next: {
							REST: 'next_rest.png',
							GROUP: 'next_grouphover.png',
							HOVER: 'next_hover.png',
							DOWN: 'next_pressed.png'
						}
					},
					debugMode: !1,
					debugGridColor: [
						'#437AB2',
						'#1B9E77',
						'#D95F02',
						'#7570B3',
						'#E7298A',
						'#66A61E',
						'#E6AB02',
						'#A6761D',
						'#666666'
					],
					silenceMultiImageWarnings: !1
				},
				SIGNAL: '----seadragon----',
				delegate: function (r, s) {
					return function () {
						var l = arguments;
						return l === void 0 && (l = []), s.apply(r, l);
					};
				},
				BROWSERS: {
					UNKNOWN: 0,
					IE: 1,
					FIREFOX: 2,
					SAFARI: 3,
					CHROME: 4,
					OPERA: 5,
					EDGE: 6,
					CHROMEEDGE: 7
				},
				SUBPIXEL_ROUNDING_OCCURRENCES: { NEVER: 0, ONLY_AT_REST: 1, ALWAYS: 2 },
				_viewers: new Map(),
				getViewer: function (r) {
					return e._viewers.get(this.getElement(r));
				},
				getElement: function (r) {
					return typeof r == 'string' && (r = document.getElementById(r)), r;
				},
				getElementPosition: function (r) {
					var s = new e.Point(),
						l,
						d;
					for (r = e.getElement(r), l = e.getElementStyle(r).position === 'fixed', d = n(r, l); d; )
						(s.x += r.offsetLeft),
							(s.y += r.offsetTop),
							l && (s = s.plus(e.getPageScroll())),
							(r = d),
							(l = e.getElementStyle(r).position === 'fixed'),
							(d = n(r, l));
					return s;
				},
				getElementOffset: function (r) {
					r = e.getElement(r);
					var s = r && r.ownerDocument,
						l,
						d,
						f = { top: 0, left: 0 };
					return s
						? ((l = s.documentElement),
						  typeof r.getBoundingClientRect < 'u' && (f = r.getBoundingClientRect()),
						  (d = s === s.window ? s : s.nodeType === 9 ? s.defaultView || s.parentWindow : !1),
						  new e.Point(
								f.left + (d.pageXOffset || l.scrollLeft) - (l.clientLeft || 0),
								f.top + (d.pageYOffset || l.scrollTop) - (l.clientTop || 0)
						  ))
						: new e.Point();
				},
				getElementSize: function (r) {
					return (r = e.getElement(r)), new e.Point(r.clientWidth, r.clientHeight);
				},
				getElementStyle: document.documentElement.currentStyle
					? function (r) {
							return (r = e.getElement(r)), r.currentStyle;
					  }
					: function (r) {
							return (r = e.getElement(r)), window.getComputedStyle(r, '');
					  },
				getCssPropertyWithVendorPrefix: function (r) {
					var s = {};
					return (
						(e.getCssPropertyWithVendorPrefix = function (l) {
							if (s[l] !== void 0) return s[l];
							var d = document.createElement('div').style,
								f = null;
							if (d[l] !== void 0) f = l;
							else
								for (
									var y = ['Webkit', 'Moz', 'MS', 'O', 'webkit', 'moz', 'ms', 'o'],
										v = e.capitalizeFirstLetter(l),
										T = 0;
									T < y.length;
									T++
								) {
									var w = y[T] + v;
									if (d[w] !== void 0) {
										f = w;
										break;
									}
								}
							return (s[l] = f), f;
						}),
						e.getCssPropertyWithVendorPrefix(r)
					);
				},
				capitalizeFirstLetter: function (r) {
					return r.charAt(0).toUpperCase() + r.slice(1);
				},
				positiveModulo: function (r, s) {
					var l = r % s;
					return l < 0 && (l += s), l;
				},
				pointInElement: function (r, s) {
					r = e.getElement(r);
					var l = e.getElementOffset(r),
						d = e.getElementSize(r);
					return s.x >= l.x && s.x < l.x + d.x && s.y < l.y + d.y && s.y >= l.y;
				},
				getMousePosition: function (r) {
					if (typeof r.pageX == 'number')
						e.getMousePosition = function (s) {
							var l = new e.Point();
							return (l.x = s.pageX), (l.y = s.pageY), l;
						};
					else if (typeof r.clientX == 'number')
						e.getMousePosition = function (s) {
							var l = new e.Point();
							return (
								(l.x = s.clientX + document.body.scrollLeft + document.documentElement.scrollLeft),
								(l.y = s.clientY + document.body.scrollTop + document.documentElement.scrollTop),
								l
							);
						};
					else throw new Error('Unknown event mouse position, no known technique.');
					return e.getMousePosition(r);
				},
				getPageScroll: function () {
					var r = document.documentElement || {},
						s = document.body || {};
					if (typeof window.pageXOffset == 'number')
						e.getPageScroll = function () {
							return new e.Point(window.pageXOffset, window.pageYOffset);
						};
					else if (s.scrollLeft || s.scrollTop)
						e.getPageScroll = function () {
							return new e.Point(document.body.scrollLeft, document.body.scrollTop);
						};
					else if (r.scrollLeft || r.scrollTop)
						e.getPageScroll = function () {
							return new e.Point(
								document.documentElement.scrollLeft,
								document.documentElement.scrollTop
							);
						};
					else return new e.Point(0, 0);
					return e.getPageScroll();
				},
				setPageScroll: function (r) {
					if (typeof window.scrollTo < 'u')
						e.setPageScroll = function (d) {
							window.scrollTo(d.x, d.y);
						};
					else {
						var s = e.getPageScroll();
						if (s.x === r.x && s.y === r.y) return;
						(document.body.scrollLeft = r.x), (document.body.scrollTop = r.y);
						var l = e.getPageScroll();
						if (l.x !== s.x && l.y !== s.y) {
							e.setPageScroll = function (d) {
								(document.body.scrollLeft = d.x), (document.body.scrollTop = d.y);
							};
							return;
						}
						if (
							((document.documentElement.scrollLeft = r.x),
							(document.documentElement.scrollTop = r.y),
							(l = e.getPageScroll()),
							l.x !== s.x && l.y !== s.y)
						) {
							e.setPageScroll = function (d) {
								(document.documentElement.scrollLeft = d.x),
									(document.documentElement.scrollTop = d.y);
							};
							return;
						}
						e.setPageScroll = function (d) {};
					}
					e.setPageScroll(r);
				},
				getWindowSize: function () {
					var r = document.documentElement || {},
						s = document.body || {};
					if (typeof window.innerWidth == 'number')
						e.getWindowSize = function () {
							return new e.Point(window.innerWidth, window.innerHeight);
						};
					else if (r.clientWidth || r.clientHeight)
						e.getWindowSize = function () {
							return new e.Point(
								document.documentElement.clientWidth,
								document.documentElement.clientHeight
							);
						};
					else if (s.clientWidth || s.clientHeight)
						e.getWindowSize = function () {
							return new e.Point(document.body.clientWidth, document.body.clientHeight);
						};
					else throw new Error('Unknown window size, no known technique.');
					return e.getWindowSize();
				},
				makeCenteredNode: function (r) {
					r = e.getElement(r);
					var s = [
						e.makeNeutralElement('div'),
						e.makeNeutralElement('div'),
						e.makeNeutralElement('div')
					];
					return (
						e.extend(s[0].style, { display: 'table', height: '100%', width: '100%' }),
						e.extend(s[1].style, { display: 'table-row' }),
						e.extend(s[2].style, {
							display: 'table-cell',
							verticalAlign: 'middle',
							textAlign: 'center'
						}),
						s[0].appendChild(s[1]),
						s[1].appendChild(s[2]),
						s[2].appendChild(r),
						s[0]
					);
				},
				makeNeutralElement: function (r) {
					var s = document.createElement(r),
						l = s.style;
					return (
						(l.background = 'transparent none'),
						(l.border = 'none'),
						(l.margin = '0px'),
						(l.padding = '0px'),
						(l.position = 'static'),
						s
					);
				},
				now: function () {
					return (
						Date.now
							? (e.now = Date.now)
							: (e.now = function () {
									return new Date().getTime();
							  }),
						e.now()
					);
				},
				makeTransparentImage: function (r) {
					var s = e.makeNeutralElement('img');
					return (s.src = r), s;
				},
				setElementOpacity: function (r, s, l) {
					var d, f;
					(r = e.getElement(r)),
						l && !e.Browser.alpha && (s = Math.round(s)),
						e.Browser.opacity
							? (r.style.opacity = s < 1 ? s : '')
							: s < 1
							? ((d = Math.round(100 * s)), (f = 'alpha(opacity=' + d + ')'), (r.style.filter = f))
							: (r.style.filter = '');
				},
				setElementTouchActionNone: function (r) {
					(r = e.getElement(r)),
						typeof r.style.touchAction < 'u'
							? (r.style.touchAction = 'none')
							: typeof r.style.msTouchAction < 'u' && (r.style.msTouchAction = 'none');
				},
				setElementPointerEvents: function (r, s) {
					(r = e.getElement(r)),
						typeof r.style < 'u' &&
							typeof r.style.pointerEvents < 'u' &&
							(r.style.pointerEvents = s);
				},
				setElementPointerEventsNone: function (r) {
					e.setElementPointerEvents(r, 'none');
				},
				addClass: function (r, s) {
					(r = e.getElement(r)),
						r.className
							? (' ' + r.className + ' ').indexOf(' ' + s + ' ') === -1 && (r.className += ' ' + s)
							: (r.className = s);
				},
				indexOf: function (r, s, l) {
					return (
						Array.prototype.indexOf
							? (this.indexOf = function (d, f, y) {
									return d.indexOf(f, y);
							  })
							: (this.indexOf = function (d, f, y) {
									var v,
										T = y || 0,
										w;
									if (!d) throw new TypeError();
									if (((w = d.length), w === 0 || T >= w)) return -1;
									for (T < 0 && (T = w - Math.abs(T)), v = T; v < w; v++) if (d[v] === f) return v;
									return -1;
							  }),
						this.indexOf(r, s, l)
					);
				},
				removeClass: function (r, s) {
					var l,
						d = [],
						f;
					for (r = e.getElement(r), l = r.className.split(/\s+/), f = 0; f < l.length; f++)
						l[f] && l[f] !== s && d.push(l[f]);
					r.className = d.join(' ');
				},
				normalizeEventListenerOptions: function (r) {
					var s;
					return (
						typeof r < 'u'
							? typeof r == 'boolean'
								? (s = e.supportsEventListenerOptions ? { capture: r } : r)
								: (s = e.supportsEventListenerOptions ? r : typeof r.capture < 'u' ? r.capture : !1)
							: (s = e.supportsEventListenerOptions ? { capture: !1 } : !1),
						s
					);
				},
				addEvent: (function () {
					if (e.supportsAddEventListener)
						return function (r, s, l, d) {
							(d = e.normalizeEventListenerOptions(d)),
								(r = e.getElement(r)),
								r.addEventListener(s, l, d);
						};
					if (document.documentElement.attachEvent && document.attachEvent)
						return function (r, s, l) {
							(r = e.getElement(r)), r.attachEvent('on' + s, l);
						};
					throw new Error('No known event model.');
				})(),
				removeEvent: (function () {
					if (e.supportsRemoveEventListener)
						return function (r, s, l, d) {
							(d = e.normalizeEventListenerOptions(d)),
								(r = e.getElement(r)),
								r.removeEventListener(s, l, d);
						};
					if (document.documentElement.detachEvent && document.detachEvent)
						return function (r, s, l) {
							(r = e.getElement(r)), r.detachEvent('on' + s, l);
						};
					throw new Error('No known event model.');
				})(),
				cancelEvent: function (r) {
					r.preventDefault();
				},
				eventIsCanceled: function (r) {
					return r.defaultPrevented;
				},
				stopEvent: function (r) {
					r.stopPropagation();
				},
				createCallback: function (r, s) {
					var l = [],
						d;
					for (d = 2; d < arguments.length; d++) l.push(arguments[d]);
					return function () {
						var f = l.concat([]),
							y;
						for (y = 0; y < arguments.length; y++) f.push(arguments[y]);
						return s.apply(r, f);
					};
				},
				getUrlParameter: function (r) {
					var s = h[r];
					return s || null;
				},
				getUrlProtocol: function (r) {
					var s = r.match(/^([a-z]+:)\/\//i);
					return s === null ? window.location.protocol : s[1].toLowerCase();
				},
				createAjaxRequest: function (r) {
					var s;
					try {
						s = !!new ActiveXObject('Microsoft.XMLHTTP');
					} catch {
						s = !1;
					}
					if (s)
						window.XMLHttpRequest
							? (e.createAjaxRequest = function (l) {
									return l ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
							  })
							: (e.createAjaxRequest = function () {
									return new ActiveXObject('Microsoft.XMLHTTP');
							  });
					else if (window.XMLHttpRequest)
						e.createAjaxRequest = function () {
							return new XMLHttpRequest();
						};
					else throw new Error("Browser doesn't support XMLHttpRequest.");
					return e.createAjaxRequest(r);
				},
				makeAjaxRequest: function (r, s, l) {
					var d, f, y, v;
					e.isPlainObject(r) &&
						((s = r.success),
						(l = r.error),
						(d = r.withCredentials),
						(f = r.headers),
						(y = r.responseType || null),
						(v = r.postData || null),
						(r = r.url));
					var T = e.getUrlProtocol(r),
						w = e.createAjaxRequest(T === 'file:');
					if (!e.isFunction(s)) throw new Error('makeAjaxRequest requires a success callback');
					w.onreadystatechange = function () {
						w.readyState === 4 &&
							((w.onreadystatechange = function () {}),
							(w.status >= 200 && w.status < 300) ||
							(w.status === 0 && T !== 'http:' && T !== 'https:')
								? s(w)
								: e.isFunction(l)
								? l(w)
								: e.console.error('AJAX request returned %d: %s', w.status, r));
					};
					var x = v ? 'POST' : 'GET';
					try {
						if ((w.open(x, r, !0), y && (w.responseType = y), f))
							for (var _ in f)
								Object.prototype.hasOwnProperty.call(f, _) && f[_] && w.setRequestHeader(_, f[_]);
						d && (w.withCredentials = !0), w.send(v);
					} catch (b) {
						e.console.error('%s while making AJAX request: %s', b.name, b.message),
							(w.onreadystatechange = function () {}),
							e.isFunction(l) && l(w, b);
					}
					return w;
				},
				jsonp: function (r) {
					var s,
						l = r.url,
						d =
							document.head || document.getElementsByTagName('head')[0] || document.documentElement,
						f = r.callbackName || 'openseadragon' + e.now(),
						y = window[f],
						v = '$1' + f + '$2',
						T = r.param || 'callback',
						w = r.callback;
					(l = l.replace(/(=)\?(&|$)|\?\?/i, v)),
						(l += (/\?/.test(l) ? '&' : '?') + T + '=' + f),
						(window[f] = function (x) {
							if (y) window[f] = y;
							else
								try {
									delete window[f];
								} catch {}
							w && e.isFunction(w) && w(x);
						}),
						(s = document.createElement('script')),
						(r.async !== void 0 || r.async !== !1) && (s.async = 'async'),
						r.scriptCharset && (s.charset = r.scriptCharset),
						(s.src = l),
						(s.onload = s.onreadystatechange =
							function (x, _) {
								(_ || !s.readyState || /loaded|complete/.test(s.readyState)) &&
									((s.onload = s.onreadystatechange = null),
									d && s.parentNode && d.removeChild(s),
									(s = void 0));
							}),
						d.insertBefore(s, d.firstChild);
				},
				createFromDZI: function () {
					throw 'OpenSeadragon.createFromDZI is deprecated, use Viewer.open.';
				},
				parseXml: function (r) {
					if (window.DOMParser)
						e.parseXml = function (s) {
							var l = null,
								d;
							return (d = new DOMParser()), (l = d.parseFromString(s, 'text/xml')), l;
						};
					else if (window.ActiveXObject)
						e.parseXml = function (s) {
							var l = null;
							return (l = new ActiveXObject('Microsoft.XMLDOM')), (l.async = !1), l.loadXML(s), l;
						};
					else throw new Error("Browser doesn't support XML DOM.");
					return e.parseXml(r);
				},
				parseJSON: function (r) {
					return (e.parseJSON = window.JSON.parse), e.parseJSON(r);
				},
				imageFormatSupported: function (r) {
					return (r = r || ''), !!o[r.toLowerCase()];
				},
				setImageFormatsSupported: function (r) {
					e.extend(o, r);
				}
			});
			var i = function (r) {};
			(e.console = window.console || { log: i, debug: i, info: i, warn: i, error: i, assert: i }),
				(e.Browser = { vendor: e.BROWSERS.UNKNOWN, version: 0, alpha: !0 });
			var o = { bmp: !1, jpeg: !0, jpg: !0, png: !0, tif: !1, wdp: !1 },
				h = {};
			(function () {
				var r = navigator.appVersion,
					s = navigator.userAgent,
					l;
				switch (navigator.appName) {
					case 'Microsoft Internet Explorer':
						window.attachEvent &&
							window.ActiveXObject &&
							((e.Browser.vendor = e.BROWSERS.IE),
							(e.Browser.version = parseFloat(
								s.substring(s.indexOf('MSIE') + 5, s.indexOf(';', s.indexOf('MSIE')))
							)));
						break;
					case 'Netscape':
						window.addEventListener &&
							(s.indexOf('Edge') >= 0
								? ((e.Browser.vendor = e.BROWSERS.EDGE),
								  (e.Browser.version = parseFloat(s.substring(s.indexOf('Edge') + 5))))
								: s.indexOf('Edg') >= 0
								? ((e.Browser.vendor = e.BROWSERS.CHROMEEDGE),
								  (e.Browser.version = parseFloat(s.substring(s.indexOf('Edg') + 4))))
								: s.indexOf('Firefox') >= 0
								? ((e.Browser.vendor = e.BROWSERS.FIREFOX),
								  (e.Browser.version = parseFloat(s.substring(s.indexOf('Firefox') + 8))))
								: s.indexOf('Safari') >= 0
								? ((e.Browser.vendor =
										s.indexOf('Chrome') >= 0 ? e.BROWSERS.CHROME : e.BROWSERS.SAFARI),
								  (e.Browser.version = parseFloat(
										s.substring(
											s.substring(0, s.indexOf('Safari')).lastIndexOf('/') + 1,
											s.indexOf('Safari')
										)
								  )))
								: ((l = new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})')),
								  l.exec(s) !== null &&
										((e.Browser.vendor = e.BROWSERS.IE),
										(e.Browser.version = parseFloat(RegExp.$1)))));
						break;
					case 'Opera':
						(e.Browser.vendor = e.BROWSERS.OPERA), (e.Browser.version = parseFloat(r));
						break;
				}
				var d = window.location.search.substring(1),
					f = d.split('&'),
					y,
					v,
					T;
				for (T = 0; T < f.length; T++)
					if (((y = f[T]), (v = y.indexOf('=')), v > 0)) {
						var w = y.substring(0, v),
							x = y.substring(v + 1);
						try {
							h[w] = decodeURIComponent(x);
						} catch {
							e.console.error('Ignoring malformed URL parameter: %s=%s', w, x);
						}
					}
				(e.Browser.alpha = !(e.Browser.vendor === e.BROWSERS.CHROME && e.Browser.version < 2)),
					(e.Browser.opacity = !0),
					e.Browser.vendor === e.BROWSERS.IE &&
						e.Browser.version < 11 &&
						e.console.error('Internet Explorer versions < 11 are not supported by OpenSeadragon');
			})(),
				(function (r) {
					var s =
							r.requestAnimationFrame ||
							r.mozRequestAnimationFrame ||
							r.webkitRequestAnimationFrame ||
							r.msRequestAnimationFrame,
						l =
							r.cancelAnimationFrame ||
							r.mozCancelAnimationFrame ||
							r.webkitCancelAnimationFrame ||
							r.msCancelAnimationFrame;
					if (s && l)
						(e.requestAnimationFrame = function () {
							return s.apply(r, arguments);
						}),
							(e.cancelAnimationFrame = function () {
								return l.apply(r, arguments);
							});
					else {
						var d = [],
							f = [],
							y = 0,
							v;
						(e.requestAnimationFrame = function (T) {
							return (
								d.push([++y, T]),
								v ||
									(v = setInterval(function () {
										if (d.length) {
											var w = e.now(),
												x = f;
											for (f = d, d = x; f.length; ) f.shift()[1](w);
										} else clearInterval(v), (v = void 0);
									}, 1e3 / 50)),
								y
							);
						}),
							(e.cancelAnimationFrame = function (T) {
								var w, x;
								for (w = 0, x = d.length; w < x; w += 1)
									if (d[w][0] === T) {
										d.splice(w, 1);
										return;
									}
								for (w = 0, x = f.length; w < x; w += 1)
									if (f[w][0] === T) {
										f.splice(w, 1);
										return;
									}
							});
					}
				})(window);
			function n(r, s) {
				return s && r !== document.body ? document.body : r.offsetParent;
			}
		})(O),
		(function (e, t) {
			re.exports ? (re.exports = t()) : (e.OpenSeadragon = t());
		})(be, function () {
			return O;
		}),
		(function (e) {
			var t = {
				supportsFullScreen: !1,
				isFullScreen: function () {
					return !1;
				},
				getFullScreenElement: function () {
					return null;
				},
				requestFullScreen: function () {},
				exitFullScreen: function () {},
				cancelFullScreen: function () {},
				fullScreenEventName: '',
				fullScreenErrorEventName: ''
			};
			document.exitFullscreen
				? ((t.supportsFullScreen = !0),
				  (t.getFullScreenElement = function () {
						return document.fullscreenElement;
				  }),
				  (t.requestFullScreen = function (i) {
						return i.requestFullscreen();
				  }),
				  (t.exitFullScreen = function () {
						document.exitFullscreen();
				  }),
				  (t.fullScreenEventName = 'fullscreenchange'),
				  (t.fullScreenErrorEventName = 'fullscreenerror'))
				: document.msExitFullscreen
				? ((t.supportsFullScreen = !0),
				  (t.getFullScreenElement = function () {
						return document.msFullscreenElement;
				  }),
				  (t.requestFullScreen = function (i) {
						return i.msRequestFullscreen();
				  }),
				  (t.exitFullScreen = function () {
						document.msExitFullscreen();
				  }),
				  (t.fullScreenEventName = 'MSFullscreenChange'),
				  (t.fullScreenErrorEventName = 'MSFullscreenError'))
				: document.webkitExitFullscreen
				? ((t.supportsFullScreen = !0),
				  (t.getFullScreenElement = function () {
						return document.webkitFullscreenElement;
				  }),
				  (t.requestFullScreen = function (i) {
						return i.webkitRequestFullscreen();
				  }),
				  (t.exitFullScreen = function () {
						document.webkitExitFullscreen();
				  }),
				  (t.fullScreenEventName = 'webkitfullscreenchange'),
				  (t.fullScreenErrorEventName = 'webkitfullscreenerror'))
				: document.webkitCancelFullScreen
				? ((t.supportsFullScreen = !0),
				  (t.getFullScreenElement = function () {
						return document.webkitCurrentFullScreenElement;
				  }),
				  (t.requestFullScreen = function (i) {
						return i.webkitRequestFullScreen();
				  }),
				  (t.exitFullScreen = function () {
						document.webkitCancelFullScreen();
				  }),
				  (t.fullScreenEventName = 'webkitfullscreenchange'),
				  (t.fullScreenErrorEventName = 'webkitfullscreenerror'))
				: document.mozCancelFullScreen &&
				  ((t.supportsFullScreen = !0),
				  (t.getFullScreenElement = function () {
						return document.mozFullScreenElement;
				  }),
				  (t.requestFullScreen = function (i) {
						return i.mozRequestFullScreen();
				  }),
				  (t.exitFullScreen = function () {
						document.mozCancelFullScreen();
				  }),
				  (t.fullScreenEventName = 'mozfullscreenchange'),
				  (t.fullScreenErrorEventName = 'mozfullscreenerror')),
				(t.isFullScreen = function () {
					return t.getFullScreenElement() !== null;
				}),
				(t.cancelFullScreen = function () {
					e.console.error('cancelFullScreen is deprecated. Use exitFullScreen instead.'),
						t.exitFullScreen();
				}),
				e.extend(e, t);
		})(O),
		(function (e) {
			(e.EventSource = function () {
				this.events = {};
			}),
				(e.EventSource.prototype = {
					addOnceHandler: function (t, i, o, h) {
						var n = this;
						h = h || 1;
						var r = 0,
							s = function (l) {
								r++, r === h && n.removeHandler(t, s), i(l);
							};
						this.addHandler(t, s, o);
					},
					addHandler: function (t, i, o) {
						var h = this.events[t];
						h || (this.events[t] = h = []),
							i && e.isFunction(i) && (h[h.length] = { handler: i, userData: o || null });
					},
					removeHandler: function (t, i) {
						var o = this.events[t],
							h = [],
							n;
						if (o && e.isArray(o)) {
							for (n = 0; n < o.length; n++) o[n].handler !== i && h.push(o[n]);
							this.events[t] = h;
						}
					},
					numberOfHandlers: function (t) {
						var i = this.events[t];
						return i ? i.length : 0;
					},
					removeAllHandlers: function (t) {
						if (t) this.events[t] = [];
						else for (var i in this.events) this.events[i] = [];
					},
					getHandler: function (t) {
						var i = this.events[t];
						return !i || !i.length
							? null
							: ((i = i.length === 1 ? [i[0]] : Array.apply(null, i)),
							  function (o, h) {
									var n,
										r = i.length;
									for (n = 0; n < r; n++)
										i[n] && ((h.eventSource = o), (h.userData = i[n].userData), i[n].handler(h));
							  });
					},
					raiseEvent: function (t, i) {
						var o = this.getHandler(t);
						o && (i || (i = {}), o(this, i));
					}
				});
		})(O),
		(function (e) {
			var t = {};
			(e.MouseTracker = function (c) {
				var u = arguments;
				e.isPlainObject(c) ||
					(c = { element: u[0], clickTimeThreshold: u[1], clickDistThreshold: u[2] }),
					(this.hash = Math.random()),
					(this.element = e.getElement(c.element)),
					(this.clickTimeThreshold = c.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold),
					(this.clickDistThreshold = c.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold),
					(this.dblClickTimeThreshold =
						c.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold),
					(this.dblClickDistThreshold =
						c.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold),
					(this.userData = c.userData || null),
					(this.stopDelay = c.stopDelay || 50),
					(this.preProcessEventHandler = c.preProcessEventHandler || null),
					(this.contextMenuHandler = c.contextMenuHandler || null),
					(this.enterHandler = c.enterHandler || null),
					(this.leaveHandler = c.leaveHandler || null),
					(this.exitHandler = c.exitHandler || null),
					(this.overHandler = c.overHandler || null),
					(this.outHandler = c.outHandler || null),
					(this.pressHandler = c.pressHandler || null),
					(this.nonPrimaryPressHandler = c.nonPrimaryPressHandler || null),
					(this.releaseHandler = c.releaseHandler || null),
					(this.nonPrimaryReleaseHandler = c.nonPrimaryReleaseHandler || null),
					(this.moveHandler = c.moveHandler || null),
					(this.scrollHandler = c.scrollHandler || null),
					(this.clickHandler = c.clickHandler || null),
					(this.dblClickHandler = c.dblClickHandler || null),
					(this.dragHandler = c.dragHandler || null),
					(this.dragEndHandler = c.dragEndHandler || null),
					(this.pinchHandler = c.pinchHandler || null),
					(this.stopHandler = c.stopHandler || null),
					(this.keyDownHandler = c.keyDownHandler || null),
					(this.keyUpHandler = c.keyUpHandler || null),
					(this.keyHandler = c.keyHandler || null),
					(this.focusHandler = c.focusHandler || null),
					(this.blurHandler = c.blurHandler || null);
				var p = this;
				(t[this.hash] = {
					click: function (g) {
						b(p, g);
					},
					dblclick: function (g) {
						z(p, g);
					},
					keydown: function (g) {
						U(p, g);
					},
					keyup: function (g) {
						N(p, g);
					},
					keypress: function (g) {
						k(p, g);
					},
					focus: function (g) {
						M(p, g);
					},
					blur: function (g) {
						W(p, g);
					},
					contextmenu: function (g) {
						Q(p, g);
					},
					wheel: function (g) {
						X(p, g);
					},
					mousewheel: function (g) {
						K(p, g);
					},
					DOMMouseScroll: function (g) {
						K(p, g);
					},
					MozMousePixelScroll: function (g) {
						K(p, g);
					},
					losecapture: function (g) {
						ie(p, g);
					},
					mouseenter: function (g) {
						ce(p, g);
					},
					mouseleave: function (g) {
						de(p, g);
					},
					mouseover: function (g) {
						he(p, g);
					},
					mouseout: function (g) {
						fe(p, g);
					},
					mousedown: function (g) {
						pe(p, g);
					},
					mouseup: function (g) {
						ge(p, g);
					},
					mousemove: function (g) {
						ve(p, g);
					},
					touchstart: function (g) {
						ae(p, g);
					},
					touchend: function (g) {
						ee(p, g);
					},
					touchmove: function (g) {
						ne(p, g);
					},
					touchcancel: function (g) {
						oe(p, g);
					},
					gesturestart: function (g) {
						le(p, g);
					},
					gesturechange: function (g) {
						se(p, g);
					},
					gotpointercapture: function (g) {
						F(p, g);
					},
					lostpointercapture: function (g) {
						Te(p, g);
					},
					pointerenter: function (g) {
						ce(p, g);
					},
					pointerleave: function (g) {
						de(p, g);
					},
					pointerover: function (g) {
						he(p, g);
					},
					pointerout: function (g) {
						fe(p, g);
					},
					pointerdown: function (g) {
						pe(p, g);
					},
					pointerup: function (g) {
						ge(p, g);
					},
					pointermove: function (g) {
						ve(p, g);
					},
					pointercancel: function (g) {
						Ee(p, g);
					},
					pointerupcaptured: function (g) {
						xe(p, g);
					},
					pointermovecaptured: function (g) {
						Se(p, g);
					},
					tracking: !1,
					activePointersLists: [],
					lastClickPos: null,
					dblClickTimeOut: null,
					pinchGPoints: [],
					lastPinchDist: 0,
					currentPinchDist: 0,
					lastPinchCenter: null,
					currentPinchCenter: null,
					sentDragEvent: !1
				}),
					(this.hasGestureHandlers = !!(
						this.pressHandler ||
						this.nonPrimaryPressHandler ||
						this.releaseHandler ||
						this.nonPrimaryReleaseHandler ||
						this.clickHandler ||
						this.dblClickHandler ||
						this.dragHandler ||
						this.dragEndHandler ||
						this.pinchHandler
					)),
					(this.hasScrollHandler = !!this.scrollHandler),
					e.MouseTracker.havePointerEvents && e.setElementPointerEvents(this.element, 'auto'),
					this.exitHandler &&
						e.console.error(
							'MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead.'
						),
					c.startDisabled || this.setTracking(!0);
			}),
				(e.MouseTracker.prototype = {
					destroy: function () {
						r(this), (this.element = null), (t[this.hash] = null), delete t[this.hash];
					},
					isTracking: function () {
						return t[this.hash].tracking;
					},
					setTracking: function (c) {
						return c ? n(this) : r(this), this;
					},
					getActivePointersListByType: function (c) {
						var u = t[this.hash],
							p,
							g = u.activePointersLists.length,
							E;
						for (p = 0; p < g; p++)
							if (u.activePointersLists[p].type === c) return u.activePointersLists[p];
						return (E = new e.MouseTracker.GesturePointList(c)), u.activePointersLists.push(E), E;
					},
					getActivePointerCount: function () {
						var c = t[this.hash],
							u,
							p = c.activePointersLists.length,
							g = 0;
						for (u = 0; u < p; u++) g += c.activePointersLists[u].getLength();
						return g;
					},
					preProcessEventHandler: function () {},
					contextMenuHandler: function () {},
					enterHandler: function () {},
					leaveHandler: function () {},
					exitHandler: function () {},
					overHandler: function () {},
					outHandler: function () {},
					pressHandler: function () {},
					nonPrimaryPressHandler: function () {},
					releaseHandler: function () {},
					nonPrimaryReleaseHandler: function () {},
					moveHandler: function () {},
					scrollHandler: function () {},
					clickHandler: function () {},
					dblClickHandler: function () {},
					dragHandler: function () {},
					dragEndHandler: function () {},
					pinchHandler: function () {},
					stopHandler: function () {},
					keyDownHandler: function () {},
					keyUpHandler: function () {},
					keyHandler: function () {},
					focusHandler: function () {},
					blurHandler: function () {}
				});
			var i = (function () {
				try {
					return window.self !== window.top;
				} catch {
					return !0;
				}
			})();
			function o(c) {
				try {
					return c.addEventListener && c.removeEventListener;
				} catch {
					return !1;
				}
			}
			(e.MouseTracker.gesturePointVelocityTracker = (function () {
				var c = [],
					u = 0,
					p = 0,
					g = function (V, B) {
						return V.hash.toString() + B.type + B.id.toString();
					},
					E = function () {
						var V,
							B = c.length,
							$,
							Y,
							ue = e.now(),
							Pe,
							_e,
							Ce;
						for (Pe = ue - p, p = ue, V = 0; V < B; V++)
							($ = c[V]),
								(Y = $.gPoint),
								(Y.direction = Math.atan2(
									Y.currentPos.y - $.lastPos.y,
									Y.currentPos.x - $.lastPos.x
								)),
								(_e = $.lastPos.distanceTo(Y.currentPos)),
								($.lastPos = Y.currentPos),
								(Ce = (1e3 * _e) / (Pe + 1)),
								(Y.speed = 0.75 * Ce + 0.25 * Y.speed);
					},
					R = function (V, B) {
						var $ = g(V, B);
						c.push({ guid: $, gPoint: B, lastPos: B.currentPos }),
							c.length === 1 && ((p = e.now()), (u = window.setInterval(E, 50)));
					},
					I = function (V, B) {
						var $ = g(V, B),
							Y,
							ue = c.length;
						for (Y = 0; Y < ue; Y++)
							if (c[Y].guid === $) {
								c.splice(Y, 1), ue--, ue === 0 && window.clearInterval(u);
								break;
							}
					};
				return { addPoint: R, removePoint: I };
			})()),
				(e.MouseTracker.captureElement = document),
				(e.MouseTracker.wheelEventName =
					(e.Browser.vendor === e.BROWSERS.IE && e.Browser.version > 8) ||
					'onwheel' in document.createElement('div')
						? 'wheel'
						: document.onmousewheel !== void 0
						? 'mousewheel'
						: 'DOMMouseScroll'),
				(e.MouseTracker.subscribeEvents = [
					'click',
					'dblclick',
					'keydown',
					'keyup',
					'keypress',
					'focus',
					'blur',
					'contextmenu',
					e.MouseTracker.wheelEventName
				]),
				e.MouseTracker.wheelEventName === 'DOMMouseScroll' &&
					e.MouseTracker.subscribeEvents.push('MozMousePixelScroll'),
				window.PointerEvent
					? ((e.MouseTracker.havePointerEvents = !0),
					  e.MouseTracker.subscribeEvents.push(
							'pointerenter',
							'pointerleave',
							'pointerover',
							'pointerout',
							'pointerdown',
							'pointerup',
							'pointermove',
							'pointercancel'
					  ),
					  (e.MouseTracker.havePointerCapture = (function () {
							var c = document.createElement('div');
							return e.isFunction(c.setPointerCapture) && e.isFunction(c.releasePointerCapture);
					  })()),
					  e.MouseTracker.havePointerCapture &&
							e.MouseTracker.subscribeEvents.push('gotpointercapture', 'lostpointercapture'))
					: ((e.MouseTracker.havePointerEvents = !1),
					  e.MouseTracker.subscribeEvents.push(
							'mouseenter',
							'mouseleave',
							'mouseover',
							'mouseout',
							'mousedown',
							'mouseup',
							'mousemove'
					  ),
					  (e.MouseTracker.mousePointerId = 'legacy-mouse'),
					  (e.MouseTracker.havePointerCapture = (function () {
							var c = document.createElement('div');
							return e.isFunction(c.setCapture) && e.isFunction(c.releaseCapture);
					  })()),
					  e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push('losecapture'),
					  'ontouchstart' in window &&
							e.MouseTracker.subscribeEvents.push(
								'touchstart',
								'touchend',
								'touchmove',
								'touchcancel'
							),
					  'ongesturestart' in window &&
							e.MouseTracker.subscribeEvents.push('gesturestart', 'gesturechange')),
				(e.MouseTracker.GesturePointList = function (c) {
					(this._gPoints = []),
						(this.type = c),
						(this.buttons = 0),
						(this.contacts = 0),
						(this.clicks = 0),
						(this.captureCount = 0);
				}),
				(e.MouseTracker.GesturePointList.prototype = {
					getLength: function () {
						return this._gPoints.length;
					},
					asArray: function () {
						return this._gPoints;
					},
					add: function (c) {
						return this._gPoints.push(c);
					},
					removeById: function (c) {
						var u,
							p = this._gPoints.length;
						for (u = 0; u < p; u++)
							if (this._gPoints[u].id === c) {
								this._gPoints.splice(u, 1);
								break;
							}
						return this._gPoints.length;
					},
					getByIndex: function (c) {
						return c < this._gPoints.length ? this._gPoints[c] : null;
					},
					getById: function (c) {
						var u,
							p = this._gPoints.length;
						for (u = 0; u < p; u++) if (this._gPoints[u].id === c) return this._gPoints[u];
						return null;
					},
					getPrimary: function (c) {
						var u,
							p = this._gPoints.length;
						for (u = 0; u < p; u++) if (this._gPoints[u].isPrimary) return this._gPoints[u];
						return null;
					},
					addContact: function () {
						++this.contacts,
							this.contacts > 1 &&
								(this.type === 'mouse' || this.type === 'pen') &&
								(e.console.warn('GesturePointList.addContact() Implausible contacts value'),
								(this.contacts = 1));
					},
					removeContact: function () {
						--this.contacts, this.contacts < 0 && (this.contacts = 0);
					}
				});
			function h(c) {
				var u = t[c.hash],
					p,
					g,
					E,
					R,
					I,
					V = u.activePointersLists.length;
				for (p = 0; p < V; p++)
					if (((E = u.activePointersLists[p]), E.getLength() > 0)) {
						for (I = [], R = E.asArray(), g = 0; g < R.length; g++) I.push(R[g]);
						for (g = 0; g < I.length; g++) m(c, E, I[g]);
					}
				for (p = 0; p < V; p++) u.activePointersLists.pop();
				u.sentDragEvent = !1;
			}
			function n(c) {
				var u = t[c.hash],
					p,
					g;
				if (!u.tracking) {
					for (g = 0; g < e.MouseTracker.subscribeEvents.length; g++)
						(p = e.MouseTracker.subscribeEvents[g]),
							e.addEvent(
								c.element,
								p,
								u[p],
								p === e.MouseTracker.wheelEventName ? { passive: !1, capture: !1 } : !1
							);
					h(c), (u.tracking = !0);
				}
			}
			function r(c) {
				var u = t[c.hash],
					p,
					g;
				if (u.tracking) {
					for (g = 0; g < e.MouseTracker.subscribeEvents.length; g++)
						(p = e.MouseTracker.subscribeEvents[g]), e.removeEvent(c.element, p, u[p], !1);
					h(c), (u.tracking = !1);
				}
			}
			function s(c, u) {
				var p = t[c.hash];
				if (u === 'pointerevent')
					return {
						upName: 'pointerup',
						upHandler: p.pointerupcaptured,
						moveName: 'pointermove',
						moveHandler: p.pointermovecaptured
					};
				if (u === 'mouse')
					return {
						upName: 'pointerup',
						upHandler: p.pointerupcaptured,
						moveName: 'pointermove',
						moveHandler: p.pointermovecaptured
					};
				if (u === 'touch')
					return {
						upName: 'touchend',
						upHandler: p.touchendcaptured,
						moveName: 'touchmove',
						moveHandler: p.touchmovecaptured
					};
				throw new Error('MouseTracker.getCaptureEventParams: Unknown pointer type.');
			}
			function l(c, u) {
				var p;
				if (e.MouseTracker.havePointerCapture)
					if (e.MouseTracker.havePointerEvents)
						try {
							c.element.setPointerCapture(u.id);
						} catch {
							e.console.warn('setPointerCapture() called on invalid pointer ID');
							return;
						}
					else c.element.setCapture(!0);
				else
					(p = s(c, e.MouseTracker.havePointerEvents ? 'pointerevent' : u.type)),
						i && o(window.top) && e.addEvent(window.top, p.upName, p.upHandler, !0),
						e.addEvent(e.MouseTracker.captureElement, p.upName, p.upHandler, !0),
						e.addEvent(e.MouseTracker.captureElement, p.moveName, p.moveHandler, !0);
				C(c, u, !0);
			}
			function d(c, u) {
				var p, g, E;
				if (e.MouseTracker.havePointerCapture)
					if (e.MouseTracker.havePointerEvents) {
						if (
							((g = c.getActivePointersListByType(u.type)),
							(E = g.getById(u.id)),
							!E || !E.captured)
						)
							return;
						try {
							c.element.releasePointerCapture(u.id);
						} catch {}
					} else c.element.releaseCapture();
				else
					(p = s(c, e.MouseTracker.havePointerEvents ? 'pointerevent' : u.type)),
						i && o(window.top) && e.removeEvent(window.top, p.upName, p.upHandler, !0),
						e.removeEvent(e.MouseTracker.captureElement, p.moveName, p.moveHandler, !0),
						e.removeEvent(e.MouseTracker.captureElement, p.upName, p.upHandler, !0);
				C(c, u, !1);
			}
			function f(c) {
				return e.MouseTracker.havePointerEvents ? c.pointerId : e.MouseTracker.mousePointerId;
			}
			function y(c) {
				return e.MouseTracker.havePointerEvents
					? c.pointerType || (e.Browser.vendor === e.BROWSERS.IE ? 'mouse' : '')
					: 'mouse';
			}
			function v(c) {
				return e.MouseTracker.havePointerEvents ? c.isPrimary : !0;
			}
			function T(c) {
				return e.getMousePosition(c);
			}
			function w(c, u) {
				return x(T(c), u);
			}
			function x(c, u) {
				var p = e.getElementOffset(u);
				return c.minus(p);
			}
			function _(c, u) {
				return new e.Point((c.x + u.x) / 2, (c.y + u.y) / 2);
			}
			function b(c, u) {
				var p = { originalEvent: u, eventType: 'click', pointerType: 'mouse', isEmulated: !1 };
				P(c, p),
					p.preventDefault && !p.defaultPrevented && e.cancelEvent(u),
					p.stopPropagation && e.stopEvent(u);
			}
			function z(c, u) {
				var p = { originalEvent: u, eventType: 'dblclick', pointerType: 'mouse', isEmulated: !1 };
				P(c, p),
					p.preventDefault && !p.defaultPrevented && e.cancelEvent(u),
					p.stopPropagation && e.stopEvent(u);
			}
			function U(c, u) {
				var p = null,
					g = { originalEvent: u, eventType: 'keydown', pointerType: '', isEmulated: !1 };
				P(c, g),
					c.keyDownHandler &&
						!g.preventGesture &&
						!g.defaultPrevented &&
						((p = {
							eventSource: c,
							keyCode: u.keyCode ? u.keyCode : u.charCode,
							ctrl: u.ctrlKey,
							shift: u.shiftKey,
							alt: u.altKey,
							meta: u.metaKey,
							originalEvent: u,
							preventDefault: g.preventDefault || g.defaultPrevented,
							userData: c.userData
						}),
						c.keyDownHandler(p)),
					((p && p.preventDefault) || (g.preventDefault && !g.defaultPrevented)) &&
						e.cancelEvent(u),
					g.stopPropagation && e.stopEvent(u);
			}
			function N(c, u) {
				var p = null,
					g = { originalEvent: u, eventType: 'keyup', pointerType: '', isEmulated: !1 };
				P(c, g),
					c.keyUpHandler &&
						!g.preventGesture &&
						!g.defaultPrevented &&
						((p = {
							eventSource: c,
							keyCode: u.keyCode ? u.keyCode : u.charCode,
							ctrl: u.ctrlKey,
							shift: u.shiftKey,
							alt: u.altKey,
							meta: u.metaKey,
							originalEvent: u,
							preventDefault: g.preventDefault || g.defaultPrevented,
							userData: c.userData
						}),
						c.keyUpHandler(p)),
					((p && p.preventDefault) || (g.preventDefault && !g.defaultPrevented)) &&
						e.cancelEvent(u),
					g.stopPropagation && e.stopEvent(u);
			}
			function k(c, u) {
				var p = null,
					g = { originalEvent: u, eventType: 'keypress', pointerType: '', isEmulated: !1 };
				P(c, g),
					c.keyHandler &&
						!g.preventGesture &&
						!g.defaultPrevented &&
						((p = {
							eventSource: c,
							keyCode: u.keyCode ? u.keyCode : u.charCode,
							ctrl: u.ctrlKey,
							shift: u.shiftKey,
							alt: u.altKey,
							meta: u.metaKey,
							originalEvent: u,
							preventDefault: g.preventDefault || g.defaultPrevented,
							userData: c.userData
						}),
						c.keyHandler(p)),
					((p && p.preventDefault) || (g.preventDefault && !g.defaultPrevented)) &&
						e.cancelEvent(u),
					g.stopPropagation && e.stopEvent(u);
			}
			function M(c, u) {
				var p = { originalEvent: u, eventType: 'focus', pointerType: '', isEmulated: !1 };
				P(c, p),
					c.focusHandler &&
						!p.preventGesture &&
						c.focusHandler({ eventSource: c, originalEvent: u, userData: c.userData });
			}
			function W(c, u) {
				var p = { originalEvent: u, eventType: 'blur', pointerType: '', isEmulated: !1 };
				P(c, p),
					c.blurHandler &&
						!p.preventGesture &&
						c.blurHandler({ eventSource: c, originalEvent: u, userData: c.userData });
			}
			function Q(c, u) {
				var p = null,
					g = { originalEvent: u, eventType: 'contextmenu', pointerType: 'mouse', isEmulated: !1 };
				P(c, g),
					c.contextMenuHandler &&
						!g.preventGesture &&
						!g.defaultPrevented &&
						((p = {
							eventSource: c,
							position: x(T(u), c.element),
							originalEvent: g.originalEvent,
							preventDefault: g.preventDefault || g.defaultPrevented,
							userData: c.userData
						}),
						c.contextMenuHandler(p)),
					((p && p.preventDefault) || (g.preventDefault && !g.defaultPrevented)) &&
						e.cancelEvent(u),
					g.stopPropagation && e.stopEvent(u);
			}
			function X(c, u) {
				te(c, u, u);
			}
			function K(c, u) {
				var p = {
					target: u.target || u.srcElement,
					type: 'wheel',
					shiftKey: u.shiftKey || !1,
					clientX: u.clientX,
					clientY: u.clientY,
					pageX: u.pageX ? u.pageX : u.clientX,
					pageY: u.pageY ? u.pageY : u.clientY,
					deltaMode: u.type === 'MozMousePixelScroll' ? 0 : 1,
					deltaX: 0,
					deltaZ: 0
				};
				e.MouseTracker.wheelEventName === 'mousewheel'
					? (p.deltaY = -u.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine)
					: (p.deltaY = u.detail),
					te(c, p, u);
			}
			function te(c, u, p) {
				var g = 0,
					E,
					R = null;
				(g = u.deltaY < 0 ? 1 : -1),
					(E = { originalEvent: u, eventType: 'wheel', pointerType: 'mouse', isEmulated: u !== p }),
					P(c, E),
					c.scrollHandler &&
						!E.preventGesture &&
						!E.defaultPrevented &&
						((R = {
							eventSource: c,
							pointerType: 'mouse',
							position: w(u, c.element),
							scroll: g,
							shift: u.shiftKey,
							isTouchEvent: !1,
							originalEvent: p,
							preventDefault: E.preventDefault || E.defaultPrevented,
							userData: c.userData
						}),
						c.scrollHandler(R)),
					E.stopPropagation && e.stopEvent(p),
					((R && R.preventDefault) || (E.preventDefault && !E.defaultPrevented)) &&
						e.cancelEvent(p);
			}
			function ie(c, u) {
				var p = { id: e.MouseTracker.mousePointerId, type: 'mouse' },
					g = {
						originalEvent: u,
						eventType: 'lostpointercapture',
						pointerType: 'mouse',
						isEmulated: !1
					};
				P(c, g), u.target === c.element && C(c, p, !1), g.stopPropagation && e.stopEvent(u);
			}
			function ae(c, u) {
				var p,
					g,
					E = u.changedTouches.length,
					R,
					I = c.getActivePointersListByType('touch');
				(p = e.now()),
					I.getLength() > u.touches.length - E &&
						e.console.warn("Tracked touch contact count doesn't match event.touches.length");
				var V = {
					originalEvent: u,
					eventType: 'pointerdown',
					pointerType: 'touch',
					isEmulated: !1
				};
				for (P(c, V), g = 0; g < E; g++)
					(R = {
						id: u.changedTouches[g].identifier,
						type: 'touch',
						isPrimary: I.getLength() === 0,
						currentPos: T(u.changedTouches[g]),
						currentTime: p
					}),
						H(c, V, R),
						Z(c, V, R, 0),
						C(c, R, !0);
				V.preventDefault && !V.defaultPrevented && e.cancelEvent(u),
					V.stopPropagation && e.stopEvent(u);
			}
			function ee(c, u) {
				var p,
					g,
					E = u.changedTouches.length,
					R;
				p = e.now();
				var I = { originalEvent: u, eventType: 'pointerup', pointerType: 'touch', isEmulated: !1 };
				for (P(c, I), g = 0; g < E; g++)
					(R = {
						id: u.changedTouches[g].identifier,
						type: 'touch',
						currentPos: T(u.changedTouches[g]),
						currentTime: p
					}),
						L(c, I, R, 0),
						C(c, R, !1),
						D(c, I, R);
				I.preventDefault && !I.defaultPrevented && e.cancelEvent(u),
					I.stopPropagation && e.stopEvent(u);
			}
			function ne(c, u) {
				var p,
					g,
					E = u.changedTouches.length,
					R;
				p = e.now();
				var I = {
					originalEvent: u,
					eventType: 'pointermove',
					pointerType: 'touch',
					isEmulated: !1
				};
				for (P(c, I), g = 0; g < E; g++)
					(R = {
						id: u.changedTouches[g].identifier,
						type: 'touch',
						currentPos: T(u.changedTouches[g]),
						currentTime: p
					}),
						q(c, I, R);
				I.preventDefault && !I.defaultPrevented && e.cancelEvent(u),
					I.stopPropagation && e.stopEvent(u);
			}
			function oe(c, u) {
				var p = u.changedTouches.length,
					g,
					E,
					R = {
						originalEvent: u,
						eventType: 'pointercancel',
						pointerType: 'touch',
						isEmulated: !1
					};
				for (P(c, R), g = 0; g < p; g++)
					(E = { id: u.changedTouches[g].identifier, type: 'touch' }), A(c, R, E);
				R.stopPropagation && e.stopEvent(u);
			}
			function le(c, u) {
				return e.eventIsCanceled(u) || u.preventDefault(), !1;
			}
			function se(c, u) {
				return e.eventIsCanceled(u) || u.preventDefault(), !1;
			}
			function F(c, u) {
				var p = {
					originalEvent: u,
					eventType: 'gotpointercapture',
					pointerType: y(u),
					isEmulated: !1
				};
				P(c, p),
					u.target === c.element && C(c, { id: u.pointerId, type: y(u) }, !0),
					p.stopPropagation && e.stopEvent(u);
			}
			function Te(c, u) {
				var p = {
					originalEvent: u,
					eventType: 'lostpointercapture',
					pointerType: y(u),
					isEmulated: !1
				};
				P(c, p),
					u.target === c.element && C(c, { id: u.pointerId, type: y(u) }, !1),
					p.stopPropagation && e.stopEvent(u);
			}
			function ce(c, u) {
				var p = { id: f(u), type: y(u), isPrimary: v(u), currentPos: T(u), currentTime: e.now() },
					g = { originalEvent: u, eventType: 'pointerenter', pointerType: p.type, isEmulated: !1 };
				P(c, g), H(c, g, p);
			}
			function de(c, u) {
				var p = { id: f(u), type: y(u), isPrimary: v(u), currentPos: T(u), currentTime: e.now() },
					g = { originalEvent: u, eventType: 'pointerleave', pointerType: p.type, isEmulated: !1 };
				P(c, g), D(c, g, p);
			}
			function he(c, u) {
				var p = { id: f(u), type: y(u), isPrimary: v(u), currentPos: T(u), currentTime: e.now() },
					g = { originalEvent: u, eventType: 'pointerover', pointerType: p.type, isEmulated: !1 };
				P(c, g),
					G(c, g, p),
					g.preventDefault && !g.defaultPrevented && e.cancelEvent(u),
					g.stopPropagation && e.stopEvent(u);
			}
			function fe(c, u) {
				var p = { id: f(u), type: y(u), isPrimary: v(u), currentPos: T(u), currentTime: e.now() },
					g = { originalEvent: u, eventType: 'pointerout', pointerType: p.type, isEmulated: !1 };
				P(c, g),
					j(c, g, p),
					g.preventDefault && !g.defaultPrevented && e.cancelEvent(u),
					g.stopPropagation && e.stopEvent(u);
			}
			function pe(c, u) {
				var p = { id: f(u), type: y(u), isPrimary: v(u), currentPos: T(u), currentTime: e.now() },
					g =
						e.MouseTracker.havePointerEvents &&
						p.type === 'touch' &&
						e.Browser.vendor !== e.BROWSERS.IE,
					E = { originalEvent: u, eventType: 'pointerdown', pointerType: p.type, isEmulated: !1 };
				P(c, E),
					Z(c, E, p, u.button),
					E.preventDefault && !E.defaultPrevented && e.cancelEvent(u),
					E.stopPropagation && e.stopEvent(u),
					E.shouldCapture && (g ? C(c, p, !0) : l(c, p));
			}
			function ge(c, u) {
				me(c, u);
			}
			function xe(c, u) {
				var p = c.getActivePointersListByType(y(u));
				p.getById(u.pointerId) && me(c, u), e.stopEvent(u);
			}
			function me(c, u) {
				var p;
				p = { id: f(u), type: y(u), isPrimary: v(u), currentPos: T(u), currentTime: e.now() };
				var g = { originalEvent: u, eventType: 'pointerup', pointerType: p.type, isEmulated: !1 };
				P(c, g),
					L(c, g, p, u.button),
					g.preventDefault && !g.defaultPrevented && e.cancelEvent(u),
					g.stopPropagation && e.stopEvent(u),
					g.shouldReleaseCapture && (u.target === c.element ? d(c, p) : C(c, p, !1));
			}
			function ve(c, u) {
				ye(c, u);
			}
			function Se(c, u) {
				var p = c.getActivePointersListByType(y(u));
				p.getById(u.pointerId) && ye(c, u), e.stopEvent(u);
			}
			function ye(c, u) {
				var p = { id: f(u), type: y(u), isPrimary: v(u), currentPos: T(u), currentTime: e.now() },
					g = { originalEvent: u, eventType: 'pointermove', pointerType: p.type, isEmulated: !1 };
				P(c, g),
					q(c, g, p),
					g.preventDefault && !g.defaultPrevented && e.cancelEvent(u),
					g.stopPropagation && e.stopEvent(u);
			}
			function Ee(c, u) {
				var p = { id: u.pointerId, type: y(u) },
					g = { originalEvent: u, eventType: 'pointercancel', pointerType: p.type, isEmulated: !1 };
				P(c, g), A(c, g, p), g.stopPropagation && e.stopEvent(u);
			}
			function a(c, u) {
				return (
					(u.speed = 0),
					(u.direction = 0),
					(u.contactPos = u.currentPos),
					(u.contactTime = u.currentTime),
					(u.lastPos = u.currentPos),
					(u.lastTime = u.currentTime),
					c.add(u)
				);
			}
			function m(c, u, p) {
				var g,
					E = u.getById(p.id);
				return (
					E
						? (E.captured &&
								(e.console.warn('stopTrackingPointer() called on captured pointer'), d(c, E)),
						  u.removeContact(),
						  (g = u.removeById(p.id)))
						: (g = u.getLength()),
					g
				);
			}
			function S(c, u) {
				switch (u.eventType) {
					case 'pointermove':
						(u.isStoppable = !0),
							(u.isCancelable = !0),
							(u.preventDefault = !1),
							(u.preventGesture = !c.hasGestureHandlers),
							(u.stopPropagation = !1);
						break;
					case 'pointerover':
					case 'pointerout':
					case 'contextmenu':
					case 'keydown':
					case 'keyup':
					case 'keypress':
						(u.isStoppable = !0),
							(u.isCancelable = !0),
							(u.preventDefault = !1),
							(u.preventGesture = !1),
							(u.stopPropagation = !1);
						break;
					case 'pointerdown':
						(u.isStoppable = !0),
							(u.isCancelable = !0),
							(u.preventDefault = !1),
							(u.preventGesture = !c.hasGestureHandlers),
							(u.stopPropagation = !1);
						break;
					case 'pointerup':
						(u.isStoppable = !0),
							(u.isCancelable = !0),
							(u.preventDefault = !1),
							(u.preventGesture = !c.hasGestureHandlers),
							(u.stopPropagation = !1);
						break;
					case 'wheel':
						(u.isStoppable = !0),
							(u.isCancelable = !0),
							(u.preventDefault = !1),
							(u.preventGesture = !c.hasScrollHandler),
							(u.stopPropagation = !1);
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
						(u.isStoppable = !0),
							(u.isCancelable = !1),
							(u.preventDefault = !1),
							(u.preventGesture = !1),
							(u.stopPropagation = !1);
						break;
					case 'click':
						(u.isStoppable = !0),
							(u.isCancelable = !0),
							(u.preventDefault = !!c.clickHandler),
							(u.preventGesture = !1),
							(u.stopPropagation = !1);
						break;
					case 'dblclick':
						(u.isStoppable = !0),
							(u.isCancelable = !0),
							(u.preventDefault = !!c.dblClickHandler),
							(u.preventGesture = !1),
							(u.stopPropagation = !1);
						break;
					case 'focus':
					case 'blur':
					case 'pointerenter':
					case 'pointerleave':
					default:
						(u.isStoppable = !1),
							(u.isCancelable = !1),
							(u.preventDefault = !1),
							(u.preventGesture = !1),
							(u.stopPropagation = !1);
						break;
				}
			}
			function P(c, u) {
				(u.eventSource = c),
					(u.eventPhase =
						u.originalEvent && typeof u.originalEvent.eventPhase < 'u'
							? u.originalEvent.eventPhase
							: 0),
					(u.defaultPrevented = e.eventIsCanceled(u.originalEvent)),
					(u.shouldCapture = !1),
					(u.shouldReleaseCapture = !1),
					(u.userData = c.userData),
					S(c, u),
					c.preProcessEventHandler && c.preProcessEventHandler(u);
			}
			function C(c, u, p) {
				var g = c.getActivePointersListByType(u.type),
					E = g.getById(u.id);
				E
					? p && !E.captured
						? ((E.captured = !0), g.captureCount++)
						: !p &&
						  E.captured &&
						  ((E.captured = !1),
						  g.captureCount--,
						  g.captureCount < 0 &&
								((g.captureCount = 0),
								e.console.warn('updatePointerCaptured() - pointsList.captureCount went negative')))
					: e.console.warn('updatePointerCaptured() called on untracked pointer');
			}
			function H(c, u, p) {
				var g = c.getActivePointersListByType(p.type),
					E;
				(E = g.getById(p.id)),
					E
						? ((E.insideElement = !0),
						  (E.lastPos = E.currentPos),
						  (E.lastTime = E.currentTime),
						  (E.currentPos = p.currentPos),
						  (E.currentTime = p.currentTime),
						  (p = E))
						: ((p.captured = !1), (p.insideElementPressed = !1), (p.insideElement = !0), a(g, p)),
					c.enterHandler &&
						c.enterHandler({
							eventSource: c,
							pointerType: p.type,
							position: x(p.currentPos, c.element),
							buttons: g.buttons,
							pointers: c.getActivePointerCount(),
							insideElementPressed: p.insideElementPressed,
							buttonDownAny: g.buttons !== 0,
							isTouchEvent: p.type === 'touch',
							originalEvent: u.originalEvent,
							userData: c.userData
						});
			}
			function D(c, u, p) {
				var g = c.getActivePointersListByType(p.type),
					E,
					R;
				(E = g.getById(p.id)),
					E
						? (E.captured
								? ((E.insideElement = !1),
								  (E.lastPos = E.currentPos),
								  (E.lastTime = E.currentTime),
								  (E.currentPos = p.currentPos),
								  (E.currentTime = p.currentTime))
								: m(c, g, E),
						  (p = E))
						: ((p.captured = !1), (p.insideElementPressed = !1)),
					(c.leaveHandler || c.exitHandler) &&
						((R = {
							eventSource: c,
							pointerType: p.type,
							position: p.currentPos && x(p.currentPos, c.element),
							buttons: g.buttons,
							pointers: c.getActivePointerCount(),
							insideElementPressed: p.insideElementPressed,
							buttonDownAny: g.buttons !== 0,
							isTouchEvent: p.type === 'touch',
							originalEvent: u.originalEvent,
							userData: c.userData
						}),
						c.leaveHandler && c.leaveHandler(R),
						c.exitHandler && c.exitHandler(R));
			}
			function G(c, u, p) {
				var g, E;
				(g = c.getActivePointersListByType(p.type)),
					(E = g.getById(p.id)),
					E ? (p = E) : ((p.captured = !1), (p.insideElementPressed = !1)),
					c.overHandler &&
						c.overHandler({
							eventSource: c,
							pointerType: p.type,
							position: x(p.currentPos, c.element),
							buttons: g.buttons,
							pointers: c.getActivePointerCount(),
							insideElementPressed: p.insideElementPressed,
							buttonDownAny: g.buttons !== 0,
							isTouchEvent: p.type === 'touch',
							originalEvent: u.originalEvent,
							userData: c.userData
						});
			}
			function j(c, u, p) {
				var g, E;
				(g = c.getActivePointersListByType(p.type)),
					(E = g.getById(p.id)),
					E ? (p = E) : ((p.captured = !1), (p.insideElementPressed = !1)),
					c.outHandler &&
						c.outHandler({
							eventSource: c,
							pointerType: p.type,
							position: p.currentPos && x(p.currentPos, c.element),
							buttons: g.buttons,
							pointers: c.getActivePointerCount(),
							insideElementPressed: p.insideElementPressed,
							buttonDownAny: g.buttons !== 0,
							isTouchEvent: p.type === 'touch',
							originalEvent: u.originalEvent,
							userData: c.userData
						});
			}
			function Z(c, u, p, g) {
				var E = t[c.hash],
					R = c.getActivePointersListByType(p.type),
					I;
				if (
					(typeof u.originalEvent.buttons < 'u'
						? (R.buttons = u.originalEvent.buttons)
						: g === 0
						? (R.buttons |= 1)
						: g === 1
						? (R.buttons |= 4)
						: g === 2
						? (R.buttons |= 2)
						: g === 3
						? (R.buttons |= 8)
						: g === 4
						? (R.buttons |= 16)
						: g === 5 && (R.buttons |= 32),
					g !== 0)
				) {
					(u.shouldCapture = !1),
						(u.shouldReleaseCapture = !1),
						c.nonPrimaryPressHandler &&
							!u.preventGesture &&
							!u.defaultPrevented &&
							((u.preventDefault = !0),
							c.nonPrimaryPressHandler({
								eventSource: c,
								pointerType: p.type,
								position: x(p.currentPos, c.element),
								button: g,
								buttons: R.buttons,
								isTouchEvent: p.type === 'touch',
								originalEvent: u.originalEvent,
								userData: c.userData
							}));
					return;
				}
				(I = R.getById(p.id)),
					I
						? ((I.insideElementPressed = !0),
						  (I.insideElement = !0),
						  (I.originalTarget = u.originalEvent.target),
						  (I.contactPos = p.currentPos),
						  (I.contactTime = p.currentTime),
						  (I.lastPos = I.currentPos),
						  (I.lastTime = I.currentTime),
						  (I.currentPos = p.currentPos),
						  (I.currentTime = p.currentTime),
						  (p = I))
						: ((p.captured = !1),
						  (p.insideElementPressed = !0),
						  (p.insideElement = !0),
						  (p.originalTarget = u.originalEvent.target),
						  a(R, p)),
					R.addContact(),
					!u.preventGesture && !u.defaultPrevented
						? ((u.shouldCapture = !0),
						  (u.shouldReleaseCapture = !1),
						  (u.preventDefault = !0),
						  (c.dragHandler || c.dragEndHandler || c.pinchHandler) &&
								e.MouseTracker.gesturePointVelocityTracker.addPoint(c, p),
						  R.contacts === 1
								? c.pressHandler &&
								  !u.preventGesture &&
								  c.pressHandler({
										eventSource: c,
										pointerType: p.type,
										position: x(p.contactPos, c.element),
										buttons: R.buttons,
										isTouchEvent: p.type === 'touch',
										originalEvent: u.originalEvent,
										userData: c.userData
								  })
								: R.contacts === 2 &&
								  c.pinchHandler &&
								  p.type === 'touch' &&
								  ((E.pinchGPoints = R.asArray()),
								  (E.lastPinchDist = E.currentPinchDist =
										E.pinchGPoints[0].currentPos.distanceTo(E.pinchGPoints[1].currentPos)),
								  (E.lastPinchCenter = E.currentPinchCenter =
										_(E.pinchGPoints[0].currentPos, E.pinchGPoints[1].currentPos))))
						: ((u.shouldCapture = !1), (u.shouldReleaseCapture = !1));
			}
			function L(c, u, p, g) {
				var E = t[c.hash],
					R = c.getActivePointersListByType(p.type),
					I,
					V,
					B,
					$ = !1,
					Y;
				if (
					(typeof u.originalEvent.buttons < 'u'
						? (R.buttons = u.originalEvent.buttons)
						: g === 0
						? (R.buttons ^= -2)
						: g === 1
						? (R.buttons ^= -5)
						: g === 2
						? (R.buttons ^= -3)
						: g === 3
						? (R.buttons ^= -9)
						: g === 4
						? (R.buttons ^= -17)
						: g === 5 && (R.buttons ^= -33),
					(u.shouldCapture = !1),
					g !== 0)
				) {
					(u.shouldReleaseCapture = !1),
						c.nonPrimaryReleaseHandler &&
							!u.preventGesture &&
							!u.defaultPrevented &&
							((u.preventDefault = !0),
							c.nonPrimaryReleaseHandler({
								eventSource: c,
								pointerType: p.type,
								position: x(p.currentPos, c.element),
								button: g,
								buttons: R.buttons,
								isTouchEvent: p.type === 'touch',
								originalEvent: u.originalEvent,
								userData: c.userData
							}));
					return;
				}
				(B = R.getById(p.id)),
					B
						? (R.removeContact(),
						  B.captured && ($ = !0),
						  (B.lastPos = B.currentPos),
						  (B.lastTime = B.currentTime),
						  (B.currentPos = p.currentPos),
						  (B.currentTime = p.currentTime),
						  B.insideElement || m(c, R, B),
						  (I = B.currentPos),
						  (V = B.currentTime))
						: ((p.captured = !1),
						  (p.insideElementPressed = !1),
						  (p.insideElement = !0),
						  a(R, p),
						  (B = p)),
					!u.preventGesture &&
						!u.defaultPrevented &&
						($
							? ((u.shouldReleaseCapture = !0),
							  (u.preventDefault = !0),
							  (c.dragHandler || c.dragEndHandler || c.pinchHandler) &&
									e.MouseTracker.gesturePointVelocityTracker.removePoint(c, B),
							  R.contacts === 0
									? (c.releaseHandler &&
											I &&
											c.releaseHandler({
												eventSource: c,
												pointerType: B.type,
												position: x(I, c.element),
												buttons: R.buttons,
												insideElementPressed: B.insideElementPressed,
												insideElementReleased: B.insideElement,
												isTouchEvent: B.type === 'touch',
												originalEvent: u.originalEvent,
												userData: c.userData
											}),
									  c.dragEndHandler &&
											E.sentDragEvent &&
											c.dragEndHandler({
												eventSource: c,
												pointerType: B.type,
												position: x(B.currentPos, c.element),
												speed: B.speed,
												direction: B.direction,
												shift: u.originalEvent.shiftKey,
												isTouchEvent: B.type === 'touch',
												originalEvent: u.originalEvent,
												userData: c.userData
											}),
									  (E.sentDragEvent = !1),
									  (c.clickHandler || c.dblClickHandler) &&
											B.insideElement &&
											((Y =
												V - B.contactTime <= c.clickTimeThreshold &&
												B.contactPos.distanceTo(I) <= c.clickDistThreshold),
											c.clickHandler &&
												c.clickHandler({
													eventSource: c,
													pointerType: B.type,
													position: x(B.currentPos, c.element),
													quick: Y,
													shift: u.originalEvent.shiftKey,
													isTouchEvent: B.type === 'touch',
													originalEvent: u.originalEvent,
													originalTarget: B.originalTarget,
													userData: c.userData
												}),
											c.dblClickHandler &&
												Y &&
												(R.clicks++,
												R.clicks === 1
													? ((E.lastClickPos = I),
													  (E.dblClickTimeOut = setTimeout(function () {
															R.clicks = 0;
													  }, c.dblClickTimeThreshold)))
													: R.clicks === 2 &&
													  (clearTimeout(E.dblClickTimeOut),
													  (R.clicks = 0),
													  E.lastClickPos.distanceTo(I) <= c.dblClickDistThreshold &&
															c.dblClickHandler({
																eventSource: c,
																pointerType: B.type,
																position: x(B.currentPos, c.element),
																shift: u.originalEvent.shiftKey,
																isTouchEvent: B.type === 'touch',
																originalEvent: u.originalEvent,
																userData: c.userData
															}),
													  (E.lastClickPos = null)))))
									: R.contacts === 2 &&
									  c.pinchHandler &&
									  B.type === 'touch' &&
									  ((E.pinchGPoints = R.asArray()),
									  (E.lastPinchDist = E.currentPinchDist =
											E.pinchGPoints[0].currentPos.distanceTo(E.pinchGPoints[1].currentPos)),
									  (E.lastPinchCenter = E.currentPinchCenter =
											_(E.pinchGPoints[0].currentPos, E.pinchGPoints[1].currentPos))))
							: ((u.shouldReleaseCapture = !1),
							  c.releaseHandler &&
									I &&
									(c.releaseHandler({
										eventSource: c,
										pointerType: B.type,
										position: x(I, c.element),
										buttons: R.buttons,
										insideElementPressed: B.insideElementPressed,
										insideElementReleased: B.insideElement,
										isTouchEvent: B.type === 'touch',
										originalEvent: u.originalEvent,
										userData: c.userData
									}),
									(u.preventDefault = !0))));
			}
			function q(c, u, p) {
				var g = t[c.hash],
					E = c.getActivePointersListByType(p.type),
					R,
					I,
					V;
				if (
					(typeof u.originalEvent.buttons < 'u' && (E.buttons = u.originalEvent.buttons),
					(R = E.getById(p.id)),
					R)
				)
					(R.lastPos = R.currentPos),
						(R.lastTime = R.currentTime),
						(R.currentPos = p.currentPos),
						(R.currentTime = p.currentTime);
				else return;
				(u.shouldCapture = !1),
					(u.shouldReleaseCapture = !1),
					c.stopHandler &&
						p.type === 'mouse' &&
						(clearTimeout(c.stopTimeOut),
						(c.stopTimeOut = setTimeout(function () {
							J(c, u.originalEvent, p.type);
						}, c.stopDelay))),
					E.contacts === 0
						? c.moveHandler &&
						  c.moveHandler({
								eventSource: c,
								pointerType: p.type,
								position: x(p.currentPos, c.element),
								buttons: E.buttons,
								isTouchEvent: p.type === 'touch',
								originalEvent: u.originalEvent,
								userData: c.userData
						  })
						: E.contacts === 1
						? (c.moveHandler &&
								((R = E.asArray()[0]),
								c.moveHandler({
									eventSource: c,
									pointerType: R.type,
									position: x(R.currentPos, c.element),
									buttons: E.buttons,
									isTouchEvent: R.type === 'touch',
									originalEvent: u.originalEvent,
									userData: c.userData
								})),
						  c.dragHandler &&
								!u.preventGesture &&
								!u.defaultPrevented &&
								((R = E.asArray()[0]),
								(V = R.currentPos.minus(R.lastPos)),
								c.dragHandler({
									eventSource: c,
									pointerType: R.type,
									position: x(R.currentPos, c.element),
									buttons: E.buttons,
									delta: V,
									speed: R.speed,
									direction: R.direction,
									shift: u.originalEvent.shiftKey,
									isTouchEvent: R.type === 'touch',
									originalEvent: u.originalEvent,
									userData: c.userData
								}),
								(u.preventDefault = !0),
								(g.sentDragEvent = !0)))
						: E.contacts === 2 &&
						  (c.moveHandler &&
								((I = E.asArray()),
								c.moveHandler({
									eventSource: c,
									pointerType: I[0].type,
									position: x(_(I[0].currentPos, I[1].currentPos), c.element),
									buttons: E.buttons,
									isTouchEvent: I[0].type === 'touch',
									originalEvent: u.originalEvent,
									userData: c.userData
								})),
						  c.pinchHandler &&
								p.type === 'touch' &&
								!u.preventGesture &&
								!u.defaultPrevented &&
								((V = g.pinchGPoints[0].currentPos.distanceTo(g.pinchGPoints[1].currentPos)),
								V !== g.currentPinchDist &&
									((g.lastPinchDist = g.currentPinchDist),
									(g.currentPinchDist = V),
									(g.lastPinchCenter = g.currentPinchCenter),
									(g.currentPinchCenter = _(
										g.pinchGPoints[0].currentPos,
										g.pinchGPoints[1].currentPos
									)),
									c.pinchHandler({
										eventSource: c,
										pointerType: 'touch',
										gesturePoints: g.pinchGPoints,
										lastCenter: x(g.lastPinchCenter, c.element),
										center: x(g.currentPinchCenter, c.element),
										lastDistance: g.lastPinchDist,
										distance: g.currentPinchDist,
										shift: u.originalEvent.shiftKey,
										originalEvent: u.originalEvent,
										userData: c.userData
									}),
									(u.preventDefault = !0))));
			}
			function A(c, u, p) {
				var g = c.getActivePointersListByType(p.type),
					E;
				(E = g.getById(p.id)), E && m(c, g, E);
			}
			function J(c, u, p) {
				c.stopHandler &&
					c.stopHandler({
						eventSource: c,
						pointerType: p,
						position: w(u, c.element),
						buttons: c.getActivePointersListByType(p).buttons,
						isTouchEvent: p === 'touch',
						originalEvent: u,
						userData: c.userData
					});
			}
		})(O),
		(function (e) {
			(e.ControlAnchor = {
				NONE: 0,
				TOP_LEFT: 1,
				TOP_RIGHT: 2,
				BOTTOM_RIGHT: 3,
				BOTTOM_LEFT: 4,
				ABSOLUTE: 5
			}),
				(e.Control = function (t, i, o) {
					var h = t.parentNode;
					typeof i == 'number' &&
						(e.console.error(
							'Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013'
						),
						(i = { anchor: i })),
						(i.attachToViewer = typeof i.attachToViewer > 'u' ? !0 : i.attachToViewer),
						(this.autoFade = typeof i.autoFade > 'u' ? !0 : i.autoFade),
						(this.element = t),
						(this.anchor = i.anchor),
						(this.container = o),
						this.anchor === e.ControlAnchor.ABSOLUTE
							? ((this.wrapper = e.makeNeutralElement('div')),
							  (this.wrapper.style.position = 'absolute'),
							  (this.wrapper.style.top = typeof i.top == 'number' ? i.top + 'px' : i.top),
							  (this.wrapper.style.left = typeof i.left == 'number' ? i.left + 'px' : i.left),
							  (this.wrapper.style.height =
									typeof i.height == 'number' ? i.height + 'px' : i.height),
							  (this.wrapper.style.width = typeof i.width == 'number' ? i.width + 'px' : i.width),
							  (this.wrapper.style.margin = '0px'),
							  (this.wrapper.style.padding = '0px'),
							  (this.element.style.position = 'relative'),
							  (this.element.style.top = '0px'),
							  (this.element.style.left = '0px'),
							  (this.element.style.height = '100%'),
							  (this.element.style.width = '100%'))
							: ((this.wrapper = e.makeNeutralElement('div')),
							  (this.wrapper.style.display = 'inline-block'),
							  this.anchor === e.ControlAnchor.NONE &&
									(this.wrapper.style.width = this.wrapper.style.height = '100%')),
						this.wrapper.appendChild(this.element),
						i.attachToViewer
							? this.anchor === e.ControlAnchor.TOP_RIGHT ||
							  this.anchor === e.ControlAnchor.BOTTOM_RIGHT
								? this.container.insertBefore(this.wrapper, this.container.firstChild)
								: this.container.appendChild(this.wrapper)
							: h.appendChild(this.wrapper);
				}),
				(e.Control.prototype = {
					destroy: function () {
						this.wrapper.removeChild(this.element),
							this.anchor !== e.ControlAnchor.NONE && this.container.removeChild(this.wrapper);
					},
					isVisible: function () {
						return this.wrapper.style.display !== 'none';
					},
					setVisible: function (t) {
						this.wrapper.style.display = t
							? this.anchor === e.ControlAnchor.ABSOLUTE
								? 'block'
								: 'inline-block'
							: 'none';
					},
					setOpacity: function (t) {
						this.element[e.SIGNAL] && e.Browser.vendor === e.BROWSERS.IE
							? e.setElementOpacity(this.element, t, !0)
							: e.setElementOpacity(this.wrapper, t, !0);
					}
				});
		})(O),
		(function (e) {
			(e.ControlDock = function (i) {
				var o = ['topleft', 'topright', 'bottomright', 'bottomleft'],
					h,
					n;
				for (
					e.extend(
						!0,
						this,
						{
							id: 'controldock-' + e.now() + '-' + Math.floor(Math.random() * 1e6),
							container: e.makeNeutralElement('div'),
							controls: []
						},
						i
					),
						this.container.onsubmit = function () {
							return !1;
						},
						this.element &&
							((this.element = e.getElement(this.element)),
							this.element.appendChild(this.container),
							(this.element.style.position = 'relative'),
							(this.container.style.width = '100%'),
							(this.container.style.height = '100%')),
						n = 0;
					n < o.length;
					n++
				)
					(h = o[n]),
						(this.controls[h] = e.makeNeutralElement('div')),
						(this.controls[h].style.position = 'absolute'),
						h.match('left') && (this.controls[h].style.left = '0px'),
						h.match('right') && (this.controls[h].style.right = '0px'),
						h.match('top') && (this.controls[h].style.top = '0px'),
						h.match('bottom') && (this.controls[h].style.bottom = '0px');
				this.container.appendChild(this.controls.topleft),
					this.container.appendChild(this.controls.topright),
					this.container.appendChild(this.controls.bottomright),
					this.container.appendChild(this.controls.bottomleft);
			}),
				(e.ControlDock.prototype = {
					addControl: function (i, o) {
						i = e.getElement(i);
						var h = null;
						if (!(t(this, i) >= 0)) {
							switch (o.anchor) {
								case e.ControlAnchor.TOP_RIGHT:
									(h = this.controls.topright),
										(i.style.position = 'relative'),
										(i.style.paddingRight = '0px'),
										(i.style.paddingTop = '0px');
									break;
								case e.ControlAnchor.BOTTOM_RIGHT:
									(h = this.controls.bottomright),
										(i.style.position = 'relative'),
										(i.style.paddingRight = '0px'),
										(i.style.paddingBottom = '0px');
									break;
								case e.ControlAnchor.BOTTOM_LEFT:
									(h = this.controls.bottomleft),
										(i.style.position = 'relative'),
										(i.style.paddingLeft = '0px'),
										(i.style.paddingBottom = '0px');
									break;
								case e.ControlAnchor.TOP_LEFT:
									(h = this.controls.topleft),
										(i.style.position = 'relative'),
										(i.style.paddingLeft = '0px'),
										(i.style.paddingTop = '0px');
									break;
								case e.ControlAnchor.ABSOLUTE:
									(h = this.container), (i.style.margin = '0px'), (i.style.padding = '0px');
									break;
								default:
								case e.ControlAnchor.NONE:
									(h = this.container), (i.style.margin = '0px'), (i.style.padding = '0px');
									break;
							}
							this.controls.push(new e.Control(i, o, h)), (i.style.display = 'inline-block');
						}
					},
					removeControl: function (i) {
						i = e.getElement(i);
						var o = t(this, i);
						return o >= 0 && (this.controls[o].destroy(), this.controls.splice(o, 1)), this;
					},
					clearControls: function () {
						for (; this.controls.length > 0; ) this.controls.pop().destroy();
						return this;
					},
					areControlsEnabled: function () {
						var i;
						for (i = this.controls.length - 1; i >= 0; i--)
							if (this.controls[i].isVisible()) return !0;
						return !1;
					},
					setControlsEnabled: function (i) {
						var o;
						for (o = this.controls.length - 1; o >= 0; o--) this.controls[o].setVisible(i);
						return this;
					}
				});
			function t(i, o) {
				var h = i.controls,
					n;
				for (n = h.length - 1; n >= 0; n--) if (h[n].element === o) return n;
				return -1;
			}
		})(O),
		(function (e) {
			e.Placement = e.freezeObject({
				CENTER: 0,
				TOP_LEFT: 1,
				TOP: 2,
				TOP_RIGHT: 3,
				RIGHT: 4,
				BOTTOM_RIGHT: 5,
				BOTTOM: 6,
				BOTTOM_LEFT: 7,
				LEFT: 8,
				properties: {
					0: {
						isLeft: !1,
						isHorizontallyCentered: !0,
						isRight: !1,
						isTop: !1,
						isVerticallyCentered: !0,
						isBottom: !1
					},
					1: {
						isLeft: !0,
						isHorizontallyCentered: !1,
						isRight: !1,
						isTop: !0,
						isVerticallyCentered: !1,
						isBottom: !1
					},
					2: {
						isLeft: !1,
						isHorizontallyCentered: !0,
						isRight: !1,
						isTop: !0,
						isVerticallyCentered: !1,
						isBottom: !1
					},
					3: {
						isLeft: !1,
						isHorizontallyCentered: !1,
						isRight: !0,
						isTop: !0,
						isVerticallyCentered: !1,
						isBottom: !1
					},
					4: {
						isLeft: !1,
						isHorizontallyCentered: !1,
						isRight: !0,
						isTop: !1,
						isVerticallyCentered: !0,
						isBottom: !1
					},
					5: {
						isLeft: !1,
						isHorizontallyCentered: !1,
						isRight: !0,
						isTop: !1,
						isVerticallyCentered: !1,
						isBottom: !0
					},
					6: {
						isLeft: !1,
						isHorizontallyCentered: !0,
						isRight: !1,
						isTop: !1,
						isVerticallyCentered: !1,
						isBottom: !0
					},
					7: {
						isLeft: !0,
						isHorizontallyCentered: !1,
						isRight: !1,
						isTop: !1,
						isVerticallyCentered: !1,
						isBottom: !0
					},
					8: {
						isLeft: !0,
						isHorizontallyCentered: !1,
						isRight: !1,
						isTop: !1,
						isVerticallyCentered: !0,
						isBottom: !1
					}
				}
			});
		})(O),
		(function (e) {
			var t = {},
				i = 1;
			(e.Viewer = function (a) {
				var m = arguments,
					S = this,
					P;
				if (
					(e.isPlainObject(a) ||
						(a = {
							id: m[0],
							xmlPath: m.length > 1 ? m[1] : void 0,
							prefixUrl: m.length > 2 ? m[2] : void 0,
							controls: m.length > 3 ? m[3] : void 0,
							overlays: m.length > 4 ? m[4] : void 0
						}),
					a.config && (e.extend(!0, a, a.config), delete a.config),
					e.extend(
						!0,
						this,
						{
							id: a.id,
							hash: a.hash || i++,
							initialPage: 0,
							element: null,
							container: null,
							canvas: null,
							overlays: [],
							overlaysContainer: null,
							previousBody: [],
							customControls: [],
							source: null,
							drawer: null,
							world: null,
							viewport: null,
							navigator: null,
							collectionViewport: null,
							collectionDrawer: null,
							navImages: null,
							buttonGroup: null,
							profiler: null
						},
						e.DEFAULT_SETTINGS,
						a
					),
					typeof this.hash > 'u')
				)
					throw new Error(
						'A hash must be defined, either by specifying options.id or options.hash.'
					);
				for (
					typeof t[this.hash] < 'u' &&
						e.console.warn('Hash ' + this.hash + ' has already been used.'),
						t[this.hash] = {
							fsBoundsDelta: new e.Point(1, 1),
							prevContainerSize: null,
							animating: !1,
							forceRedraw: !1,
							needsResize: !1,
							forceResize: !1,
							mouseInside: !1,
							group: null,
							zooming: !1,
							zoomFactor: null,
							lastZoomTime: null,
							fullPage: !1,
							onfullscreenchange: null,
							lastClickTime: null,
							draggingToZoom: !1
						},
						this._sequenceIndex = 0,
						this._firstOpen = !0,
						this._updateRequestId = null,
						this._loadQueue = [],
						this.currentOverlays = [],
						this._updatePixelDensityRatioBind = null,
						this._lastScrollTime = e.now(),
						e.EventSource.call(this),
						this.addHandler('open-failed', function (C) {
							var H = e.getString('Errors.OpenFailed', C.eventSource, C.message);
							S._showMessage(H);
						}),
						e.ControlDock.call(this, a),
						this.xmlPath && (this.tileSources = [this.xmlPath]),
						this.element = this.element || document.getElementById(this.id),
						this.canvas = e.makeNeutralElement('div'),
						this.canvas.className = 'openseadragon-canvas',
						(function (C) {
							(C.width = '100%'),
								(C.height = '100%'),
								(C.overflow = 'hidden'),
								(C.position = 'absolute'),
								(C.top = '0px'),
								(C.left = '0px');
						})(this.canvas.style),
						e.setElementTouchActionNone(this.canvas),
						a.tabIndex !== '' && (this.canvas.tabIndex = a.tabIndex === void 0 ? 0 : a.tabIndex),
						this.container.className = 'openseadragon-container',
						(function (C) {
							(C.width = '100%'),
								(C.height = '100%'),
								(C.position = 'relative'),
								(C.overflow = 'hidden'),
								(C.left = '0px'),
								(C.top = '0px'),
								(C.textAlign = 'left');
						})(this.container.style),
						e.setElementTouchActionNone(this.container),
						this.container.insertBefore(this.canvas, this.container.firstChild),
						this.element.appendChild(this.container),
						this.bodyWidth = document.body.style.width,
						this.bodyHeight = document.body.style.height,
						this.bodyOverflow = document.body.style.overflow,
						this.docOverflow = document.documentElement.style.overflow,
						this.innerTracker = new e.MouseTracker({
							userData: 'Viewer.innerTracker',
							element: this.canvas,
							startDisabled: !this.mouseNavEnabled,
							clickTimeThreshold: this.clickTimeThreshold,
							clickDistThreshold: this.clickDistThreshold,
							dblClickTimeThreshold: this.dblClickTimeThreshold,
							dblClickDistThreshold: this.dblClickDistThreshold,
							contextMenuHandler: e.delegate(this, w),
							keyDownHandler: e.delegate(this, x),
							keyHandler: e.delegate(this, _),
							clickHandler: e.delegate(this, b),
							dblClickHandler: e.delegate(this, z),
							dragHandler: e.delegate(this, U),
							dragEndHandler: e.delegate(this, N),
							enterHandler: e.delegate(this, k),
							leaveHandler: e.delegate(this, M),
							pressHandler: e.delegate(this, W),
							releaseHandler: e.delegate(this, Q),
							nonPrimaryPressHandler: e.delegate(this, X),
							nonPrimaryReleaseHandler: e.delegate(this, K),
							scrollHandler: e.delegate(this, ie),
							pinchHandler: e.delegate(this, te)
						}),
						this.outerTracker = new e.MouseTracker({
							userData: 'Viewer.outerTracker',
							element: this.container,
							startDisabled: !this.mouseNavEnabled,
							clickTimeThreshold: this.clickTimeThreshold,
							clickDistThreshold: this.clickDistThreshold,
							dblClickTimeThreshold: this.dblClickTimeThreshold,
							dblClickDistThreshold: this.dblClickDistThreshold,
							enterHandler: e.delegate(this, ae),
							leaveHandler: e.delegate(this, ee)
						}),
						this.toolbar && (this.toolbar = new e.ControlDock({ element: this.toolbar })),
						this.bindStandardControls(),
						t[this.hash].prevContainerSize = o(this.container),
						window.ResizeObserver
							? ((this._autoResizePolling = !1),
							  (this._resizeObserver = new ResizeObserver(function () {
									t[S.hash].needsResize = !0;
							  })),
							  this._resizeObserver.observe(this.container, {}))
							: (this._autoResizePolling = !0),
						this.world = new e.World({ viewer: this }),
						this.world.addHandler('add-item', function (C) {
							(S.source = S.world.getItemAt(0).source),
								(t[S.hash].forceRedraw = !0),
								S._updateRequestId || (S._updateRequestId = s(S, ne));
						}),
						this.world.addHandler('remove-item', function (C) {
							S.world.getItemCount() ? (S.source = S.world.getItemAt(0).source) : (S.source = null),
								(t[S.hash].forceRedraw = !0);
						}),
						this.world.addHandler('metrics-change', function (C) {
							S.viewport &&
								S.viewport._setContentBounds(S.world.getHomeBounds(), S.world.getContentFactor());
						}),
						this.world.addHandler('item-index-change', function (C) {
							S.source = S.world.getItemAt(0).source;
						}),
						this.viewport = new e.Viewport({
							containerSize: t[this.hash].prevContainerSize,
							springStiffness: this.springStiffness,
							animationTime: this.animationTime,
							minZoomImageRatio: this.minZoomImageRatio,
							maxZoomPixelRatio: this.maxZoomPixelRatio,
							visibilityRatio: this.visibilityRatio,
							wrapHorizontal: this.wrapHorizontal,
							wrapVertical: this.wrapVertical,
							defaultZoomLevel: this.defaultZoomLevel,
							minZoomLevel: this.minZoomLevel,
							maxZoomLevel: this.maxZoomLevel,
							viewer: this,
							degrees: this.degrees,
							flipped: this.flipped,
							navigatorRotate: this.navigatorRotate,
							homeFillsViewer: this.homeFillsViewer,
							margins: this.viewportMargins,
							silenceMultiImageWarnings: this.silenceMultiImageWarnings
						}),
						this.viewport._setContentBounds(
							this.world.getHomeBounds(),
							this.world.getContentFactor()
						),
						this.imageLoader = new e.ImageLoader({
							jobLimit: this.imageLoaderLimit,
							timeout: a.timeout
						}),
						this.tileCache = new e.TileCache({ maxImageCacheCount: this.maxImageCacheCount }),
						this.drawer = new e.Drawer({
							viewer: this,
							viewport: this.viewport,
							element: this.canvas,
							debugGridColor: this.debugGridColor
						}),
						this.overlaysContainer = e.makeNeutralElement('div'),
						this.canvas.appendChild(this.overlaysContainer),
						this.drawer.canRotate() ||
							(this.rotateLeft &&
								((P = this.buttonGroup.buttons.indexOf(this.rotateLeft)),
								this.buttonGroup.buttons.splice(P, 1),
								this.buttonGroup.element.removeChild(this.rotateLeft.element)),
							this.rotateRight &&
								((P = this.buttonGroup.buttons.indexOf(this.rotateRight)),
								this.buttonGroup.buttons.splice(P, 1),
								this.buttonGroup.element.removeChild(this.rotateRight.element))),
						this._addUpdatePixelDensityRatioEvent(),
						this.showNavigator &&
							(this.navigator = new e.Navigator({
								element: this.navigatorElement,
								id: this.navigatorId,
								position: this.navigatorPosition,
								sizeRatio: this.navigatorSizeRatio,
								maintainSizeRatio: this.navigatorMaintainSizeRatio,
								top: this.navigatorTop,
								left: this.navigatorLeft,
								width: this.navigatorWidth,
								height: this.navigatorHeight,
								autoResize: this.navigatorAutoResize,
								autoFade: this.navigatorAutoFade,
								prefixUrl: this.prefixUrl,
								viewer: this,
								navigatorRotate: this.navigatorRotate,
								background: this.navigatorBackground,
								opacity: this.navigatorOpacity,
								borderColor: this.navigatorBorderColor,
								displayRegionColor: this.navigatorDisplayRegionColor,
								crossOriginPolicy: this.crossOriginPolicy,
								animationTime: this.animationTime
							})),
						this.sequenceMode && this.bindSequenceControls(),
						this.tileSources && this.open(this.tileSources),
						P = 0;
					P < this.customControls.length;
					P++
				)
					this.addControl(this.customControls[P].id, { anchor: this.customControls[P].anchor });
				e.requestAnimationFrame(function () {
					d(S);
				}),
					this.imageSmoothingEnabled !== void 0 &&
						!this.imageSmoothingEnabled &&
						this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled),
					e._viewers.set(this.element, this);
			}),
				e.extend(e.Viewer.prototype, e.EventSource.prototype, e.ControlDock.prototype, {
					isOpen: function () {
						return !!this.world.getItemCount();
					},
					openDzi: function (a) {
						return (
							e.console.error(
								'[Viewer.openDzi] this function is deprecated; use Viewer.open() instead.'
							),
							this.open(a)
						);
					},
					openTileSource: function (a) {
						return (
							e.console.error(
								'[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead.'
							),
							this.open(a)
						);
					},
					get buttons() {
						return (
							e.console.warn('Viewer.buttons is deprecated; Please use Viewer.buttonGroup'),
							this.buttonGroup
						);
					},
					open: function (a, m) {
						var S = this;
						if ((this.close(), !a)) return this;
						if (this.sequenceMode && e.isArray(a))
							return (
								this.referenceStrip &&
									(this.referenceStrip.destroy(), (this.referenceStrip = null)),
								typeof m < 'u' && !isNaN(m) && (this.initialPage = m),
								(this.tileSources = a),
								(this._sequenceIndex = Math.max(
									0,
									Math.min(this.tileSources.length - 1, this.initialPage)
								)),
								this.tileSources.length &&
									(this.open(this.tileSources[this._sequenceIndex]),
									this.showReferenceStrip && this.addReferenceStrip()),
								this._updateSequenceButtons(this._sequenceIndex),
								this
							);
						if ((e.isArray(a) || (a = [a]), !a.length)) return this;
						this._opening = !0;
						for (
							var P = a.length,
								C = 0,
								H = 0,
								D,
								G = function () {
									if (C + H === P)
										if (C) {
											(S._firstOpen || !S.preserveViewport) &&
												(S.viewport.goHome(!0), S.viewport.update()),
												(S._firstOpen = !1);
											var L = a[0];
											if ((L.tileSource && (L = L.tileSource), S.overlays && !S.preserveOverlays))
												for (var q = 0; q < S.overlays.length; q++)
													S.currentOverlays[q] = n(S, S.overlays[q]);
											S._drawOverlays(), (S._opening = !1), S.raiseEvent('open', { source: L });
										} else (S._opening = !1), S.raiseEvent('open-failed', D);
								},
								j = function (L) {
									(!e.isPlainObject(L) || !L.tileSource) && (L = { tileSource: L }),
										L.index !== void 0 &&
											(e.console.error(
												'[Viewer.open] setting indexes here is not supported; use addTiledImage instead'
											),
											delete L.index),
										L.collectionImmediately === void 0 && (L.collectionImmediately = !0);
									var q = L.success;
									L.success = function (J) {
										if ((C++, L.tileSource.overlays))
											for (var c = 0; c < L.tileSource.overlays.length; c++)
												S.addOverlay(L.tileSource.overlays[c]);
										q && q(J), G();
									};
									var A = L.error;
									(L.error = function (J) {
										H++, D || (D = J), A && A(J), G();
									}),
										S.addTiledImage(L);
								},
								Z = 0;
							Z < a.length;
							Z++
						)
							j(a[Z]);
						return this;
					},
					close: function () {
						return t[this.hash]
							? ((this._opening = !1),
							  this.navigator && this.navigator.close(),
							  this.preserveOverlays ||
									(this.clearOverlays(), (this.overlaysContainer.innerHTML = '')),
							  (t[this.hash].animating = !1),
							  this.world.removeAll(),
							  this.imageLoader.clear(),
							  this.raiseEvent('close'),
							  this)
							: this;
					},
					destroy: function () {
						if (t[this.hash]) {
							if (
								(this.raiseEvent('before-destroy'),
								this._removeUpdatePixelDensityRatioEvent(),
								this.close(),
								this.clearOverlays(),
								(this.overlaysContainer.innerHTML = ''),
								this._resizeObserver && this._resizeObserver.disconnect(),
								this.referenceStrip &&
									(this.referenceStrip.destroy(), (this.referenceStrip = null)),
								this._updateRequestId !== null &&
									(e.cancelAnimationFrame(this._updateRequestId), (this._updateRequestId = null)),
								this.drawer && this.drawer.destroy(),
								this.navigator &&
									(this.navigator.destroy(),
									(t[this.navigator.hash] = null),
									delete t[this.navigator.hash],
									(this.navigator = null)),
								this.buttonGroup)
							)
								this.buttonGroup.destroy();
							else if (this.customButtons)
								for (; this.customButtons.length; ) this.customButtons.pop().destroy();
							if ((this.paging && this.paging.destroy(), this.element))
								for (; this.element.firstChild; ) this.element.removeChild(this.element.firstChild);
							(this.container.onsubmit = null),
								this.clearControls(),
								this.innerTracker && this.innerTracker.destroy(),
								this.outerTracker && this.outerTracker.destroy(),
								(t[this.hash] = null),
								delete t[this.hash],
								(this.canvas = null),
								(this.container = null),
								e._viewers.delete(this.element),
								(this.element = null),
								this.raiseEvent('destroy'),
								this.removeAllHandlers();
						}
					},
					isMouseNavEnabled: function () {
						return this.innerTracker.isTracking();
					},
					setMouseNavEnabled: function (a) {
						return (
							this.innerTracker.setTracking(a),
							this.outerTracker.setTracking(a),
							this.raiseEvent('mouse-enabled', { enabled: a }),
							this
						);
					},
					areControlsEnabled: function () {
						var a = this.controls.length,
							m;
						for (m = 0; m < this.controls.length; m++) a = a && this.controls[m].isVisible();
						return a;
					},
					setControlsEnabled: function (a) {
						return a ? y(this) : d(this), this.raiseEvent('controls-enabled', { enabled: a }), this;
					},
					setDebugMode: function (a) {
						for (var m = 0; m < this.world.getItemCount(); m++)
							this.world.getItemAt(m).debugMode = a;
						(this.debugMode = a), this.forceRedraw();
					},
					isFullPage: function () {
						return t[this.hash].fullPage;
					},
					setFullPage: function (a) {
						var m = document.body,
							S = m.style,
							P = document.documentElement.style,
							C = this,
							H,
							D;
						if (a === this.isFullPage()) return this;
						var G = { fullPage: a, preventDefaultAction: !1 };
						if ((this.raiseEvent('pre-full-page', G), G.preventDefaultAction)) return this;
						if (a) {
							for (
								this.elementSize = e.getElementSize(this.element),
									this.pageScroll = e.getPageScroll(),
									this.elementMargin = this.element.style.margin,
									this.element.style.margin = '0',
									this.elementPadding = this.element.style.padding,
									this.element.style.padding = '0',
									this.bodyMargin = S.margin,
									this.docMargin = P.margin,
									S.margin = '0',
									P.margin = '0',
									this.bodyPadding = S.padding,
									this.docPadding = P.padding,
									S.padding = '0',
									P.padding = '0',
									this.bodyWidth = S.width,
									this.docWidth = P.width,
									S.width = '100%',
									P.width = '100%',
									this.bodyHeight = S.height,
									this.docHeight = P.height,
									S.height = '100%',
									P.height = '100%',
									this.bodyDisplay = S.display,
									S.display = 'block',
									this.previousBody = [],
									t[this.hash].prevElementParent = this.element.parentNode,
									t[this.hash].prevNextSibling = this.element.nextSibling,
									t[this.hash].prevElementWidth = this.element.style.width,
									t[this.hash].prevElementHeight = this.element.style.height,
									H = m.childNodes.length,
									D = 0;
								D < H;
								D++
							)
								this.previousBody.push(m.childNodes[0]), m.removeChild(m.childNodes[0]);
							this.toolbar &&
								this.toolbar.element &&
								((this.toolbar.parentNode = this.toolbar.element.parentNode),
								(this.toolbar.nextSibling = this.toolbar.element.nextSibling),
								m.appendChild(this.toolbar.element),
								e.addClass(this.toolbar.element, 'fullpage')),
								e.addClass(this.element, 'fullpage'),
								m.appendChild(this.element),
								(this.element.style.height = '100vh'),
								(this.element.style.width = '100vw'),
								this.toolbar &&
									this.toolbar.element &&
									(this.element.style.height =
										e.getElementSize(this.element).y -
										e.getElementSize(this.toolbar.element).y +
										'px'),
								(t[this.hash].fullPage = !0),
								e.delegate(this, ae)({});
						} else {
							for (
								this.element.style.margin = this.elementMargin,
									this.element.style.padding = this.elementPadding,
									S.margin = this.bodyMargin,
									P.margin = this.docMargin,
									S.padding = this.bodyPadding,
									P.padding = this.docPadding,
									S.width = this.bodyWidth,
									P.width = this.docWidth,
									S.height = this.bodyHeight,
									P.height = this.docHeight,
									S.display = this.bodyDisplay,
									m.removeChild(this.element),
									H = this.previousBody.length,
									D = 0;
								D < H;
								D++
							)
								m.appendChild(this.previousBody.shift());
							e.removeClass(this.element, 'fullpage'),
								t[this.hash].prevElementParent.insertBefore(
									this.element,
									t[this.hash].prevNextSibling
								),
								this.toolbar &&
									this.toolbar.element &&
									(m.removeChild(this.toolbar.element),
									e.removeClass(this.toolbar.element, 'fullpage'),
									this.toolbar.parentNode.insertBefore(
										this.toolbar.element,
										this.toolbar.nextSibling
									),
									delete this.toolbar.parentNode,
									delete this.toolbar.nextSibling),
								(this.element.style.width = t[this.hash].prevElementWidth),
								(this.element.style.height = t[this.hash].prevElementHeight);
							var j = 0,
								Z = function () {
									e.setPageScroll(C.pageScroll);
									var L = e.getPageScroll();
									j++,
										j < 10 &&
											(L.x !== C.pageScroll.x || L.y !== C.pageScroll.y) &&
											e.requestAnimationFrame(Z);
								};
							e.requestAnimationFrame(Z), (t[this.hash].fullPage = !1), e.delegate(this, ee)({});
						}
						return (
							this.navigator && this.viewport && this.navigator.update(this.viewport),
							this.raiseEvent('full-page', { fullPage: a }),
							this
						);
					},
					setFullScreen: function (a) {
						var m = this;
						if (!e.supportsFullScreen) return this.setFullPage(a);
						if (e.isFullScreen() === a) return this;
						var S = { fullScreen: a, preventDefaultAction: !1 };
						if ((this.raiseEvent('pre-full-screen', S), S.preventDefaultAction)) return this;
						if (a) {
							if ((this.setFullPage(!0), !this.isFullPage())) return this;
							(this.fullPageStyleWidth = this.element.style.width),
								(this.fullPageStyleHeight = this.element.style.height),
								(this.element.style.width = '100%'),
								(this.element.style.height = '100%');
							var P = function () {
								var C = e.isFullScreen();
								C ||
									(e.removeEvent(document, e.fullScreenEventName, P),
									e.removeEvent(document, e.fullScreenErrorEventName, P),
									m.setFullPage(!1),
									m.isFullPage() &&
										((m.element.style.width = m.fullPageStyleWidth),
										(m.element.style.height = m.fullPageStyleHeight))),
									m.navigator &&
										m.viewport &&
										setTimeout(function () {
											m.navigator.update(m.viewport);
										}),
									m.raiseEvent('full-screen', { fullScreen: C });
							};
							e.addEvent(document, e.fullScreenEventName, P),
								e.addEvent(document, e.fullScreenErrorEventName, P),
								e.requestFullScreen(document.body);
						} else e.exitFullScreen();
						return this;
					},
					isVisible: function () {
						return this.container.style.visibility !== 'hidden';
					},
					isFullScreen: function () {
						return e.isFullScreen() && this.isFullPage();
					},
					setVisible: function (a) {
						return (
							(this.container.style.visibility = a ? '' : 'hidden'),
							this.raiseEvent('visible', { visible: a }),
							this
						);
					},
					addTiledImage: function (a) {
						e.console.assert(a, '[Viewer.addTiledImage] options is required'),
							e.console.assert(
								a.tileSource,
								'[Viewer.addTiledImage] options.tileSource is required'
							),
							e.console.assert(
								!a.replace || (a.index > -1 && a.index < this.world.getItemCount()),
								'[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world'
							);
						var m = this;
						a.replace && (a.replaceItem = m.world.getItemAt(a.index)),
							this._hideMessage(),
							a.placeholderFillStyle === void 0 &&
								(a.placeholderFillStyle = this.placeholderFillStyle),
							a.opacity === void 0 && (a.opacity = this.opacity),
							a.preload === void 0 && (a.preload = this.preload),
							a.compositeOperation === void 0 && (a.compositeOperation = this.compositeOperation),
							a.crossOriginPolicy === void 0 &&
								(a.crossOriginPolicy =
									a.tileSource.crossOriginPolicy !== void 0
										? a.tileSource.crossOriginPolicy
										: this.crossOriginPolicy),
							a.ajaxWithCredentials === void 0 &&
								(a.ajaxWithCredentials = this.ajaxWithCredentials),
							a.loadTilesWithAjax === void 0 && (a.loadTilesWithAjax = this.loadTilesWithAjax),
							a.ajaxHeaders === void 0 || a.ajaxHeaders === null
								? (a.ajaxHeaders = this.ajaxHeaders)
								: e.isPlainObject(a.ajaxHeaders) &&
								  e.isPlainObject(this.ajaxHeaders) &&
								  (a.ajaxHeaders = e.extend({}, this.ajaxHeaders, a.ajaxHeaders));
						var S = { options: a };
						function P(D) {
							for (var G = 0; G < m._loadQueue.length; G++)
								if (m._loadQueue[G] === S) {
									m._loadQueue.splice(G, 1);
									break;
								}
							m._loadQueue.length === 0 && C(S),
								m.raiseEvent('add-item-failed', D),
								a.error && a.error(D);
						}
						function C(D) {
							m.collectionMode &&
								(m.world.arrange({
									immediately: D.options.collectionImmediately,
									rows: m.collectionRows,
									columns: m.collectionColumns,
									layout: m.collectionLayout,
									tileSize: m.collectionTileSize,
									tileMargin: m.collectionTileMargin
								}),
								m.world.setAutoRefigureSizes(!0));
						}
						if (e.isArray(a.tileSource)) {
							setTimeout(function () {
								P({
									message:
										'[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.',
									source: a.tileSource,
									options: a
								});
							});
							return;
						}
						this._loadQueue.push(S);
						function H() {
							for (var D, G, j; m._loadQueue.length && ((D = m._loadQueue[0]), !!D.tileSource); ) {
								if ((m._loadQueue.splice(0, 1), D.options.replace)) {
									var Z = m.world.getIndexOfItem(D.options.replaceItem);
									Z !== -1 && (D.options.index = Z), m.world.removeItem(D.options.replaceItem);
								}
								(G = new e.TiledImage({
									viewer: m,
									source: D.tileSource,
									viewport: m.viewport,
									drawer: m.drawer,
									tileCache: m.tileCache,
									imageLoader: m.imageLoader,
									x: D.options.x,
									y: D.options.y,
									width: D.options.width,
									height: D.options.height,
									fitBounds: D.options.fitBounds,
									fitBoundsPlacement: D.options.fitBoundsPlacement,
									clip: D.options.clip,
									placeholderFillStyle: D.options.placeholderFillStyle,
									opacity: D.options.opacity,
									preload: D.options.preload,
									degrees: D.options.degrees,
									flipped: D.options.flipped,
									compositeOperation: D.options.compositeOperation,
									springStiffness: m.springStiffness,
									animationTime: m.animationTime,
									minZoomImageRatio: m.minZoomImageRatio,
									wrapHorizontal: m.wrapHorizontal,
									wrapVertical: m.wrapVertical,
									immediateRender: m.immediateRender,
									blendTime: m.blendTime,
									alwaysBlend: m.alwaysBlend,
									minPixelRatio: m.minPixelRatio,
									smoothTileEdgesMinZoom: m.smoothTileEdgesMinZoom,
									iOSDevice: m.iOSDevice,
									crossOriginPolicy: D.options.crossOriginPolicy,
									ajaxWithCredentials: D.options.ajaxWithCredentials,
									loadTilesWithAjax: D.options.loadTilesWithAjax,
									ajaxHeaders: D.options.ajaxHeaders,
									debugMode: m.debugMode,
									subPixelRoundingForTransparency: m.subPixelRoundingForTransparency
								})),
									m.collectionMode && m.world.setAutoRefigureSizes(!1),
									m.navigator &&
										((j = e.extend({}, D.options, {
											replace: !1,
											originalTiledImage: G,
											tileSource: D.tileSource
										})),
										m.navigator.addTiledImage(j)),
									m.world.addItem(G, { index: D.options.index }),
									m._loadQueue.length === 0 && C(D),
									m.world.getItemCount() === 1 && !m.preserveViewport && m.viewport.goHome(!0),
									D.options.success && D.options.success({ item: G });
							}
						}
						h(
							this,
							a.tileSource,
							a,
							function (D) {
								(S.tileSource = D), H();
							},
							function (D) {
								(D.options = a), P(D), H();
							}
						);
					},
					addSimpleImage: function (a) {
						e.console.assert(a, '[Viewer.addSimpleImage] options is required'),
							e.console.assert(a.url, '[Viewer.addSimpleImage] options.url is required');
						var m = e.extend({}, a, { tileSource: { type: 'image', url: a.url } });
						delete m.url, this.addTiledImage(m);
					},
					addLayer: function (a) {
						var m = this;
						e.console.error(
							'[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.'
						);
						var S = e.extend({}, a, {
							success: function (P) {
								m.raiseEvent('add-layer', { options: a, drawer: P.item });
							},
							error: function (P) {
								m.raiseEvent('add-layer-failed', P);
							}
						});
						return this.addTiledImage(S), this;
					},
					getLayerAtLevel: function (a) {
						return (
							e.console.error(
								'[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead.'
							),
							this.world.getItemAt(a)
						);
					},
					getLevelOfLayer: function (a) {
						return (
							e.console.error(
								'[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead.'
							),
							this.world.getIndexOfItem(a)
						);
					},
					getLayersCount: function () {
						return (
							e.console.error(
								'[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead.'
							),
							this.world.getItemCount()
						);
					},
					setLayerLevel: function (a, m) {
						return (
							e.console.error(
								'[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead.'
							),
							this.world.setItemIndex(a, m)
						);
					},
					removeLayer: function (a) {
						return (
							e.console.error(
								'[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead.'
							),
							this.world.removeItem(a)
						);
					},
					forceRedraw: function () {
						return (t[this.hash].forceRedraw = !0), this;
					},
					forceResize: function () {
						(t[this.hash].needsResize = !0), (t[this.hash].forceResize = !0);
					},
					bindSequenceControls: function () {
						var a = e.delegate(this, v),
							m = e.delegate(this, T),
							S = e.delegate(this, this.goToNextPage),
							P = e.delegate(this, this.goToPreviousPage),
							C = this.navImages,
							H = !0;
						return (
							this.showSequenceControl &&
								((this.previousButton || this.nextButton) && (H = !1),
								(this.previousButton = new e.Button({
									element: this.previousButton ? e.getElement(this.previousButton) : null,
									clickTimeThreshold: this.clickTimeThreshold,
									clickDistThreshold: this.clickDistThreshold,
									tooltip: e.getString('Tooltips.PreviousPage'),
									srcRest: F(this.prefixUrl, C.previous.REST),
									srcGroup: F(this.prefixUrl, C.previous.GROUP),
									srcHover: F(this.prefixUrl, C.previous.HOVER),
									srcDown: F(this.prefixUrl, C.previous.DOWN),
									onRelease: P,
									onFocus: a,
									onBlur: m
								})),
								(this.nextButton = new e.Button({
									element: this.nextButton ? e.getElement(this.nextButton) : null,
									clickTimeThreshold: this.clickTimeThreshold,
									clickDistThreshold: this.clickDistThreshold,
									tooltip: e.getString('Tooltips.NextPage'),
									srcRest: F(this.prefixUrl, C.next.REST),
									srcGroup: F(this.prefixUrl, C.next.GROUP),
									srcHover: F(this.prefixUrl, C.next.HOVER),
									srcDown: F(this.prefixUrl, C.next.DOWN),
									onRelease: S,
									onFocus: a,
									onBlur: m
								})),
								this.navPrevNextWrap || this.previousButton.disable(),
								(!this.tileSources || !this.tileSources.length) && this.nextButton.disable(),
								H &&
									((this.paging = new e.ButtonGroup({
										buttons: [this.previousButton, this.nextButton],
										clickTimeThreshold: this.clickTimeThreshold,
										clickDistThreshold: this.clickDistThreshold
									})),
									(this.pagingControl = this.paging.element),
									this.toolbar
										? this.toolbar.addControl(this.pagingControl, {
												anchor: e.ControlAnchor.BOTTOM_RIGHT
										  })
										: this.addControl(this.pagingControl, {
												anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT
										  }))),
							this
						);
					},
					bindStandardControls: function () {
						var a = e.delegate(this, Te),
							m = e.delegate(this, de),
							S = e.delegate(this, pe),
							P = e.delegate(this, ce),
							C = e.delegate(this, ge),
							H = e.delegate(this, me),
							D = e.delegate(this, ve),
							G = e.delegate(this, Se),
							j = e.delegate(this, ye),
							Z = e.delegate(this, Ee),
							L = e.delegate(this, v),
							q = e.delegate(this, T),
							A = this.navImages,
							J = [],
							c = !0;
						return (
							this.showNavigationControl &&
								((this.zoomInButton ||
									this.zoomOutButton ||
									this.homeButton ||
									this.fullPageButton ||
									this.rotateLeftButton ||
									this.rotateRightButton ||
									this.flipButton) &&
									(c = !1),
								this.showZoomControl &&
									(J.push(
										(this.zoomInButton = new e.Button({
											element: this.zoomInButton ? e.getElement(this.zoomInButton) : null,
											clickTimeThreshold: this.clickTimeThreshold,
											clickDistThreshold: this.clickDistThreshold,
											tooltip: e.getString('Tooltips.ZoomIn'),
											srcRest: F(this.prefixUrl, A.zoomIn.REST),
											srcGroup: F(this.prefixUrl, A.zoomIn.GROUP),
											srcHover: F(this.prefixUrl, A.zoomIn.HOVER),
											srcDown: F(this.prefixUrl, A.zoomIn.DOWN),
											onPress: a,
											onRelease: m,
											onClick: S,
											onEnter: a,
											onExit: m,
											onFocus: L,
											onBlur: q
										}))
									),
									J.push(
										(this.zoomOutButton = new e.Button({
											element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null,
											clickTimeThreshold: this.clickTimeThreshold,
											clickDistThreshold: this.clickDistThreshold,
											tooltip: e.getString('Tooltips.ZoomOut'),
											srcRest: F(this.prefixUrl, A.zoomOut.REST),
											srcGroup: F(this.prefixUrl, A.zoomOut.GROUP),
											srcHover: F(this.prefixUrl, A.zoomOut.HOVER),
											srcDown: F(this.prefixUrl, A.zoomOut.DOWN),
											onPress: P,
											onRelease: m,
											onClick: C,
											onEnter: P,
											onExit: m,
											onFocus: L,
											onBlur: q
										}))
									)),
								this.showHomeControl &&
									J.push(
										(this.homeButton = new e.Button({
											element: this.homeButton ? e.getElement(this.homeButton) : null,
											clickTimeThreshold: this.clickTimeThreshold,
											clickDistThreshold: this.clickDistThreshold,
											tooltip: e.getString('Tooltips.Home'),
											srcRest: F(this.prefixUrl, A.home.REST),
											srcGroup: F(this.prefixUrl, A.home.GROUP),
											srcHover: F(this.prefixUrl, A.home.HOVER),
											srcDown: F(this.prefixUrl, A.home.DOWN),
											onRelease: H,
											onFocus: L,
											onBlur: q
										}))
									),
								this.showFullPageControl &&
									J.push(
										(this.fullPageButton = new e.Button({
											element: this.fullPageButton ? e.getElement(this.fullPageButton) : null,
											clickTimeThreshold: this.clickTimeThreshold,
											clickDistThreshold: this.clickDistThreshold,
											tooltip: e.getString('Tooltips.FullPage'),
											srcRest: F(this.prefixUrl, A.fullpage.REST),
											srcGroup: F(this.prefixUrl, A.fullpage.GROUP),
											srcHover: F(this.prefixUrl, A.fullpage.HOVER),
											srcDown: F(this.prefixUrl, A.fullpage.DOWN),
											onRelease: D,
											onFocus: L,
											onBlur: q
										}))
									),
								this.showRotationControl &&
									(J.push(
										(this.rotateLeftButton = new e.Button({
											element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null,
											clickTimeThreshold: this.clickTimeThreshold,
											clickDistThreshold: this.clickDistThreshold,
											tooltip: e.getString('Tooltips.RotateLeft'),
											srcRest: F(this.prefixUrl, A.rotateleft.REST),
											srcGroup: F(this.prefixUrl, A.rotateleft.GROUP),
											srcHover: F(this.prefixUrl, A.rotateleft.HOVER),
											srcDown: F(this.prefixUrl, A.rotateleft.DOWN),
											onRelease: G,
											onFocus: L,
											onBlur: q
										}))
									),
									J.push(
										(this.rotateRightButton = new e.Button({
											element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null,
											clickTimeThreshold: this.clickTimeThreshold,
											clickDistThreshold: this.clickDistThreshold,
											tooltip: e.getString('Tooltips.RotateRight'),
											srcRest: F(this.prefixUrl, A.rotateright.REST),
											srcGroup: F(this.prefixUrl, A.rotateright.GROUP),
											srcHover: F(this.prefixUrl, A.rotateright.HOVER),
											srcDown: F(this.prefixUrl, A.rotateright.DOWN),
											onRelease: j,
											onFocus: L,
											onBlur: q
										}))
									)),
								this.showFlipControl &&
									J.push(
										(this.flipButton = new e.Button({
											element: this.flipButton ? e.getElement(this.flipButton) : null,
											clickTimeThreshold: this.clickTimeThreshold,
											clickDistThreshold: this.clickDistThreshold,
											tooltip: e.getString('Tooltips.Flip'),
											srcRest: F(this.prefixUrl, A.flip.REST),
											srcGroup: F(this.prefixUrl, A.flip.GROUP),
											srcHover: F(this.prefixUrl, A.flip.HOVER),
											srcDown: F(this.prefixUrl, A.flip.DOWN),
											onRelease: Z,
											onFocus: L,
											onBlur: q
										}))
									),
								c
									? ((this.buttonGroup = new e.ButtonGroup({
											buttons: J,
											clickTimeThreshold: this.clickTimeThreshold,
											clickDistThreshold: this.clickDistThreshold
									  })),
									  (this.navControl = this.buttonGroup.element),
									  this.addHandler('open', e.delegate(this, xe)),
									  this.toolbar
											? this.toolbar.addControl(this.navControl, {
													anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT
											  })
											: this.addControl(this.navControl, {
													anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT
											  }))
									: (this.customButtons = J)),
							this
						);
					},
					currentPage: function () {
						return this._sequenceIndex;
					},
					goToPage: function (a) {
						return (
							this.tileSources &&
								a >= 0 &&
								a < this.tileSources.length &&
								((this._sequenceIndex = a),
								this._updateSequenceButtons(a),
								this.open(this.tileSources[a]),
								this.referenceStrip && this.referenceStrip.setFocus(a),
								this.raiseEvent('page', { page: a })),
							this
						);
					},
					addOverlay: function (a, m, S, P) {
						var C;
						if (
							(e.isPlainObject(a)
								? (C = a)
								: (C = { element: a, location: m, placement: S, onDraw: P }),
							(a = e.getElement(C.element)),
							r(this.currentOverlays, a) >= 0)
						)
							return this;
						var H = n(this, C);
						return (
							this.currentOverlays.push(H),
							H.drawHTML(this.overlaysContainer, this.viewport),
							this.raiseEvent('add-overlay', {
								element: a,
								location: C.location,
								placement: C.placement
							}),
							this
						);
					},
					updateOverlay: function (a, m, S) {
						var P;
						return (
							(a = e.getElement(a)),
							(P = r(this.currentOverlays, a)),
							P >= 0 &&
								(this.currentOverlays[P].update(m, S),
								(t[this.hash].forceRedraw = !0),
								this.raiseEvent('update-overlay', { element: a, location: m, placement: S })),
							this
						);
					},
					removeOverlay: function (a) {
						var m;
						return (
							(a = e.getElement(a)),
							(m = r(this.currentOverlays, a)),
							m >= 0 &&
								(this.currentOverlays[m].destroy(),
								this.currentOverlays.splice(m, 1),
								(t[this.hash].forceRedraw = !0),
								this.raiseEvent('remove-overlay', { element: a })),
							this
						);
					},
					clearOverlays: function () {
						for (; this.currentOverlays.length > 0; ) this.currentOverlays.pop().destroy();
						return (t[this.hash].forceRedraw = !0), this.raiseEvent('clear-overlay', {}), this;
					},
					getOverlayById: function (a) {
						var m;
						return (
							(a = e.getElement(a)),
							(m = r(this.currentOverlays, a)),
							m >= 0 ? this.currentOverlays[m] : null
						);
					},
					_updateSequenceButtons: function (a) {
						this.nextButton &&
							(!this.tileSources || this.tileSources.length - 1 === a
								? this.navPrevNextWrap || this.nextButton.disable()
								: this.nextButton.enable()),
							this.previousButton &&
								(a > 0
									? this.previousButton.enable()
									: this.navPrevNextWrap || this.previousButton.disable());
					},
					_showMessage: function (a) {
						this._hideMessage();
						var m = e.makeNeutralElement('div');
						m.appendChild(document.createTextNode(a)),
							(this.messageDiv = e.makeCenteredNode(m)),
							e.addClass(this.messageDiv, 'openseadragon-message'),
							this.container.appendChild(this.messageDiv);
					},
					_hideMessage: function () {
						var a = this.messageDiv;
						a && (a.parentNode.removeChild(a), delete this.messageDiv);
					},
					gestureSettingsByDeviceType: function (a) {
						switch (a) {
							case 'mouse':
								return this.gestureSettingsMouse;
							case 'touch':
								return this.gestureSettingsTouch;
							case 'pen':
								return this.gestureSettingsPen;
							default:
								return this.gestureSettingsUnknown;
						}
					},
					_drawOverlays: function () {
						var a,
							m = this.currentOverlays.length;
						for (a = 0; a < m; a++)
							this.currentOverlays[a].drawHTML(this.overlaysContainer, this.viewport);
					},
					_cancelPendingImages: function () {
						this._loadQueue = [];
					},
					removeReferenceStrip: function () {
						(this.showReferenceStrip = !1),
							this.referenceStrip && (this.referenceStrip.destroy(), (this.referenceStrip = null));
					},
					addReferenceStrip: function () {
						if (((this.showReferenceStrip = !0), this.sequenceMode)) {
							if (this.referenceStrip) return;
							this.tileSources.length &&
								this.tileSources.length > 1 &&
								((this.referenceStrip = new e.ReferenceStrip({
									id: this.referenceStripElement,
									position: this.referenceStripPosition,
									sizeRatio: this.referenceStripSizeRatio,
									scroll: this.referenceStripScroll,
									height: this.referenceStripHeight,
									width: this.referenceStripWidth,
									tileSources: this.tileSources,
									prefixUrl: this.prefixUrl,
									useCanvas: this.useCanvas,
									viewer: this
								})),
								this.referenceStrip.setFocus(this._sequenceIndex));
						} else
							e.console.warn(
								'Attempting to display a reference strip while "sequenceMode" is off.'
							);
					},
					_addUpdatePixelDensityRatioEvent: function () {
						(this._updatePixelDensityRatioBind = this._updatePixelDensityRatio.bind(this)),
							e.addEvent(window, 'resize', this._updatePixelDensityRatioBind);
					},
					_removeUpdatePixelDensityRatioEvent: function () {
						e.removeEvent(window, 'resize', this._updatePixelDensityRatioBind);
					},
					_updatePixelDensityRatio: function () {
						var a = e.pixelDensityRatio,
							m = e.getCurrentPixelDensityRatio();
						a !== m && ((e.pixelDensityRatio = m), this.world.resetItems(), this.forceRedraw());
					},
					goToPreviousPage: function () {
						var a = this._sequenceIndex - 1;
						this.navPrevNextWrap && a < 0 && (a += this.tileSources.length), this.goToPage(a);
					},
					goToNextPage: function () {
						var a = this._sequenceIndex + 1;
						this.navPrevNextWrap && a >= this.tileSources.length && (a = 0), this.goToPage(a);
					},
					isAnimating: function () {
						return t[this.hash].animating;
					}
				});
			function o(a) {
				return (
					(a = e.getElement(a)),
					new e.Point(
						a.clientWidth === 0 ? 1 : a.clientWidth,
						a.clientHeight === 0 ? 1 : a.clientHeight
					)
				);
			}
			function h(a, m, S, P, C) {
				var H = a;
				if (e.type(m) === 'string') {
					if (m.match(/^\s*<.*>\s*$/)) m = e.parseXml(m);
					else if (m.match(/^\s*[{[].*[}\]]\s*$/))
						try {
							var D = e.parseJSON(m);
							m = D;
						} catch {}
				}
				function G(j, Z) {
					j.ready
						? P(j)
						: (j.addHandler('ready', function () {
								P(j);
						  }),
						  j.addHandler('open-failed', function (L) {
								C({ message: L.message, source: Z });
						  }));
				}
				setTimeout(function () {
					if (e.type(m) === 'string')
						(m = new e.TileSource({
							url: m,
							crossOriginPolicy:
								S.crossOriginPolicy !== void 0 ? S.crossOriginPolicy : a.crossOriginPolicy,
							ajaxWithCredentials: a.ajaxWithCredentials,
							ajaxHeaders: S.ajaxHeaders ? S.ajaxHeaders : a.ajaxHeaders,
							splitHashDataForPost: a.splitHashDataForPost,
							useCanvas: a.useCanvas,
							success: function (q) {
								P(q.tileSource);
							}
						})),
							m.addHandler('open-failed', function (q) {
								C(q);
							});
					else if (e.isPlainObject(m) || m.nodeType)
						if (
							(m.crossOriginPolicy === void 0 &&
								(S.crossOriginPolicy !== void 0 || a.crossOriginPolicy !== void 0) &&
								(m.crossOriginPolicy =
									S.crossOriginPolicy !== void 0 ? S.crossOriginPolicy : a.crossOriginPolicy),
							m.ajaxWithCredentials === void 0 && (m.ajaxWithCredentials = a.ajaxWithCredentials),
							m.useCanvas === void 0 && (m.useCanvas = a.useCanvas),
							e.isFunction(m.getTileUrl))
						) {
							var j = new e.TileSource(m);
							(j.getTileUrl = m.getTileUrl), P(j);
						} else {
							var Z = e.TileSource.determineType(H, m);
							if (!Z) {
								C({ message: 'Unable to load TileSource', source: m });
								return;
							}
							var L = Z.prototype.configure.apply(H, [m]);
							G(new Z(L), m);
						}
					else G(m, m);
				});
			}
			function n(a, m) {
				if (m instanceof e.Overlay) return m;
				var S = null;
				if (m.element) S = e.getElement(m.element);
				else {
					var P = m.id ? m.id : 'openseadragon-overlay-' + Math.floor(Math.random() * 1e7);
					(S = e.getElement(m.id)),
						S || ((S = document.createElement('a')), (S.href = '#/overlay/' + P)),
						(S.id = P),
						e.addClass(S, m.className ? m.className : 'openseadragon-overlay');
				}
				var C = m.location,
					H = m.width,
					D = m.height;
				if (!C) {
					var G = m.x,
						j = m.y;
					if (m.px !== void 0) {
						var Z = a.viewport.imageToViewportRectangle(new e.Rect(m.px, m.py, H || 0, D || 0));
						(G = Z.x),
							(j = Z.y),
							(H = H !== void 0 ? Z.width : void 0),
							(D = D !== void 0 ? Z.height : void 0);
					}
					C = new e.Point(G, j);
				}
				var L = m.placement;
				return (
					L && e.type(L) === 'string' && (L = e.Placement[m.placement.toUpperCase()]),
					new e.Overlay({
						element: S,
						location: C,
						placement: L,
						onDraw: m.onDraw,
						checkResize: m.checkResize,
						width: H,
						height: D,
						rotationMode: m.rotationMode
					})
				);
			}
			function r(a, m) {
				var S;
				for (S = a.length - 1; S >= 0; S--) if (a[S].element === m) return S;
				return -1;
			}
			function s(a, m) {
				return e.requestAnimationFrame(function () {
					m(a);
				});
			}
			function l(a) {
				e.requestAnimationFrame(function () {
					f(a);
				});
			}
			function d(a) {
				a.autoHideControls &&
					((a.controlsShouldFade = !0),
					(a.controlsFadeBeginTime = e.now() + a.controlsFadeDelay),
					window.setTimeout(function () {
						l(a);
					}, a.controlsFadeDelay));
			}
			function f(a) {
				var m, S, P, C;
				if (a.controlsShouldFade) {
					for (
						m = e.now(),
							S = m - a.controlsFadeBeginTime,
							P = 1 - S / a.controlsFadeLength,
							P = Math.min(1, P),
							P = Math.max(0, P),
							C = a.controls.length - 1;
						C >= 0;
						C--
					)
						a.controls[C].autoFade && a.controls[C].setOpacity(P);
					P > 0 && l(a);
				}
			}
			function y(a) {
				var m;
				for (a.controlsShouldFade = !1, m = a.controls.length - 1; m >= 0; m--)
					a.controls[m].setOpacity(1);
			}
			function v() {
				y(this);
			}
			function T() {
				d(this);
			}
			function w(a) {
				var m = {
					tracker: a.eventSource,
					position: a.position,
					originalEvent: a.originalEvent,
					preventDefault: a.preventDefault
				};
				this.raiseEvent('canvas-contextmenu', m), (a.preventDefault = m.preventDefault);
			}
			function x(a) {
				var m = {
					originalEvent: a.originalEvent,
					preventDefaultAction: !1,
					preventVerticalPan: a.preventVerticalPan || !this.panVertical,
					preventHorizontalPan: a.preventHorizontalPan || !this.panHorizontal
				};
				if (
					(this.raiseEvent('canvas-key', m),
					!m.preventDefaultAction && !a.ctrl && !a.alt && !a.meta)
				)
					switch (a.keyCode) {
						case 38:
							m.preventVerticalPan ||
								(a.shift
									? this.viewport.zoomBy(1.1)
									: this.viewport.panBy(
											this.viewport.deltaPointsFromPixels(new e.Point(0, -this.pixelsPerArrowPress))
									  ),
								this.viewport.applyConstraints()),
								(a.preventDefault = !0);
							break;
						case 40:
							m.preventVerticalPan ||
								(a.shift
									? this.viewport.zoomBy(0.9)
									: this.viewport.panBy(
											this.viewport.deltaPointsFromPixels(new e.Point(0, this.pixelsPerArrowPress))
									  ),
								this.viewport.applyConstraints()),
								(a.preventDefault = !0);
							break;
						case 37:
							m.preventHorizontalPan ||
								(this.viewport.panBy(
									this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress, 0))
								),
								this.viewport.applyConstraints()),
								(a.preventDefault = !0);
							break;
						case 39:
							m.preventHorizontalPan ||
								(this.viewport.panBy(
									this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress, 0))
								),
								this.viewport.applyConstraints()),
								(a.preventDefault = !0);
							break;
						default:
							a.preventDefault = !1;
							break;
					}
				else a.preventDefault = !1;
			}
			function _(a) {
				var m = {
					originalEvent: a.originalEvent,
					preventDefaultAction: !1,
					preventVerticalPan: a.preventVerticalPan || !this.panVertical,
					preventHorizontalPan: a.preventHorizontalPan || !this.panHorizontal
				};
				if (
					(this.raiseEvent('canvas-key', m),
					!m.preventDefaultAction && !a.ctrl && !a.alt && !a.meta)
				)
					switch (a.keyCode) {
						case 43:
						case 61:
							this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), (a.preventDefault = !0);
							break;
						case 45:
							this.viewport.zoomBy(0.9), this.viewport.applyConstraints(), (a.preventDefault = !0);
							break;
						case 48:
							this.viewport.goHome(), this.viewport.applyConstraints(), (a.preventDefault = !0);
							break;
						case 119:
						case 87:
							m.preventVerticalPan ||
								(a.shift
									? this.viewport.zoomBy(1.1)
									: this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -40))),
								this.viewport.applyConstraints()),
								(a.preventDefault = !0);
							break;
						case 115:
						case 83:
							m.preventVerticalPan ||
								(a.shift
									? this.viewport.zoomBy(0.9)
									: this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, 40))),
								this.viewport.applyConstraints()),
								(a.preventDefault = !0);
							break;
						case 97:
							m.preventHorizontalPan ||
								(this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40, 0))),
								this.viewport.applyConstraints()),
								(a.preventDefault = !0);
							break;
						case 100:
							m.preventHorizontalPan ||
								(this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40, 0))),
								this.viewport.applyConstraints()),
								(a.preventDefault = !0);
							break;
						case 114:
							this.viewport.flipped
								? this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement)
								: this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement),
								this.viewport.applyConstraints(),
								(a.preventDefault = !0);
							break;
						case 82:
							this.viewport.flipped
								? this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement)
								: this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement),
								this.viewport.applyConstraints(),
								(a.preventDefault = !0);
							break;
						case 102:
							this.viewport.toggleFlip(), (a.preventDefault = !0);
							break;
						case 106:
							this.goToPreviousPage();
							break;
						case 107:
							this.goToNextPage();
							break;
						default:
							a.preventDefault = !1;
							break;
					}
				else a.preventDefault = !1;
			}
			function b(a) {
				var m,
					S = document.activeElement === this.canvas;
				S || this.canvas.focus(),
					this.viewport.flipped &&
						(a.position.x = this.viewport.getContainerSize().x - a.position.x);
				var P = {
					tracker: a.eventSource,
					position: a.position,
					quick: a.quick,
					shift: a.shift,
					originalEvent: a.originalEvent,
					originalTarget: a.originalTarget,
					preventDefaultAction: !1
				};
				this.raiseEvent('canvas-click', P),
					!P.preventDefaultAction &&
						this.viewport &&
						a.quick &&
						((m = this.gestureSettingsByDeviceType(a.pointerType)),
						m.clickToZoom === !0 &&
							(this.viewport.zoomBy(
								a.shift ? 1 / this.zoomPerClick : this.zoomPerClick,
								m.zoomToRefPoint ? this.viewport.pointFromPixel(a.position, !0) : null
							),
							this.viewport.applyConstraints()),
						m.dblClickDragToZoom &&
							(t[this.hash].draggingToZoom === !0
								? ((t[this.hash].lastClickTime = null), (t[this.hash].draggingToZoom = !1))
								: (t[this.hash].lastClickTime = e.now())));
			}
			function z(a) {
				var m,
					S = {
						tracker: a.eventSource,
						position: a.position,
						shift: a.shift,
						originalEvent: a.originalEvent,
						preventDefaultAction: !1
					};
				this.raiseEvent('canvas-double-click', S),
					!S.preventDefaultAction &&
						this.viewport &&
						((m = this.gestureSettingsByDeviceType(a.pointerType)),
						m.dblClickToZoom &&
							(this.viewport.zoomBy(
								a.shift ? 1 / this.zoomPerClick : this.zoomPerClick,
								m.zoomToRefPoint ? this.viewport.pointFromPixel(a.position, !0) : null
							),
							this.viewport.applyConstraints()));
			}
			function U(a) {
				var m,
					S = {
						tracker: a.eventSource,
						pointerType: a.pointerType,
						position: a.position,
						delta: a.delta,
						speed: a.speed,
						direction: a.direction,
						shift: a.shift,
						originalEvent: a.originalEvent,
						preventDefaultAction: !1
					};
				if (
					(this.raiseEvent('canvas-drag', S),
					(m = this.gestureSettingsByDeviceType(a.pointerType)),
					!S.preventDefaultAction && this.viewport)
				) {
					if (m.dblClickDragToZoom && t[this.hash].draggingToZoom) {
						var P = Math.pow(this.zoomPerDblClickDrag, a.delta.y / 50);
						this.viewport.zoomBy(P);
					} else if (m.dragToPan && !t[this.hash].draggingToZoom) {
						if (
							(this.panHorizontal || (a.delta.x = 0),
							this.panVertical || (a.delta.y = 0),
							this.viewport.flipped && (a.delta.x = -a.delta.x),
							this.constrainDuringPan)
						) {
							var C = this.viewport.deltaPointsFromPixels(a.delta.negate());
							(this.viewport.centerSpringX.target.value += C.x),
								(this.viewport.centerSpringY.target.value += C.y);
							var H = this.viewport.getConstrainedBounds();
							(this.viewport.centerSpringX.target.value -= C.x),
								(this.viewport.centerSpringY.target.value -= C.y),
								H.xConstrained && (a.delta.x = 0),
								H.yConstrained && (a.delta.y = 0);
						}
						this.viewport.panBy(
							this.viewport.deltaPointsFromPixels(a.delta.negate()),
							m.flickEnabled && !this.constrainDuringPan
						);
					}
				}
			}
			function N(a) {
				var m,
					S = {
						tracker: a.eventSource,
						pointerType: a.pointerType,
						position: a.position,
						speed: a.speed,
						direction: a.direction,
						shift: a.shift,
						originalEvent: a.originalEvent,
						preventDefaultAction: !1
					};
				if (
					(this.raiseEvent('canvas-drag-end', S),
					(m = this.gestureSettingsByDeviceType(a.pointerType)),
					!S.preventDefaultAction && this.viewport)
				) {
					if (!t[this.hash].draggingToZoom && m.flickEnabled && a.speed >= m.flickMinSpeed) {
						var P = 0;
						this.panHorizontal && (P = m.flickMomentum * a.speed * Math.cos(a.direction));
						var C = 0;
						this.panVertical && (C = m.flickMomentum * a.speed * Math.sin(a.direction));
						var H = this.viewport.pixelFromPoint(this.viewport.getCenter(!0)),
							D = this.viewport.pointFromPixel(new e.Point(H.x - P, H.y - C));
						this.viewport.panTo(D, !1);
					}
					this.viewport.applyConstraints();
				}
				m.dblClickDragToZoom &&
					t[this.hash].draggingToZoom === !0 &&
					(t[this.hash].draggingToZoom = !1);
			}
			function k(a) {
				this.raiseEvent('canvas-enter', {
					tracker: a.eventSource,
					pointerType: a.pointerType,
					position: a.position,
					buttons: a.buttons,
					pointers: a.pointers,
					insideElementPressed: a.insideElementPressed,
					buttonDownAny: a.buttonDownAny,
					originalEvent: a.originalEvent
				});
			}
			function M(a) {
				this.raiseEvent('canvas-exit', {
					tracker: a.eventSource,
					pointerType: a.pointerType,
					position: a.position,
					buttons: a.buttons,
					pointers: a.pointers,
					insideElementPressed: a.insideElementPressed,
					buttonDownAny: a.buttonDownAny,
					originalEvent: a.originalEvent
				});
			}
			function W(a) {
				var m;
				if (
					(this.raiseEvent('canvas-press', {
						tracker: a.eventSource,
						pointerType: a.pointerType,
						position: a.position,
						insideElementPressed: a.insideElementPressed,
						insideElementReleased: a.insideElementReleased,
						originalEvent: a.originalEvent
					}),
					(m = this.gestureSettingsByDeviceType(a.pointerType)),
					m.dblClickDragToZoom)
				) {
					var S = t[this.hash].lastClickTime,
						P = e.now();
					if (S === null) return;
					P - S < this.dblClickTimeThreshold && (t[this.hash].draggingToZoom = !0),
						(t[this.hash].lastClickTime = null);
				}
			}
			function Q(a) {
				this.raiseEvent('canvas-release', {
					tracker: a.eventSource,
					pointerType: a.pointerType,
					position: a.position,
					insideElementPressed: a.insideElementPressed,
					insideElementReleased: a.insideElementReleased,
					originalEvent: a.originalEvent
				});
			}
			function X(a) {
				this.raiseEvent('canvas-nonprimary-press', {
					tracker: a.eventSource,
					position: a.position,
					pointerType: a.pointerType,
					button: a.button,
					buttons: a.buttons,
					originalEvent: a.originalEvent
				});
			}
			function K(a) {
				this.raiseEvent('canvas-nonprimary-release', {
					tracker: a.eventSource,
					position: a.position,
					pointerType: a.pointerType,
					button: a.button,
					buttons: a.buttons,
					originalEvent: a.originalEvent
				});
			}
			function te(a) {
				var m,
					S,
					P,
					C,
					H = {
						tracker: a.eventSource,
						pointerType: a.pointerType,
						gesturePoints: a.gesturePoints,
						lastCenter: a.lastCenter,
						center: a.center,
						lastDistance: a.lastDistance,
						distance: a.distance,
						shift: a.shift,
						originalEvent: a.originalEvent,
						preventDefaultPanAction: !1,
						preventDefaultZoomAction: !1,
						preventDefaultRotateAction: !1
					};
				if (
					(this.raiseEvent('canvas-pinch', H),
					this.viewport &&
						((m = this.gestureSettingsByDeviceType(a.pointerType)),
						m.pinchToZoom &&
							(!H.preventDefaultPanAction || !H.preventDefaultZoomAction) &&
							((S = this.viewport.pointFromPixel(a.center, !0)),
							m.zoomToRefPoint &&
								!H.preventDefaultPanAction &&
								((P = this.viewport.pointFromPixel(a.lastCenter, !0)),
								(C = P.minus(S)),
								this.panHorizontal || (C.x = 0),
								this.panVertical || (C.y = 0),
								this.viewport.panBy(C, !0)),
							H.preventDefaultZoomAction ||
								this.viewport.zoomBy(a.distance / a.lastDistance, S, !0),
							this.viewport.applyConstraints()),
						m.pinchRotate && !H.preventDefaultRotateAction))
				) {
					var D = Math.atan2(
							a.gesturePoints[0].currentPos.y - a.gesturePoints[1].currentPos.y,
							a.gesturePoints[0].currentPos.x - a.gesturePoints[1].currentPos.x
						),
						G = Math.atan2(
							a.gesturePoints[0].lastPos.y - a.gesturePoints[1].lastPos.y,
							a.gesturePoints[0].lastPos.x - a.gesturePoints[1].lastPos.x
						);
					this.viewport.setRotation(this.viewport.getRotation() + (D - G) * (180 / Math.PI));
				}
			}
			function ie(a) {
				var m, S, P, C, H;
				(C = e.now()),
					(H = C - this._lastScrollTime),
					H > this.minScrollDeltaTime
						? ((this._lastScrollTime = C),
						  (m = {
								tracker: a.eventSource,
								position: a.position,
								scroll: a.scroll,
								shift: a.shift,
								originalEvent: a.originalEvent,
								preventDefaultAction: !1,
								preventDefault: !0
						  }),
						  this.raiseEvent('canvas-scroll', m),
						  !m.preventDefaultAction &&
								this.viewport &&
								(this.viewport.flipped &&
									(a.position.x = this.viewport.getContainerSize().x - a.position.x),
								(S = this.gestureSettingsByDeviceType(a.pointerType)),
								S.scrollToZoom &&
									((P = Math.pow(this.zoomPerScroll, a.scroll)),
									this.viewport.zoomBy(
										P,
										S.zoomToRefPoint ? this.viewport.pointFromPixel(a.position, !0) : null
									),
									this.viewport.applyConstraints())),
						  (a.preventDefault = m.preventDefault))
						: (a.preventDefault = !0);
			}
			function ae(a) {
				(t[this.hash].mouseInside = !0),
					y(this),
					this.raiseEvent('container-enter', {
						tracker: a.eventSource,
						pointerType: a.pointerType,
						position: a.position,
						buttons: a.buttons,
						pointers: a.pointers,
						insideElementPressed: a.insideElementPressed,
						buttonDownAny: a.buttonDownAny,
						originalEvent: a.originalEvent
					});
			}
			function ee(a) {
				a.pointers < 1 && ((t[this.hash].mouseInside = !1), t[this.hash].animating || d(this)),
					this.raiseEvent('container-exit', {
						tracker: a.eventSource,
						pointerType: a.pointerType,
						position: a.position,
						buttons: a.buttons,
						pointers: a.pointers,
						insideElementPressed: a.insideElementPressed,
						buttonDownAny: a.buttonDownAny,
						originalEvent: a.originalEvent
					});
			}
			function ne(a) {
				le(a), a.isOpen() ? (a._updateRequestId = s(a, ne)) : (a._updateRequestId = !1);
			}
			function oe(a, m) {
				var S = a.viewport,
					P = S.getZoom(),
					C = S.getCenter();
				S.resize(m, a.preserveImageSizeOnResize), S.panTo(C, !0);
				var H;
				if (a.preserveImageSizeOnResize) H = t[a.hash].prevContainerSize.x / m.x;
				else {
					var D = new e.Point(0, 0),
						G = new e.Point(
							t[a.hash].prevContainerSize.x,
							t[a.hash].prevContainerSize.y
						).distanceTo(D),
						j = new e.Point(m.x, m.y).distanceTo(D);
					H = ((j / G) * t[a.hash].prevContainerSize.x) / m.x;
				}
				S.zoomTo(P * H, null, !0),
					(t[a.hash].prevContainerSize = m),
					(t[a.hash].forceRedraw = !0),
					(t[a.hash].needsResize = !1),
					(t[a.hash].forceResize = !1);
			}
			function le(a) {
				if (!(a._opening || !t[a.hash])) {
					if (a.autoResize || t[a.hash].forceResize) {
						var m;
						if (a._autoResizePolling) {
							m = o(a.container);
							var S = t[a.hash].prevContainerSize;
							m.equals(S) || (t[a.hash].needsResize = !0);
						}
						t[a.hash].needsResize && oe(a, m || o(a.container));
					}
					var P = a.viewport.update(),
						C = a.world.update() || P;
					P && a.raiseEvent('viewport-change'),
						a.referenceStrip && (C = a.referenceStrip.update(a.viewport) || C);
					var H = t[a.hash].animating;
					!H && C && (a.raiseEvent('animation-start'), y(a));
					var D = H && !C;
					D && (t[a.hash].animating = !1),
						(C || D || t[a.hash].forceRedraw || a.world.needsDraw()) &&
							(se(a),
							a._drawOverlays(),
							a.navigator && a.navigator.update(a.viewport),
							(t[a.hash].forceRedraw = !1),
							C && a.raiseEvent('animation')),
						D && (a.raiseEvent('animation-finish'), t[a.hash].mouseInside || d(a)),
						(t[a.hash].animating = C);
				}
			}
			function se(a) {
				a.imageLoader.clear(),
					a.drawer.clear(),
					a.world.draw(),
					a.raiseEvent('update-viewport', {});
			}
			function F(a, m) {
				return a ? a + m : m;
			}
			function Te() {
				(t[this.hash].lastZoomTime = e.now()),
					(t[this.hash].zoomFactor = this.zoomPerSecond),
					(t[this.hash].zooming = !0),
					he(this);
			}
			function ce() {
				(t[this.hash].lastZoomTime = e.now()),
					(t[this.hash].zoomFactor = 1 / this.zoomPerSecond),
					(t[this.hash].zooming = !0),
					he(this);
			}
			function de() {
				t[this.hash].zooming = !1;
			}
			function he(a) {
				e.requestAnimationFrame(e.delegate(a, fe));
			}
			function fe() {
				var a, m, S;
				t[this.hash].zooming &&
					this.viewport &&
					((a = e.now()),
					(m = a - t[this.hash].lastZoomTime),
					(S = Math.pow(t[this.hash].zoomFactor, m / 1e3)),
					this.viewport.zoomBy(S),
					this.viewport.applyConstraints(),
					(t[this.hash].lastZoomTime = a),
					he(this));
			}
			function pe() {
				this.viewport &&
					((t[this.hash].zooming = !1),
					this.viewport.zoomBy(this.zoomPerClick / 1),
					this.viewport.applyConstraints());
			}
			function ge() {
				this.viewport &&
					((t[this.hash].zooming = !1),
					this.viewport.zoomBy(1 / this.zoomPerClick),
					this.viewport.applyConstraints());
			}
			function xe() {
				this.buttonGroup && (this.buttonGroup.emulateEnter(), this.buttonGroup.emulateLeave());
			}
			function me() {
				this.viewport && this.viewport.goHome();
			}
			function ve() {
				this.isFullPage() && !e.isFullScreen()
					? this.setFullPage(!1)
					: this.setFullScreen(!this.isFullPage()),
					this.buttonGroup && this.buttonGroup.emulateLeave(),
					this.fullPageButton.element.focus(),
					this.viewport && this.viewport.applyConstraints();
			}
			function Se() {
				if (this.viewport) {
					var a = this.viewport.getRotation();
					this.viewport.flipped ? (a += this.rotationIncrement) : (a -= this.rotationIncrement),
						this.viewport.setRotation(a);
				}
			}
			function ye() {
				if (this.viewport) {
					var a = this.viewport.getRotation();
					this.viewport.flipped ? (a -= this.rotationIncrement) : (a += this.rotationIncrement),
						this.viewport.setRotation(a);
				}
			}
			function Ee() {
				this.viewport.toggleFlip();
			}
		})(O),
		(function (e) {
			(e.Navigator = function (s) {
				var l = s.viewer,
					d = this,
					f,
					y;
				s.element || s.id
					? (s.element
							? (s.id &&
									e.console.warn(
										'Given option.id for Navigator was ignored since option.element was provided and is being used instead.'
									),
							  s.element.id ? (s.id = s.element.id) : (s.id = 'navigator-' + e.now()),
							  (this.element = s.element))
							: (this.element = document.getElementById(s.id)),
					  (s.controlOptions = { anchor: e.ControlAnchor.NONE, attachToViewer: !1, autoFade: !1 }))
					: ((s.id = 'navigator-' + e.now()),
					  (this.element = e.makeNeutralElement('div')),
					  (s.controlOptions = {
							anchor: e.ControlAnchor.TOP_RIGHT,
							attachToViewer: !0,
							autoFade: s.autoFade
					  }),
					  s.position &&
							(s.position === 'BOTTOM_RIGHT'
								? (s.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT)
								: s.position === 'BOTTOM_LEFT'
								? (s.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT)
								: s.position === 'TOP_RIGHT'
								? (s.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT)
								: s.position === 'TOP_LEFT'
								? (s.controlOptions.anchor = e.ControlAnchor.TOP_LEFT)
								: s.position === 'ABSOLUTE' &&
								  ((s.controlOptions.anchor = e.ControlAnchor.ABSOLUTE),
								  (s.controlOptions.top = s.top),
								  (s.controlOptions.left = s.left),
								  (s.controlOptions.height = s.height),
								  (s.controlOptions.width = s.width)))),
					(this.element.id = s.id),
					(this.element.className += ' navigator'),
					(s = e.extend(!0, { sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio }, s, {
						element: this.element,
						tabIndex: -1,
						showNavigator: !1,
						mouseNavEnabled: !1,
						showNavigationControl: !1,
						showSequenceControl: !1,
						immediateRender: !0,
						blendTime: 0,
						animationTime: s.animationTime,
						autoResize: !1,
						minZoomImageRatio: 1,
						background: s.background,
						opacity: s.opacity,
						borderColor: s.borderColor,
						displayRegionColor: s.displayRegionColor
					})),
					(s.minPixelRatio = this.minPixelRatio = l.minPixelRatio),
					e.setElementTouchActionNone(this.element),
					(this.borderWidth = 2),
					(this.fudge = new e.Point(1, 1)),
					(this.totalBorderWidths = new e.Point(this.borderWidth * 2, this.borderWidth * 2).minus(
						this.fudge
					)),
					s.controlOptions.anchor !== e.ControlAnchor.NONE &&
						(function (w, x) {
							(w.margin = '0px'),
								(w.border = x + 'px solid ' + s.borderColor),
								(w.padding = '0px'),
								(w.background = s.background),
								(w.opacity = s.opacity),
								(w.overflow = 'hidden');
						})(this.element.style, this.borderWidth),
					(this.displayRegion = e.makeNeutralElement('div')),
					(this.displayRegion.id = this.element.id + '-displayregion'),
					(this.displayRegion.className = 'displayregion'),
					(function (w, x) {
						(w.position = 'relative'),
							(w.top = '0px'),
							(w.left = '0px'),
							(w.fontSize = '0px'),
							(w.overflow = 'hidden'),
							(w.border = x + 'px solid ' + s.displayRegionColor),
							(w.margin = '0px'),
							(w.padding = '0px'),
							(w.background = 'transparent'),
							(w.float = 'left'),
							(w.cssFloat = 'left'),
							(w.styleFloat = 'left'),
							(w.zIndex = 999999999),
							(w.cursor = 'default');
					})(this.displayRegion.style, this.borderWidth),
					e.setElementPointerEventsNone(this.displayRegion),
					e.setElementTouchActionNone(this.displayRegion),
					(this.displayRegionContainer = e.makeNeutralElement('div')),
					(this.displayRegionContainer.id = this.element.id + '-displayregioncontainer'),
					(this.displayRegionContainer.className = 'displayregioncontainer'),
					(this.displayRegionContainer.style.width = '100%'),
					(this.displayRegionContainer.style.height = '100%'),
					e.setElementPointerEventsNone(this.displayRegionContainer),
					e.setElementTouchActionNone(this.displayRegionContainer),
					l.addControl(this.element, s.controlOptions),
					(this._resizeWithViewer =
						s.controlOptions.anchor !== e.ControlAnchor.ABSOLUTE &&
						s.controlOptions.anchor !== e.ControlAnchor.NONE),
					s.width && s.height
						? (this.setWidth(s.width), this.setHeight(s.height))
						: this._resizeWithViewer &&
						  ((f = e.getElementSize(l.element)),
						  (this.element.style.height = Math.round(f.y * s.sizeRatio) + 'px'),
						  (this.element.style.width = Math.round(f.x * s.sizeRatio) + 'px'),
						  (this.oldViewerSize = f),
						  (y = e.getElementSize(this.element)),
						  (this.elementArea = y.x * y.y)),
					(this.oldContainerSize = new e.Point(0, 0)),
					e.Viewer.apply(this, [s]),
					this.displayRegionContainer.appendChild(this.displayRegion),
					this.element.getElementsByTagName('div')[0].appendChild(this.displayRegionContainer);
				function v(w) {
					n(d.displayRegionContainer, w), n(d.displayRegion, -w), d.viewport.setRotation(w);
				}
				if (s.navigatorRotate) {
					var T = s.viewer.viewport ? s.viewer.viewport.getRotation() : s.viewer.degrees || 0;
					v(T),
						s.viewer.addHandler('rotate', function (w) {
							v(w.degrees);
						});
				}
				this.innerTracker.destroy(),
					(this.innerTracker = new e.MouseTracker({
						userData: 'Navigator.innerTracker',
						element: this.element,
						dragHandler: e.delegate(this, i),
						clickHandler: e.delegate(this, t),
						releaseHandler: e.delegate(this, o),
						scrollHandler: e.delegate(this, h),
						preProcessEventHandler: function (w) {
							w.eventType === 'wheel' && (w.preventDefault = !0);
						}
					})),
					(this.outerTracker.userData = 'Navigator.outerTracker'),
					e.setElementPointerEventsNone(this.canvas),
					e.setElementPointerEventsNone(this.container),
					this.addHandler('reset-size', function () {
						d.viewport && d.viewport.goHome(!0);
					}),
					l.world.addHandler('item-index-change', function (w) {
						window.setTimeout(function () {
							var x = d.world.getItemAt(w.previousIndex);
							d.world.setItemIndex(x, w.newIndex);
						}, 1);
					}),
					l.world.addHandler('remove-item', function (w) {
						var x = w.item,
							_ = d._getMatchingItem(x);
						_ && d.world.removeItem(_);
					}),
					this.update(l.viewport);
			}),
				e.extend(e.Navigator.prototype, e.EventSource.prototype, e.Viewer.prototype, {
					updateSize: function () {
						if (this.viewport) {
							var s = new e.Point(
								this.container.clientWidth === 0 ? 1 : this.container.clientWidth,
								this.container.clientHeight === 0 ? 1 : this.container.clientHeight
							);
							s.equals(this.oldContainerSize) ||
								(this.viewport.resize(s, !0),
								this.viewport.goHome(!0),
								(this.oldContainerSize = s),
								this.drawer.clear(),
								this.world.draw());
						}
					},
					setWidth: function (s) {
						(this.width = s),
							(this.element.style.width = typeof s == 'number' ? s + 'px' : s),
							(this._resizeWithViewer = !1);
					},
					setHeight: function (s) {
						(this.height = s),
							(this.element.style.height = typeof s == 'number' ? s + 'px' : s),
							(this._resizeWithViewer = !1);
					},
					setFlip: function (s) {
						return (
							this.viewport.setFlip(s),
							this.setDisplayTransform(
								this.viewer.viewport.getFlip() ? 'scale(-1,1)' : 'scale(1,1)'
							),
							this
						);
					},
					setDisplayTransform: function (s) {
						r(this.displayRegion, s), r(this.canvas, s), r(this.element, s);
					},
					update: function (s) {
						var l, d, f, y, v, T;
						if (
							((l = e.getElementSize(this.viewer.element)),
							this._resizeWithViewer &&
								l.x &&
								l.y &&
								!l.equals(this.oldViewerSize) &&
								((this.oldViewerSize = l),
								this.maintainSizeRatio || !this.elementArea
									? ((d = l.x * this.sizeRatio), (f = l.y * this.sizeRatio))
									: ((d = Math.sqrt(this.elementArea * (l.x / l.y))), (f = this.elementArea / d)),
								(this.element.style.width = Math.round(d) + 'px'),
								(this.element.style.height = Math.round(f) + 'px'),
								this.elementArea || (this.elementArea = d * f),
								this.updateSize()),
							s && this.viewport)
						) {
							(y = s.getBoundsNoRotate(!0)),
								(v = this.viewport.pixelFromPointNoRotate(y.getTopLeft(), !1)),
								(T = this.viewport
									.pixelFromPointNoRotate(y.getBottomRight(), !1)
									.minus(this.totalBorderWidths));
							var w = this.displayRegion.style;
							(w.display = this.world.getItemCount() ? 'block' : 'none'),
								(w.top = Math.round(v.y) + 'px'),
								(w.left = Math.round(v.x) + 'px');
							var x = Math.abs(v.x - T.x),
								_ = Math.abs(v.y - T.y);
							(w.width = Math.round(Math.max(x, 0)) + 'px'),
								(w.height = Math.round(Math.max(_, 0)) + 'px');
						}
					},
					addTiledImage: function (s) {
						var l = this,
							d = s.originalTiledImage;
						delete s.original;
						var f = e.extend({}, s, {
							success: function (y) {
								var v = y.item;
								(v._originalForNavigator = d),
									l._matchBounds(v, d, !0),
									l._matchOpacity(v, d),
									l._matchCompositeOperation(v, d);
								function T() {
									l._matchBounds(v, d);
								}
								function w() {
									l._matchOpacity(v, d);
								}
								function x() {
									l._matchCompositeOperation(v, d);
								}
								d.addHandler('bounds-change', T),
									d.addHandler('clip-change', T),
									d.addHandler('opacity-change', w),
									d.addHandler('composite-operation-change', x);
							}
						});
						return e.Viewer.prototype.addTiledImage.apply(this, [f]);
					},
					destroy: function () {
						return e.Viewer.prototype.destroy.apply(this);
					},
					_getMatchingItem: function (s) {
						for (var l = this.world.getItemCount(), d, f = 0; f < l; f++)
							if (((d = this.world.getItemAt(f)), d._originalForNavigator === s)) return d;
						return null;
					},
					_matchBounds: function (s, l, d) {
						var f = l.getBoundsNoRotate();
						s.setPosition(f.getTopLeft(), d),
							s.setWidth(f.width, d),
							s.setRotation(l.getRotation(), d),
							s.setClip(l.getClip()),
							s.setFlip(l.getFlip());
					},
					_matchOpacity: function (s, l) {
						s.setOpacity(l.opacity);
					},
					_matchCompositeOperation: function (s, l) {
						s.setCompositeOperation(l.compositeOperation);
					}
				});
			function t(s) {
				var l = {
					tracker: s.eventSource,
					position: s.position,
					quick: s.quick,
					shift: s.shift,
					originalEvent: s.originalEvent,
					preventDefaultAction: !1
				};
				if (
					(this.viewer.raiseEvent('navigator-click', l),
					!l.preventDefaultAction &&
						s.quick &&
						this.viewer.viewport &&
						(this.panVertical || this.panHorizontal))
				) {
					this.viewer.viewport.flipped &&
						(s.position.x = this.viewport.getContainerSize().x - s.position.x);
					var d = this.viewport.pointFromPixel(s.position);
					this.panVertical
						? this.panHorizontal || (d.x = this.viewer.viewport.getCenter(!0).x)
						: (d.y = this.viewer.viewport.getCenter(!0).y),
						this.viewer.viewport.panTo(d),
						this.viewer.viewport.applyConstraints();
				}
			}
			function i(s) {
				var l = {
					tracker: s.eventSource,
					position: s.position,
					delta: s.delta,
					speed: s.speed,
					direction: s.direction,
					shift: s.shift,
					originalEvent: s.originalEvent,
					preventDefaultAction: !1
				};
				this.viewer.raiseEvent('navigator-drag', l),
					!l.preventDefaultAction &&
						this.viewer.viewport &&
						(this.panHorizontal || (s.delta.x = 0),
						this.panVertical || (s.delta.y = 0),
						this.viewer.viewport.flipped && (s.delta.x = -s.delta.x),
						this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(s.delta)),
						this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints());
			}
			function o(s) {
				s.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints();
			}
			function h(s) {
				var l = {
					tracker: s.eventSource,
					position: s.position,
					scroll: s.scroll,
					shift: s.shift,
					originalEvent: s.originalEvent,
					preventDefault: s.preventDefault
				};
				this.viewer.raiseEvent('navigator-scroll', l), (s.preventDefault = l.preventDefault);
			}
			function n(s, l) {
				r(s, 'rotate(' + l + 'deg)');
			}
			function r(s, l) {
				(s.style.webkitTransform = l),
					(s.style.mozTransform = l),
					(s.style.msTransform = l),
					(s.style.oTransform = l),
					(s.style.transform = l);
			}
		})(O),
		(function (e) {
			var t = {
				Errors: {
					Dzc: "Sorry, we don't support Deep Zoom Collections!",
					Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
					Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
					ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.",
					Security:
						'It looks like a security restriction stopped us from loading this Deep Zoom Image.',
					Status: 'This space unintentionally left blank ({0} {1}).',
					OpenFailed: 'Unable to open {0}: {1}'
				},
				Tooltips: {
					FullPage: 'Toggle full page',
					Home: 'Go home',
					ZoomIn: 'Zoom in',
					ZoomOut: 'Zoom out',
					NextPage: 'Next page',
					PreviousPage: 'Previous page',
					RotateLeft: 'Rotate left',
					RotateRight: 'Rotate right',
					Flip: 'Flip Horizontally'
				}
			};
			e.extend(e, {
				getString: function (i) {
					var o = i.split('.'),
						h = null,
						n = arguments,
						r = t,
						s;
					for (s = 0; s < o.length - 1; s++) r = r[o[s]] || {};
					return (
						(h = r[o[s]]),
						typeof h != 'string' && (e.console.error('Untranslated source string:', i), (h = '')),
						h.replace(/\{\d+\}/g, function (l) {
							var d = parseInt(l.match(/\d+/), 10) + 1;
							return d < n.length ? n[d] : '';
						})
					);
				},
				setString: function (i, o) {
					var h = i.split('.'),
						n = t,
						r;
					for (r = 0; r < h.length - 1; r++) n[h[r]] || (n[h[r]] = {}), (n = n[h[r]]);
					n[h[r]] = o;
				}
			});
		})(O),
		(function (e) {
			(e.Point = function (t, i) {
				(this.x = typeof t == 'number' ? t : 0), (this.y = typeof i == 'number' ? i : 0);
			}),
				(e.Point.prototype = {
					clone: function () {
						return new e.Point(this.x, this.y);
					},
					plus: function (t) {
						return new e.Point(this.x + t.x, this.y + t.y);
					},
					minus: function (t) {
						return new e.Point(this.x - t.x, this.y - t.y);
					},
					times: function (t) {
						return new e.Point(this.x * t, this.y * t);
					},
					divide: function (t) {
						return new e.Point(this.x / t, this.y / t);
					},
					negate: function () {
						return new e.Point(-this.x, -this.y);
					},
					distanceTo: function (t) {
						return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2));
					},
					squaredDistanceTo: function (t) {
						return Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2);
					},
					apply: function (t) {
						return new e.Point(t(this.x), t(this.y));
					},
					equals: function (t) {
						return t instanceof e.Point && this.x === t.x && this.y === t.y;
					},
					rotate: function (t, i) {
						i = i || new e.Point(0, 0);
						var o, h;
						if (t % 90 === 0) {
							var n = e.positiveModulo(t, 360);
							switch (n) {
								case 0:
									(o = 1), (h = 0);
									break;
								case 90:
									(o = 0), (h = 1);
									break;
								case 180:
									(o = -1), (h = 0);
									break;
								case 270:
									(o = 0), (h = -1);
									break;
							}
						} else {
							var r = (t * Math.PI) / 180;
							(o = Math.cos(r)), (h = Math.sin(r));
						}
						var s = o * (this.x - i.x) - h * (this.y - i.y) + i.x,
							l = h * (this.x - i.x) + o * (this.y - i.y) + i.y;
						return new e.Point(s, l);
					},
					toString: function () {
						return (
							'(' + Math.round(this.x * 100) / 100 + ',' + Math.round(this.y * 100) / 100 + ')'
						);
					}
				});
		})(O),
		(function (e) {
			(e.TileSource = function (i, o, h, n, r, s) {
				var l = this,
					d = arguments,
					f,
					y;
				if (
					(e.isPlainObject(i)
						? (f = i)
						: (f = {
								width: d[0],
								height: d[1],
								tileSize: d[2],
								tileOverlap: d[3],
								minLevel: d[4],
								maxLevel: d[5]
						  }),
					e.EventSource.call(this),
					e.extend(!0, this, f),
					!this.success)
				) {
					for (y = 0; y < arguments.length; y++)
						if (e.isFunction(arguments[y])) {
							this.success = arguments[y];
							break;
						}
				}
				this.success &&
					this.addHandler('ready', function (v) {
						l.success(v);
					}),
					e.type(arguments[0]) === 'string' && (this.url = arguments[0]),
					this.url
						? ((this.aspectRatio = 1),
						  (this.dimensions = new e.Point(10, 10)),
						  (this._tileWidth = 0),
						  (this._tileHeight = 0),
						  (this.tileOverlap = 0),
						  (this.minLevel = 0),
						  (this.maxLevel = 0),
						  (this.ready = !1),
						  this.getImageInfo(this.url))
						: ((this.ready = !0),
						  (this.aspectRatio = f.width && f.height ? f.width / f.height : 1),
						  (this.dimensions = new e.Point(f.width, f.height)),
						  this.tileSize
								? ((this._tileWidth = this._tileHeight = this.tileSize), delete this.tileSize)
								: (this.tileWidth
										? ((this._tileWidth = this.tileWidth), delete this.tileWidth)
										: (this._tileWidth = 0),
								  this.tileHeight
										? ((this._tileHeight = this.tileHeight), delete this.tileHeight)
										: (this._tileHeight = 0)),
						  (this.tileOverlap = f.tileOverlap ? f.tileOverlap : 0),
						  (this.minLevel = f.minLevel ? f.minLevel : 0),
						  (this.maxLevel =
								f.maxLevel !== void 0 && f.maxLevel !== null
									? f.maxLevel
									: f.width && f.height
									? Math.ceil(Math.log(Math.max(f.width, f.height)) / Math.log(2))
									: 0),
						  this.success && e.isFunction(this.success) && this.success(this));
			}),
				(e.TileSource.prototype = {
					getTileSize: function (i) {
						return (
							e.console.error(
								'[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead'
							),
							this._tileWidth
						);
					},
					getTileWidth: function (i) {
						return this._tileWidth ? this._tileWidth : this.getTileSize(i);
					},
					getTileHeight: function (i) {
						return this._tileHeight ? this._tileHeight : this.getTileSize(i);
					},
					setMaxLevel: function (i) {
						(this.maxLevel = i), this._memoizeLevelScale();
					},
					getLevelScale: function (i) {
						return this._memoizeLevelScale(), this.getLevelScale(i);
					},
					_memoizeLevelScale: function () {
						var i = {},
							o;
						for (o = 0; o <= this.maxLevel; o++) i[o] = 1 / Math.pow(2, this.maxLevel - o);
						this.getLevelScale = function (h) {
							return i[h];
						};
					},
					getNumTiles: function (i) {
						var o = this.getLevelScale(i),
							h = Math.ceil((o * this.dimensions.x) / this.getTileWidth(i)),
							n = Math.ceil((o * this.dimensions.y) / this.getTileHeight(i));
						return new e.Point(h, n);
					},
					getPixelRatio: function (i) {
						var o = this.dimensions.times(this.getLevelScale(i)),
							h = (1 / o.x) * e.pixelDensityRatio,
							n = (1 / o.y) * e.pixelDensityRatio;
						return new e.Point(h, n);
					},
					getClosestLevel: function () {
						var i, o;
						for (
							i = this.minLevel + 1;
							i <= this.maxLevel && ((o = this.getNumTiles(i)), !(o.x > 1 || o.y > 1));
							i++
						);
						return i - 1;
					},
					getTileAtPoint: function (i, o) {
						var h = o.x >= 0 && o.x <= 1 && o.y >= 0 && o.y <= 1 / this.aspectRatio;
						e.console.assert(h, '[TileSource.getTileAtPoint] must be called with a valid point.');
						var n = this.dimensions.x * this.getLevelScale(i),
							r = o.x * n,
							s = o.y * n,
							l = Math.floor(r / this.getTileWidth(i)),
							d = Math.floor(s / this.getTileHeight(i));
						o.x >= 1 && (l = this.getNumTiles(i).x - 1);
						var f = 1e-15;
						return (
							o.y >= 1 / this.aspectRatio - f && (d = this.getNumTiles(i).y - 1), new e.Point(l, d)
						);
					},
					getTileBounds: function (i, o, h, n) {
						var r = this.dimensions.times(this.getLevelScale(i)),
							s = this.getTileWidth(i),
							l = this.getTileHeight(i),
							d = o === 0 ? 0 : s * o - this.tileOverlap,
							f = h === 0 ? 0 : l * h - this.tileOverlap,
							y = s + (o === 0 ? 1 : 2) * this.tileOverlap,
							v = l + (h === 0 ? 1 : 2) * this.tileOverlap,
							T = 1 / r.x;
						return (
							(y = Math.min(y, r.x - d)),
							(v = Math.min(v, r.y - f)),
							n ? new e.Rect(0, 0, y, v) : new e.Rect(d * T, f * T, y * T, v * T)
						);
					},
					getImageInfo: function (i) {
						var o = this,
							h,
							n,
							r,
							s,
							l,
							d,
							f;
						i &&
							((l = i.split('/')),
							(d = l[l.length - 1]),
							(f = d.lastIndexOf('.')),
							f > -1 && (l[l.length - 1] = d.slice(0, f)));
						var y = null;
						if (this.splitHashDataForPost) {
							var v = i.indexOf('#');
							v !== -1 && ((y = i.substring(v + 1)), (i = i.substr(0, v)));
						}
						(n = function (T) {
							typeof T == 'string' && (T = e.parseXml(T));
							var w = e.TileSource.determineType(o, T, i);
							if (!w) {
								o.raiseEvent('open-failed', { message: 'Unable to load TileSource', source: i });
								return;
							}
							(s = w.prototype.configure.apply(o, [T, i, y])),
								s.ajaxWithCredentials === void 0 && (s.ajaxWithCredentials = o.ajaxWithCredentials),
								(r = new w(s)),
								(o.ready = !0),
								o.raiseEvent('ready', { tileSource: r });
						}),
							i.match(/\.js$/)
								? ((h = i.split('/').pop().replace('.js', '')),
								  e.jsonp({ url: i, async: !1, callbackName: h, callback: n }))
								: e.makeAjaxRequest({
										url: i,
										postData: y,
										withCredentials: this.ajaxWithCredentials,
										headers: this.ajaxHeaders,
										success: function (T) {
											var w = t(T);
											n(w);
										},
										error: function (T, w) {
											var x;
											try {
												x = 'HTTP ' + T.status + ' attempting to load TileSource: ' + i;
											} catch {
												var _;
												typeof w > 'u' || !w.toString ? (_ = 'Unknown error') : (_ = w.toString()),
													(x = _ + ' attempting to load TileSource: ' + i);
											}
											e.console.error(x),
												o.raiseEvent('open-failed', { message: x, source: i, postData: y });
										}
								  });
					},
					supports: function (i, o) {
						return !1;
					},
					configure: function (i, o, h) {
						throw new Error('Method not implemented.');
					},
					getTileUrl: function (i, o, h) {
						throw new Error('Method not implemented.');
					},
					getTilePostData: function (i, o, h) {
						return null;
					},
					getTileAjaxHeaders: function (i, o, h) {
						return {};
					},
					getTileHashKey: function (i, o, h, n, r, s) {
						function l(d) {
							return r ? d + '+' + JSON.stringify(r) : d;
						}
						return l(typeof n != 'string' ? i + '/' + o + '_' + h : n);
					},
					tileExists: function (i, o, h) {
						var n = this.getNumTiles(i);
						return (
							i >= this.minLevel && i <= this.maxLevel && o >= 0 && h >= 0 && o < n.x && h < n.y
						);
					},
					hasTransparency: function (i, o, h, n) {
						return !!i || o.match('.png');
					},
					downloadTileStart: function (i) {
						var o = i.userData,
							h = new Image();
						(o.image = h), (o.request = null);
						var n = function (r) {
							if (!h) {
								i.finish(null, o.request, 'Image load failed: undefined Image instance.');
								return;
							}
							(h.onload = h.onerror = h.onabort = null), i.finish(r ? null : h, o.request, r);
						};
						(h.onload = function () {
							n();
						}),
							(h.onabort = h.onerror =
								function () {
									n('Image load aborted.');
								}),
							i.loadWithAjax
								? (o.request = e.makeAjaxRequest({
										url: i.src,
										withCredentials: i.ajaxWithCredentials,
										headers: i.ajaxHeaders,
										responseType: 'arraybuffer',
										postData: i.postData,
										success: function (r) {
											var s;
											try {
												s = new window.Blob([r.response]);
											} catch (f) {
												var l =
													window.BlobBuilder ||
													window.WebKitBlobBuilder ||
													window.MozBlobBuilder ||
													window.MSBlobBuilder;
												if (f.name === 'TypeError' && l) {
													var d = new l();
													d.append(r.response), (s = d.getBlob());
												}
											}
											s.size === 0
												? n('Empty image response.')
												: (h.src = (window.URL || window.webkitURL).createObjectURL(s));
										},
										error: function (r) {
											n('Image load aborted - XHR error');
										}
								  }))
								: (i.crossOriginPolicy !== !1 && (h.crossOrigin = i.crossOriginPolicy),
								  (h.src = i.src));
					},
					downloadTileAbort: function (i) {
						i.userData.request && i.userData.request.abort();
						var o = i.userData.image;
						i.userData.image && (o.onload = o.onerror = o.onabort = null);
					},
					createTileCache: function (i, o, h) {
						i._data = o;
					},
					destroyTileCache: function (i) {
						(i._data = null), (i._renderedContext = null);
					},
					getTileCacheData: function (i) {
						return i._data;
					},
					getTileCacheDataAsImage: function (i) {
						return i._data;
					},
					getTileCacheDataAsContext2D: function (i) {
						if (!i._renderedContext) {
							var o = document.createElement('canvas');
							(o.width = i._data.width),
								(o.height = i._data.height),
								(i._renderedContext = o.getContext('2d')),
								i._renderedContext.drawImage(i._data, 0, 0),
								(i._data = null);
						}
						return i._renderedContext;
					}
				}),
				e.extend(!0, e.TileSource.prototype, e.EventSource.prototype);
			function t(i) {
				var o = i.responseText,
					h = i.status,
					n,
					r;
				if (i) {
					if (i.status !== 200 && i.status !== 0)
						throw (
							((h = i.status),
							(n = h === 404 ? 'Not Found' : i.statusText),
							new Error(e.getString('Errors.Status', h, n)))
						);
				} else throw new Error(e.getString('Errors.Security'));
				if (o.match(/\s*<.*/))
					try {
						r = i.responseXML && i.responseXML.documentElement ? i.responseXML : e.parseXml(o);
					} catch {
						r = i.responseText;
					}
				else if (o.match(/\s*[{[].*/))
					try {
						r = e.parseJSON(o);
					} catch {
						r = o;
					}
				else r = o;
				return r;
			}
			e.TileSource.determineType = function (i, o, h) {
				var n;
				for (n in O)
					if (
						n.match(/.+TileSource$/) &&
						e.isFunction(O[n]) &&
						e.isFunction(O[n].prototype.supports) &&
						O[n].prototype.supports.call(i, o, h)
					)
						return O[n];
				return e.console.error('No TileSource was able to open %s %s', h, o), null;
			};
		})(O),
		(function (e) {
			(e.DziTileSource = function (o, h, n, r, s, l, d, f, y) {
				var v, T, w, x;
				if (
					(e.isPlainObject(o)
						? (x = o)
						: (x = {
								width: arguments[0],
								height: arguments[1],
								tileSize: arguments[2],
								tileOverlap: arguments[3],
								tilesUrl: arguments[4],
								fileFormat: arguments[5],
								displayRects: arguments[6],
								minLevel: arguments[7],
								maxLevel: arguments[8]
						  }),
					(this._levelRects = {}),
					(this.tilesUrl = x.tilesUrl),
					(this.fileFormat = x.fileFormat),
					(this.displayRects = x.displayRects),
					this.displayRects)
				)
					for (v = this.displayRects.length - 1; v >= 0; v--)
						for (T = this.displayRects[v], w = T.minLevel; w <= T.maxLevel; w++)
							this._levelRects[w] || (this._levelRects[w] = []), this._levelRects[w].push(T);
				e.TileSource.apply(this, [x]);
			}),
				e.extend(e.DziTileSource.prototype, e.TileSource.prototype, {
					supports: function (o, h) {
						var n;
						return (
							o.Image
								? (n = o.Image.xmlns)
								: o.documentElement &&
								  (o.documentElement.localName === 'Image' ||
										o.documentElement.tagName === 'Image') &&
								  (n = o.documentElement.namespaceURI),
							(n = (n || '').toLowerCase()),
							n.indexOf('schemas.microsoft.com/deepzoom/2008') !== -1 ||
								n.indexOf('schemas.microsoft.com/deepzoom/2009') !== -1
						);
					},
					configure: function (o, h, n) {
						var r;
						return (
							e.isPlainObject(o) ? (r = i(this, o)) : (r = t(this, o)),
							h &&
								!r.tilesUrl &&
								((r.tilesUrl = h.replace(/([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/, '$1_files/')),
								h.search(/\.(dzi|xml|js)\?/) !== -1
									? (r.queryParams = h.match(/\?.*/))
									: (r.queryParams = '')),
							r
						);
					},
					getTileUrl: function (o, h, n) {
						return [this.tilesUrl, o, '/', h, '_', n, '.', this.fileFormat, this.queryParams].join(
							''
						);
					},
					tileExists: function (o, h, n) {
						var r = this._levelRects[o],
							s,
							l,
							d,
							f,
							y,
							v,
							T;
						if ((this.minLevel && o < this.minLevel) || (this.maxLevel && o > this.maxLevel))
							return !1;
						if (!r || !r.length) return !0;
						for (T = r.length - 1; T >= 0; T--)
							if (
								((s = r[T]),
								!(o < s.minLevel || o > s.maxLevel) &&
									((l = this.getLevelScale(o)),
									(d = s.x * l),
									(f = s.y * l),
									(y = d + s.width * l),
									(v = f + s.height * l),
									(d = Math.floor(d / this._tileWidth)),
									(f = Math.floor(f / this._tileWidth)),
									(y = Math.ceil(y / this._tileWidth)),
									(v = Math.ceil(v / this._tileWidth)),
									d <= h && h < y && f <= n && n < v))
							)
								return !0;
						return !1;
					}
				});
			function t(o, h) {
				if (!h || !h.documentElement) throw new Error(e.getString('Errors.Xml'));
				var n = h.documentElement,
					r = n.localName || n.tagName,
					s = h.documentElement.namespaceURI,
					l = null,
					d = [],
					f,
					y,
					v,
					T,
					w;
				if (r === 'Image')
					try {
						if (
							((T = n.getElementsByTagName('Size')[0]),
							T === void 0 && (T = n.getElementsByTagNameNS(s, 'Size')[0]),
							(l = {
								Image: {
									xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
									Url: n.getAttribute('Url'),
									Format: n.getAttribute('Format'),
									DisplayRect: null,
									Overlap: parseInt(n.getAttribute('Overlap'), 10),
									TileSize: parseInt(n.getAttribute('TileSize'), 10),
									Size: {
										Height: parseInt(T.getAttribute('Height'), 10),
										Width: parseInt(T.getAttribute('Width'), 10)
									}
								}
							}),
							!e.imageFormatSupported(l.Image.Format))
						)
							throw new Error(e.getString('Errors.ImageFormat', l.Image.Format.toUpperCase()));
						for (
							f = n.getElementsByTagName('DisplayRect'),
								f === void 0 && (f = n.getElementsByTagNameNS(s, 'DisplayRect')[0]),
								w = 0;
							w < f.length;
							w++
						)
							(y = f[w]),
								(v = y.getElementsByTagName('Rect')[0]),
								v === void 0 && (v = y.getElementsByTagNameNS(s, 'Rect')[0]),
								d.push({
									Rect: {
										X: parseInt(v.getAttribute('X'), 10),
										Y: parseInt(v.getAttribute('Y'), 10),
										Width: parseInt(v.getAttribute('Width'), 10),
										Height: parseInt(v.getAttribute('Height'), 10),
										MinLevel: parseInt(y.getAttribute('MinLevel'), 10),
										MaxLevel: parseInt(y.getAttribute('MaxLevel'), 10)
									}
								});
						return d.length && (l.Image.DisplayRect = d), i(o, l);
					} catch (b) {
						throw b instanceof Error ? b : new Error(e.getString('Errors.Dzi'));
					}
				else {
					if (r === 'Collection') throw new Error(e.getString('Errors.Dzc'));
					if (r === 'Error') {
						var x = n.getElementsByTagName('Message')[0],
							_ = x.firstChild.nodeValue;
						throw new Error(_);
					}
				}
				throw new Error(e.getString('Errors.Dzi'));
			}
			function i(o, h) {
				var n = h.Image,
					r = n.Url,
					s = n.Format,
					l = n.Size,
					d = n.DisplayRect || [],
					f = parseInt(l.Width, 10),
					y = parseInt(l.Height, 10),
					v = parseInt(n.TileSize, 10),
					T = parseInt(n.Overlap, 10),
					w = [],
					x,
					_;
				for (_ = 0; _ < d.length; _++)
					(x = d[_].Rect),
						w.push(
							new e.DisplayRect(
								parseInt(x.X, 10),
								parseInt(x.Y, 10),
								parseInt(x.Width, 10),
								parseInt(x.Height, 10),
								parseInt(x.MinLevel, 10),
								parseInt(x.MaxLevel, 10)
							)
						);
				return e.extend(
					!0,
					{
						width: f,
						height: y,
						tileSize: v,
						tileOverlap: T,
						minLevel: null,
						maxLevel: null,
						tilesUrl: r,
						fileFormat: s,
						displayRects: w
					},
					h
				);
			}
		})(O),
		(function (e) {
			(e.IIIFTileSource = function (n) {
				if (
					(e.extend(!0, this, n),
					(this._id = this['@id'] || this.id || this.identifier || null),
					!(this.height && this.width && this._id))
				)
					throw new Error('IIIF required parameters (width, height, or id) not provided.');
				if (
					((n.tileSizePerScaleFactor = {}),
					(this.tileFormat = this.tileFormat || 'jpg'),
					(this.version = n.version),
					this.tile_width && this.tile_height)
				)
					(n.tileWidth = this.tile_width), (n.tileHeight = this.tile_height);
				else if (this.tile_width) n.tileSize = this.tile_width;
				else if (this.tile_height) n.tileSize = this.tile_height;
				else if (this.tiles)
					if (this.tiles.length === 1)
						(n.tileWidth = this.tiles[0].width),
							(n.tileHeight = this.tiles[0].height || this.tiles[0].width),
							(this.scale_factors = this.tiles[0].scaleFactors);
					else {
						this.scale_factors = [];
						for (var r = 0; r < this.tiles.length; r++)
							for (var s = 0; s < this.tiles[r].scaleFactors.length; s++) {
								var l = this.tiles[r].scaleFactors[s];
								this.scale_factors.push(l),
									(n.tileSizePerScaleFactor[l] = {
										width: this.tiles[r].width,
										height: this.tiles[r].height || this.tiles[r].width
									});
							}
					}
				else if (t(n)) {
					for (
						var d = Math.min(this.height, this.width), f = [256, 512, 1024], y = [], v = 0;
						v < f.length;
						v++
					)
						f[v] <= d && y.push(f[v]);
					y.length > 0 ? (n.tileSize = Math.max.apply(null, y)) : (n.tileSize = d);
				} else
					this.sizes && this.sizes.length > 0
						? ((this.emulateLegacyImagePyramid = !0),
						  (n.levels = i(this)),
						  e.extend(!0, n, {
								width: n.levels[n.levels.length - 1].width,
								height: n.levels[n.levels.length - 1].height,
								tileSize: Math.max(n.height, n.width),
								tileOverlap: 0,
								minLevel: 0,
								maxLevel: n.levels.length - 1
						  }),
						  (this.levels = n.levels))
						: e.console.error('Nothing in the info.json to construct image pyramids from');
				if (!n.maxLevel && !this.emulateLegacyImagePyramid)
					if (!this.scale_factors)
						n.maxLevel = Number(Math.round(Math.log(Math.max(this.width, this.height), 2)));
					else {
						var T = Math.max.apply(null, this.scale_factors);
						n.maxLevel = Math.round(Math.log(T) * Math.LOG2E);
					}
				e.TileSource.apply(this, [n]);
			}),
				e.extend(e.IIIFTileSource.prototype, e.TileSource.prototype, {
					supports: function (n, r) {
						return (n.protocol && n.protocol === 'http://iiif.io/api/image') ||
							(n['@context'] &&
								(n['@context'] === 'http://library.stanford.edu/iiif/image-api/1.1/context.json' ||
									n['@context'] === 'http://iiif.io/api/image/1/context.json')) ||
							(n.profile &&
								n.profile.indexOf('http://library.stanford.edu/iiif/image-api/compliance.html') ===
									0) ||
							(n.identifier && n.width && n.height)
							? !0
							: !!(
									n.documentElement &&
									n.documentElement.tagName === 'info' &&
									n.documentElement.namespaceURI ===
										'http://library.stanford.edu/iiif/image-api/ns/'
							  );
					},
					configure: function (n, r, s) {
						if (e.isPlainObject(n)) {
							if (!n['@context'])
								(n['@context'] = 'http://iiif.io/api/image/1.0/context.json'),
									(n['@id'] = r.replace('/info.json', '')),
									(n.version = 1);
							else {
								var d = n['@context'];
								if (Array.isArray(d)) {
									for (var f = 0; f < d.length; f++)
										if (
											typeof d[f] == 'string' &&
											(/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(d[f]) ||
												d[f] === 'http://library.stanford.edu/iiif/image-api/1.1/context.json')
										) {
											d = d[f];
											break;
										}
								}
								switch (d) {
									case 'http://iiif.io/api/image/1/context.json':
									case 'http://library.stanford.edu/iiif/image-api/1.1/context.json':
										n.version = 1;
										break;
									case 'http://iiif.io/api/image/2/context.json':
										n.version = 2;
										break;
									case 'http://iiif.io/api/image/3/context.json':
										n.version = 3;
										break;
									default:
										e.console.error(
											'Data has a @context property which contains no known IIIF context URI.'
										);
								}
							}
							if (n.preferredFormats) {
								for (var y = 0; y < n.preferredFormats.length; y++)
									if (O.imageFormatSupported(n.preferredFormats[y])) {
										n.tileFormat = n.preferredFormats[y];
										break;
									}
							}
							return n;
						} else {
							var l = o(n);
							return (
								(l['@context'] = 'http://iiif.io/api/image/1.0/context.json'),
								(l['@id'] = r.replace('/info.xml', '')),
								(l.version = 1),
								l
							);
						}
					},
					getTileWidth: function (n) {
						if (this.emulateLegacyImagePyramid)
							return e.TileSource.prototype.getTileWidth.call(this, n);
						var r = Math.pow(2, this.maxLevel - n);
						return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[r]
							? this.tileSizePerScaleFactor[r].width
							: this._tileWidth;
					},
					getTileHeight: function (n) {
						if (this.emulateLegacyImagePyramid)
							return e.TileSource.prototype.getTileHeight.call(this, n);
						var r = Math.pow(2, this.maxLevel - n);
						return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[r]
							? this.tileSizePerScaleFactor[r].height
							: this._tileHeight;
					},
					getLevelScale: function (n) {
						if (this.emulateLegacyImagePyramid) {
							var r = NaN;
							return (
								this.levels.length > 0 &&
									n >= this.minLevel &&
									n <= this.maxLevel &&
									(r = this.levels[n].width / this.levels[this.maxLevel].width),
								r
							);
						}
						return e.TileSource.prototype.getLevelScale.call(this, n);
					},
					getNumTiles: function (n) {
						if (this.emulateLegacyImagePyramid) {
							var r = this.getLevelScale(n);
							return r ? new e.Point(1, 1) : new e.Point(0, 0);
						}
						return e.TileSource.prototype.getNumTiles.call(this, n);
					},
					getTileAtPoint: function (n, r) {
						return this.emulateLegacyImagePyramid
							? new e.Point(0, 0)
							: e.TileSource.prototype.getTileAtPoint.call(this, n, r);
					},
					getTileUrl: function (n, r, s) {
						if (this.emulateLegacyImagePyramid) {
							var l = null;
							return (
								this.levels.length > 0 &&
									n >= this.minLevel &&
									n <= this.maxLevel &&
									(l = this.levels[n].url),
								l
							);
						}
						var d = '0',
							f = Math.pow(0.5, this.maxLevel - n),
							y = Math.round(this.width * f),
							v = Math.round(this.height * f),
							T,
							w,
							x,
							_,
							b,
							z,
							U,
							N,
							k,
							M,
							W,
							Q,
							X,
							K;
						return (
							(T = this.getTileWidth(n)),
							(w = this.getTileHeight(n)),
							(x = Math.round(T / f)),
							(_ = Math.round(w / f)),
							this.version === 1
								? (X = 'native.' + this.tileFormat)
								: (X = 'default.' + this.tileFormat),
							y < T && v < w
								? (this.version === 2 && y === this.width
										? (M = 'full')
										: this.version === 3 && y === this.width && v === this.height
										? (M = 'max')
										: this.version === 3
										? (M = y + ',' + v)
										: (M = y + ','),
								  (b = 'full'))
								: ((z = r * x),
								  (U = s * _),
								  (N = Math.min(x, this.width - z)),
								  (k = Math.min(_, this.height - U)),
								  r === 0 && s === 0 && N === this.width && k === this.height
										? (b = 'full')
										: (b = [z, U, N, k].join(',')),
								  (W = Math.round(N * f)),
								  (Q = Math.round(k * f)),
								  this.version === 2 && W === this.width
										? (M = 'full')
										: this.version === 3 && W === this.width && Q === this.height
										? (M = 'max')
										: this.version === 3
										? (M = W + ',' + Q)
										: (M = W + ',')),
							(K = [this._id, b, M, d, X].join('/')),
							K
						);
					},
					__testonly__: { canBeTiled: t, constructLevels: i }
				});
			function t(n) {
				var r = [
						'http://library.stanford.edu/iiif/image-api/compliance.html#level0',
						'http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0',
						'http://iiif.io/api/image/2/level0.json',
						'level0',
						'https://iiif.io/api/image/3/level0.json'
					],
					s = Array.isArray(n.profile) ? n.profile[0] : n.profile,
					l = r.indexOf(s) !== -1,
					d = !1;
				return (
					n.version === 2 &&
						n.profile.length > 1 &&
						n.profile[1].supports &&
						(d = n.profile[1].supports.indexOf('sizeByW') !== -1),
					n.version === 3 && n.extraFeatures && (d = n.extraFeatures.indexOf('sizeByWh') !== -1),
					!l || d
				);
			}
			function i(n) {
				for (var r = [], s = 0; s < n.sizes.length; s++)
					r.push({
						url:
							n._id +
							'/full/' +
							n.sizes[s].width +
							',' +
							(n.version === 3 ? n.sizes[s].height : '') +
							'/0/default.' +
							n.tileFormat,
						width: n.sizes[s].width,
						height: n.sizes[s].height
					});
				return r.sort(function (l, d) {
					return l.width - d.width;
				});
			}
			function o(n) {
				if (!n || !n.documentElement) throw new Error(e.getString('Errors.Xml'));
				var r = n.documentElement,
					s = r.tagName,
					l = null;
				if (s === 'info')
					try {
						return (l = {}), h(r, l), l;
					} catch (d) {
						throw d instanceof Error ? d : new Error(e.getString('Errors.IIIF'));
					}
				throw new Error(e.getString('Errors.IIIF'));
			}
			function h(n, r, s) {
				var l, d;
				if (n.nodeType === 3 && s)
					(d = n.nodeValue.trim()),
						d.match(/^\d*$/) && (d = Number(d)),
						r[s] ? (e.isArray(r[s]) || (r[s] = [r[s]]), r[s].push(d)) : (r[s] = d);
				else if (n.nodeType === 1)
					for (l = 0; l < n.childNodes.length; l++) h(n.childNodes[l], r, n.nodeName);
			}
		})(O),
		(function (e) {
			(e.OsmTileSource = function (t, i, o, h, n) {
				var r;
				e.isPlainObject(t)
					? (r = t)
					: (r = {
							width: arguments[0],
							height: arguments[1],
							tileSize: arguments[2],
							tileOverlap: arguments[3],
							tilesUrl: arguments[4]
					  }),
					(!r.width || !r.height) && ((r.width = 65572864), (r.height = 65572864)),
					r.tileSize || ((r.tileSize = 256), (r.tileOverlap = 0)),
					r.tilesUrl || (r.tilesUrl = 'http://tile.openstreetmap.org/'),
					(r.minLevel = 8),
					e.TileSource.apply(this, [r]);
			}),
				e.extend(e.OsmTileSource.prototype, e.TileSource.prototype, {
					supports: function (t, i) {
						return t.type && t.type === 'openstreetmaps';
					},
					configure: function (t, i, o) {
						return t;
					},
					getTileUrl: function (t, i, o) {
						return this.tilesUrl + (t - 8) + '/' + i + '/' + o + '.png';
					}
				});
		})(O),
		(function (e) {
			(e.TmsTileSource = function (t, i, o, h, n) {
				var r;
				e.isPlainObject(t)
					? (r = t)
					: (r = {
							width: arguments[0],
							height: arguments[1],
							tileSize: arguments[2],
							tileOverlap: arguments[3],
							tilesUrl: arguments[4]
					  });
				var s = Math.ceil(r.width / 256) * 256,
					l = Math.ceil(r.height / 256) * 256,
					d;
				s > l ? (d = s / 256) : (d = l / 256),
					(r.maxLevel = Math.ceil(Math.log(d) / Math.log(2)) - 1),
					(r.tileSize = 256),
					(r.width = s),
					(r.height = l),
					e.TileSource.apply(this, [r]);
			}),
				e.extend(e.TmsTileSource.prototype, e.TileSource.prototype, {
					supports: function (t, i) {
						return t.type && t.type === 'tiledmapservice';
					},
					configure: function (t, i, o) {
						return t;
					},
					getTileUrl: function (t, i, o) {
						var h = this.getNumTiles(t).y - 1;
						return this.tilesUrl + t + '/' + i + '/' + (h - o) + '.png';
					}
				});
		})(O),
		(function (e) {
			(e.ZoomifyTileSource = function (t) {
				typeof t.tileSize > 'u' && (t.tileSize = 256),
					typeof t.fileFormat > 'u' && ((t.fileFormat = 'jpg'), (this.fileFormat = t.fileFormat));
				var i = { x: t.width, y: t.height };
				for (
					t.imageSizes = [{ x: t.width, y: t.height }],
						t.gridSize = [this._getGridSize(t.width, t.height, t.tileSize)];
					parseInt(i.x, 10) > t.tileSize || parseInt(i.y, 10) > t.tileSize;

				)
					(i.x = Math.floor(i.x / 2)),
						(i.y = Math.floor(i.y / 2)),
						t.imageSizes.push({ x: i.x, y: i.y }),
						t.gridSize.push(this._getGridSize(i.x, i.y, t.tileSize));
				t.imageSizes.reverse(),
					t.gridSize.reverse(),
					(t.minLevel = 0),
					(t.maxLevel = t.gridSize.length - 1),
					O.TileSource.apply(this, [t]);
			}),
				e.extend(e.ZoomifyTileSource.prototype, e.TileSource.prototype, {
					_getGridSize: function (t, i, o) {
						return { x: Math.ceil(t / o), y: Math.ceil(i / o) };
					},
					_calculateAbsoluteTileNumber: function (t, i, o) {
						for (var h = 0, n = {}, r = 0; r < t; r++) (n = this.gridSize[r]), (h += n.x * n.y);
						return (n = this.gridSize[t]), (h += n.x * o + i), h;
					},
					supports: function (t, i) {
						return t.type && t.type === 'zoomifytileservice';
					},
					configure: function (t, i, o) {
						return t;
					},
					getTileUrl: function (t, i, o) {
						var h = 0,
							n = this._calculateAbsoluteTileNumber(t, i, o);
						return (
							(h = Math.floor(n / 256)),
							this.tilesUrl + 'TileGroup' + h + '/' + t + '-' + i + '-' + o + '.' + this.fileFormat
						);
					}
				});
		})(O),
		(function (e) {
			(e.LegacyTileSource = function (h) {
				var n, r, s;
				e.isArray(h) && (n = { type: 'legacy-image-pyramid', levels: h }),
					(n.levels = t(n.levels)),
					n.levels.length > 0
						? ((r = n.levels[n.levels.length - 1].width),
						  (s = n.levels[n.levels.length - 1].height))
						: ((r = 0), (s = 0), e.console.error('No supported image formats found')),
					e.extend(!0, n, {
						width: r,
						height: s,
						tileSize: Math.max(s, r),
						tileOverlap: 0,
						minLevel: 0,
						maxLevel: n.levels.length > 0 ? n.levels.length - 1 : 0
					}),
					e.TileSource.apply(this, [n]),
					(this.levels = n.levels);
			}),
				e.extend(e.LegacyTileSource.prototype, e.TileSource.prototype, {
					supports: function (h, n) {
						return (
							(h.type && h.type === 'legacy-image-pyramid') ||
							(h.documentElement &&
								h.documentElement.getAttribute('type') === 'legacy-image-pyramid')
						);
					},
					configure: function (h, n, r) {
						var s;
						return e.isPlainObject(h) ? (s = o(this, h)) : (s = i(this, h)), s;
					},
					getLevelScale: function (h) {
						var n = NaN;
						return (
							this.levels.length > 0 &&
								h >= this.minLevel &&
								h <= this.maxLevel &&
								(n = this.levels[h].width / this.levels[this.maxLevel].width),
							n
						);
					},
					getNumTiles: function (h) {
						var n = this.getLevelScale(h);
						return n ? new e.Point(1, 1) : new e.Point(0, 0);
					},
					getTileUrl: function (h, n, r) {
						var s = null;
						return (
							this.levels.length > 0 &&
								h >= this.minLevel &&
								h <= this.maxLevel &&
								(s = this.levels[h].url),
							s
						);
					}
				});
			function t(h) {
				var n = [],
					r,
					s;
				for (s = 0; s < h.length; s++)
					(r = h[s]),
						r.height && r.width && r.url
							? n.push({ url: r.url, width: Number(r.width), height: Number(r.height) })
							: e.console.error('Unsupported image format: %s', r.url ? r.url : '<no URL>');
				return n.sort(function (l, d) {
					return l.height - d.height;
				});
			}
			function i(h, n) {
				if (!n || !n.documentElement) throw new Error(e.getString('Errors.Xml'));
				var r = n.documentElement,
					s = r.tagName,
					l = null,
					d = [],
					f,
					y;
				if (s === 'image')
					try {
						for (
							l = { type: r.getAttribute('type'), levels: [] },
								d = r.getElementsByTagName('level'),
								y = 0;
							y < d.length;
							y++
						)
							(f = d[y]),
								l.levels.push({
									url: f.getAttribute('url'),
									width: parseInt(f.getAttribute('width'), 10),
									height: parseInt(f.getAttribute('height'), 10)
								});
						return o(h, l);
					} catch (v) {
						throw v instanceof Error
							? v
							: new Error('Unknown error parsing Legacy Image Pyramid XML.');
					}
				else {
					if (s === 'collection')
						throw new Error('Legacy Image Pyramid Collections not yet supported.');
					if (s === 'error') throw new Error('Error: ' + n);
				}
				throw new Error('Unknown element ' + s);
			}
			function o(h, n) {
				return n.levels;
			}
		})(O),
		(function (e) {
			(e.ImageTileSource = function (t) {
				(t = e.extend(
					{ buildPyramid: !0, crossOriginPolicy: !1, ajaxWithCredentials: !1, useCanvas: !0 },
					t
				)),
					e.TileSource.apply(this, [t]);
			}),
				e.extend(e.ImageTileSource.prototype, e.TileSource.prototype, {
					supports: function (t, i) {
						return t.type && t.type === 'image';
					},
					configure: function (t, i, o) {
						return t;
					},
					getImageInfo: function (t) {
						var i = (this._image = new Image()),
							o = this;
						this.crossOriginPolicy && (i.crossOrigin = this.crossOriginPolicy),
							this.ajaxWithCredentials && (i.useCredentials = this.ajaxWithCredentials),
							e.addEvent(i, 'load', function () {
								(o.width = i.naturalWidth),
									(o.height = i.naturalHeight),
									(o.aspectRatio = o.width / o.height),
									(o.dimensions = new e.Point(o.width, o.height)),
									(o._tileWidth = o.width),
									(o._tileHeight = o.height),
									(o.tileOverlap = 0),
									(o.minLevel = 0),
									(o.levels = o._buildLevels()),
									(o.maxLevel = o.levels.length - 1),
									(o.ready = !0),
									o.raiseEvent('ready', { tileSource: o });
							}),
							e.addEvent(i, 'error', function () {
								o.raiseEvent('open-failed', { message: 'Error loading image at ' + t, source: t });
							}),
							(i.src = t);
					},
					getLevelScale: function (t) {
						var i = NaN;
						return (
							t >= this.minLevel &&
								t <= this.maxLevel &&
								(i = this.levels[t].width / this.levels[this.maxLevel].width),
							i
						);
					},
					getNumTiles: function (t) {
						var i = this.getLevelScale(t);
						return i ? new e.Point(1, 1) : new e.Point(0, 0);
					},
					getTileUrl: function (t, i, o) {
						var h = null;
						return t >= this.minLevel && t <= this.maxLevel && (h = this.levels[t].url), h;
					},
					getContext2D: function (t, i, o) {
						var h = null;
						return t >= this.minLevel && t <= this.maxLevel && (h = this.levels[t].context2D), h;
					},
					destroy: function () {
						this._freeupCanvasMemory();
					},
					_buildLevels: function () {
						var t = [
							{
								url: this._image.src,
								width: this._image.naturalWidth,
								height: this._image.naturalHeight
							}
						];
						if (!this.buildPyramid || !e.supportsCanvas || !this.useCanvas)
							return delete this._image, t;
						var i = this._image.naturalWidth,
							o = this._image.naturalHeight,
							h = document.createElement('canvas'),
							n = h.getContext('2d');
						if (
							((h.width = i),
							(h.height = o),
							n.drawImage(this._image, 0, 0, i, o),
							(t[0].context2D = n),
							delete this._image,
							e.isCanvasTainted(h))
						)
							return t;
						for (; i >= 2 && o >= 2; ) {
							(i = Math.floor(i / 2)), (o = Math.floor(o / 2));
							var r = document.createElement('canvas'),
								s = r.getContext('2d');
							(r.width = i),
								(r.height = o),
								s.drawImage(h, 0, 0, i, o),
								t.splice(0, 0, { context2D: s, width: i, height: o }),
								(h = r),
								(n = s);
						}
						return t;
					},
					_freeupCanvasMemory: function () {
						for (var t = 0; t < this.levels.length; t++)
							this.levels[t].context2D &&
								((this.levels[t].context2D.canvas.height = 0),
								(this.levels[t].context2D.canvas.width = 0));
					}
				});
		})(O),
		(function (e) {
			e.TileSourceCollection = function (t, i, o, h) {
				e.console.error('TileSourceCollection is deprecated; use World instead');
			};
		})(O),
		(function (e) {
			(e.ButtonState = { REST: 0, GROUP: 1, HOVER: 2, DOWN: 3 }),
				(e.Button = function (s) {
					var l = this;
					e.EventSource.call(this),
						e.extend(
							!0,
							this,
							{
								tooltip: null,
								srcRest: null,
								srcGroup: null,
								srcHover: null,
								srcDown: null,
								clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
								clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
								fadeDelay: 0,
								fadeLength: 2e3,
								onPress: null,
								onRelease: null,
								onClick: null,
								onEnter: null,
								onExit: null,
								onFocus: null,
								onBlur: null,
								userData: null
							},
							s
						),
						(this.element = s.element || e.makeNeutralElement('div')),
						s.element ||
							((this.imgRest = e.makeTransparentImage(this.srcRest)),
							(this.imgGroup = e.makeTransparentImage(this.srcGroup)),
							(this.imgHover = e.makeTransparentImage(this.srcHover)),
							(this.imgDown = e.makeTransparentImage(this.srcDown)),
							(this.imgRest.alt =
								this.imgGroup.alt =
								this.imgHover.alt =
								this.imgDown.alt =
									this.tooltip),
							e.setElementPointerEventsNone(this.imgRest),
							e.setElementPointerEventsNone(this.imgGroup),
							e.setElementPointerEventsNone(this.imgHover),
							e.setElementPointerEventsNone(this.imgDown),
							(this.element.style.position = 'relative'),
							e.setElementTouchActionNone(this.element),
							(this.imgGroup.style.position =
								this.imgHover.style.position =
								this.imgDown.style.position =
									'absolute'),
							(this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = '0px'),
							(this.imgGroup.style.left =
								this.imgHover.style.left =
								this.imgDown.style.left =
									'0px'),
							(this.imgHover.style.visibility = this.imgDown.style.visibility = 'hidden'),
							e.Browser.vendor === e.BROWSERS.FIREFOX &&
								e.Browser.version < 3 &&
								(this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = ''),
							this.element.appendChild(this.imgRest),
							this.element.appendChild(this.imgGroup),
							this.element.appendChild(this.imgHover),
							this.element.appendChild(this.imgDown)),
						this.addHandler('press', this.onPress),
						this.addHandler('release', this.onRelease),
						this.addHandler('click', this.onClick),
						this.addHandler('enter', this.onEnter),
						this.addHandler('exit', this.onExit),
						this.addHandler('focus', this.onFocus),
						this.addHandler('blur', this.onBlur),
						(this.currentState = e.ButtonState.GROUP),
						(this.fadeBeginTime = null),
						(this.shouldFade = !1),
						(this.element.style.display = 'inline-block'),
						(this.element.style.position = 'relative'),
						(this.element.title = this.tooltip),
						(this.tracker = new e.MouseTracker({
							userData: 'Button.tracker',
							element: this.element,
							clickTimeThreshold: this.clickTimeThreshold,
							clickDistThreshold: this.clickDistThreshold,
							enterHandler: function (d) {
								d.insideElementPressed
									? (n(l, e.ButtonState.DOWN),
									  l.raiseEvent('enter', { originalEvent: d.originalEvent }))
									: d.buttonDownAny || n(l, e.ButtonState.HOVER);
							},
							focusHandler: function (d) {
								l.tracker.enterHandler(d),
									l.raiseEvent('focus', { originalEvent: d.originalEvent });
							},
							leaveHandler: function (d) {
								r(l, e.ButtonState.GROUP),
									d.insideElementPressed &&
										l.raiseEvent('exit', { originalEvent: d.originalEvent });
							},
							blurHandler: function (d) {
								l.tracker.leaveHandler(d), l.raiseEvent('blur', { originalEvent: d.originalEvent });
							},
							pressHandler: function (d) {
								n(l, e.ButtonState.DOWN), l.raiseEvent('press', { originalEvent: d.originalEvent });
							},
							releaseHandler: function (d) {
								d.insideElementPressed && d.insideElementReleased
									? (r(l, e.ButtonState.HOVER),
									  l.raiseEvent('release', { originalEvent: d.originalEvent }))
									: d.insideElementPressed
									? r(l, e.ButtonState.GROUP)
									: n(l, e.ButtonState.HOVER);
							},
							clickHandler: function (d) {
								d.quick && l.raiseEvent('click', { originalEvent: d.originalEvent });
							},
							keyHandler: function (d) {
								d.keyCode === 13
									? (l.raiseEvent('click', { originalEvent: d.originalEvent }),
									  l.raiseEvent('release', { originalEvent: d.originalEvent }),
									  (d.preventDefault = !0))
									: (d.preventDefault = !1);
							}
						})),
						r(this, e.ButtonState.REST);
				}),
				e.extend(e.Button.prototype, e.EventSource.prototype, {
					notifyGroupEnter: function () {
						n(this, e.ButtonState.GROUP);
					},
					notifyGroupExit: function () {
						r(this, e.ButtonState.REST);
					},
					disable: function () {
						this.notifyGroupExit(),
							(this.element.disabled = !0),
							this.tracker.setTracking(!1),
							e.setElementOpacity(this.element, 0.2, !0);
					},
					enable: function () {
						(this.element.disabled = !1),
							this.tracker.setTracking(!0),
							e.setElementOpacity(this.element, 1, !0),
							this.notifyGroupEnter();
					},
					destroy: function () {
						this.imgRest && (this.element.removeChild(this.imgRest), (this.imgRest = null)),
							this.imgGroup && (this.element.removeChild(this.imgGroup), (this.imgGroup = null)),
							this.imgHover && (this.element.removeChild(this.imgHover), (this.imgHover = null)),
							this.imgDown && (this.element.removeChild(this.imgDown), (this.imgDown = null)),
							this.removeAllHandlers(),
							this.tracker.destroy(),
							(this.element = null);
					}
				});
			function t(s) {
				e.requestAnimationFrame(function () {
					i(s);
				});
			}
			function i(s) {
				var l, d, f;
				s.shouldFade &&
					((l = e.now()),
					(d = l - s.fadeBeginTime),
					(f = 1 - d / s.fadeLength),
					(f = Math.min(1, f)),
					(f = Math.max(0, f)),
					s.imgGroup && e.setElementOpacity(s.imgGroup, f, !0),
					f > 0 && t(s));
			}
			function o(s) {
				(s.shouldFade = !0),
					(s.fadeBeginTime = e.now() + s.fadeDelay),
					window.setTimeout(function () {
						t(s);
					}, s.fadeDelay);
			}
			function h(s) {
				(s.shouldFade = !1), s.imgGroup && e.setElementOpacity(s.imgGroup, 1, !0);
			}
			function n(s, l) {
				s.element.disabled ||
					(l >= e.ButtonState.GROUP &&
						s.currentState === e.ButtonState.REST &&
						(h(s), (s.currentState = e.ButtonState.GROUP)),
					l >= e.ButtonState.HOVER &&
						s.currentState === e.ButtonState.GROUP &&
						(s.imgHover && (s.imgHover.style.visibility = ''),
						(s.currentState = e.ButtonState.HOVER)),
					l >= e.ButtonState.DOWN &&
						s.currentState === e.ButtonState.HOVER &&
						(s.imgDown && (s.imgDown.style.visibility = ''),
						(s.currentState = e.ButtonState.DOWN)));
			}
			function r(s, l) {
				s.element.disabled ||
					(l <= e.ButtonState.HOVER &&
						s.currentState === e.ButtonState.DOWN &&
						(s.imgDown && (s.imgDown.style.visibility = 'hidden'),
						(s.currentState = e.ButtonState.HOVER)),
					l <= e.ButtonState.GROUP &&
						s.currentState === e.ButtonState.HOVER &&
						(s.imgHover && (s.imgHover.style.visibility = 'hidden'),
						(s.currentState = e.ButtonState.GROUP)),
					l <= e.ButtonState.REST &&
						s.currentState === e.ButtonState.GROUP &&
						(o(s), (s.currentState = e.ButtonState.REST)));
			}
		})(O),
		(function (e) {
			(e.ButtonGroup = function (t) {
				e.extend(
					!0,
					this,
					{
						buttons: [],
						clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
						clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
						labelText: ''
					},
					t
				);
				var i = this.buttons.concat([]),
					o = this,
					h;
				if (((this.element = t.element || e.makeNeutralElement('div')), !t.group))
					for (this.element.style.display = 'inline-block', h = 0; h < i.length; h++)
						this.element.appendChild(i[h].element);
				e.setElementTouchActionNone(this.element),
					(this.tracker = new e.MouseTracker({
						userData: 'ButtonGroup.tracker',
						element: this.element,
						clickTimeThreshold: this.clickTimeThreshold,
						clickDistThreshold: this.clickDistThreshold,
						enterHandler: function (n) {
							var r;
							for (r = 0; r < o.buttons.length; r++) o.buttons[r].notifyGroupEnter();
						},
						leaveHandler: function (n) {
							var r;
							if (!n.insideElementPressed)
								for (r = 0; r < o.buttons.length; r++) o.buttons[r].notifyGroupExit();
						}
					}));
			}),
				(e.ButtonGroup.prototype = {
					emulateEnter: function () {
						this.tracker.enterHandler({ eventSource: this.tracker });
					},
					emulateLeave: function () {
						this.tracker.leaveHandler({ eventSource: this.tracker });
					},
					destroy: function () {
						for (; this.buttons.length; ) {
							var t = this.buttons.pop();
							this.element.removeChild(t.element), t.destroy();
						}
						this.tracker.destroy(), (this.element = null);
					}
				});
		})(O),
		(function (e) {
			(e.Rect = function (t, i, o, h, n) {
				(this.x = typeof t == 'number' ? t : 0),
					(this.y = typeof i == 'number' ? i : 0),
					(this.width = typeof o == 'number' ? o : 0),
					(this.height = typeof h == 'number' ? h : 0),
					(this.degrees = typeof n == 'number' ? n : 0),
					(this.degrees = e.positiveModulo(this.degrees, 360));
				var r, s;
				this.degrees >= 270
					? ((r = this.getTopRight()),
					  (this.x = r.x),
					  (this.y = r.y),
					  (s = this.height),
					  (this.height = this.width),
					  (this.width = s),
					  (this.degrees -= 270))
					: this.degrees >= 180
					? ((r = this.getBottomRight()), (this.x = r.x), (this.y = r.y), (this.degrees -= 180))
					: this.degrees >= 90 &&
					  ((r = this.getBottomLeft()),
					  (this.x = r.x),
					  (this.y = r.y),
					  (s = this.height),
					  (this.height = this.width),
					  (this.width = s),
					  (this.degrees -= 90));
			}),
				(e.Rect.fromSummits = function (t, i, o) {
					var h = t.distanceTo(i),
						n = t.distanceTo(o),
						r = i.minus(t),
						s = Math.atan(r.y / r.x);
					return (
						r.x < 0 ? (s += Math.PI) : r.y < 0 && (s += 2 * Math.PI),
						new e.Rect(t.x, t.y, h, n, (s / Math.PI) * 180)
					);
				}),
				(e.Rect.prototype = {
					clone: function () {
						return new e.Rect(this.x, this.y, this.width, this.height, this.degrees);
					},
					getAspectRatio: function () {
						return this.width / this.height;
					},
					getTopLeft: function () {
						return new e.Point(this.x, this.y);
					},
					getBottomRight: function () {
						return new e.Point(this.x + this.width, this.y + this.height).rotate(
							this.degrees,
							this.getTopLeft()
						);
					},
					getTopRight: function () {
						return new e.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft());
					},
					getBottomLeft: function () {
						return new e.Point(this.x, this.y + this.height).rotate(
							this.degrees,
							this.getTopLeft()
						);
					},
					getCenter: function () {
						return new e.Point(this.x + this.width / 2, this.y + this.height / 2).rotate(
							this.degrees,
							this.getTopLeft()
						);
					},
					getSize: function () {
						return new e.Point(this.width, this.height);
					},
					equals: function (t) {
						return (
							t instanceof e.Rect &&
							this.x === t.x &&
							this.y === t.y &&
							this.width === t.width &&
							this.height === t.height &&
							this.degrees === t.degrees
						);
					},
					times: function (t) {
						return new e.Rect(
							this.x * t,
							this.y * t,
							this.width * t,
							this.height * t,
							this.degrees
						);
					},
					translate: function (t) {
						return new e.Rect(this.x + t.x, this.y + t.y, this.width, this.height, this.degrees);
					},
					union: function (t) {
						var i = this.getBoundingBox(),
							o = t.getBoundingBox(),
							h = Math.min(i.x, o.x),
							n = Math.min(i.y, o.y),
							r = Math.max(i.x + i.width, o.x + o.width),
							s = Math.max(i.y + i.height, o.y + o.height);
						return new e.Rect(h, n, r - h, s - n);
					},
					intersection: function (t) {
						var i = 1e-10,
							o = [],
							h = this.getTopLeft();
						t.containsPoint(h, i) && o.push(h);
						var n = this.getTopRight();
						t.containsPoint(n, i) && o.push(n);
						var r = this.getBottomLeft();
						t.containsPoint(r, i) && o.push(r);
						var s = this.getBottomRight();
						t.containsPoint(s, i) && o.push(s);
						var l = t.getTopLeft();
						this.containsPoint(l, i) && o.push(l);
						var d = t.getTopRight();
						this.containsPoint(d, i) && o.push(d);
						var f = t.getBottomLeft();
						this.containsPoint(f, i) && o.push(f);
						var y = t.getBottomRight();
						this.containsPoint(y, i) && o.push(y);
						for (var v = this._getSegments(), T = t._getSegments(), w = 0; w < v.length; w++)
							for (var x = v[w], _ = 0; _ < T.length; _++) {
								var b = T[_],
									z = U(x[0], x[1], b[0], b[1]);
								z && o.push(z);
							}
						function U(K, te, ie, ae) {
							var ee = te.minus(K),
								ne = ae.minus(ie),
								oe = -ne.x * ee.y + ee.x * ne.y;
							if (oe === 0) return null;
							var le = (ee.x * (K.y - ie.y) - ee.y * (K.x - ie.x)) / oe,
								se = (ne.x * (K.y - ie.y) - ne.y * (K.x - ie.x)) / oe;
							return -i <= le && le <= 1 - i && -i <= se && se <= 1 - i
								? new e.Point(K.x + se * ee.x, K.y + se * ee.y)
								: null;
						}
						if (o.length === 0) return null;
						for (var N = o[0].x, k = o[0].x, M = o[0].y, W = o[0].y, Q = 1; Q < o.length; Q++) {
							var X = o[Q];
							X.x < N && (N = X.x),
								X.x > k && (k = X.x),
								X.y < M && (M = X.y),
								X.y > W && (W = X.y);
						}
						return new e.Rect(N, M, k - N, W - M);
					},
					_getSegments: function () {
						var t = this.getTopLeft(),
							i = this.getTopRight(),
							o = this.getBottomLeft(),
							h = this.getBottomRight();
						return [
							[t, i],
							[i, h],
							[h, o],
							[o, t]
						];
					},
					rotate: function (t, i) {
						if (((t = e.positiveModulo(t, 360)), t === 0)) return this.clone();
						i = i || this.getCenter();
						var o = this.getTopLeft().rotate(t, i),
							h = this.getTopRight().rotate(t, i),
							n = h.minus(o);
						n = n.apply(function (s) {
							var l = 1e-15;
							return Math.abs(s) < l ? 0 : s;
						});
						var r = Math.atan(n.y / n.x);
						return (
							n.x < 0 ? (r += Math.PI) : n.y < 0 && (r += 2 * Math.PI),
							new e.Rect(o.x, o.y, this.width, this.height, (r / Math.PI) * 180)
						);
					},
					getBoundingBox: function () {
						if (this.degrees === 0) return this.clone();
						var t = this.getTopLeft(),
							i = this.getTopRight(),
							o = this.getBottomLeft(),
							h = this.getBottomRight(),
							n = Math.min(t.x, i.x, o.x, h.x),
							r = Math.max(t.x, i.x, o.x, h.x),
							s = Math.min(t.y, i.y, o.y, h.y),
							l = Math.max(t.y, i.y, o.y, h.y);
						return new e.Rect(n, s, r - n, l - s);
					},
					getIntegerBoundingBox: function () {
						var t = this.getBoundingBox(),
							i = Math.floor(t.x),
							o = Math.floor(t.y),
							h = Math.ceil(t.width + t.x - i),
							n = Math.ceil(t.height + t.y - o);
						return new e.Rect(i, o, h, n);
					},
					containsPoint: function (t, i) {
						i = i || 0;
						var o = this.getTopLeft(),
							h = this.getTopRight(),
							n = this.getBottomLeft(),
							r = h.minus(o),
							s = n.minus(o);
						return (
							(t.x - o.x) * r.x + (t.y - o.y) * r.y >= -i &&
							(t.x - h.x) * r.x + (t.y - h.y) * r.y <= i &&
							(t.x - o.x) * s.x + (t.y - o.y) * s.y >= -i &&
							(t.x - n.x) * s.x + (t.y - n.y) * s.y <= i
						);
					},
					toString: function () {
						return (
							'[' +
							Math.round(this.x * 100) / 100 +
							', ' +
							Math.round(this.y * 100) / 100 +
							', ' +
							Math.round(this.width * 100) / 100 +
							'x' +
							Math.round(this.height * 100) / 100 +
							', ' +
							Math.round(this.degrees * 100) / 100 +
							'deg]'
						);
					}
				});
		})(O),
		(function (e) {
			var t = {};
			(e.ReferenceStrip = function (f) {
				var y = this,
					v = f.viewer,
					T = e.getElementSize(v.element),
					w,
					x,
					_;
				for (
					f.id ||
						((f.id = 'referencestrip-' + e.now()),
						(this.element = e.makeNeutralElement('div')),
						(this.element.id = f.id),
						(this.element.className = 'referencestrip')),
						f = e.extend(
							!0,
							{
								sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio,
								position: e.DEFAULT_SETTINGS.referenceStripPosition,
								scroll: e.DEFAULT_SETTINGS.referenceStripScroll,
								clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold
							},
							f,
							{ element: this.element }
						),
						e.extend(this, f),
						t[this.id] = { animating: !1 },
						this.minPixelRatio = this.viewer.minPixelRatio,
						this.element.tabIndex = 0,
						x = this.element.style,
						x.marginTop = '0px',
						x.marginRight = '0px',
						x.marginBottom = '0px',
						x.marginLeft = '0px',
						x.left = '0px',
						x.bottom = '0px',
						x.border = '0px',
						x.background = '#000',
						x.position = 'relative',
						e.setElementTouchActionNone(this.element),
						e.setElementOpacity(this.element, 0.8),
						this.viewer = v,
						this.tracker = new e.MouseTracker({
							userData: 'ReferenceStrip.tracker',
							element: this.element,
							clickHandler: e.delegate(this, i),
							dragHandler: e.delegate(this, o),
							scrollHandler: e.delegate(this, h),
							enterHandler: e.delegate(this, r),
							leaveHandler: e.delegate(this, s),
							keyDownHandler: e.delegate(this, l),
							keyHandler: e.delegate(this, d),
							preProcessEventHandler: function (b) {
								b.eventType === 'wheel' && (b.preventDefault = !0);
							}
						}),
						f.width && f.height
							? ((this.element.style.width = f.width + 'px'),
							  (this.element.style.height = f.height + 'px'),
							  v.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT }))
							: f.scroll === 'horizontal'
							? ((this.element.style.width =
									T.x * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + 'px'),
							  (this.element.style.height = T.y * f.sizeRatio + 'px'),
							  v.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT }))
							: ((this.element.style.height =
									T.y * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + 'px'),
							  (this.element.style.width = T.x * f.sizeRatio + 'px'),
							  v.addControl(this.element, { anchor: e.ControlAnchor.TOP_LEFT })),
						this.panelWidth = T.x * this.sizeRatio + 8,
						this.panelHeight = T.y * this.sizeRatio + 8,
						this.panels = [],
						this.miniViewers = {},
						_ = 0;
					_ < v.tileSources.length;
					_++
				)
					(w = e.makeNeutralElement('div')),
						(w.id = this.element.id + '-' + _),
						(w.style.width = y.panelWidth + 'px'),
						(w.style.height = y.panelHeight + 'px'),
						(w.style.display = 'inline'),
						(w.style.float = 'left'),
						(w.style.cssFloat = 'left'),
						(w.style.styleFloat = 'left'),
						(w.style.padding = '2px'),
						e.setElementTouchActionNone(w),
						e.setElementPointerEventsNone(w),
						this.element.appendChild(w),
						(w.activePanel = !1),
						this.panels.push(w);
				n(this, this.scroll === 'vertical' ? T.y : T.x, 0), this.setFocus(0);
			}),
				(e.ReferenceStrip.prototype = {
					setFocus: function (f) {
						var y = this.element.querySelector('#' + this.element.id + '-' + f),
							v = e.getElementSize(this.viewer.canvas),
							T = Number(this.element.style.width.replace('px', '')),
							w = Number(this.element.style.height.replace('px', '')),
							x = -Number(this.element.style.marginLeft.replace('px', '')),
							_ = -Number(this.element.style.marginTop.replace('px', '')),
							b;
						this.currentSelected !== y &&
							(this.currentSelected && (this.currentSelected.style.background = '#000'),
							(this.currentSelected = y),
							(this.currentSelected.style.background = '#999'),
							this.scroll === 'horizontal'
								? ((b = Number(f) * (this.panelWidth + 3)),
								  b > x + v.x - this.panelWidth
										? ((b = Math.min(b, T - v.x)),
										  (this.element.style.marginLeft = -b + 'px'),
										  n(this, v.x, -b))
										: b < x &&
										  ((b = Math.max(0, b - v.x / 2)),
										  (this.element.style.marginLeft = -b + 'px'),
										  n(this, v.x, -b)))
								: ((b = Number(f) * (this.panelHeight + 3)),
								  b > _ + v.y - this.panelHeight
										? ((b = Math.min(b, w - v.y)),
										  (this.element.style.marginTop = -b + 'px'),
										  n(this, v.y, -b))
										: b < _ &&
										  ((b = Math.max(0, b - v.y / 2)),
										  (this.element.style.marginTop = -b + 'px'),
										  n(this, v.y, -b))),
							(this.currentPage = f),
							r.call(this, { eventSource: this.tracker }));
					},
					update: function () {
						return !!t[this.id].animating;
					},
					destroy: function () {
						if (this.miniViewers) for (var f in this.miniViewers) this.miniViewers[f].destroy();
						this.tracker.destroy(), this.element && this.viewer.removeControl(this.element);
					}
				});
			function i(f) {
				if (f.quick) {
					var y;
					this.scroll === 'horizontal'
						? (y = Math.floor(f.position.x / this.panelWidth))
						: (y = Math.floor(f.position.y / this.panelHeight)),
						this.viewer.goToPage(y);
				}
				this.element.focus();
			}
			function o(f) {
				if (((this.dragging = !0), this.element)) {
					var y = Number(this.element.style.marginLeft.replace('px', '')),
						v = Number(this.element.style.marginTop.replace('px', '')),
						T = Number(this.element.style.width.replace('px', '')),
						w = Number(this.element.style.height.replace('px', '')),
						x = e.getElementSize(this.viewer.canvas);
					this.scroll === 'horizontal'
						? -f.delta.x > 0
							? y > -(T - x.x) &&
							  ((this.element.style.marginLeft = y + f.delta.x * 2 + 'px'),
							  n(this, x.x, y + f.delta.x * 2))
							: -f.delta.x < 0 &&
							  y < 0 &&
							  ((this.element.style.marginLeft = y + f.delta.x * 2 + 'px'),
							  n(this, x.x, y + f.delta.x * 2))
						: -f.delta.y > 0
						? v > -(w - x.y) &&
						  ((this.element.style.marginTop = v + f.delta.y * 2 + 'px'),
						  n(this, x.y, v + f.delta.y * 2))
						: -f.delta.y < 0 &&
						  v < 0 &&
						  ((this.element.style.marginTop = v + f.delta.y * 2 + 'px'),
						  n(this, x.y, v + f.delta.y * 2));
				}
			}
			function h(f) {
				if (this.element) {
					var y = Number(this.element.style.marginLeft.replace('px', '')),
						v = Number(this.element.style.marginTop.replace('px', '')),
						T = Number(this.element.style.width.replace('px', '')),
						w = Number(this.element.style.height.replace('px', '')),
						x = e.getElementSize(this.viewer.canvas);
					this.scroll === 'horizontal'
						? f.scroll > 0
							? y > -(T - x.x) &&
							  ((this.element.style.marginLeft = y - f.scroll * 60 + 'px'),
							  n(this, x.x, y - f.scroll * 60))
							: f.scroll < 0 &&
							  y < 0 &&
							  ((this.element.style.marginLeft = y - f.scroll * 60 + 'px'),
							  n(this, x.x, y - f.scroll * 60))
						: f.scroll < 0
						? v > x.y - w &&
						  ((this.element.style.marginTop = v + f.scroll * 60 + 'px'),
						  n(this, x.y, v + f.scroll * 60))
						: f.scroll > 0 &&
						  v < 0 &&
						  ((this.element.style.marginTop = v + f.scroll * 60 + 'px'),
						  n(this, x.y, v + f.scroll * 60)),
						(f.preventDefault = !0);
				}
			}
			function n(f, y, v) {
				var T, w, x, _, b, z;
				for (
					f.scroll === 'horizontal' ? (T = f.panelWidth) : (T = f.panelHeight),
						w = Math.ceil(y / T) + 5,
						x = Math.ceil((Math.abs(v) + y) / T) + 1,
						w = x - w,
						w = w < 0 ? 0 : w,
						b = w;
					b < x && b < f.panels.length;
					b++
				)
					if (((z = f.panels[b]), !z.activePanel)) {
						var U,
							N = f.viewer.tileSources[b];
						N.referenceStripThumbnailUrl
							? (U = { type: 'image', url: N.referenceStripThumbnailUrl })
							: (U = N),
							(_ = new e.Viewer({
								id: z.id,
								tileSources: [U],
								element: z,
								navigatorSizeRatio: f.sizeRatio,
								showNavigator: !1,
								mouseNavEnabled: !1,
								showNavigationControl: !1,
								showSequenceControl: !1,
								immediateRender: !0,
								blendTime: 0,
								animationTime: 0,
								loadTilesWithAjax: f.viewer.loadTilesWithAjax,
								ajaxHeaders: f.viewer.ajaxHeaders,
								useCanvas: f.useCanvas
							})),
							e.setElementPointerEventsNone(_.canvas),
							e.setElementPointerEventsNone(_.container),
							_.innerTracker.setTracking(!1),
							_.outerTracker.setTracking(!1),
							(f.miniViewers[z.id] = _),
							(z.activePanel = !0);
					}
			}
			function r(f) {
				var y = f.eventSource.element;
				this.scroll === 'horizontal'
					? (y.style.marginBottom = '0px')
					: (y.style.marginLeft = '0px');
			}
			function s(f) {
				var y = f.eventSource.element;
				this.scroll === 'horizontal'
					? (y.style.marginBottom = '-' + e.getElementSize(y).y / 2 + 'px')
					: (y.style.marginLeft = '-' + e.getElementSize(y).x / 2 + 'px');
			}
			function l(f) {
				if (!f.ctrl && !f.alt && !f.meta)
					switch (f.keyCode) {
						case 38:
							h.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }),
								(f.preventDefault = !0);
							break;
						case 40:
							h.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }),
								(f.preventDefault = !0);
							break;
						case 37:
							h.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }),
								(f.preventDefault = !0);
							break;
						case 39:
							h.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }),
								(f.preventDefault = !0);
							break;
						default:
							f.preventDefault = !1;
							break;
					}
				else f.preventDefault = !1;
			}
			function d(f) {
				if (!f.ctrl && !f.alt && !f.meta)
					switch (f.keyCode) {
						case 61:
							h.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }),
								(f.preventDefault = !0);
							break;
						case 45:
							h.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }),
								(f.preventDefault = !0);
							break;
						case 48:
						case 119:
						case 87:
							h.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }),
								(f.preventDefault = !0);
							break;
						case 115:
						case 83:
							h.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }),
								(f.preventDefault = !0);
							break;
						case 97:
							h.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }),
								(f.preventDefault = !0);
							break;
						case 100:
							h.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }),
								(f.preventDefault = !0);
							break;
						default:
							f.preventDefault = !1;
							break;
					}
				else f.preventDefault = !1;
			}
		})(O),
		(function (e) {
			(e.DisplayRect = function (t, i, o, h, n, r) {
				e.Rect.apply(this, [t, i, o, h]), (this.minLevel = n), (this.maxLevel = r);
			}),
				e.extend(e.DisplayRect.prototype, e.Rect.prototype);
		})(O),
		(function (e) {
			(e.Spring = function (i) {
				var o = arguments;
				typeof i != 'object' &&
					(i = {
						initial: o.length && typeof o[0] == 'number' ? o[0] : void 0,
						springStiffness: o.length > 1 ? o[1].springStiffness : 5,
						animationTime: o.length > 1 ? o[1].animationTime : 1.5
					}),
					e.console.assert(
						typeof i.springStiffness == 'number' && i.springStiffness !== 0,
						'[OpenSeadragon.Spring] options.springStiffness must be a non-zero number'
					),
					e.console.assert(
						typeof i.animationTime == 'number' && i.animationTime >= 0,
						'[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0'
					),
					i.exponential && ((this._exponential = !0), delete i.exponential),
					e.extend(!0, this, i),
					(this.current = {
						value: typeof this.initial == 'number' ? this.initial : this._exponential ? 0 : 1,
						time: e.now()
					}),
					e.console.assert(
						!this._exponential || this.current.value !== 0,
						'[OpenSeadragon.Spring] value must be non-zero for exponential springs'
					),
					(this.start = { value: this.current.value, time: this.current.time }),
					(this.target = { value: this.current.value, time: this.current.time }),
					this._exponential &&
						((this.start._logValue = Math.log(this.start.value)),
						(this.target._logValue = Math.log(this.target.value)),
						(this.current._logValue = Math.log(this.current.value)));
			}),
				(e.Spring.prototype = {
					resetTo: function (i) {
						e.console.assert(
							!this._exponential || i !== 0,
							'[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs'
						),
							(this.start.value = this.target.value = this.current.value = i),
							(this.start.time = this.target.time = this.current.time = e.now()),
							this._exponential &&
								((this.start._logValue = Math.log(this.start.value)),
								(this.target._logValue = Math.log(this.target.value)),
								(this.current._logValue = Math.log(this.current.value)));
					},
					springTo: function (i) {
						e.console.assert(
							!this._exponential || i !== 0,
							'[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs'
						),
							(this.start.value = this.current.value),
							(this.start.time = this.current.time),
							(this.target.value = i),
							(this.target.time = this.start.time + 1e3 * this.animationTime),
							this._exponential &&
								((this.start._logValue = Math.log(this.start.value)),
								(this.target._logValue = Math.log(this.target.value)));
					},
					shiftBy: function (i) {
						(this.start.value += i),
							(this.target.value += i),
							this._exponential &&
								(e.console.assert(
									this.target.value !== 0 && this.start.value !== 0,
									'[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs'
								),
								(this.start._logValue = Math.log(this.start.value)),
								(this.target._logValue = Math.log(this.target.value)));
					},
					setExponential: function (i) {
						(this._exponential = i),
							this._exponential &&
								(e.console.assert(
									this.current.value !== 0 && this.target.value !== 0 && this.start.value !== 0,
									'[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs'
								),
								(this.start._logValue = Math.log(this.start.value)),
								(this.target._logValue = Math.log(this.target.value)),
								(this.current._logValue = Math.log(this.current.value)));
					},
					update: function () {
						this.current.time = e.now();
						var i, o;
						this._exponential
							? ((i = this.start._logValue), (o = this.target._logValue))
							: ((i = this.start.value), (o = this.target.value));
						var h =
								this.current.time >= this.target.time
									? o
									: i +
									  (o - i) *
											t(
												this.springStiffness,
												(this.current.time - this.start.time) / (this.target.time - this.start.time)
											),
							n = this.current.value;
						return (
							this._exponential ? (this.current.value = Math.exp(h)) : (this.current.value = h),
							n !== this.current.value
						);
					},
					isAtTargetValue: function () {
						return this.current.value === this.target.value;
					}
				});
			function t(i, o) {
				return (1 - Math.exp(i * -o)) / (1 - Math.exp(-i));
			}
		})(O),
		(function (e) {
			(e.ImageJob = function (i) {
				e.extend(!0, this, { timeout: e.DEFAULT_SETTINGS.timeout, jobId: null }, i),
					(this.data = null),
					(this.userData = {}),
					(this.errorMsg = null);
			}),
				(e.ImageJob.prototype = {
					start: function () {
						var i = this,
							o = this.abort;
						(this.jobId = window.setTimeout(function () {
							i.finish(null, null, 'Image load exceeded timeout (' + i.timeout + ' ms)');
						}, this.timeout)),
							(this.abort = function () {
								i.source.downloadTileAbort(i), typeof o == 'function' && o();
							}),
							this.source.downloadTileStart(this);
					},
					finish: function (i, o, h) {
						(this.data = i),
							(this.request = o),
							(this.errorMsg = h),
							this.jobId && window.clearTimeout(this.jobId),
							this.callback(this);
					}
				}),
				(e.ImageLoader = function (i) {
					e.extend(
						!0,
						this,
						{
							jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit,
							timeout: e.DEFAULT_SETTINGS.timeout,
							jobQueue: [],
							jobsInProgress: 0
						},
						i
					);
				}),
				(e.ImageLoader.prototype = {
					addJob: function (i) {
						if (!i.source) {
							e.console.error(
								'ImageLoader.prototype.addJob() requires [options.source]. TileSource since new API defines how images are fetched. Creating a dummy TileSource.'
							);
							var o = e.TileSource.prototype;
							i.source = {
								downloadTileStart: o.downloadTileStart,
								downloadTileAbort: o.downloadTileAbort
							};
						}
						var h = this,
							n = function (l) {
								t(h, l, i.callback);
							},
							r = {
								src: i.src,
								tile: i.tile || {},
								source: i.source,
								loadWithAjax: i.loadWithAjax,
								ajaxHeaders: i.loadWithAjax ? i.ajaxHeaders : null,
								crossOriginPolicy: i.crossOriginPolicy,
								ajaxWithCredentials: i.ajaxWithCredentials,
								postData: i.postData,
								callback: n,
								abort: i.abort,
								timeout: this.timeout
							},
							s = new e.ImageJob(r);
						!this.jobLimit || this.jobsInProgress < this.jobLimit
							? (s.start(), this.jobsInProgress++)
							: this.jobQueue.push(s);
					},
					clear: function () {
						for (var i = 0; i < this.jobQueue.length; i++) {
							var o = this.jobQueue[i];
							typeof o.abort == 'function' && o.abort();
						}
						this.jobQueue = [];
					}
				});
			function t(i, o, h) {
				var n;
				i.jobsInProgress--,
					(!i.jobLimit || i.jobsInProgress < i.jobLimit) &&
						i.jobQueue.length > 0 &&
						((n = i.jobQueue.shift()), n.start(), i.jobsInProgress++),
					h(o.data, o.errorMsg, o.request);
			}
		})(O),
		(function (e) {
			(e.Tile = function (t, i, o, h, n, r, s, l, d, f, y, v) {
				(this.level = t),
					(this.x = i),
					(this.y = o),
					(this.bounds = h),
					(this.sourceBounds = f),
					(this.exists = n),
					(this._url = r),
					(this.postData = y),
					(this.context2D = s),
					(this.loadWithAjax = l),
					(this.ajaxHeaders = d),
					v === void 0 &&
						(e.console.warn(
							"Tile constructor needs 'cacheKey' variable: creation tile cache in Tile class is deprecated. TileSource.prototype.getTileHashKey will be used."
						),
						(v = e.TileSource.prototype.getTileHashKey(t, i, o, r, d, y))),
					(this.cacheKey = v),
					(this.loaded = !1),
					(this.loading = !1),
					(this.element = null),
					(this.imgElement = null),
					(this.style = null),
					(this.position = null),
					(this.size = null),
					(this.flipped = !1),
					(this.blendStart = null),
					(this.opacity = null),
					(this.squaredDistance = null),
					(this.visibility = null),
					(this.hasTransparency = !1),
					(this.beingDrawn = !1),
					(this.lastTouchTime = 0),
					(this.isRightMost = !1),
					(this.isBottomMost = !1);
			}),
				(e.Tile.prototype = {
					toString: function () {
						return this.level + '/' + this.x + '_' + this.y;
					},
					_hasTransparencyChannel: function () {
						return (
							console.warn(
								'Tile.prototype._hasTransparencyChannel() has been deprecated and will be removed in the future. Use TileSource.prototype.hasTransparency() instead.'
							),
							!!this.context2D || this.getUrl().match('.png')
						);
					},
					drawHTML: function (t) {
						if (!this.cacheImageRecord) {
							e.console.warn(
								"[Tile.drawHTML] attempting to draw tile %s when it's not cached",
								this.toString()
							);
							return;
						}
						if (!this.loaded) {
							e.console.warn(
								"Attempting to draw tile %s when it's not yet loaded.",
								this.toString()
							);
							return;
						}
						if (!this.element) {
							var i = this.getImage();
							if (!i) return;
							(this.element = e.makeNeutralElement('div')),
								(this.imgElement = i.cloneNode()),
								(this.imgElement.style.msInterpolationMode = 'nearest-neighbor'),
								(this.imgElement.style.width = '100%'),
								(this.imgElement.style.height = '100%'),
								(this.style = this.element.style),
								(this.style.position = 'absolute');
						}
						this.element.parentNode !== t && t.appendChild(this.element),
							this.imgElement.parentNode !== this.element &&
								this.element.appendChild(this.imgElement),
							(this.style.top = this.position.y + 'px'),
							(this.style.left = this.position.x + 'px'),
							(this.style.height = this.size.y + 'px'),
							(this.style.width = this.size.x + 'px'),
							this.flipped && (this.style.transform = 'scaleX(-1)'),
							e.setElementOpacity(this.element, this.opacity);
					},
					get image() {
						return (
							e.console.error(
								'[Tile.image] property has been deprecated. Use [Tile.prototype.getImage] instead.'
							),
							this.getImage()
						);
					},
					get url() {
						return (
							e.console.error(
								'[Tile.url] property has been deprecated. Use [Tile.prototype.getUrl] instead.'
							),
							this.getUrl()
						);
					},
					getImage: function () {
						return this.cacheImageRecord.getImage();
					},
					getUrl: function () {
						return typeof this._url == 'function' ? this._url() : this._url;
					},
					getCanvasContext: function () {
						return this.context2D || this.cacheImageRecord.getRenderedContext();
					},
					drawCanvas: function (t, i, o, h, n, r) {
						var s = this.position.times(e.pixelDensityRatio),
							l = this.size.times(e.pixelDensityRatio),
							d;
						if (!this.context2D && !this.cacheImageRecord) {
							e.console.warn(
								"[Tile.drawCanvas] attempting to draw tile %s when it's not cached",
								this.toString()
							);
							return;
						}
						if (((d = this.getCanvasContext()), !this.loaded || !d)) {
							e.console.warn(
								"Attempting to draw tile %s when it's not yet loaded.",
								this.toString()
							);
							return;
						}
						t.save(),
							(t.globalAlpha = this.opacity),
							typeof o == 'number' && o !== 1 && ((s = s.times(o)), (l = l.times(o))),
							h instanceof e.Point && (s = s.plus(h)),
							t.globalAlpha === 1 &&
								this.hasTransparency &&
								(n &&
									((s.x = Math.round(s.x)),
									(s.y = Math.round(s.y)),
									(l.x = Math.round(l.x)),
									(l.y = Math.round(l.y))),
								t.clearRect(s.x, s.y, l.x, l.y)),
							i({ context: t, tile: this, rendered: d });
						var f, y;
						this.sourceBounds
							? ((f = Math.min(this.sourceBounds.width, d.canvas.width)),
							  (y = Math.min(this.sourceBounds.height, d.canvas.height)))
							: ((f = d.canvas.width), (y = d.canvas.height)),
							t.translate(s.x + l.x / 2, 0),
							this.flipped && t.scale(-1, 1),
							t.drawImage(d.canvas, 0, 0, f, y, -l.x / 2, s.y, l.x, l.y),
							t.restore();
					},
					getScaleForEdgeSmoothing: function () {
						var t;
						if (this.cacheImageRecord) t = this.cacheImageRecord.getRenderedContext();
						else if (this.context2D) t = this.context2D;
						else
							return (
								e.console.warn(
									"[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached",
									this.toString()
								),
								1
							);
						return t.canvas.width / (this.size.x * e.pixelDensityRatio);
					},
					getTranslationForEdgeSmoothing: function (t, i, o) {
						var h = Math.max(1, Math.ceil((o.x - i.x) / 2)),
							n = Math.max(1, Math.ceil((o.y - i.y) / 2));
						return new e.Point(h, n).minus(
							this.position
								.times(e.pixelDensityRatio)
								.times(t || 1)
								.apply(function (r) {
									return r % 1;
								})
						);
					},
					unload: function () {
						this.imgElement &&
							this.imgElement.parentNode &&
							this.imgElement.parentNode.removeChild(this.imgElement),
							this.element &&
								this.element.parentNode &&
								this.element.parentNode.removeChild(this.element),
							(this.element = null),
							(this.imgElement = null),
							(this.loaded = !1),
							(this.loading = !1);
					}
				});
		})(O),
		(function (e) {
			(e.OverlayPlacement = e.Placement),
				(e.OverlayRotationMode = e.freezeObject({ NO_ROTATION: 1, EXACT: 2, BOUNDING_BOX: 3 })),
				(e.Overlay = function (t, i, o) {
					var h;
					e.isPlainObject(t) ? (h = t) : (h = { element: t, location: i, placement: o }),
						(this.element = h.element),
						(this.style = h.element.style),
						this._init(h);
				}),
				(e.Overlay.prototype = {
					_init: function (t) {
						(this.location = t.location),
							(this.placement = t.placement === void 0 ? e.Placement.TOP_LEFT : t.placement),
							(this.onDraw = t.onDraw),
							(this.checkResize = t.checkResize === void 0 ? !0 : t.checkResize),
							(this.width = t.width === void 0 ? null : t.width),
							(this.height = t.height === void 0 ? null : t.height),
							(this.rotationMode = t.rotationMode || e.OverlayRotationMode.EXACT),
							this.location instanceof e.Rect &&
								((this.width = this.location.width),
								(this.height = this.location.height),
								(this.location = this.location.getTopLeft()),
								(this.placement = e.Placement.TOP_LEFT)),
							(this.scales = this.width !== null && this.height !== null),
							(this.bounds = new e.Rect(this.location.x, this.location.y, this.width, this.height)),
							(this.position = this.location);
					},
					adjust: function (t, i) {
						var o = e.Placement.properties[this.placement];
						o &&
							(o.isHorizontallyCentered ? (t.x -= i.x / 2) : o.isRight && (t.x -= i.x),
							o.isVerticallyCentered ? (t.y -= i.y / 2) : o.isBottom && (t.y -= i.y));
					},
					destroy: function () {
						var t = this.element,
							i = this.style;
						t.parentNode &&
							(t.parentNode.removeChild(t),
							t.prevElementParent && ((i.display = 'none'), document.body.appendChild(t))),
							(this.onDraw = null),
							(i.top = ''),
							(i.left = ''),
							(i.position = ''),
							this.width !== null && (i.width = ''),
							this.height !== null && (i.height = '');
						var o = e.getCssPropertyWithVendorPrefix('transformOrigin'),
							h = e.getCssPropertyWithVendorPrefix('transform');
						o && h && ((i[o] = ''), (i[h] = ''));
					},
					drawHTML: function (t, i) {
						var o = this.element;
						o.parentNode !== t &&
							((o.prevElementParent = o.parentNode),
							(o.prevNextSibling = o.nextSibling),
							t.appendChild(o),
							(this.style.position = 'absolute'),
							(this.size = e.getElementSize(o)));
						var h = this._getOverlayPositionAndSize(i),
							n = h.position,
							r = (this.size = h.size),
							s = h.rotate;
						if (this.onDraw) this.onDraw(n, r, this.element);
						else {
							var l = this.style;
							(l.left = n.x + 'px'),
								(l.top = n.y + 'px'),
								this.width !== null && (l.width = r.x + 'px'),
								this.height !== null && (l.height = r.y + 'px');
							var d = e.getCssPropertyWithVendorPrefix('transformOrigin'),
								f = e.getCssPropertyWithVendorPrefix('transform');
							d &&
								f &&
								(s
									? ((l[d] = this._getTransformOrigin()), (l[f] = 'rotate(' + s + 'deg)'))
									: ((l[d] = ''), (l[f] = ''))),
								(l.display = 'block');
						}
					},
					_getOverlayPositionAndSize: function (t) {
						var i = t.pixelFromPoint(this.location, !0),
							o = this._getSizeInPixels(t);
						this.adjust(i, o);
						var h = 0;
						if (t.getRotation(!0) && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION)
							if (
								this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX &&
								this.width !== null &&
								this.height !== null
							) {
								var n = new e.Rect(i.x, i.y, o.x, o.y),
									r = this._getBoundingBox(n, t.getRotation(!0));
								(i = r.getTopLeft()), (o = r.getSize());
							} else h = t.getRotation(!0);
						return { position: i, size: o, rotate: h };
					},
					_getSizeInPixels: function (t) {
						var i = this.size.x,
							o = this.size.y;
						if (this.width !== null || this.height !== null) {
							var h = t.deltaPixelsFromPointsNoRotate(
								new e.Point(this.width || 0, this.height || 0),
								!0
							);
							this.width !== null && (i = h.x), this.height !== null && (o = h.y);
						}
						if (this.checkResize && (this.width === null || this.height === null)) {
							var n = (this.size = e.getElementSize(this.element));
							this.width === null && (i = n.x), this.height === null && (o = n.y);
						}
						return new e.Point(i, o);
					},
					_getBoundingBox: function (t, i) {
						var o = this._getPlacementPoint(t);
						return t.rotate(i, o).getBoundingBox();
					},
					_getPlacementPoint: function (t) {
						var i = new e.Point(t.x, t.y),
							o = e.Placement.properties[this.placement];
						return (
							o &&
								(o.isHorizontallyCentered ? (i.x += t.width / 2) : o.isRight && (i.x += t.width),
								o.isVerticallyCentered ? (i.y += t.height / 2) : o.isBottom && (i.y += t.height)),
							i
						);
					},
					_getTransformOrigin: function () {
						var t = '',
							i = e.Placement.properties[this.placement];
						return (
							i &&
								(i.isLeft ? (t = 'left') : i.isRight && (t = 'right'),
								i.isTop ? (t += ' top') : i.isBottom && (t += ' bottom')),
							t
						);
					},
					update: function (t, i) {
						var o = e.isPlainObject(t) ? t : { location: t, placement: i };
						this._init({
							location: o.location || this.location,
							placement: o.placement !== void 0 ? o.placement : this.placement,
							onDraw: o.onDraw || this.onDraw,
							checkResize: o.checkResize || this.checkResize,
							width: o.width !== void 0 ? o.width : this.width,
							height: o.height !== void 0 ? o.height : this.height,
							rotationMode: o.rotationMode || this.rotationMode
						});
					},
					getBounds: function (t) {
						e.console.assert(t, 'A viewport must now be passed to Overlay.getBounds.');
						var i = this.width,
							o = this.height;
						if (i === null || o === null) {
							var h = t.deltaPointsFromPixelsNoRotate(this.size, !0);
							i === null && (i = h.x), o === null && (o = h.y);
						}
						var n = this.location.clone();
						return (
							this.adjust(n, new e.Point(i, o)),
							this._adjustBoundsForRotation(t, new e.Rect(n.x, n.y, i, o))
						);
					},
					_adjustBoundsForRotation: function (t, i) {
						if (!t || t.getRotation(!0) === 0 || this.rotationMode === e.OverlayRotationMode.EXACT)
							return i;
						if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
							if (this.width === null || this.height === null) return i;
							var o = this._getOverlayPositionAndSize(t);
							return t.viewerElementToViewportRectangle(
								new e.Rect(o.position.x, o.position.y, o.size.x, o.size.y)
							);
						}
						return i.rotate(-t.getRotation(!0), this._getPlacementPoint(i));
					}
				});
		})(O),
		(function (e) {
			(e.Drawer = function (t) {
				e.console.assert(t.viewer, '[Drawer] options.viewer is required');
				var i = arguments;
				if (
					(e.isPlainObject(t) || (t = { source: i[0], viewport: i[1], element: i[2] }),
					e.console.assert(t.viewport, '[Drawer] options.viewport is required'),
					e.console.assert(t.element, '[Drawer] options.element is required'),
					t.source &&
						e.console.error(
							'[Drawer] options.source is no longer accepted; use TiledImage instead'
						),
					(this.viewer = t.viewer),
					(this.viewport = t.viewport),
					(this.debugGridColor =
						typeof t.debugGridColor == 'string'
							? [t.debugGridColor]
							: t.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor),
					t.opacity &&
						e.console.error(
							'[Drawer] options.opacity is no longer accepted; set the opacity on the TiledImage instead'
						),
					(this.useCanvas = e.supportsCanvas && (this.viewer ? this.viewer.useCanvas : !0)),
					(this.container = e.getElement(t.element)),
					(this.canvas = e.makeNeutralElement(this.useCanvas ? 'canvas' : 'div')),
					(this.context = this.useCanvas ? this.canvas.getContext('2d') : null),
					(this.sketchCanvas = null),
					(this.sketchContext = null),
					(this.element = this.container),
					(this.container.dir = 'ltr'),
					this.useCanvas)
				) {
					var o = this._calculateCanvasSize();
					(this.canvas.width = o.x), (this.canvas.height = o.y);
				}
				(this.canvas.style.width = '100%'),
					(this.canvas.style.height = '100%'),
					(this.canvas.style.position = 'absolute'),
					e.setElementOpacity(this.canvas, this.opacity, !0),
					e.setElementPointerEventsNone(this.canvas),
					e.setElementTouchActionNone(this.canvas),
					(this.container.style.textAlign = 'left'),
					this.container.appendChild(this.canvas),
					(this._imageSmoothingEnabled = !0);
			}),
				(e.Drawer.prototype = {
					addOverlay: function (t, i, o, h) {
						return (
							e.console.error('drawer.addOverlay is deprecated. Use viewer.addOverlay instead.'),
							this.viewer.addOverlay(t, i, o, h),
							this
						);
					},
					updateOverlay: function (t, i, o) {
						return (
							e.console.error(
								'drawer.updateOverlay is deprecated. Use viewer.updateOverlay instead.'
							),
							this.viewer.updateOverlay(t, i, o),
							this
						);
					},
					removeOverlay: function (t) {
						return (
							e.console.error(
								'drawer.removeOverlay is deprecated. Use viewer.removeOverlay instead.'
							),
							this.viewer.removeOverlay(t),
							this
						);
					},
					clearOverlays: function () {
						return (
							e.console.error(
								'drawer.clearOverlays is deprecated. Use viewer.clearOverlays instead.'
							),
							this.viewer.clearOverlays(),
							this
						);
					},
					viewportCoordToDrawerCoord: function (t) {
						var i = this.viewport.pixelFromPointNoRotate(t, !0);
						return new e.Point(i.x * e.pixelDensityRatio, i.y * e.pixelDensityRatio);
					},
					clipWithPolygons: function (t, i) {
						if (this.useCanvas) {
							var o = this._getContext(i);
							o.beginPath(),
								t.forEach(function (h) {
									h.forEach(function (n, r) {
										o[r === 0 ? 'moveTo' : 'lineTo'](n.x, n.y);
									});
								}),
								o.clip();
						}
					},
					setOpacity: function (t) {
						e.console.error('drawer.setOpacity is deprecated. Use tiledImage.setOpacity instead.');
						for (var i = this.viewer.world, o = 0; o < i.getItemCount(); o++)
							i.getItemAt(o).setOpacity(t);
						return this;
					},
					getOpacity: function () {
						e.console.error('drawer.getOpacity is deprecated. Use tiledImage.getOpacity instead.');
						for (var t = this.viewer.world, i = 0, o = 0; o < t.getItemCount(); o++) {
							var h = t.getItemAt(o).getOpacity();
							h > i && (i = h);
						}
						return i;
					},
					needsUpdate: function () {
						return (
							e.console.error(
								'[Drawer.needsUpdate] this function is deprecated. Use World.needsDraw instead.'
							),
							this.viewer.world.needsDraw()
						);
					},
					numTilesLoaded: function () {
						return (
							e.console.error(
								'[Drawer.numTilesLoaded] this function is deprecated. Use TileCache.numTilesLoaded instead.'
							),
							this.viewer.tileCache.numTilesLoaded()
						);
					},
					reset: function () {
						return (
							e.console.error(
								'[Drawer.reset] this function is deprecated. Use World.resetItems instead.'
							),
							this.viewer.world.resetItems(),
							this
						);
					},
					update: function () {
						return (
							e.console.error(
								'[Drawer.update] this function is deprecated. Use Drawer.clear and World.draw instead.'
							),
							this.clear(),
							this.viewer.world.draw(),
							this
						);
					},
					canRotate: function () {
						return this.useCanvas;
					},
					destroy: function () {
						(this.canvas.width = 1),
							(this.canvas.height = 1),
							(this.sketchCanvas = null),
							(this.sketchContext = null);
					},
					clear: function () {
						if (((this.canvas.innerHTML = ''), this.useCanvas)) {
							var t = this._calculateCanvasSize();
							if (
								(this.canvas.width !== t.x || this.canvas.height !== t.y) &&
								((this.canvas.width = t.x),
								(this.canvas.height = t.y),
								this._updateImageSmoothingEnabled(this.context),
								this.sketchCanvas !== null)
							) {
								var i = this._calculateSketchCanvasSize();
								(this.sketchCanvas.width = i.x),
									(this.sketchCanvas.height = i.y),
									this._updateImageSmoothingEnabled(this.sketchContext);
							}
							this._clear();
						}
					},
					_clear: function (t, i) {
						if (this.useCanvas) {
							var o = this._getContext(t);
							if (i) o.clearRect(i.x, i.y, i.width, i.height);
							else {
								var h = o.canvas;
								o.clearRect(0, 0, h.width, h.height);
							}
						}
					},
					viewportToDrawerRectangle: function (t) {
						var i = this.viewport.pixelFromPointNoRotate(t.getTopLeft(), !0),
							o = this.viewport.deltaPixelsFromPointsNoRotate(t.getSize(), !0);
						return new e.Rect(
							i.x * e.pixelDensityRatio,
							i.y * e.pixelDensityRatio,
							o.x * e.pixelDensityRatio,
							o.y * e.pixelDensityRatio
						);
					},
					drawTile: function (t, i, o, h, n, r, s) {
						if (
							(e.console.assert(t, '[Drawer.drawTile] tile is required'),
							e.console.assert(i, '[Drawer.drawTile] drawingHandler is required'),
							this.useCanvas)
						) {
							var l = this._getContext(o);
							(h = h || 1), t.drawCanvas(l, i, h, n, r, s);
						} else t.drawHTML(this.canvas);
					},
					_getContext: function (t) {
						var i = this.context;
						if (t) {
							if (this.sketchCanvas === null) {
								this.sketchCanvas = document.createElement('canvas');
								var o = this._calculateSketchCanvasSize();
								if (
									((this.sketchCanvas.width = o.x),
									(this.sketchCanvas.height = o.y),
									(this.sketchContext = this.sketchCanvas.getContext('2d')),
									this.viewport.getRotation() === 0)
								) {
									var h = this;
									this.viewer.addHandler('rotate', function n() {
										if (h.viewport.getRotation() !== 0) {
											h.viewer.removeHandler('rotate', n);
											var r = h._calculateSketchCanvasSize();
											(h.sketchCanvas.width = r.x), (h.sketchCanvas.height = r.y);
										}
									});
								}
								this._updateImageSmoothingEnabled(this.sketchContext);
							}
							i = this.sketchContext;
						}
						return i;
					},
					saveContext: function (t) {
						this.useCanvas && this._getContext(t).save();
					},
					restoreContext: function (t) {
						this.useCanvas && this._getContext(t).restore();
					},
					setClip: function (t, i) {
						if (this.useCanvas) {
							var o = this._getContext(i);
							o.beginPath(), o.rect(t.x, t.y, t.width, t.height), o.clip();
						}
					},
					drawRectangle: function (t, i, o) {
						if (this.useCanvas) {
							var h = this._getContext(o);
							h.save(), (h.fillStyle = i), h.fillRect(t.x, t.y, t.width, t.height), h.restore();
						}
					},
					blendSketch: function (t, i, o, h) {
						var n = t;
						if (
							(e.isPlainObject(n) ||
								(n = { opacity: t, scale: i, translate: o, compositeOperation: h }),
							!(!this.useCanvas || !this.sketchCanvas))
						) {
							(t = n.opacity), (h = n.compositeOperation);
							var r = n.bounds;
							if (
								(this.context.save(),
								(this.context.globalAlpha = t),
								h && (this.context.globalCompositeOperation = h),
								r)
							)
								r.x < 0 && ((r.width += r.x), (r.x = 0)),
									r.x + r.width > this.canvas.width && (r.width = this.canvas.width - r.x),
									r.y < 0 && ((r.height += r.y), (r.y = 0)),
									r.y + r.height > this.canvas.height && (r.height = this.canvas.height - r.y),
									this.context.drawImage(
										this.sketchCanvas,
										r.x,
										r.y,
										r.width,
										r.height,
										r.x,
										r.y,
										r.width,
										r.height
									);
							else {
								(i = n.scale || 1), (o = n.translate);
								var s = o instanceof e.Point ? o : new e.Point(0, 0),
									l = 0,
									d = 0;
								if (o) {
									var f = this.sketchCanvas.width - this.canvas.width,
										y = this.sketchCanvas.height - this.canvas.height;
									(l = Math.round(f / 2)), (d = Math.round(y / 2));
								}
								this.context.drawImage(
									this.sketchCanvas,
									s.x - l * i,
									s.y - d * i,
									(this.canvas.width + 2 * l) * i,
									(this.canvas.height + 2 * d) * i,
									-l,
									-d,
									this.canvas.width + 2 * l,
									this.canvas.height + 2 * d
								);
							}
							this.context.restore();
						}
					},
					drawDebugInfo: function (t, i, o, h) {
						if (this.useCanvas) {
							var n = this.viewer.world.getIndexOfItem(h) % this.debugGridColor.length,
								r = this.context;
							r.save(),
								(r.lineWidth = 2 * e.pixelDensityRatio),
								(r.font = 'small-caps bold ' + 13 * e.pixelDensityRatio + 'px arial'),
								(r.strokeStyle = this.debugGridColor[n]),
								(r.fillStyle = this.debugGridColor[n]),
								this.viewport.getRotation(!0) % 360 !== 0 &&
									this._offsetForRotation({ degrees: this.viewport.getRotation(!0) }),
								h.getRotation(!0) % 360 !== 0 &&
									this._offsetForRotation({
										degrees: h.getRotation(!0),
										point: h.viewport.pixelFromPointNoRotate(h._getRotationPoint(!0), !0)
									}),
								h.viewport.getRotation(!0) % 360 === 0 &&
									h.getRotation(!0) % 360 === 0 &&
									h._drawer.viewer.viewport.getFlip() &&
									h._drawer._flip(),
								r.strokeRect(
									t.position.x * e.pixelDensityRatio,
									t.position.y * e.pixelDensityRatio,
									t.size.x * e.pixelDensityRatio,
									t.size.y * e.pixelDensityRatio
								);
							var s = (t.position.x + t.size.x / 2) * e.pixelDensityRatio,
								l = (t.position.y + t.size.y / 2) * e.pixelDensityRatio;
							r.translate(s, l),
								r.rotate((Math.PI / 180) * -this.viewport.getRotation(!0)),
								r.translate(-s, -l),
								t.x === 0 &&
									t.y === 0 &&
									(r.fillText(
										'Zoom: ' + this.viewport.getZoom(),
										t.position.x * e.pixelDensityRatio,
										(t.position.y - 30) * e.pixelDensityRatio
									),
									r.fillText(
										'Pan: ' + this.viewport.getBounds().toString(),
										t.position.x * e.pixelDensityRatio,
										(t.position.y - 20) * e.pixelDensityRatio
									)),
								r.fillText(
									'Level: ' + t.level,
									(t.position.x + 10) * e.pixelDensityRatio,
									(t.position.y + 20) * e.pixelDensityRatio
								),
								r.fillText(
									'Column: ' + t.x,
									(t.position.x + 10) * e.pixelDensityRatio,
									(t.position.y + 30) * e.pixelDensityRatio
								),
								r.fillText(
									'Row: ' + t.y,
									(t.position.x + 10) * e.pixelDensityRatio,
									(t.position.y + 40) * e.pixelDensityRatio
								),
								r.fillText(
									'Order: ' + o + ' of ' + i,
									(t.position.x + 10) * e.pixelDensityRatio,
									(t.position.y + 50) * e.pixelDensityRatio
								),
								r.fillText(
									'Size: ' + t.size.toString(),
									(t.position.x + 10) * e.pixelDensityRatio,
									(t.position.y + 60) * e.pixelDensityRatio
								),
								r.fillText(
									'Position: ' + t.position.toString(),
									(t.position.x + 10) * e.pixelDensityRatio,
									(t.position.y + 70) * e.pixelDensityRatio
								),
								this.viewport.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(),
								h.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(),
								h.viewport.getRotation(!0) % 360 === 0 &&
									h.getRotation(!0) % 360 === 0 &&
									h._drawer.viewer.viewport.getFlip() &&
									h._drawer._flip(),
								r.restore();
						}
					},
					debugRect: function (t) {
						if (this.useCanvas) {
							var i = this.context;
							i.save(),
								(i.lineWidth = 2 * e.pixelDensityRatio),
								(i.strokeStyle = this.debugGridColor[0]),
								(i.fillStyle = this.debugGridColor[0]),
								i.strokeRect(
									t.x * e.pixelDensityRatio,
									t.y * e.pixelDensityRatio,
									t.width * e.pixelDensityRatio,
									t.height * e.pixelDensityRatio
								),
								i.restore();
						}
					},
					setImageSmoothingEnabled: function (t) {
						this.useCanvas &&
							((this._imageSmoothingEnabled = t),
							this._updateImageSmoothingEnabled(this.context),
							this.viewer.forceRedraw());
					},
					_updateImageSmoothingEnabled: function (t) {
						(t.msImageSmoothingEnabled = this._imageSmoothingEnabled),
							(t.imageSmoothingEnabled = this._imageSmoothingEnabled);
					},
					getCanvasSize: function (t) {
						var i = this._getContext(t).canvas;
						return new e.Point(i.width, i.height);
					},
					getCanvasCenter: function () {
						return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
					},
					_offsetForRotation: function (t) {
						var i = t.point ? t.point.times(e.pixelDensityRatio) : this.getCanvasCenter(),
							o = this._getContext(t.useSketch);
						o.save(),
							o.translate(i.x, i.y),
							this.viewer.viewport.flipped
								? (o.rotate((Math.PI / 180) * -t.degrees), o.scale(-1, 1))
								: o.rotate((Math.PI / 180) * t.degrees),
							o.translate(-i.x, -i.y);
					},
					_flip: function (t) {
						t = t || {};
						var i = t.point ? t.point.times(e.pixelDensityRatio) : this.getCanvasCenter(),
							o = this._getContext(t.useSketch);
						o.translate(i.x, 0), o.scale(-1, 1), o.translate(-i.x, 0);
					},
					_restoreRotationChanges: function (t) {
						var i = this._getContext(t);
						i.restore();
					},
					_calculateCanvasSize: function () {
						var t = e.pixelDensityRatio,
							i = this.viewport.getContainerSize();
						return { x: Math.round(i.x * t), y: Math.round(i.y * t) };
					},
					_calculateSketchCanvasSize: function () {
						var t = this._calculateCanvasSize();
						if (this.viewport.getRotation() === 0) return t;
						var i = Math.ceil(Math.sqrt(t.x * t.x + t.y * t.y));
						return { x: i, y: i };
					}
				});
		})(O),
		(function (e) {
			(e.Viewport = function (t) {
				var i = arguments;
				i.length &&
					i[0] instanceof e.Point &&
					(t = { containerSize: i[0], contentSize: i[1], config: i[2] }),
					t.config && (e.extend(!0, t, t.config), delete t.config),
					(this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, t.margins || {})),
					delete t.margins,
					(t.initialDegrees = t.degrees),
					delete t.degrees,
					e.extend(
						!0,
						this,
						{
							containerSize: null,
							contentSize: null,
							zoomPoint: null,
							rotationPivot: null,
							viewer: null,
							springStiffness: e.DEFAULT_SETTINGS.springStiffness,
							animationTime: e.DEFAULT_SETTINGS.animationTime,
							minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
							maxZoomPixelRatio: e.DEFAULT_SETTINGS.maxZoomPixelRatio,
							visibilityRatio: e.DEFAULT_SETTINGS.visibilityRatio,
							wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
							wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
							defaultZoomLevel: e.DEFAULT_SETTINGS.defaultZoomLevel,
							minZoomLevel: e.DEFAULT_SETTINGS.minZoomLevel,
							maxZoomLevel: e.DEFAULT_SETTINGS.maxZoomLevel,
							initialDegrees: e.DEFAULT_SETTINGS.degrees,
							flipped: e.DEFAULT_SETTINGS.flipped,
							homeFillsViewer: e.DEFAULT_SETTINGS.homeFillsViewer,
							silenceMultiImageWarnings: e.DEFAULT_SETTINGS.silenceMultiImageWarnings
						},
						t
					),
					this._updateContainerInnerSize(),
					(this.centerSpringX = new e.Spring({
						initial: 0,
						springStiffness: this.springStiffness,
						animationTime: this.animationTime
					})),
					(this.centerSpringY = new e.Spring({
						initial: 0,
						springStiffness: this.springStiffness,
						animationTime: this.animationTime
					})),
					(this.zoomSpring = new e.Spring({
						exponential: !0,
						initial: 1,
						springStiffness: this.springStiffness,
						animationTime: this.animationTime
					})),
					(this.degreesSpring = new e.Spring({
						initial: t.initialDegrees,
						springStiffness: this.springStiffness,
						animationTime: this.animationTime
					})),
					(this._oldCenterX = this.centerSpringX.current.value),
					(this._oldCenterY = this.centerSpringY.current.value),
					(this._oldZoom = this.zoomSpring.current.value),
					(this._oldDegrees = this.degreesSpring.current.value),
					this._setContentBounds(new e.Rect(0, 0, 1, 1), 1),
					this.goHome(!0),
					this.update();
			}),
				(e.Viewport.prototype = {
					get degrees() {
						return (
							e.console.warn(
								'Accessing [Viewport.degrees] is deprecated. Use viewport.getRotation instead.'
							),
							this.getRotation()
						);
					},
					set degrees(t) {
						e.console.warn(
							'Setting [Viewport.degrees] is deprecated. Use viewport.rotateTo, viewport.rotateBy, or viewport.setRotation instead.'
						),
							this.rotateTo(t);
					},
					resetContentSize: function (t) {
						return (
							e.console.assert(t, '[Viewport.resetContentSize] contentSize is required'),
							e.console.assert(
								t instanceof e.Point,
								'[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point'
							),
							e.console.assert(
								t.x > 0,
								'[Viewport.resetContentSize] contentSize.x must be greater than 0'
							),
							e.console.assert(
								t.y > 0,
								'[Viewport.resetContentSize] contentSize.y must be greater than 0'
							),
							this._setContentBounds(new e.Rect(0, 0, 1, t.y / t.x), t.x),
							this
						);
					},
					setHomeBounds: function (t, i) {
						e.console.error(
							'[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually.'
						),
							this._setContentBounds(t, i);
					},
					_setContentBounds: function (t, i) {
						e.console.assert(t, '[Viewport._setContentBounds] bounds is required'),
							e.console.assert(
								t instanceof e.Rect,
								'[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect'
							),
							e.console.assert(
								t.width > 0,
								'[Viewport._setContentBounds] bounds.width must be greater than 0'
							),
							e.console.assert(
								t.height > 0,
								'[Viewport._setContentBounds] bounds.height must be greater than 0'
							),
							(this._contentBoundsNoRotate = t.clone()),
							(this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(i)),
							(this._contentBounds = t.rotate(this.getRotation()).getBoundingBox()),
							(this._contentSize = this._contentBounds.getSize().times(i)),
							(this._contentAspectRatio = this._contentSize.x / this._contentSize.y),
							this.viewer &&
								this.viewer.raiseEvent('reset-size', {
									contentSize: this._contentSizeNoRotate.clone(),
									contentFactor: i,
									homeBounds: this._contentBoundsNoRotate.clone(),
									contentBounds: this._contentBounds.clone()
								});
					},
					getHomeZoom: function () {
						if (this.defaultZoomLevel) return this.defaultZoomLevel;
						var t = this._contentAspectRatio / this.getAspectRatio(),
							i;
						return (
							this.homeFillsViewer ? (i = t >= 1 ? t : 1) : (i = t >= 1 ? 1 : t),
							i / this._contentBounds.width
						);
					},
					getHomeBounds: function () {
						return this.getHomeBoundsNoRotate().rotate(-this.getRotation());
					},
					getHomeBoundsNoRotate: function () {
						var t = this._contentBounds.getCenter(),
							i = 1 / this.getHomeZoom(),
							o = i / this.getAspectRatio();
						return new e.Rect(t.x - i / 2, t.y - o / 2, i, o);
					},
					goHome: function (t) {
						return (
							this.viewer && this.viewer.raiseEvent('home', { immediately: t }),
							this.fitBounds(this.getHomeBounds(), t)
						);
					},
					getMinZoom: function () {
						var t = this.getHomeZoom(),
							i = this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * t;
						return i;
					},
					getMaxZoom: function () {
						var t = this.maxZoomLevel;
						return (
							t ||
								((t = (this._contentSize.x * this.maxZoomPixelRatio) / this._containerInnerSize.x),
								(t /= this._contentBounds.width)),
							Math.max(t, this.getHomeZoom())
						);
					},
					getAspectRatio: function () {
						return this._containerInnerSize.x / this._containerInnerSize.y;
					},
					getContainerSize: function () {
						return new e.Point(this.containerSize.x, this.containerSize.y);
					},
					getMargins: function () {
						return e.extend({}, this._margins);
					},
					setMargins: function (t) {
						e.console.assert(
							e.type(t) === 'object',
							'[Viewport.setMargins] margins must be an object'
						),
							(this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, t)),
							this._updateContainerInnerSize(),
							this.viewer && this.viewer.forceRedraw();
					},
					getBounds: function (t) {
						return this.getBoundsNoRotate(t).rotate(-this.getRotation(t));
					},
					getBoundsNoRotate: function (t) {
						var i = this.getCenter(t),
							o = 1 / this.getZoom(t),
							h = o / this.getAspectRatio();
						return new e.Rect(i.x - o / 2, i.y - h / 2, o, h);
					},
					getBoundsWithMargins: function (t) {
						return this.getBoundsNoRotateWithMargins(t).rotate(
							-this.getRotation(t),
							this.getCenter(t)
						);
					},
					getBoundsNoRotateWithMargins: function (t) {
						var i = this.getBoundsNoRotate(t),
							o = this._containerInnerSize.x * this.getZoom(t);
						return (
							(i.x -= this._margins.left / o),
							(i.y -= this._margins.top / o),
							(i.width += (this._margins.left + this._margins.right) / o),
							(i.height += (this._margins.top + this._margins.bottom) / o),
							i
						);
					},
					getCenter: function (t) {
						var i = new e.Point(this.centerSpringX.current.value, this.centerSpringY.current.value),
							o = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value),
							h,
							n,
							r,
							s,
							l,
							d,
							f,
							y;
						return t
							? i
							: this.zoomPoint
							? ((h = this.pixelFromPoint(this.zoomPoint, !0)),
							  (n = this.getZoom()),
							  (r = 1 / n),
							  (s = r / this.getAspectRatio()),
							  (l = new e.Rect(i.x - r / 2, i.y - s / 2, r, s)),
							  (d = this._pixelFromPoint(this.zoomPoint, l)),
							  (f = d.minus(h).rotate(-this.getRotation(!0))),
							  (y = f.divide(this._containerInnerSize.x * n)),
							  o.plus(y))
							: o;
					},
					getZoom: function (t) {
						return t ? this.zoomSpring.current.value : this.zoomSpring.target.value;
					},
					_applyZoomConstraints: function (t) {
						return Math.max(Math.min(t, this.getMaxZoom()), this.getMinZoom());
					},
					_applyBoundaryConstraints: function (t) {
						var i = this.viewportToViewerElementRectangle(t).getBoundingBox(),
							o = this.viewportToViewerElementRectangle(
								this._contentBoundsNoRotate
							).getBoundingBox(),
							h = !1,
							n = !1;
						if (!this.wrapHorizontal) {
							var r = i.x + i.width,
								s = o.x + o.width,
								l,
								d,
								f;
							i.width > o.width
								? (l = this.visibilityRatio * o.width)
								: (l = this.visibilityRatio * i.width),
								(d = o.x - r + l),
								(f = s - i.x - l),
								l > o.width
									? ((i.x += (d + f) / 2), (h = !0))
									: f < 0
									? ((i.x += f), (h = !0))
									: d > 0 && ((i.x += d), (h = !0));
						}
						if (!this.wrapVertical) {
							var y = i.y + i.height,
								v = o.y + o.height,
								T,
								w,
								x;
							i.height > o.height
								? (T = this.visibilityRatio * o.height)
								: (T = this.visibilityRatio * i.height),
								(w = o.y - y + T),
								(x = v - i.y - T),
								T > o.height
									? ((i.y += (w + x) / 2), (n = !0))
									: x < 0
									? ((i.y += x), (n = !0))
									: w > 0 && ((i.y += w), (n = !0));
						}
						var _ = h || n,
							b = _ ? this.viewerElementToViewportRectangle(i) : t.clone();
						return (b.xConstrained = h), (b.yConstrained = n), (b.constraintApplied = _), b;
					},
					_raiseConstraintsEvent: function (t) {
						this.viewer && this.viewer.raiseEvent('constrain', { immediately: t });
					},
					applyConstraints: function (t) {
						var i = this.getZoom(),
							o = this._applyZoomConstraints(i);
						i !== o && this.zoomTo(o, this.zoomPoint, t);
						var h = this.getConstrainedBounds(!1);
						return (
							h.constraintApplied && (this.fitBounds(h, t), this._raiseConstraintsEvent(t)), this
						);
					},
					ensureVisible: function (t) {
						return this.applyConstraints(t);
					},
					_fitBounds: function (t, i) {
						i = i || {};
						var o = i.immediately || !1,
							h = i.constraints || !1,
							n = this.getAspectRatio(),
							r = t.getCenter(),
							s = new e.Rect(
								t.x,
								t.y,
								t.width,
								t.height,
								t.degrees + this.getRotation()
							).getBoundingBox();
						s.getAspectRatio() >= n ? (s.height = s.width / n) : (s.width = s.height * n),
							(s.x = r.x - s.width / 2),
							(s.y = r.y - s.height / 2);
						var l = 1 / s.width;
						if (o)
							return (
								this.panTo(r, !0), this.zoomTo(l, null, !0), h && this.applyConstraints(!0), this
							);
						var d = this.getCenter(!0),
							f = this.getZoom(!0);
						this.panTo(d, !0), this.zoomTo(f, null, !0);
						var y = this.getBounds(),
							v = this.getZoom();
						if (v === 0 || Math.abs(l / v - 1) < 1e-8)
							return (
								this.zoomTo(l, null, !0), this.panTo(r, o), h && this.applyConstraints(!1), this
							);
						if (h) {
							this.panTo(r, !1), this.zoomTo(l, null, !1);
							var T = this.getConstrainedBounds();
							this.panTo(d, !0), this.zoomTo(f, null, !0), this.fitBounds(T);
						} else {
							var w = s.rotate(-this.getRotation()),
								x = w
									.getTopLeft()
									.times(l)
									.minus(y.getTopLeft().times(v))
									.divide(l - v);
							this.zoomTo(l, x, o);
						}
						return this;
					},
					fitBounds: function (t, i) {
						return this._fitBounds(t, { immediately: i, constraints: !1 });
					},
					fitBoundsWithConstraints: function (t, i) {
						return this._fitBounds(t, { immediately: i, constraints: !0 });
					},
					fitVertically: function (t) {
						var i = new e.Rect(
							this._contentBounds.x + this._contentBounds.width / 2,
							this._contentBounds.y,
							0,
							this._contentBounds.height
						);
						return this.fitBounds(i, t);
					},
					fitHorizontally: function (t) {
						var i = new e.Rect(
							this._contentBounds.x,
							this._contentBounds.y + this._contentBounds.height / 2,
							this._contentBounds.width,
							0
						);
						return this.fitBounds(i, t);
					},
					getConstrainedBounds: function (t) {
						var i, o;
						return (i = this.getBounds(t)), (o = this._applyBoundaryConstraints(i)), o;
					},
					panBy: function (t, i) {
						var o = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value);
						return this.panTo(o.plus(t), i);
					},
					panTo: function (t, i) {
						return (
							i
								? (this.centerSpringX.resetTo(t.x), this.centerSpringY.resetTo(t.y))
								: (this.centerSpringX.springTo(t.x), this.centerSpringY.springTo(t.y)),
							this.viewer && this.viewer.raiseEvent('pan', { center: t, immediately: i }),
							this
						);
					},
					zoomBy: function (t, i, o) {
						return this.zoomTo(this.zoomSpring.target.value * t, i, o);
					},
					zoomTo: function (t, i, o) {
						var h = this;
						return (
							(this.zoomPoint = i instanceof e.Point && !isNaN(i.x) && !isNaN(i.y) ? i : null),
							o
								? this._adjustCenterSpringsForZoomPoint(function () {
										h.zoomSpring.resetTo(t);
								  })
								: this.zoomSpring.springTo(t),
							this.viewer &&
								this.viewer.raiseEvent('zoom', { zoom: t, refPoint: i, immediately: o }),
							this
						);
					},
					setRotation: function (t, i) {
						return this.rotateTo(t, null, i);
					},
					getRotation: function (t) {
						return t ? this.degreesSpring.current.value : this.degreesSpring.target.value;
					},
					setRotationWithPivot: function (t, i, o) {
						return this.rotateTo(t, i, o);
					},
					rotateTo: function (t, i, o) {
						if (!this.viewer || !this.viewer.drawer.canRotate()) return this;
						if (this.degreesSpring.target.value === t && this.degreesSpring.isAtTargetValue())
							return this;
						if (
							((this.rotationPivot = i instanceof e.Point && !isNaN(i.x) && !isNaN(i.y) ? i : null),
							o)
						)
							if (this.rotationPivot) {
								var h = t - this._oldDegrees;
								if (!h) return (this.rotationPivot = null), this;
								this._rotateAboutPivot(t);
							} else this.degreesSpring.resetTo(t);
						else {
							var n = e.positiveModulo(this.degreesSpring.current.value, 360),
								r = e.positiveModulo(t, 360),
								s = r - n;
							s > 180 ? (r -= 360) : s < -180 && (r += 360);
							var l = n - r;
							this.degreesSpring.resetTo(t + l), this.degreesSpring.springTo(t);
						}
						return (
							this._setContentBounds(
								this.viewer.world.getHomeBounds(),
								this.viewer.world.getContentFactor()
							),
							this.viewer.forceRedraw(),
							this.viewer.raiseEvent('rotate', {
								degrees: t,
								immediately: !!o,
								pivot: this.rotationPivot || this.getCenter()
							}),
							this
						);
					},
					rotateBy: function (t, i, o) {
						return this.rotateTo(this.degreesSpring.target.value + t, i, o);
					},
					resize: function (t, i) {
						var o = this.getBoundsNoRotate(),
							h = o,
							n;
						return (
							(this.containerSize.x = t.x),
							(this.containerSize.y = t.y),
							this._updateContainerInnerSize(),
							i &&
								((n = t.x / this.containerSize.x),
								(h.width = o.width * n),
								(h.height = h.width / this.getAspectRatio())),
							this.viewer && this.viewer.raiseEvent('resize', { newContainerSize: t, maintain: i }),
							this.fitBounds(h, !0)
						);
					},
					_updateContainerInnerSize: function () {
						this._containerInnerSize = new e.Point(
							Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)),
							Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom))
						);
					},
					update: function () {
						var t = this;
						this._adjustCenterSpringsForZoomPoint(function () {
							t.zoomSpring.update();
						}),
							this.degreesSpring.isAtTargetValue() && (this.rotationPivot = null),
							this.centerSpringX.update(),
							this.centerSpringY.update(),
							this.rotationPivot ? this._rotateAboutPivot(!0) : this.degreesSpring.update();
						var i =
							this.centerSpringX.current.value !== this._oldCenterX ||
							this.centerSpringY.current.value !== this._oldCenterY ||
							this.zoomSpring.current.value !== this._oldZoom ||
							this.degreesSpring.current.value !== this._oldDegrees;
						return (
							(this._oldCenterX = this.centerSpringX.current.value),
							(this._oldCenterY = this.centerSpringY.current.value),
							(this._oldZoom = this.zoomSpring.current.value),
							(this._oldDegrees = this.degreesSpring.current.value),
							i
						);
					},
					_rotateAboutPivot: function (t) {
						var i = t === !0,
							o = this.rotationPivot.minus(this.getCenter());
						this.centerSpringX.shiftBy(o.x),
							this.centerSpringY.shiftBy(o.y),
							i ? this.degreesSpring.update() : this.degreesSpring.resetTo(t);
						var h = this.degreesSpring.current.value - this._oldDegrees,
							n = o.rotate(h * -1).times(-1);
						this.centerSpringX.shiftBy(n.x), this.centerSpringY.shiftBy(n.y);
					},
					_adjustCenterSpringsForZoomPoint: function (t) {
						if (this.zoomPoint) {
							var i = this.pixelFromPoint(this.zoomPoint, !0);
							t();
							var o = this.pixelFromPoint(this.zoomPoint, !0),
								h = o.minus(i),
								n = this.deltaPointsFromPixels(h, !0);
							this.centerSpringX.shiftBy(n.x),
								this.centerSpringY.shiftBy(n.y),
								this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null);
						} else t();
					},
					deltaPixelsFromPointsNoRotate: function (t, i) {
						return t.times(this._containerInnerSize.x * this.getZoom(i));
					},
					deltaPixelsFromPoints: function (t, i) {
						return this.deltaPixelsFromPointsNoRotate(t.rotate(this.getRotation(i)), i);
					},
					deltaPointsFromPixelsNoRotate: function (t, i) {
						return t.divide(this._containerInnerSize.x * this.getZoom(i));
					},
					deltaPointsFromPixels: function (t, i) {
						return this.deltaPointsFromPixelsNoRotate(t, i).rotate(-this.getRotation(i));
					},
					pixelFromPointNoRotate: function (t, i) {
						return this._pixelFromPointNoRotate(t, this.getBoundsNoRotate(i));
					},
					pixelFromPoint: function (t, i) {
						return this._pixelFromPoint(t, this.getBoundsNoRotate(i));
					},
					_pixelFromPointNoRotate: function (t, i) {
						return t
							.minus(i.getTopLeft())
							.times(this._containerInnerSize.x / i.width)
							.plus(new e.Point(this._margins.left, this._margins.top));
					},
					_pixelFromPoint: function (t, i) {
						return this._pixelFromPointNoRotate(
							t.rotate(this.getRotation(!0), this.getCenter(!0)),
							i
						);
					},
					pointFromPixelNoRotate: function (t, i) {
						var o = this.getBoundsNoRotate(i);
						return t
							.minus(new e.Point(this._margins.left, this._margins.top))
							.divide(this._containerInnerSize.x / o.width)
							.plus(o.getTopLeft());
					},
					pointFromPixel: function (t, i) {
						return this.pointFromPixelNoRotate(t, i).rotate(
							-this.getRotation(i),
							this.getCenter(i)
						);
					},
					_viewportToImageDelta: function (t, i) {
						var o = this._contentBoundsNoRotate.width;
						return new e.Point(
							(t * this._contentSizeNoRotate.x) / o,
							(i * this._contentSizeNoRotate.x) / o
						);
					},
					viewportToImageCoordinates: function (t, i) {
						if (t instanceof e.Point) return this.viewportToImageCoordinates(t.x, t.y);
						if (this.viewer) {
							var o = this.viewer.world.getItemCount();
							if (o > 1)
								this.silenceMultiImageWarnings ||
									e.console.error(
										'[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.'
									);
							else if (o === 1) {
								var h = this.viewer.world.getItemAt(0);
								return h.viewportToImageCoordinates(t, i, !0);
							}
						}
						return this._viewportToImageDelta(
							t - this._contentBoundsNoRotate.x,
							i - this._contentBoundsNoRotate.y
						);
					},
					_imageToViewportDelta: function (t, i) {
						var o = this._contentBoundsNoRotate.width;
						return new e.Point(
							(t / this._contentSizeNoRotate.x) * o,
							(i / this._contentSizeNoRotate.x) * o
						);
					},
					imageToViewportCoordinates: function (t, i) {
						if (t instanceof e.Point) return this.imageToViewportCoordinates(t.x, t.y);
						if (this.viewer) {
							var o = this.viewer.world.getItemCount();
							if (o > 1)
								this.silenceMultiImageWarnings ||
									e.console.error(
										'[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.'
									);
							else if (o === 1) {
								var h = this.viewer.world.getItemAt(0);
								return h.imageToViewportCoordinates(t, i, !0);
							}
						}
						var n = this._imageToViewportDelta(t, i);
						return (
							(n.x += this._contentBoundsNoRotate.x), (n.y += this._contentBoundsNoRotate.y), n
						);
					},
					imageToViewportRectangle: function (t, i, o, h) {
						var n = t;
						if ((n instanceof e.Rect || (n = new e.Rect(t, i, o, h)), this.viewer)) {
							var r = this.viewer.world.getItemCount();
							if (r > 1)
								this.silenceMultiImageWarnings ||
									e.console.error(
										'[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.'
									);
							else if (r === 1) {
								var s = this.viewer.world.getItemAt(0);
								return s.imageToViewportRectangle(t, i, o, h, !0);
							}
						}
						var l = this.imageToViewportCoordinates(n.x, n.y),
							d = this._imageToViewportDelta(n.width, n.height);
						return new e.Rect(l.x, l.y, d.x, d.y, n.degrees);
					},
					viewportToImageRectangle: function (t, i, o, h) {
						var n = t;
						if ((n instanceof e.Rect || (n = new e.Rect(t, i, o, h)), this.viewer)) {
							var r = this.viewer.world.getItemCount();
							if (r > 1)
								this.silenceMultiImageWarnings ||
									e.console.error(
										'[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.'
									);
							else if (r === 1) {
								var s = this.viewer.world.getItemAt(0);
								return s.viewportToImageRectangle(t, i, o, h, !0);
							}
						}
						var l = this.viewportToImageCoordinates(n.x, n.y),
							d = this._viewportToImageDelta(n.width, n.height);
						return new e.Rect(l.x, l.y, d.x, d.y, n.degrees);
					},
					viewerElementToImageCoordinates: function (t) {
						var i = this.pointFromPixel(t, !0);
						return this.viewportToImageCoordinates(i);
					},
					imageToViewerElementCoordinates: function (t) {
						var i = this.imageToViewportCoordinates(t);
						return this.pixelFromPoint(i, !0);
					},
					windowToImageCoordinates: function (t) {
						e.console.assert(
							this.viewer,
							'[Viewport.windowToImageCoordinates] the viewport must have a viewer.'
						);
						var i = t.minus(e.getElementPosition(this.viewer.element));
						return this.viewerElementToImageCoordinates(i);
					},
					imageToWindowCoordinates: function (t) {
						e.console.assert(
							this.viewer,
							'[Viewport.imageToWindowCoordinates] the viewport must have a viewer.'
						);
						var i = this.imageToViewerElementCoordinates(t);
						return i.plus(e.getElementPosition(this.viewer.element));
					},
					viewerElementToViewportCoordinates: function (t) {
						return this.pointFromPixel(t, !0);
					},
					viewportToViewerElementCoordinates: function (t) {
						return this.pixelFromPoint(t, !0);
					},
					viewerElementToViewportRectangle: function (t) {
						return e.Rect.fromSummits(
							this.pointFromPixel(t.getTopLeft(), !0),
							this.pointFromPixel(t.getTopRight(), !0),
							this.pointFromPixel(t.getBottomLeft(), !0)
						);
					},
					viewportToViewerElementRectangle: function (t) {
						return e.Rect.fromSummits(
							this.pixelFromPoint(t.getTopLeft(), !0),
							this.pixelFromPoint(t.getTopRight(), !0),
							this.pixelFromPoint(t.getBottomLeft(), !0)
						);
					},
					windowToViewportCoordinates: function (t) {
						e.console.assert(
							this.viewer,
							'[Viewport.windowToViewportCoordinates] the viewport must have a viewer.'
						);
						var i = t.minus(e.getElementPosition(this.viewer.element));
						return this.viewerElementToViewportCoordinates(i);
					},
					viewportToWindowCoordinates: function (t) {
						e.console.assert(
							this.viewer,
							'[Viewport.viewportToWindowCoordinates] the viewport must have a viewer.'
						);
						var i = this.viewportToViewerElementCoordinates(t);
						return i.plus(e.getElementPosition(this.viewer.element));
					},
					viewportToImageZoom: function (t) {
						if (this.viewer) {
							var i = this.viewer.world.getItemCount();
							if (i > 1)
								this.silenceMultiImageWarnings ||
									e.console.error(
										'[Viewport.viewportToImageZoom] is not accurate with multi-image.'
									);
							else if (i === 1) {
								var o = this.viewer.world.getItemAt(0);
								return o.viewportToImageZoom(t);
							}
						}
						var h = this._contentSizeNoRotate.x,
							n = this._containerInnerSize.x,
							r = this._contentBoundsNoRotate.width,
							s = (n / h) * r;
						return t * s;
					},
					imageToViewportZoom: function (t) {
						if (this.viewer) {
							var i = this.viewer.world.getItemCount();
							if (i > 1)
								this.silenceMultiImageWarnings ||
									e.console.error(
										'[Viewport.imageToViewportZoom] is not accurate with multi-image.'
									);
							else if (i === 1) {
								var o = this.viewer.world.getItemAt(0);
								return o.imageToViewportZoom(t);
							}
						}
						var h = this._contentSizeNoRotate.x,
							n = this._containerInnerSize.x,
							r = this._contentBoundsNoRotate.width,
							s = h / n / r;
						return t * s;
					},
					toggleFlip: function () {
						return this.setFlip(!this.getFlip()), this;
					},
					getFlip: function () {
						return this.flipped;
					},
					setFlip: function (t) {
						return this.flipped === t
							? this
							: ((this.flipped = t),
							  this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()),
							  this.viewer.forceRedraw(),
							  this.viewer.raiseEvent('flip', { flipped: t }),
							  this);
					}
				});
		})(O),
		(function (e) {
			(e.TiledImage = function (n) {
				var r = this;
				e.console.assert(n.tileCache, '[TiledImage] options.tileCache is required'),
					e.console.assert(n.drawer, '[TiledImage] options.drawer is required'),
					e.console.assert(n.viewer, '[TiledImage] options.viewer is required'),
					e.console.assert(n.imageLoader, '[TiledImage] options.imageLoader is required'),
					e.console.assert(n.source, '[TiledImage] options.source is required'),
					e.console.assert(
						!n.clip || n.clip instanceof e.Rect,
						'[TiledImage] options.clip must be an OpenSeadragon.Rect if present'
					),
					e.EventSource.call(this),
					(this._tileCache = n.tileCache),
					delete n.tileCache,
					(this._drawer = n.drawer),
					delete n.drawer,
					(this._imageLoader = n.imageLoader),
					delete n.imageLoader,
					n.clip instanceof e.Rect && (this._clip = n.clip.clone()),
					delete n.clip;
				var s = n.x || 0;
				delete n.x;
				var l = n.y || 0;
				delete n.y,
					(this.normHeight = n.source.dimensions.y / n.source.dimensions.x),
					(this.contentAspectX = n.source.dimensions.x / n.source.dimensions.y);
				var d = 1;
				n.width
					? ((d = n.width),
					  delete n.width,
					  n.height &&
							(e.console.error('specifying both width and height to a tiledImage is not supported'),
							delete n.height))
					: n.height && ((d = n.height / this.normHeight), delete n.height);
				var f = n.fitBounds;
				delete n.fitBounds;
				var y = n.fitBoundsPlacement || O.Placement.CENTER;
				delete n.fitBoundsPlacement;
				var v = n.degrees || 0;
				delete n.degrees,
					e.extend(
						!0,
						this,
						{
							viewer: null,
							tilesMatrix: {},
							coverage: {},
							loadingCoverage: {},
							lastDrawn: [],
							lastResetTime: 0,
							_midDraw: !1,
							_needsDraw: !0,
							_hasOpaqueTile: !1,
							_tilesLoading: 0,
							springStiffness: e.DEFAULT_SETTINGS.springStiffness,
							animationTime: e.DEFAULT_SETTINGS.animationTime,
							minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
							wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
							wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
							immediateRender: e.DEFAULT_SETTINGS.immediateRender,
							blendTime: e.DEFAULT_SETTINGS.blendTime,
							alwaysBlend: e.DEFAULT_SETTINGS.alwaysBlend,
							minPixelRatio: e.DEFAULT_SETTINGS.minPixelRatio,
							smoothTileEdgesMinZoom: e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom,
							iOSDevice: e.DEFAULT_SETTINGS.iOSDevice,
							debugMode: e.DEFAULT_SETTINGS.debugMode,
							crossOriginPolicy: e.DEFAULT_SETTINGS.crossOriginPolicy,
							ajaxWithCredentials: e.DEFAULT_SETTINGS.ajaxWithCredentials,
							placeholderFillStyle: e.DEFAULT_SETTINGS.placeholderFillStyle,
							opacity: e.DEFAULT_SETTINGS.opacity,
							preload: e.DEFAULT_SETTINGS.preload,
							compositeOperation: e.DEFAULT_SETTINGS.compositeOperation,
							subPixelRoundingForTransparency: e.DEFAULT_SETTINGS.subPixelRoundingForTransparency
						},
						n
					),
					(this._preload = this.preload),
					delete this.preload,
					(this._fullyLoaded = !1),
					(this._xSpring = new e.Spring({
						initial: s,
						springStiffness: this.springStiffness,
						animationTime: this.animationTime
					})),
					(this._ySpring = new e.Spring({
						initial: l,
						springStiffness: this.springStiffness,
						animationTime: this.animationTime
					})),
					(this._scaleSpring = new e.Spring({
						initial: d,
						springStiffness: this.springStiffness,
						animationTime: this.animationTime
					})),
					(this._degreesSpring = new e.Spring({
						initial: v,
						springStiffness: this.springStiffness,
						animationTime: this.animationTime
					})),
					this._updateForScale(),
					f && this.fitBounds(f, y, !0),
					(this._drawingHandler = function (T) {
						r.viewer.raiseEvent('tile-drawing', e.extend({ tiledImage: r }, T));
					});
			}),
				e.extend(e.TiledImage.prototype, e.EventSource.prototype, {
					needsDraw: function () {
						return this._needsDraw;
					},
					getFullyLoaded: function () {
						return this._fullyLoaded;
					},
					_setFullyLoaded: function (n) {
						n !== this._fullyLoaded &&
							((this._fullyLoaded = n),
							this.raiseEvent('fully-loaded-change', { fullyLoaded: this._fullyLoaded }));
					},
					reset: function () {
						this._tileCache.clearTilesFor(this),
							(this.lastResetTime = e.now()),
							(this._needsDraw = !0);
					},
					update: function () {
						var n = this._xSpring.update(),
							r = this._ySpring.update(),
							s = this._scaleSpring.update(),
							l = this._degreesSpring.update();
						return n || r || s || l ? (this._updateForScale(), (this._needsDraw = !0), !0) : !1;
					},
					draw: function () {
						this.opacity !== 0 || this._preload
							? ((this._midDraw = !0), this._updateViewport(), (this._midDraw = !1))
							: (this._needsDraw = !1);
					},
					destroy: function () {
						this.reset(), this.source.destroy && this.source.destroy();
					},
					getBounds: function (n) {
						return this.getBoundsNoRotate(n).rotate(this.getRotation(n), this._getRotationPoint(n));
					},
					getBoundsNoRotate: function (n) {
						return n
							? new e.Rect(
									this._xSpring.current.value,
									this._ySpring.current.value,
									this._worldWidthCurrent,
									this._worldHeightCurrent
							  )
							: new e.Rect(
									this._xSpring.target.value,
									this._ySpring.target.value,
									this._worldWidthTarget,
									this._worldHeightTarget
							  );
					},
					getWorldBounds: function () {
						return (
							e.console.error(
								'[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead'
							),
							this.getBounds()
						);
					},
					getClippedBounds: function (n) {
						var r = this.getBoundsNoRotate(n);
						if (this._clip) {
							var s = n ? this._worldWidthCurrent : this._worldWidthTarget,
								l = s / this.source.dimensions.x,
								d = this._clip.times(l);
							r = new e.Rect(r.x + d.x, r.y + d.y, d.width, d.height);
						}
						return r.rotate(this.getRotation(n), this._getRotationPoint(n));
					},
					getTileBounds: function (n, r, s) {
						var l = this.source.getNumTiles(n),
							d = (l.x + (r % l.x)) % l.x,
							f = (l.y + (s % l.y)) % l.y,
							y = this.source.getTileBounds(n, d, f);
						return (
							this.getFlip() && (y.x = 1 - y.x - y.width),
							(y.x += (r - d) / l.x),
							(y.y += (this._worldHeightCurrent / this._worldWidthCurrent) * ((s - f) / l.y)),
							y
						);
					},
					getContentSize: function () {
						return new e.Point(this.source.dimensions.x, this.source.dimensions.y);
					},
					getSizeInWindowCoordinates: function () {
						var n = this.imageToWindowCoordinates(new e.Point(0, 0)),
							r = this.imageToWindowCoordinates(this.getContentSize());
						return new e.Point(r.x - n.x, r.y - n.y);
					},
					_viewportToImageDelta: function (n, r, s) {
						var l = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
						return new e.Point(
							n * (this.source.dimensions.x / l),
							r * ((this.source.dimensions.y * this.contentAspectX) / l)
						);
					},
					viewportToImageCoordinates: function (n, r, s) {
						var l;
						return (
							n instanceof e.Point ? ((s = r), (l = n)) : (l = new e.Point(n, r)),
							(l = l.rotate(-this.getRotation(s), this._getRotationPoint(s))),
							s
								? this._viewportToImageDelta(
										l.x - this._xSpring.current.value,
										l.y - this._ySpring.current.value
								  )
								: this._viewportToImageDelta(
										l.x - this._xSpring.target.value,
										l.y - this._ySpring.target.value
								  )
						);
					},
					_imageToViewportDelta: function (n, r, s) {
						var l = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
						return new e.Point(
							(n / this.source.dimensions.x) * l,
							(r / this.source.dimensions.y / this.contentAspectX) * l
						);
					},
					imageToViewportCoordinates: function (n, r, s) {
						n instanceof e.Point && ((s = r), (r = n.y), (n = n.x));
						var l = this._imageToViewportDelta(n, r);
						return (
							s
								? ((l.x += this._xSpring.current.value), (l.y += this._ySpring.current.value))
								: ((l.x += this._xSpring.target.value), (l.y += this._ySpring.target.value)),
							l.rotate(this.getRotation(s), this._getRotationPoint(s))
						);
					},
					imageToViewportRectangle: function (n, r, s, l, d) {
						var f = n;
						f instanceof e.Rect ? (d = r) : (f = new e.Rect(n, r, s, l));
						var y = this.imageToViewportCoordinates(f.getTopLeft(), d),
							v = this._imageToViewportDelta(f.width, f.height, d);
						return new e.Rect(y.x, y.y, v.x, v.y, f.degrees + this.getRotation(d));
					},
					viewportToImageRectangle: function (n, r, s, l, d) {
						var f = n;
						n instanceof e.Rect ? (d = r) : (f = new e.Rect(n, r, s, l));
						var y = this.viewportToImageCoordinates(f.getTopLeft(), d),
							v = this._viewportToImageDelta(f.width, f.height, d);
						return new e.Rect(y.x, y.y, v.x, v.y, f.degrees - this.getRotation(d));
					},
					viewerElementToImageCoordinates: function (n) {
						var r = this.viewport.pointFromPixel(n, !0);
						return this.viewportToImageCoordinates(r);
					},
					imageToViewerElementCoordinates: function (n) {
						var r = this.imageToViewportCoordinates(n);
						return this.viewport.pixelFromPoint(r, !0);
					},
					windowToImageCoordinates: function (n) {
						var r = n.minus(O.getElementPosition(this.viewer.element));
						return this.viewerElementToImageCoordinates(r);
					},
					imageToWindowCoordinates: function (n) {
						var r = this.imageToViewerElementCoordinates(n);
						return r.plus(O.getElementPosition(this.viewer.element));
					},
					_viewportToTiledImageRectangle: function (n) {
						var r = this._scaleSpring.current.value;
						return (
							(n = n.rotate(-this.getRotation(!0), this._getRotationPoint(!0))),
							new e.Rect(
								(n.x - this._xSpring.current.value) / r,
								(n.y - this._ySpring.current.value) / r,
								n.width / r,
								n.height / r,
								n.degrees
							)
						);
					},
					viewportToImageZoom: function (n) {
						var r =
							(this._scaleSpring.current.value * this.viewport._containerInnerSize.x) /
							this.source.dimensions.x;
						return r * n;
					},
					imageToViewportZoom: function (n) {
						var r =
							(this._scaleSpring.current.value * this.viewport._containerInnerSize.x) /
							this.source.dimensions.x;
						return n / r;
					},
					setPosition: function (n, r) {
						var s = this._xSpring.target.value === n.x && this._ySpring.target.value === n.y;
						if (r) {
							if (s && this._xSpring.current.value === n.x && this._ySpring.current.value === n.y)
								return;
							this._xSpring.resetTo(n.x), this._ySpring.resetTo(n.y), (this._needsDraw = !0);
						} else {
							if (s) return;
							this._xSpring.springTo(n.x), this._ySpring.springTo(n.y), (this._needsDraw = !0);
						}
						s || this._raiseBoundsChange();
					},
					setWidth: function (n, r) {
						this._setScale(n, r);
					},
					setHeight: function (n, r) {
						this._setScale(n / this.normHeight, r);
					},
					setCroppingPolygons: function (n) {
						var r = function (l) {
								return l instanceof e.Point || (typeof l.x == 'number' && typeof l.y == 'number');
							},
							s = function (l) {
								return l.map(function (d) {
									try {
										if (r(d)) return { x: d.x, y: d.y };
										throw new Error();
									} catch {
										throw new Error('A Provided cropping polygon point is not supported');
									}
								});
							};
						try {
							if (!e.isArray(n)) throw new Error('Provided cropping polygon is not an array');
							this._croppingPolygons = n.map(function (l) {
								return s(l);
							});
						} catch (l) {
							e.console.error(
								'[TiledImage.setCroppingPolygons] Cropping polygon format not supported'
							),
								e.console.error(l),
								(this._croppingPolygons = null);
						}
					},
					resetCroppingPolygons: function () {
						this._croppingPolygons = null;
					},
					fitBounds: function (n, r, s) {
						r = r || e.Placement.CENTER;
						var l = e.Placement.properties[r],
							d = this.contentAspectX,
							f = 0,
							y = 0,
							v = 1,
							T = 1;
						if (
							(this._clip &&
								((d = this._clip.getAspectRatio()),
								(v = this._clip.width / this.source.dimensions.x),
								(T = this._clip.height / this.source.dimensions.y),
								n.getAspectRatio() > d
									? ((f = (this._clip.x / this._clip.height) * n.height),
									  (y = (this._clip.y / this._clip.height) * n.height))
									: ((f = (this._clip.x / this._clip.width) * n.width),
									  (y = (this._clip.y / this._clip.width) * n.width))),
							n.getAspectRatio() > d)
						) {
							var w = n.height / T,
								x = 0;
							l.isHorizontallyCentered
								? (x = (n.width - n.height * d) / 2)
								: l.isRight && (x = n.width - n.height * d),
								this.setPosition(new e.Point(n.x - f + x, n.y - y), s),
								this.setHeight(w, s);
						} else {
							var _ = n.width / v,
								b = 0;
							l.isVerticallyCentered
								? (b = (n.height - n.width / d) / 2)
								: l.isBottom && (b = n.height - n.width / d),
								this.setPosition(new e.Point(n.x - f, n.y - y + b), s),
								this.setWidth(_, s);
						}
					},
					getClip: function () {
						return this._clip ? this._clip.clone() : null;
					},
					setClip: function (n) {
						e.console.assert(
							!n || n instanceof e.Rect,
							'[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null'
						),
							n instanceof e.Rect ? (this._clip = n.clone()) : (this._clip = null),
							(this._needsDraw = !0),
							this.raiseEvent('clip-change');
					},
					getFlip: function () {
						return !!this.flipped;
					},
					setFlip: function (n) {
						(this.flipped = !!n), (this._needsDraw = !0), this._raiseBoundsChange();
					},
					getOpacity: function () {
						return this.opacity;
					},
					setOpacity: function (n) {
						n !== this.opacity &&
							((this.opacity = n),
							(this._needsDraw = !0),
							this.raiseEvent('opacity-change', { opacity: this.opacity }));
					},
					getPreload: function () {
						return this._preload;
					},
					setPreload: function (n) {
						(this._preload = !!n), (this._needsDraw = !0);
					},
					getRotation: function (n) {
						return n ? this._degreesSpring.current.value : this._degreesSpring.target.value;
					},
					setRotation: function (n, r) {
						(this._degreesSpring.target.value === n && this._degreesSpring.isAtTargetValue()) ||
							(r ? this._degreesSpring.resetTo(n) : this._degreesSpring.springTo(n),
							(this._needsDraw = !0),
							this._raiseBoundsChange());
					},
					_getRotationPoint: function (n) {
						return this.getBoundsNoRotate(n).getCenter();
					},
					getCompositeOperation: function () {
						return this.compositeOperation;
					},
					setCompositeOperation: function (n) {
						n !== this.compositeOperation &&
							((this.compositeOperation = n),
							(this._needsDraw = !0),
							this.raiseEvent('composite-operation-change', {
								compositeOperation: this.compositeOperation
							}));
					},
					_setScale: function (n, r) {
						var s = this._scaleSpring.target.value === n;
						if (r) {
							if (s && this._scaleSpring.current.value === n) return;
							this._scaleSpring.resetTo(n), this._updateForScale(), (this._needsDraw = !0);
						} else {
							if (s) return;
							this._scaleSpring.springTo(n), this._updateForScale(), (this._needsDraw = !0);
						}
						s || this._raiseBoundsChange();
					},
					_updateForScale: function () {
						(this._worldWidthTarget = this._scaleSpring.target.value),
							(this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value),
							(this._worldWidthCurrent = this._scaleSpring.current.value),
							(this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value);
					},
					_raiseBoundsChange: function () {
						this.raiseEvent('bounds-change');
					},
					_isBottomItem: function () {
						return this.viewer.world.getItemAt(0) === this;
					},
					_getLevelsInterval: function () {
						var n = Math.max(
								this.source.minLevel,
								Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))
							),
							r =
								this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(0), !0).x *
								this._scaleSpring.current.value,
							s = Math.min(
								Math.abs(this.source.maxLevel),
								Math.abs(Math.floor(Math.log(r / this.minPixelRatio) / Math.log(2)))
							);
						return (
							(s = Math.max(s, this.source.minLevel || 0)),
							(n = Math.min(n, s)),
							{ lowestLevel: n, highestLevel: s }
						);
					},
					_updateViewport: function () {
						for (
							this._needsDraw = !1, this._tilesLoading = 0, this.loadingCoverage = {};
							this.lastDrawn.length > 0;

						) {
							var n = this.lastDrawn.pop();
							n.beingDrawn = !1;
						}
						var r = this.viewport,
							s = this._viewportToTiledImageRectangle(r.getBoundsWithMargins(!0));
						if (!this.wrapHorizontal && !this.wrapVertical) {
							var l = this._viewportToTiledImageRectangle(this.getClippedBounds(!0));
							if (((s = s.intersection(l)), s === null)) return;
						}
						for (
							var d = this._getLevelsInterval(),
								f = d.lowestLevel,
								y = d.highestLevel,
								v = null,
								T = !1,
								w = e.now(),
								x = y;
							x >= f;
							x--
						) {
							var _ = !1,
								b =
									r.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(x), !0).x *
									this._scaleSpring.current.value;
							if (x === f || (!T && b >= this.minPixelRatio)) (_ = !0), (T = !0);
							else if (!T) continue;
							var z =
									r.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(x), !1).x *
									this._scaleSpring.current.value,
								U =
									r.deltaPixelsFromPointsNoRotate(
										this.source.getPixelRatio(Math.max(this.source.getClosestLevel(), 0)),
										!1
									).x * this._scaleSpring.current.value,
								N = this.immediateRender ? 1 : U,
								k = Math.min(1, (b - 0.5) / 0.5),
								M = N / Math.abs(N - z);
							if (
								((v = this._updateLevel(T, _, x, k, M, s, w, v)),
								this._providesCoverage(this.coverage, x))
							)
								break;
						}
						this._drawTiles(this.lastDrawn),
							v && !v.context2D
								? (this._loadTile(v, w), (this._needsDraw = !0), this._setFullyLoaded(!1))
								: this._setFullyLoaded(this._tilesLoading === 0);
					},
					_getCornerTiles: function (n, r, s) {
						var l, d;
						this.wrapHorizontal
							? ((l = e.positiveModulo(r.x, 1)), (d = e.positiveModulo(s.x, 1)))
							: ((l = Math.max(0, r.x)), (d = Math.min(1, s.x)));
						var f,
							y,
							v = 1 / this.source.aspectRatio;
						this.wrapVertical
							? ((f = e.positiveModulo(r.y, v)), (y = e.positiveModulo(s.y, v)))
							: ((f = Math.max(0, r.y)), (y = Math.min(v, s.y)));
						var T = this.source.getTileAtPoint(n, new e.Point(l, f)),
							w = this.source.getTileAtPoint(n, new e.Point(d, y)),
							x = this.source.getNumTiles(n);
						return (
							this.wrapHorizontal &&
								((T.x += x.x * Math.floor(r.x)), (w.x += x.x * Math.floor(s.x))),
							this.wrapVertical &&
								((T.y += x.y * Math.floor(r.y / v)), (w.y += x.y * Math.floor(s.y / v))),
							{ topLeft: T, bottomRight: w }
						);
					},
					_updateLevel: function (n, r, s, l, d, f, y, v) {
						var T = f.getBoundingBox().getTopLeft(),
							w = f.getBoundingBox().getBottomRight();
						this.viewer &&
							this.viewer.raiseEvent('update-level', {
								tiledImage: this,
								havedrawn: n,
								level: s,
								opacity: l,
								visibility: d,
								drawArea: f,
								topleft: T,
								bottomright: w,
								currenttime: y,
								best: v
							}),
							this._resetCoverage(this.coverage, s),
							this._resetCoverage(this.loadingCoverage, s);
						var x = this._getCornerTiles(s, T, w),
							_ = x.topLeft,
							b = x.bottomRight,
							z = this.source.getNumTiles(s),
							U = this.viewport.pixelFromPoint(this.viewport.getCenter());
						this.getFlip() && ((b.x += 1), this.wrapHorizontal || (b.x = Math.min(b.x, z.x - 1)));
						for (var N = _.x; N <= b.x; N++)
							for (var k = _.y; k <= b.y; k++) {
								var M;
								if (this.getFlip()) {
									var W = (z.x + (N % z.x)) % z.x;
									M = N + z.x - W - W - 1;
								} else M = N;
								f.intersection(this.getTileBounds(s, M, k)) !== null &&
									(v = this._updateTile(r, n, M, k, s, l, d, U, z, y, v));
							}
						return v;
					},
					_updateTile: function (n, r, s, l, d, f, y, v, T, w, x) {
						var _ = this._getTile(s, l, d, w, T, this._worldWidthCurrent, this._worldHeightCurrent),
							b = r;
						this.viewer && this.viewer.raiseEvent('update-tile', { tiledImage: this, tile: _ }),
							this._setCoverage(this.coverage, d, s, l, !1);
						var z = _.loaded || _.loading || this._isCovered(this.loadingCoverage, d, s, l);
						if (
							(this._setCoverage(this.loadingCoverage, d, s, l, z),
							!_.exists ||
								(n &&
									!b &&
									(this._isCovered(this.coverage, d, s, l)
										? this._setCoverage(this.coverage, d, s, l, !0)
										: (b = !0)),
								!b))
						)
							return x;
						if ((this._positionTile(_, this.source.tileOverlap, this.viewport, v, y), !_.loaded))
							if (_.context2D) this._setTileLoaded(_);
							else {
								var U = this._tileCache.getImageRecord(_.cacheKey);
								U && this._setTileLoaded(_, U.getData());
							}
						if (_.loaded) {
							var N = this._blendTile(_, s, l, d, f, w);
							N && (this._needsDraw = !0);
						} else _.loading ? this._tilesLoading++ : z || (x = this._compareTiles(x, _));
						return x;
					},
					_getTile: function (n, r, s, l, d, f, y) {
						var v,
							T,
							w,
							x,
							_,
							b,
							z,
							U,
							N,
							k,
							M = this.tilesMatrix,
							W = this.source;
						return (
							M[s] || (M[s] = {}),
							M[s][n] || (M[s][n] = {}),
							(!M[s][n][r] || !M[s][n][r].flipped != !this.flipped) &&
								((v = (d.x + (n % d.x)) % d.x),
								(T = (d.y + (r % d.y)) % d.y),
								(w = this.getTileBounds(s, n, r)),
								(x = W.getTileBounds(s, v, T, !0)),
								(_ = W.tileExists(s, v, T)),
								(b = W.getTileUrl(s, v, T)),
								(z = W.getTilePostData(s, v, T)),
								this.loadTilesWithAjax
									? ((U = W.getTileAjaxHeaders(s, v, T)),
									  e.isPlainObject(this.ajaxHeaders) && (U = e.extend({}, this.ajaxHeaders, U)))
									: (U = null),
								(N = W.getContext2D ? W.getContext2D(s, v, T) : void 0),
								(k = new e.Tile(
									s,
									n,
									r,
									w,
									_,
									b,
									N,
									this.loadTilesWithAjax,
									U,
									x,
									z,
									W.getTileHashKey(s, v, T, b, U, z)
								)),
								this.getFlip()
									? v === 0 && (k.isRightMost = !0)
									: v === d.x - 1 && (k.isRightMost = !0),
								T === d.y - 1 && (k.isBottomMost = !0),
								(k.flipped = this.flipped),
								(M[s][n][r] = k)),
							(k = M[s][n][r]),
							(k.lastTouchTime = l),
							k
						);
					},
					_loadTile: function (n, r) {
						var s = this;
						(n.loading = !0),
							this._imageLoader.addJob({
								src: n.getUrl(),
								tile: n,
								source: this.source,
								postData: n.postData,
								loadWithAjax: n.loadWithAjax,
								ajaxHeaders: n.ajaxHeaders,
								crossOriginPolicy: this.crossOriginPolicy,
								ajaxWithCredentials: this.ajaxWithCredentials,
								callback: function (l, d, f) {
									s._onTileLoad(n, r, l, d, f);
								},
								abort: function () {
									n.loading = !1;
								}
							});
					},
					_onTileLoad: function (n, r, s, l, d) {
						if (!s) {
							e.console.error('Tile %s failed to load: %s - error: %s', n, n.getUrl(), l),
								this.viewer.raiseEvent('tile-load-failed', {
									tile: n,
									tiledImage: this,
									time: r,
									message: l,
									tileRequest: d
								}),
								(n.loading = !1),
								(n.exists = !1);
							return;
						}
						if (r < this.lastResetTime) {
							e.console.warn('Ignoring tile %s loaded before reset: %s', n, n.getUrl()),
								(n.loading = !1);
							return;
						}
						var f = this,
							y = function () {
								var v = f.source,
									T = v.getClosestLevel();
								f._setTileLoaded(n, s, T, d);
							};
						this._midDraw ? window.setTimeout(y, 1) : y();
					},
					_setTileLoaded: function (n, r, s, l) {
						var d = 0,
							f = this;
						function y() {
							return d++, v;
						}
						function v() {
							d--,
								d === 0 &&
									((n.loading = !1),
									(n.loaded = !0),
									(n.hasTransparency = f.source.hasTransparency(
										n.context2D,
										n.getUrl(),
										n.ajaxHeaders,
										n.postData
									)),
									n.context2D ||
										f._tileCache.cacheTile({ data: r, tile: n, cutoff: s, tiledImage: f }),
									(f._needsDraw = !0));
						}
						this.viewer.raiseEvent('tile-loaded', {
							tile: n,
							tiledImage: this,
							tileRequest: l,
							get image() {
								return (
									e.console.error(
										"[tile-loaded] event 'image' has been deprecated. Use 'data' property instead."
									),
									r
								);
							},
							data: r,
							getCompletionCallback: y
						}),
							y()();
					},
					_positionTile: function (n, r, s, l, d) {
						var f = n.bounds.getTopLeft();
						(f.x *= this._scaleSpring.current.value),
							(f.y *= this._scaleSpring.current.value),
							(f.x += this._xSpring.current.value),
							(f.y += this._ySpring.current.value);
						var y = n.bounds.getSize();
						(y.x *= this._scaleSpring.current.value), (y.y *= this._scaleSpring.current.value);
						var v = s.pixelFromPointNoRotate(f, !0),
							T = s.pixelFromPointNoRotate(f, !1),
							w = s.deltaPixelsFromPointsNoRotate(y, !0),
							x = s.deltaPixelsFromPointsNoRotate(y, !1),
							_ = T.plus(x.divide(2)),
							b = l.squaredDistanceTo(_);
						r || (w = w.plus(new e.Point(1, 1))),
							n.isRightMost && this.wrapHorizontal && (w.x += 0.75),
							n.isBottomMost && this.wrapVertical && (w.y += 0.75),
							(n.position = v),
							(n.size = w),
							(n.squaredDistance = b),
							(n.visibility = d);
					},
					_blendTile: function (n, r, s, l, d, f) {
						var y = 1e3 * this.blendTime,
							v,
							T;
						if (
							(n.blendStart || (n.blendStart = f),
							(v = f - n.blendStart),
							(T = y ? Math.min(1, v / y) : 1),
							this.alwaysBlend && (T *= d),
							(n.opacity = T),
							this.lastDrawn.push(n),
							T === 1)
						)
							this._setCoverage(this.coverage, l, r, s, !0), (this._hasOpaqueTile = !0);
						else if (v < y) return !0;
						return !1;
					},
					_compareTiles: function (n, r) {
						return !n ||
							r.visibility > n.visibility ||
							(r.visibility === n.visibility && r.squaredDistance < n.squaredDistance)
							? r
							: n;
					},
					_drawTiles: function (n) {
						if (!(this.opacity === 0 || (n.length === 0 && !this.placeholderFillStyle))) {
							var r = n[0],
								s;
							r &&
								(s =
									this.opacity < 1 ||
									(this.compositeOperation && this.compositeOperation !== 'source-over') ||
									(!this._isBottomItem() &&
										this.source.hasTransparency(
											r.context2D,
											r.getUrl(),
											r.ajaxHeaders,
											r.postData
										)));
							var l,
								d,
								f = this.viewport.getZoom(!0),
								y = this.viewportToImageZoom(f);
							n.length > 1 &&
								y > this.smoothTileEdgesMinZoom &&
								!this.iOSDevice &&
								this.getRotation(!0) % 360 === 0 &&
								e.supportsCanvas &&
								this.viewer.useCanvas &&
								((s = !0),
								(l = r.getScaleForEdgeSmoothing()),
								(d = r.getTranslationForEdgeSmoothing(
									l,
									this._drawer.getCanvasSize(!1),
									this._drawer.getCanvasSize(!0)
								)));
							var v;
							s &&
								(l ||
									((v = this.viewport
										.viewportToViewerElementRectangle(this.getClippedBounds(!0))
										.getIntegerBoundingBox()),
									this._drawer.viewer.viewport.getFlip() &&
										(this.viewport.getRotation(!0) % 360 !== 0 ||
											this.getRotation(!0) % 360 !== 0) &&
										(v.x = this._drawer.viewer.container.clientWidth - (v.x + v.width)),
									(v = v.times(e.pixelDensityRatio))),
								this._drawer._clear(!0, v)),
								l ||
									(this.viewport.getRotation(!0) % 360 !== 0 &&
										this._drawer._offsetForRotation({
											degrees: this.viewport.getRotation(!0),
											useSketch: s
										}),
									this.getRotation(!0) % 360 !== 0 &&
										this._drawer._offsetForRotation({
											degrees: this.getRotation(!0),
											point: this.viewport.pixelFromPointNoRotate(this._getRotationPoint(!0), !0),
											useSketch: s
										}),
									this.viewport.getRotation(!0) % 360 === 0 &&
										this.getRotation(!0) % 360 === 0 &&
										this._drawer.viewer.viewport.getFlip() &&
										this._drawer._flip());
							var T = !1;
							if (this._clip) {
								this._drawer.saveContext(s);
								var w = this.imageToViewportRectangle(this._clip, !0);
								w = w.rotate(-this.getRotation(!0), this._getRotationPoint(!0));
								var x = this._drawer.viewportToDrawerRectangle(w);
								l && (x = x.times(l)),
									d && (x = x.translate(d)),
									this._drawer.setClip(x, s),
									(T = !0);
							}
							if (this._croppingPolygons) {
								var _ = this;
								this._drawer.saveContext(s);
								try {
									var b = this._croppingPolygons.map(function (Q) {
										return Q.map(function (X) {
											var K = _.imageToViewportCoordinates(X.x, X.y, !0).rotate(
													-_.getRotation(!0),
													_._getRotationPoint(!0)
												),
												te = _._drawer.viewportCoordToDrawerCoord(K);
											return l && (te = te.times(l)), te;
										});
									});
									this._drawer.clipWithPolygons(b, s);
								} catch (Q) {
									e.console.error(Q);
								}
								T = !0;
							}
							if (this.placeholderFillStyle && this._hasOpaqueTile === !1) {
								var z = this._drawer.viewportToDrawerRectangle(this.getBounds(!0));
								l && (z = z.times(l)), d && (z = z.translate(d));
								var U = null;
								typeof this.placeholderFillStyle == 'function'
									? (U = this.placeholderFillStyle(this, this._drawer.context))
									: (U = this.placeholderFillStyle),
									this._drawer.drawRectangle(z, U, s);
							}
							var N = h(this.subPixelRoundingForTransparency),
								k = !1;
							if (N === e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS) k = !0;
							else if (N === e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST) {
								var M = this.viewer && this.viewer.isAnimating();
								k = !M;
							}
							for (var W = n.length - 1; W >= 0; W--)
								(r = n[W]),
									this._drawer.drawTile(r, this._drawingHandler, s, l, d, k, this.source),
									(r.beingDrawn = !0),
									this.viewer &&
										this.viewer.raiseEvent('tile-drawn', { tiledImage: this, tile: r });
							T && this._drawer.restoreContext(s),
								l ||
									(this.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(s),
									this.viewport.getRotation(!0) % 360 !== 0 &&
										this._drawer._restoreRotationChanges(s)),
								s &&
									(l &&
										(this.viewport.getRotation(!0) % 360 !== 0 &&
											this._drawer._offsetForRotation({
												degrees: this.viewport.getRotation(!0),
												useSketch: !1
											}),
										this.getRotation(!0) % 360 !== 0 &&
											this._drawer._offsetForRotation({
												degrees: this.getRotation(!0),
												point: this.viewport.pixelFromPointNoRotate(this._getRotationPoint(!0), !0),
												useSketch: !1
											})),
									this._drawer.blendSketch({
										opacity: this.opacity,
										scale: l,
										translate: d,
										compositeOperation: this.compositeOperation,
										bounds: v
									}),
									l &&
										(this.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(!1),
										this.viewport.getRotation(!0) % 360 !== 0 &&
											this._drawer._restoreRotationChanges(!1))),
								l ||
									(this.viewport.getRotation(!0) % 360 === 0 &&
										this.getRotation(!0) % 360 === 0 &&
										this._drawer.viewer.viewport.getFlip() &&
										this._drawer._flip()),
								this._drawDebugInfo(n);
						}
					},
					_drawDebugInfo: function (n) {
						if (this.debugMode)
							for (var r = n.length - 1; r >= 0; r--) {
								var s = n[r];
								try {
									this._drawer.drawDebugInfo(s, n.length, r, this);
								} catch (l) {
									e.console.error(l);
								}
							}
					},
					_providesCoverage: function (n, r, s, l) {
						var d, f, y, v;
						if (!n[r]) return !1;
						if (s === void 0 || l === void 0) {
							d = n[r];
							for (y in d)
								if (Object.prototype.hasOwnProperty.call(d, y)) {
									f = d[y];
									for (v in f) if (Object.prototype.hasOwnProperty.call(f, v) && !f[v]) return !1;
								}
							return !0;
						}
						return n[r][s] === void 0 || n[r][s][l] === void 0 || n[r][s][l] === !0;
					},
					_isCovered: function (n, r, s, l) {
						return s === void 0 || l === void 0
							? this._providesCoverage(n, r + 1)
							: this._providesCoverage(n, r + 1, 2 * s, 2 * l) &&
									this._providesCoverage(n, r + 1, 2 * s, 2 * l + 1) &&
									this._providesCoverage(n, r + 1, 2 * s + 1, 2 * l) &&
									this._providesCoverage(n, r + 1, 2 * s + 1, 2 * l + 1);
					},
					_setCoverage: function (n, r, s, l, d) {
						if (!n[r]) {
							e.console.warn(
								"Setting coverage for a tile before its level's coverage has been reset: %s",
								r
							);
							return;
						}
						n[r][s] || (n[r][s] = {}), (n[r][s][l] = d);
					},
					_resetCoverage: function (n, r) {
						n[r] = {};
					}
				});
			var t = e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
			function i(n) {
				return (
					n !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS &&
					n !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST &&
					n !== e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER
				);
			}
			function o(n) {
				return i(n) ? t : n;
			}
			function h(n) {
				if (typeof n == 'number') return o(n);
				if (!n || !e.Browser) return t;
				var r = n[e.Browser.vendor];
				return i(r) && (r = n['*']), o(r);
			}
		})(O),
		(function (e) {
			var t = function (o) {
					e.console.assert(o, '[TileCache.cacheTile] options is required'),
						e.console.assert(o.tile, '[TileCache.cacheTile] options.tile is required'),
						e.console.assert(o.tiledImage, '[TileCache.cacheTile] options.tiledImage is required'),
						(this.tile = o.tile),
						(this.tiledImage = o.tiledImage);
				},
				i = function (o) {
					e.console.assert(o, '[ImageRecord] options is required'),
						e.console.assert(o.data, '[ImageRecord] options.data is required'),
						(this._tiles = []),
						o.create.apply(null, [this, o.data, o.ownerTile]),
						(this._destroyImplementation = o.destroy.bind(null, this)),
						(this.getImage = o.getImage.bind(null, this)),
						(this.getData = o.getData.bind(null, this)),
						(this.getRenderedContext = o.getRenderedContext.bind(null, this));
				};
			(i.prototype = {
				destroy: function () {
					this._destroyImplementation(), (this._tiles = null);
				},
				addTile: function (o) {
					e.console.assert(o, '[ImageRecord.addTile] tile is required'), this._tiles.push(o);
				},
				removeTile: function (o) {
					for (var h = 0; h < this._tiles.length; h++)
						if (this._tiles[h] === o) {
							this._tiles.splice(h, 1);
							return;
						}
					e.console.warn('[ImageRecord.removeTile] trying to remove unknown tile', o);
				},
				getTileCount: function () {
					return this._tiles.length;
				}
			}),
				(e.TileCache = function (o) {
					(o = o || {}),
						(this._maxImageCacheCount =
							o.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount),
						(this._tilesLoaded = []),
						(this._imagesLoaded = []),
						(this._imagesLoadedCount = 0);
				}),
				(e.TileCache.prototype = {
					numTilesLoaded: function () {
						return this._tilesLoaded.length;
					},
					cacheTile: function (o) {
						e.console.assert(o, '[TileCache.cacheTile] options is required'),
							e.console.assert(o.tile, '[TileCache.cacheTile] options.tile is required'),
							e.console.assert(
								o.tile.cacheKey,
								'[TileCache.cacheTile] options.tile.cacheKey is required'
							),
							e.console.assert(
								o.tiledImage,
								'[TileCache.cacheTile] options.tiledImage is required'
							);
						var h = o.cutoff || 0,
							n = this._tilesLoaded.length,
							r = this._imagesLoaded[o.tile.cacheKey];
						if (
							(r ||
								(o.data ||
									(e.console.error(
										"[TileCache.cacheTile] options.image was renamed to options.data. '.image' attribute has been deprecated and will be removed in the future."
									),
									(o.data = o.image)),
								e.console.assert(
									o.data,
									'[TileCache.cacheTile] options.data is required to create an ImageRecord'
								),
								(r = this._imagesLoaded[o.tile.cacheKey] =
									new i({
										data: o.data,
										ownerTile: o.tile,
										create: o.tiledImage.source.createTileCache,
										destroy: o.tiledImage.source.destroyTileCache,
										getImage: o.tiledImage.source.getTileCacheDataAsImage,
										getData: o.tiledImage.source.getTileCacheData,
										getRenderedContext: o.tiledImage.source.getTileCacheDataAsContext2D
									})),
								this._imagesLoadedCount++),
							r.addTile(o.tile),
							(o.tile.cacheImageRecord = r),
							this._imagesLoadedCount > this._maxImageCacheCount)
						) {
							for (
								var s = null, l = -1, d = null, f, y, v, T, w, x, _ = this._tilesLoaded.length - 1;
								_ >= 0;
								_--
							)
								if (((x = this._tilesLoaded[_]), (f = x.tile), !(f.level <= h || f.beingDrawn))) {
									if (!s) {
										(s = f), (l = _), (d = x);
										continue;
									}
									(T = f.lastTouchTime),
										(y = s.lastTouchTime),
										(w = f.level),
										(v = s.level),
										(T < y || (T === y && w > v)) && ((s = f), (l = _), (d = x));
								}
							s && l >= 0 && (this._unloadTile(d), (n = l));
						}
						this._tilesLoaded[n] = new t({ tile: o.tile, tiledImage: o.tiledImage });
					},
					clearTilesFor: function (o) {
						e.console.assert(o, '[TileCache.clearTilesFor] tiledImage is required');
						for (var h, n = 0; n < this._tilesLoaded.length; ++n)
							(h = this._tilesLoaded[n]),
								h.tiledImage === o && (this._unloadTile(h), this._tilesLoaded.splice(n, 1), n--);
					},
					getImageRecord: function (o) {
						return (
							e.console.assert(o, '[TileCache.getImageRecord] cacheKey is required'),
							this._imagesLoaded[o]
						);
					},
					_unloadTile: function (o) {
						e.console.assert(o, '[TileCache._unloadTile] tileRecord is required');
						var h = o.tile,
							n = o.tiledImage;
						h.unload(), (h.cacheImageRecord = null);
						var r = this._imagesLoaded[h.cacheKey];
						r.removeTile(h),
							r.getTileCount() ||
								(r.destroy(), delete this._imagesLoaded[h.cacheKey], this._imagesLoadedCount--),
							n.viewer.raiseEvent('tile-unloaded', { tile: h, tiledImage: n });
					}
				});
		})(O),
		(function (e) {
			(e.World = function (t) {
				var i = this;
				e.console.assert(t.viewer, '[World] options.viewer is required'),
					e.EventSource.call(this),
					(this.viewer = t.viewer),
					(this._items = []),
					(this._needsDraw = !1),
					(this._autoRefigureSizes = !0),
					(this._needsSizesFigured = !1),
					(this._delegatedFigureSizes = function (o) {
						i._autoRefigureSizes ? i._figureSizes() : (i._needsSizesFigured = !0);
					}),
					this._figureSizes();
			}),
				e.extend(e.World.prototype, e.EventSource.prototype, {
					addItem: function (t, i) {
						if (
							(e.console.assert(t, '[World.addItem] item is required'),
							e.console.assert(
								t instanceof e.TiledImage,
								'[World.addItem] only TiledImages supported at this time'
							),
							(i = i || {}),
							i.index !== void 0)
						) {
							var o = Math.max(0, Math.min(this._items.length, i.index));
							this._items.splice(o, 0, t);
						} else this._items.push(t);
						this._autoRefigureSizes ? this._figureSizes() : (this._needsSizesFigured = !0),
							(this._needsDraw = !0),
							t.addHandler('bounds-change', this._delegatedFigureSizes),
							t.addHandler('clip-change', this._delegatedFigureSizes),
							this.raiseEvent('add-item', { item: t });
					},
					getItemAt: function (t) {
						return (
							e.console.assert(t !== void 0, '[World.getItemAt] index is required'), this._items[t]
						);
					},
					getIndexOfItem: function (t) {
						return (
							e.console.assert(t, '[World.getIndexOfItem] item is required'),
							e.indexOf(this._items, t)
						);
					},
					getItemCount: function () {
						return this._items.length;
					},
					setItemIndex: function (t, i) {
						e.console.assert(t, '[World.setItemIndex] item is required'),
							e.console.assert(i !== void 0, '[World.setItemIndex] index is required');
						var o = this.getIndexOfItem(t);
						if (i >= this._items.length) throw new Error('Index bigger than number of layers.');
						i === o ||
							o === -1 ||
							(this._items.splice(o, 1),
							this._items.splice(i, 0, t),
							(this._needsDraw = !0),
							this.raiseEvent('item-index-change', { item: t, previousIndex: o, newIndex: i }));
					},
					removeItem: function (t) {
						e.console.assert(t, '[World.removeItem] item is required');
						var i = e.indexOf(this._items, t);
						i !== -1 &&
							(t.removeHandler('bounds-change', this._delegatedFigureSizes),
							t.removeHandler('clip-change', this._delegatedFigureSizes),
							t.destroy(),
							this._items.splice(i, 1),
							this._figureSizes(),
							(this._needsDraw = !0),
							this._raiseRemoveItem(t));
					},
					removeAll: function () {
						this.viewer._cancelPendingImages();
						var t, i;
						for (i = 0; i < this._items.length; i++)
							(t = this._items[i]),
								t.removeHandler('bounds-change', this._delegatedFigureSizes),
								t.removeHandler('clip-change', this._delegatedFigureSizes),
								t.destroy();
						var o = this._items;
						for (
							this._items = [], this._figureSizes(), this._needsDraw = !0, i = 0;
							i < o.length;
							i++
						)
							(t = o[i]), this._raiseRemoveItem(t);
					},
					resetItems: function () {
						for (var t = 0; t < this._items.length; t++) this._items[t].reset();
					},
					update: function () {
						for (var t = !1, i = 0; i < this._items.length; i++) t = this._items[i].update() || t;
						return t;
					},
					draw: function () {
						for (var t = 0; t < this._items.length; t++) this._items[t].draw();
						this._needsDraw = !1;
					},
					needsDraw: function () {
						for (var t = 0; t < this._items.length; t++) if (this._items[t].needsDraw()) return !0;
						return this._needsDraw;
					},
					getHomeBounds: function () {
						return this._homeBounds.clone();
					},
					getContentFactor: function () {
						return this._contentFactor;
					},
					setAutoRefigureSizes: function (t) {
						(this._autoRefigureSizes = t),
							t & this._needsSizesFigured && (this._figureSizes(), (this._needsSizesFigured = !1));
					},
					arrange: function (t) {
						t = t || {};
						var i = t.immediately || !1,
							o = t.layout || e.DEFAULT_SETTINGS.collectionLayout,
							h = t.rows || e.DEFAULT_SETTINGS.collectionRows,
							n = t.columns || e.DEFAULT_SETTINGS.collectionColumns,
							r = t.tileSize || e.DEFAULT_SETTINGS.collectionTileSize,
							s = t.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin,
							l = r + s,
							d;
						!t.rows && n ? (d = n) : (d = Math.ceil(this._items.length / h));
						var f = 0,
							y = 0,
							v,
							T,
							w,
							x,
							_;
						this.setAutoRefigureSizes(!1);
						for (var b = 0; b < this._items.length; b++)
							b && b % d === 0 && (o === 'horizontal' ? ((y += l), (f = 0)) : ((f += l), (y = 0))),
								(v = this._items[b]),
								(T = v.getBounds()),
								T.width > T.height ? (w = r) : (w = r * (T.width / T.height)),
								(x = w * (T.height / T.width)),
								(_ = new e.Point(f + (r - w) / 2, y + (r - x) / 2)),
								v.setPosition(_, i),
								v.setWidth(w, i),
								o === 'horizontal' ? (f += l) : (y += l);
						this.setAutoRefigureSizes(!0);
					},
					_figureSizes: function () {
						var t = this._homeBounds ? this._homeBounds.clone() : null,
							i = this._contentSize ? this._contentSize.clone() : null,
							o = this._contentFactor || 0;
						if (!this._items.length)
							(this._homeBounds = new e.Rect(0, 0, 1, 1)),
								(this._contentSize = new e.Point(1, 1)),
								(this._contentFactor = 1);
						else {
							var h = this._items[0],
								n = h.getBounds();
							this._contentFactor = h.getContentSize().x / n.width;
							for (
								var r = h.getClippedBounds().getBoundingBox(),
									s = r.x,
									l = r.y,
									d = r.x + r.width,
									f = r.y + r.height,
									y = 1;
								y < this._items.length;
								y++
							)
								(h = this._items[y]),
									(n = h.getBounds()),
									(this._contentFactor = Math.max(
										this._contentFactor,
										h.getContentSize().x / n.width
									)),
									(r = h.getClippedBounds().getBoundingBox()),
									(s = Math.min(s, r.x)),
									(l = Math.min(l, r.y)),
									(d = Math.max(d, r.x + r.width)),
									(f = Math.max(f, r.y + r.height));
							(this._homeBounds = new e.Rect(s, l, d - s, f - l)),
								(this._contentSize = new e.Point(
									this._homeBounds.width * this._contentFactor,
									this._homeBounds.height * this._contentFactor
								));
						}
						(this._contentFactor !== o ||
							!this._homeBounds.equals(t) ||
							!this._contentSize.equals(i)) &&
							this.raiseEvent('metrics-change', {});
					},
					_raiseRemoveItem: function (t) {
						this.raiseEvent('remove-item', { item: t });
					}
				});
		})(O);
})(De);
const Oe = we,
	He = Re({ __proto__: null, default: Oe }, [we]);
export { Oe as O, we as a, He as o };
