import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * ScrollReveal component to trigger dynamic animations on scroll.
 * Animations supported: 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'fade'
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = '',
  style = {}
}) {
  const [ref, isVisible] = useScrollReveal({ threshold });

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return {
            opacity: 0,
            transform: 'translateY(40px)',
            transition: baseTransition
          };
        case 'fade-down':
          return {
            opacity: 0,
            transform: 'translateY(-40px)',
            transition: baseTransition
          };
        case 'fade-left':
          return {
            opacity: 0,
            transform: 'translateX(50px)',
            transition: baseTransition
          };
        case 'fade-right':
          return {
            opacity: 0,
            transform: 'translateX(-50px)',
            transition: baseTransition
          };
        case 'zoom-in':
          return {
            opacity: 0,
            transform: 'scale(0.88)',
            transition: baseTransition
          };
        case 'fade':
        default:
          return {
            opacity: 0,
            transition: baseTransition
          };
      }
    }

    return {
      opacity: 1,
      transform: 'none',
      transition: baseTransition
    };
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getAnimationStyles(),
        ...style
      }}
    >
      {children}
    </div>
  );
}
