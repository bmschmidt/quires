
export default class QuireObserver  {
  private observer:  IntersectionObserver;
  private base_callback : IntersectionObserverCallback;
  private callbacks: Map<Element, (entry: IntersectionObserverEntry) => void> = new Map();
  constructor(callback: IntersectionObserverCallback | undefined = (
    entries : IntersectionObserverEntry[],
    observer : IntersectionObserver | undefined) => (false && entries && observer) || undefined,
    options : IntersectionObserverInit | undefined
    ) {
    this.base_callback = callback;
    this.observer = new IntersectionObserver((entries, observer) => this.run_observe(entries, observer), options);
  }
  observe(node : Element, callback : (entry: IntersectionObserverEntry) => void) {
    this.callbacks.set(node, callback);
    this.observer.observe(node);
  }
  run_observe(entries : IntersectionObserverEntry[], observer = this.observer) {
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
