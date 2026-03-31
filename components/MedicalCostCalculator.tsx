"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type PracticeType = "dental" | "medical" | "asc";
type BudgetLevel = 0 | 1 | 2; // Economy, Standard, Premium

interface CostData {
  basePerRoom: number;
  costPerSqFt: number[];
  dailyRevenue: number;
  label: string;
  roomLabel: string;
}

const DATA: Record<PracticeType, CostData> = {
  dental: {
    label: "Dental Office",
    roomLabel: "Operatories",
    basePerRoom: 450,
    costPerSqFt: [170, 215, 280],
    dailyRevenue: 2500,
  },
  medical: {
    label: "Medical Clinic",
    roomLabel: "Exam Rooms",
    basePerRoom: 400,
    costPerSqFt: [155, 200, 255],
    dailyRevenue: 2000,
  },
  asc: {
    label: "ASC / Surgical",
    roomLabel: "Operating Rooms",
    basePerRoom: 1200,
    costPerSqFt: [385, 485, 650],
    dailyRevenue: 15000,
  },
};

export default function MedicalCostCalculator({ defaultType = "dental" }: { defaultType?: PracticeType }) {
  const [type, setType] = useState<PracticeType>(defaultType);
  const [rooms, setRooms] = useState(5);
  const [budget, setBudget] = useState<BudgetLevel>(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const calculations = useMemo(() => {
    const d = DATA[type];
    const sqft = rooms * d.basePerRoom;
    const cost = sqft * d.costPerSqFt[budget];
    const lowEnd = cost * 0.9;
    const highEnd = cost * 1.1;
    // ROI Gap based on UDGOK's 90-day speed advantage
    const roiGap = rooms * d.dailyRevenue * 65; // Using 65 billable days (approx 3 months)
    
    return { sqft, lowEnd, highEnd, roiGap, total: cost };
  }, [type, rooms, budget]);

  if (!isClient) return <div className="min-h-[400px] w-full bg-white/5 animate-pulse rounded-3xl" />;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-[#FF4800]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF4800] animate-pulse" />
            <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/70">Interactive Feasibility Model</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Clinical <span className="text-[#FF4800]">Cost Modeling</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base">
            Instant range-based estimates for your clinical build-out. Tailored for practice owners focused on ROI and delivery speed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
            {/* Type Selector */}
            <div className="mb-10">
              <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#FF4800] mb-4 block">Practice Type</label>
              <div className="grid grid-cols-3 gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/5">
                {(Object.keys(DATA) as PracticeType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`py-3 px-2 rounded-xl text-[0.65rem] font-bold uppercase tracking-wider transition-all ${
                      type === t ? "bg-[#FF4800] text-white shadow-lg" : "text-white/40 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {DATA[t].label.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Room Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#FF4800]">{DATA[type].roomLabel}</label>
                <span className="text-2xl font-black text-white">{rooms}</span>
              </div>
              <input
                type="range"
                min="3"
                max="20"
                step="1"
                value={rooms}
                onChange={(e) => setRooms(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF4800]"
              />
              <div className="flex justify-between mt-2 text-[0.6rem] font-bold text-white/20 uppercase tracking-widest">
                <span>3 Rooms</span>
                <span>20 Rooms</span>
              </div>
            </div>

            {/* Budget Toggle */}
            <div>
              <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#FF4800] mb-4 block">Finish Level</label>
              <div className="grid grid-cols-3 gap-2">
                {["Economy", "Standard", "Premium"].map((label, i) => (
                  <button
                    key={label}
                    onClick={() => setBudget(i as BudgetLevel)}
                    className={`py-3 rounded-xl text-[0.65rem] font-bold uppercase transition-all border ${
                      budget === i 
                        ? "bg-white/10 border-[#FF4800] text-white" 
                        : "border-white/5 text-white/30 hover:border-white/20"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visualization Panel */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Result Card */}
            <div className="bg-gradient-to-br from-[#FF4800] to-orange-600 rounded-[2.5rem] p-10 md:p-12 shadow-2xl shadow-[#FF4800]/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14h-4v-4H5V9h5V5h4v4h5v4h-5v4z"/></svg>
              </div>
              <div className="relative z-10">
                <p className="text-[0.7rem] font-black uppercase tracking-[0.3em] text-white/80 mb-4">Estimated Investment Range</p>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-8">
                  <h3 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white tracking-tighter leading-none">
                    {formatter.format(calculations.lowEnd)}
                  </h3>
                  <span className="text-xl md:text-2xl font-bold text-white/40 tracking-tight">—</span>
                  <h3 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white tracking-tighter leading-none">
                    {formatter.format(calculations.highEnd)}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/20">
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-widest text-white/60 mb-1">Target Footprint</p>
                    <p className="text-xl font-black text-white">{calculations.sqft.toLocaleString()} <span className="text-sm font-bold opacity-60 uppercase">sq ft</span></p>
                  </div>
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-widest text-white/60 mb-1">Cost Per Room</p>
                    <p className="text-xl font-black text-white">{formatter.format(calculations.total / rooms)}<span className="text-sm font-bold opacity-60 uppercase">/avg</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Advantage Card */}
            <div className="bg-[#0B061B] border border-[#FF4800]/30 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4800]/5 rounded-bl-full pointer-events-none" />
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-[#FF4800]/20 text-[#FF4800] text-[0.6rem] font-black rounded uppercase tracking-widest">UDGOK Advantage</span>
                  </div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2">Revenue-Ready Impact</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    By delivering your facility <span className="text-[#FF4800] font-bold">3 months faster</span> than traditional firms, we secure an additional:
                  </p>
                </div>
                <div className="flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6 text-center min-w-[200px]">
                  <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#FF4800] mb-1">Captured Revenue</p>
                  <p className="text-3xl font-black text-white tracking-tighter">+{formatter.format(calculations.roiGap)}</p>
                  <p className="text-[0.55rem] font-bold text-white/30 uppercase mt-2">Opening Advantage</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link 
                href="/contact" 
                className="w-full md:flex-1 bg-[#FF4800] hover:bg-orange-600 text-white font-black text-xs uppercase tracking-[0.2em] py-6 rounded-2xl text-center shadow-xl shadow-[#FF4800]/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                Inquire About This Model →
              </Link>
              <div className="hidden md:flex items-center gap-3 px-6 text-white/30 italic text-xs">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Pricing includes all clinical MEP & specialized medical rough-ins.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
