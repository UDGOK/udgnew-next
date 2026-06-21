"use client";

import { useRef, useEffect, useState } from "react";

interface VideoShowcaseProps {
  /** Path to the video file in /public */
  src: string;
  /** Section label above the heading (e.g., "Video Tour") */
  label?: string;
  /** First word of the heading (white) */
  headingStart?: string;
  /** Second word of the heading (orange accent) */
  headingAccent?: string;
  /** Whether to mask the bottom-right watermark */
  hideWatermark?: boolean;
  /** Aspect ratio class (default: aspect-video i.e. 16:9) */
  aspectClass?: string;
}

/**
 * Premium autoplaying video component with IntersectionObserver.
 *
 * - Plays only when ≥ 30% of the video is in the viewport.
 * - Pauses automatically when scrolled away to save resources.
 * - Masks the bottom-right watermark with a gradient + brand overlay.
 * - Muted + loop + playsInline for maximum browser compatibility.
 */
export default function VideoShowcase({
  src,
  hideWatermark = true,
  aspectClass = "aspect-video",
}: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // 30% visible before play
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {
        /* autoplay blocked — silent fail */
      });
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/50 bg-black">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className={`w-full ${aspectClass} object-cover`}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* ── Watermark mask: gradient overlay on bottom-right corner ── */}
      {hideWatermark && (
        <>
          {/* Gradient blur that naturally fades into the dark theme */}
          <div
            className="absolute bottom-0 right-0 w-48 h-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top left, rgba(11,6,27,0.95) 0%, rgba(11,6,27,0.85) 30%, rgba(11,6,27,0.4) 60%, transparent 100%)",
            }}
          />
          {/* Branding overlay replacing the watermark */}
          <div className="absolute bottom-3 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/10 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-[#FF4800] animate-pulse" />
            <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/60">
              UDGOK
            </span>
          </div>
        </>
      )}

      {/* ── Play state indicator (top-left) ── */}
      <div className="absolute top-3 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 pointer-events-none transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0.4 }}
      >
        <span
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            isVisible ? "bg-green-400 animate-pulse" : "bg-white/30"
          }`}
        />
        <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/50">
          {isVisible ? "Playing" : "Paused"}
        </span>
      </div>
    </div>
  );
}
