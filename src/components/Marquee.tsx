"use client";

import { useEffect, useRef, useState, useId } from "react";

interface MarqueeProps {
  text?: string;
  fontSize?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  speed?: number;
  className?: string;
}

export default function Marquee({
  text = "TOO GOOD FOR NAPKINS",
  fontSize = 4,
  waveFrequency = 4,
  waveAmplitude = 30,
  speed = 1,
  className = "",
}: MarqueeProps) {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  const uniqueId = useId();

  // SVG dimensions
  const viewBoxWidth = 2200;
  const wavelength = viewBoxWidth / waveFrequency;
  const svgHeight = waveAmplitude * 2 + 20;
  const centerY = svgHeight / 2;

  // Create wave path using smooth curves
  const createWavePath = () => {
    let path = `M 0,${centerY}`;

    for (let i = 0; i < waveFrequency * 3; i++) {
      const x1 = i * wavelength + wavelength / 4;
      const y1 = centerY + (i % 2 === 0 ? -waveAmplitude : waveAmplitude);
      const x2 = i * wavelength + (3 * wavelength) / 4;
      const y2 = centerY + (i % 2 === 0 ? waveAmplitude : -waveAmplitude);
      const x3 = (i + 1) * wavelength;
      const y3 = centerY;

      path += ` Q ${x1},${y1} ${x2},${y2} Q ${x2},${y2} ${x3},${y3}`;
    }

    return path;
  };

  const pathId = `wave-path-${uniqueId.replace(/:/g, '-')}`;

  // Animation loop
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined && !isPaused) {
      const deltaTime = time - previousTimeRef.current;
      setOffset((prev) => {
        const newOffset = prev + (deltaTime * speed * 0.05);
        return newOffset % (wavelength * 2);
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
        className="w-full h-auto"
        viewBox={`0 0 ${viewBoxWidth} ${svgHeight}`}
        preserveAspectRatio="xMidYMid meet"
        fill="currentColor"
      >
        <defs>
          <path id={pathId} d={createWavePath()} fill="none" />
        </defs>

        <text
          fontSize={fontSize * 16}
          fontFamily="inherit"
          fontWeight="inherit"
          textAnchor="start"
        >
          <textPath href={`#${pathId}`} startOffset={-offset}>
            {Array(12)
              .fill(text)
              .map((t, i) => (
                <tspan key={i}>
                  {t}
                  {"\u00A0\u00A0\u00A0\u00A0"}
                </tspan>
              ))}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
