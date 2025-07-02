"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
  loop?: boolean;
}

export function TypewriterText({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
  className,
  loop = true,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetweenTexts);

      return () => clearTimeout(pauseTimer);
    }

    const targetText = texts[currentTextIndex];
    const currentLength = currentText.length;

    if (!isDeleting && currentLength < targetText.length) {
      // Typing
      const timer = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentLength + 1));
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isDeleting && currentLength === targetText.length) {
      // Pause before deleting
      setIsPaused(true);
    } else if (isDeleting && currentLength > 0) {
      // Deleting
      const timer = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentLength - 1));
      }, deleteSpeed);

      return () => clearTimeout(timer);
    } else if (isDeleting && currentLength === 0) {
      // Move to next text
      setIsDeleting(false);
      if (loop || currentTextIndex < texts.length - 1) {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    isPaused,
    texts,
    speed,
    deleteSpeed,
    delayBetweenTexts,
    loop,
  ]);

  return (
    <span className={cn('typewriter', className)}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}