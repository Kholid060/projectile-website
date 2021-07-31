export function useIntersect(intersectOptions = {}) {
  const listeners = [];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      listeners.forEach((listener) => {
        const listenerOptions =
          typeof listener === 'function' ? { callback: listener } : listener;
        const options = { ...intersectOptions, ...listenerOptions };

        if (options.onIntersect && entry.isIntersecting) {
          options.callback(entry);
        }

        if (options.once) {
          const { target } = entry;

          observer.unobserve(target);

          return;
        }

        options.callback(entry);
      });
    });
  }, intersectOptions);

  function observe(el, callback) {
    listeners.push(callback);
    observer.observe(el);
  }

  return {
    observe,
    unobserver: observer.unobserve,
    observer,
  };
}
