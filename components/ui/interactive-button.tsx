"use client";

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  magneticEffect?: boolean;
  rippleEffect?: boolean;
  glowEffect?: boolean;
}

export function InteractiveButton({
  variant = 'primary',
  size = 'md',
  children,
  magneticEffect = true,
  rippleEffect = true,
  glowEffect = false,
  className,
  onClick,
  ...props
}: InteractiveButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magneticEffect || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setMousePosition({ x: x * 0.1, y: y * 0.1 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (rippleEffect && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple = {
        id: Date.now(),
        x,
        y,
      };

      setRipples(prev => [...prev, newRipple]);

      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    }

    onClick?.(e);
  };

  const baseClasses = cn(
    "relative overflow-hidden transition-all duration-300 ease-out",
    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-ghost': variant === 'ghost',
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
      'ai-glow': glowEffect,
    },
    className
  );

  return (
    <Button
      ref={buttonRef}
      className={baseClasses}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {children}
      
      {/* Ripple Effect */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animationDuration: '0.6s',
          }}
        />
      ))}
    </Button>
  );
}