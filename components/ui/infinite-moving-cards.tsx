"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  className,
}: {
  items: { svg: React.ReactNode; color?: string }[];
  className?: string;
}) => {
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    // Duplicate items 3 times for smooth endless scroll
    const originalChildren = Array.from(scrollerRef.current.children);
    for (let i = 0; i < 2; i++) {
      originalChildren.forEach((item) => {
        scrollerRef.current?.appendChild(item.cloneNode(true));
      });
    }

    let scrollPos = 0;
    let frame: number;

    const pxPerFrame = 0.5; // slow speed

    function animate() {
      if (scrollerRef.current) {
        scrollPos += pxPerFrame;
        const maxScroll = scrollerRef.current.scrollWidth / 3;
        scrollPos %= maxScroll;

        scrollerRef.current.style.transform = `translateX(-${scrollPos}px)`;
      }
      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden z-20 max-w-7xl [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className="flex flex-nowrap gap-4 py-4 w-max min-w-full"
        style={{ willChange: "transform" }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-center items-center w-[120px] h-[120px] shrink-0"
          >
            <div
              className="flex justify-center items-center w-10 h-10"
              style={{
                filter: `drop-shadow(0 0 10px ${
                  item.color || "#ffffff"
                }) drop-shadow(0 0 15px ${item.color || "#ffffff"})`,
              }}
            >
              {item.svg}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
