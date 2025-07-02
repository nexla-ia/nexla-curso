"use client";

import React, { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'tilt' | 'scale' | 'glow';
  parallaxEffect?: boolean;
  magneticEffect?: boolean;
}

export function AnimatedCard({
  children,
  className,
  hoverEffect = 'lift',
  parallaxEffect = false,
  magneticEffect = false,
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (magneticEffect) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) * 0.1;
      const deltaY = (y - centerY) * 0.1;

      setMousePosition({ x: deltaX, y: deltaY });
    }

    if (parallaxEffect) {
      const rotateX = (y - rect.height / 2) / 10;
      const rotateY = (rect.width / 2 - x) / 10;

      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);

    if (parallaxEffect && cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const cardClasses = cn(
    'card-modern transition-all duration-300 ease-out',
    {
      'hover-lift': hoverEffect === 'lift',
      'hover-tilt': hoverEffect === 'tilt',
      'hover-scale': hoverEffect === 'scale',
      'micro-glow': hoverEffect === 'glow',
    },
    className
  );

  return (
    <Card
      ref={cardRef}
      className={cardClasses}
      style={{
        transform: magneticEffect 
          ? `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
      
      {/* Hover overlay effect */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-300 rounded-lg pointer-events-none",
          { 'opacity-100': isHovered }
        )}
      />
    </Card>
  );
}