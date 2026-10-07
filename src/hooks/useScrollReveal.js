import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook to detect when an element enters the viewport with scroll.
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]}
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.once !== false) {
          observer.unobserve(element);
        }
      } else if (options.once === false) {
        setIsVisible(false);
      }
    }, {
      threshold: options.threshold || 0.15,
      rootMargin: options.rootMargin || '0px 0px -40px 0px',
      ...options
    });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
}

/**
 * Custom hook for smooth animated counter when entering viewport.
 */
export function useScrollCounter(end, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const finalValue = parseInt(end, 10);
    if (isNaN(finalValue)) return;

    const incrementTime = 20; // 50 fps
    const totalSteps = duration / incrementTime;
    const stepIncrement = finalValue / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= finalValue) {
        setCount(finalValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, trigger]);

  return count;
}
