"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Helper function to generate random colors from the color array
const colors = [
  "--sky-300",
  "--pink-300",
  "--green-300",
  "--yellow-300",
  "--red-300",
  "--purple-300",
  "--blue-300",
  "--indigo-300",
  "--violet-300",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  // Limit the grid size to prevent performance issues
  const rows = 30; // Adjust this to reduce the number of rows rendered at once
  const cols = 30; // Adjust this to reduce the number of columns rendered at once

  // Cache the random color for hover effect
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Cache random colors to avoid recalculating them on each render
  const colorMap = useMemo(() => {
    return Array.from({ length: rows * cols }, getRandomColor);
  }, [rows, cols]);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {Array.from({ length: rows }).map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className="w-16 h-8 border-l border-slate-200 relative"
        >
          {Array.from({ length: cols }).map((_, j) => (
            <motion.div
              key={`col-${j}`}
              whileHover={{
                backgroundColor: `var(${colorMap[i * cols + j]})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              className="w-16 h-8 border-r border-t border-slate-200 relative"
              // onMouseEnter={() => setHoveredIndex(i * cols + j)}
              // onMouseLeave={() => setHoveredIndex(null)}
            >
              {i % 2 === 0 && j % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-200 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
