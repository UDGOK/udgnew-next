"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  style?: React.CSSProperties;
  className?: string;
  duration?: number;
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  style,
  className,
  duration = 0.8,
}: AnimateInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 48 : direction === "down" ? -48 : 0,
      x: direction === "left" ? -48 : direction === "right" ? 48 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
