import React from "react";

interface StarProps {
  width: number;
  rotate?: number;
  className?: string;
}

export default function Star({ width, rotate = 0, className }: StarProps) {
  return (
    <img
      className={`${className} select-none`}
      width={width}
      src="/star.png"
      alt="star"
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}
