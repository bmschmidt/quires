export class QuireObserver {
	protected _observer?: IntersectionObserver;
	// the *real* callback that will be called when an intersection occurs.
	// runs against every entry.
	private base_callback?: IntersectionObserverCallback;
	// A secondary map of callbacks that are run against individual nodes.
	private callbacks: Map<Element, (entry: IntersectionObserverEntry) => void> = new Map();
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
