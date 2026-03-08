"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function parse(raw: string): { prefix: string; num: number; suffix: string } {
  const prefix = raw.startsWith("$") ? "$" : "";
  const rest = prefix ? raw.slice(1) : raw;
  const match = rest.match(/^([\d.]+)(.*)/);
  if (!match) return { prefix: "", num: 0, suffix: raw };
  return { prefix, num: parseFloat(match[1]), suffix: match[2] };
}

export default function CountUp({ value, duration = 1.8 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });
  const [display, setDisplay] = useState<string>(() => {
    const { prefix, suffix } = parse(value);
    return prefix + "0" + suffix;
  });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const { prefix, num, suffix } = parse(value);
    if (num === 0) { setDisplay(value); return; }

    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num * 10) / 10;
      const formatted = Number.isInteger(current) ? String(Math.floor(current)) : String(current);
      setDisplay(prefix + formatted + suffix);
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(value);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}</span>;
}
