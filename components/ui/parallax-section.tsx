"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  backgroundImage?: string;
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
  direction = 'up',
  backgroundImage,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setOffset(direction === 'up' ? rate : -rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div
      ref={sectionRef}
      className={cn('relative overflow-hidden', className)}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offset}px)`,
          }}
        />
      )}
      
      <div
        className="relative z-10"
        style={{
          transform: `translateY(${offset * 0.3}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}