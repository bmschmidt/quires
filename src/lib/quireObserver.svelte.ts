import type { PlotConstructor, PlotImportable, UpdateablePlot } from './custom/scrollership/types';
import { nodeSort } from './custom/scrollership/utils';

export class QuireObserver {
	protected _observer?: IntersectionObserver;
	// the *real* callback that will be called when an intersection occurs.
	// runs against every entry.
	private base_callback?: IntersectionObserverCallback;
	// A secondary map of callbacks that are run against individual nodes.
	private callbacks: Map<Element, (entry: IntersectionObserverEntry) => void> = new Map();
	plot: UpdateablePlot | undefined = $state(undefined);
	lastPlotted: Node | undefined = $state(undefined);
	protected observer_options: IntersectionObserverInit;
	constructor({
		callback,
		observer_options = {
			root: null, // relative to document viewport
			rootMargin: '-20% 20px -40% 40px', // Must intersect near-ish the top.
			threshold: 0.01 // visible amount of item shown in relation to root
		}
	}: {
		callback: IntersectionObserverCallback;
		observer_options?: IntersectionObserverInit;
	}) {
		this.base_callback = callback;
		this.observer_options = observer_options;
	}

	get observer() {
		if (this._observer === undefined) {
			this._observer = new IntersectionObserver(
				(entries, observer) => this.run_observe(entries, observer),
				this.observer_options
			);
		}
		return this._observer;
	}

	observe(node: Element, callback: (entry: IntersectionObserverEntry) => void) {
		this.callbacks.set(node, callback);
		this.observer.observe(node);
	}

	run_observe(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
		if (this.base_callback === undefined) {
			throw new Error('No callback defined');
		}
		this.base_callback(entries, observer);
		entries.forEach((entry) => {
			const node = entry.target;
			const callback = this.callbacks.get(node);
			if (callback) {
				callback(entry);
			}
		});
	}
}

export class ScrollershipObserver extends QuireObserver {
	private API: PlotImportable;
	backdrop: HTMLDivElement;

	codeNodes = $state(new Map<Node, Record<string, any>>());

	constructor({
		observer_options = {
			root: null, // relative to document viewport
			rootMargin: '-20% 20px -40% 40px', // Must intersect near-ish the top.
			threshold: 0.01 // visible amount of item shown in relation to root
		},
		api,
		backdrop
	}: {
		api: PlotImportable;
		backdrop: HTMLDivElement;
		observer_options?: IntersectionObserverInit;
	}) {
		super({});
		this.backdrop = backdrop;

		this.API = api;
		this.backdrop = backdrop;
		this.observer_options = observer_options;
	}

	async plotFunction(entries: IntersectionObserverEntry[]) {
		// const quire = newQuire;
		let needs_plotting: Node[] = [];
		let nodesAndCodes = [...this.codeNodes.entries()].map(([node, code]) => ({ node, code }));
		if (nodesAndCodes.length === 0) {
			return;
		}

		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target !== this.lastPlotted) {
					needs_plotting.push(entry.target);
				}
			}
		});

		// Recalculate the index in case the list of nodes has changed.
		let lastNodeIndex =
			this.lastPlotted !== undefined
				? nodesAndCodes.findIndex((n) => n.node === this.lastPlotted)
				: -1;
		nodesAndCodes = nodeSort(nodesAndCodes);

		if (needs_plotting.length === 0) {
			return;
		}
		// If multiple nodes have become visible, it's the last one
		// that determines what's plotted.

		let currentPlotIndex = needs_plotting
			// n is the div node, but nodes and codes is the `details` created
			// from the code plot.
			.map((n) => nodesAndCodes.findIndex((nc) => n.contains(nc.node)))
			.sort()
			.reverse()[0];

		const direction = currentPlotIndex > lastNodeIndex ? 1 : -1;

		for (let i = lastNodeIndex + direction; i !== currentPlotIndex + direction; i += direction) {
			const { node } = nodesAndCodes[i];
			let { code } = nodesAndCodes[i];
			if (i !== currentPlotIndex) {
				// reduce transition times or something???
			}
			await this.plot?.plotAPI(code);
			this.lastPlotted = node;
		}
	}

	async loadAPI() {
		const API = this.API;
		let api: PlotConstructor;

		if (API.constructor.name === 'AsyncFunction') {
			api = await (API as () => Promise<{ default: PlotConstructor }>)().then((d) => d.default);
		} else {
			api = API as unknown as PlotConstructor;
		}
		this.plot = new api();

		this.plot.bind(this.backdrop);

		// @ts-ignore - This is just to make the plot function available in the console.

		window.plot = plot;
	}
}
