"use client";
import { useEffect, useRef } from "react";

export default function ScrollUI() {
  const barRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled =
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100;
      if (barRef.current) barRef.current.style.width = `${scrolled}%`;
      if (btnRef.current) {
        btnRef.current.classList.toggle("visible", window.scrollY > 300);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={barRef} className="scroll-progress" aria-hidden />
      <button
        ref={btnRef}
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
