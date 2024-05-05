"use client";
import React, { useEffect, useRef, useState } from "react";

interface counterTypes {
  start: number;
  end: number;
  duration: number;
}

export const Counter = ({ start, end, duration }: counterTypes) => {
  const [currentCount, setCurrentCount] = useState(start);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const startCounting = () => {
      startTimeRef.current = startTimeRef.current ?? Date.now();
      const updateCount = () => {
        const now = Date.now();
        const elapsedTime = now - (startTimeRef.current ?? 0);
        const progress = Math.min(1, elapsedTime / duration);
        const newCount = Math.floor(progress * (end - start) + start);

        setCurrentCount(newCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      requestAnimationFrame(updateCount);
    };
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
          }
        },
        {
          /* options */
        }
      );

      observer.observe(document.getElementById("counter")!);

      return () => {
        observer.disconnect();
      };
    } catch (error) {
      console.error("Error creating IntersectionObserver:", error);
    }
  }, [start, end, duration]);

  return <span>{currentCount}</span>;
};
