"use client";

import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  text?: string;
  fontSize?: number;
  speed?: number;
  className?: string;
}

export default function Marquee({
  text = "TOO GOOD FOR NAPKINS",
  fontSize = 4,
  speed = 100,
  className = "",
}: MarqueeProps) {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);

  // Repeat the text infinitely - enough copies to fill the entire path multiple times
  const repeatedText = Array(100)
    .fill(text + "    ")
    .join("");

  // Animation loop - seamless infinite scrolling
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined && !isPaused) {
      const deltaTime = time - previousTimeRef.current;
      setOffset((prev) => {
        const increment = (deltaTime / speed) * 3;
        // Loop back seamlessly when reaching the end
        const newOffset = prev + increment;
        return newOffset >= 4000 ? newOffset - 4000 : newOffset;
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isPaused, speed]);

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <svg
        className="w-full"
        viewBox="0 0 1200 200"
        preserveAspectRatio="xMidYMid slice"
        style={{ height: "auto", minHeight: "150px" }}
      >
        <defs>
          <path
            id="wave-path-marquee"
            d="M 0,100 Q 150,50 300,100 Q 450,150 600,100 Q 750,50 900,100 L 5400,100"
            fill="none"
          />
        </defs>

        <text
          fill="currentColor"
          fontSize={fontSize * 16}
          fontFamily="inherit"
          fontWeight="inherit"
        >
          <textPath href="#wave-path-marquee" startOffset={-offset}>
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
