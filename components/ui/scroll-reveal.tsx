"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export function ScrollReveal({
  children,
  className,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasTriggered(true);
          }, delay);
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold, triggerOnce, hasTriggered]);

  const animationClasses = {
    fadeIn: 'opacity-0 transition-opacity',
    slideUp: 'opacity-0 translate-y-8 transition-all',
    slideLeft: 'opacity-0 -translate-x-8 transition-all',
    slideRight: 'opacity-0 translate-x-8 transition-all',
    scaleIn: 'opacity-0 scale-95 transition-all',
    rotateIn: 'opacity-0 rotate-12 transition-all',
  };

  const visibleClasses = {
    fadeIn: 'opacity-100',
    slideUp: 'opacity-100 translate-y-0',
    slideLeft: 'opacity-100 translate-x-0',
    slideRight: 'opacity-100 translate-x-0',
    scaleIn: 'opacity-100 scale-100',
    rotateIn: 'opacity-100 rotate-0',
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        animationClasses[animation],
        isVisible && visibleClasses[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {children}
    </div>
  );
}