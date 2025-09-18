"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <div className="relative w-full h-full">
      <svg
        ref={svgRef}
        width="100%"
        height="70%"
        viewBox="0 0 400 120"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className="select-none w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id="textGradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="25%"
          >
            {hovered && (
              <>
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="25%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="75%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </>
            )}
          </linearGradient>

          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="25%"
            initial={{ cx: "50%", cy: "50%" }}
            animate={maskPosition}
            transition={{ duration: duration ?? 0, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>
          <mask id="textMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#revealMask)"
            />
          </mask>
        </defs>
        
        {/* Faded header text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="fill-transparent font-[helvetica] text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold stroke-neutral-800"
          style={{ opacity: hovered ? 0.7 : 0 }}
        >
          {text}
        </text>
        
        {/* Animated stroke text */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="fill-transparent font-[helvetica] text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold stroke-neutral-800"
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{
            strokeDashoffset: 0,
            strokeDasharray: 1000,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.text>
        
        {/* Gradient masked text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.3"
          mask="url(#textMask)"
          className="fill-transparent font-[helvetica] text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold"
        >
          {text}
        </text>
      </svg>

      {/* Copyright text - modern styling */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6 md:pb-8 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm md:text-base lg:text-lg font-medium text-neutral-600 dark:text-neutral-400 tracking-wide bg-gradient-to-r from-neutral-500 to-neutral-700 dark:from-neutral-400 dark:to-neutral-500 bg-clip-text text-transparent">
            © 2025 Petresia. Built in Africa, for the world.
          </p>
        </motion.div>
      </div>
    </div>
  );
};