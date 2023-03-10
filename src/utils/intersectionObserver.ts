const setupIntersectionCallback = (
  forEachIntersection: (entry: IntersectionObserverEntry) => void
) => {
  return (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach(forEachIntersection);
  };
};

export const createObserver = (
  forEachIntersection: (entry: IntersectionObserverEntry) => void,
  elementsTobeObserved: Element[],
  rootMargin = "0px"
) => {
  const intersectionCallback = setupIntersectionCallback(forEachIntersection);
  const options = {
    root: null,
    rootMargin: rootMargin,
    threshold: 0,
  };

  const observer = new IntersectionObserver(intersectionCallback, options);
  elementsTobeObserved.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    elementsTobeObserved.forEach((element) => {
      observer.unobserve(element);
    });
  };
};
