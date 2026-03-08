"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const faqs = [
  { q: "How long does a typical medical office build take?", a: "Most medical office construction projects range from 3–6 months depending on scope, permitting timelines, and finish selections." },
  { q: "Do you work on tenant improvement projects?", a: "Yes. We specialize in tenant improvements for both healthcare and commercial spaces, working within existing building constraints." },
  { q: "Are you licensed in Texas?", a: "Yes. UDGOK is licensed in both Oklahoma and Texas, allowing us to serve the Dallas-Fort Worth metro area." },
  { q: "What sizes of projects do you handle?", a: "We handle projects from $100K tenant improvements to $10M+ ground-up healthcare campuses." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", projectType: "", timeline: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-[#0B061B] min-h-screen text-white pt-24">
      
      {/* High-End Split Pane Layout */}
      <section className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-[5fr_7fr] w-full border-y border-white/10">
        
        {/* Left Side: Map / Global Intelligence */}
        <div className="relative w-full h-full min-h-[500px] lg:min-h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
          <Image 
            src="/images/ai-contact-map.png" 
            alt="UDGOK Operation Map" 
            fill 
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B061B] via-[#0B061B]/40 to-transparent mix-blend-multiply" />
          
          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[clamp(3rem,5vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                Global<br/><span className="text-[#FF4800]">Reach</span>.<br/>Local<br/>Precision.
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl max-w-sm mt-auto shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <div className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase mb-1">Direct Line</div>
                  <Link href="tel:+19185203823" className="text-xl font-bold tracking-tight hover:text-[#FF4800] transition-colors">(918) 520-3823</Link>
                </div>
                <div>
                  <div className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase mb-1">Project Inquiries</div>
                  <Link href="mailto:projects@udgok.com" className="text-xl font-bold tracking-tight hover:text-[#FF4800] transition-colors">projects@udgok.com</Link>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[#FF4800] text-xs font-bold tracking-[0.2em] uppercase mb-1">Headquarters</div>
                  <address className="text-sm font-medium text-white/80 not-italic leading-relaxed">
                    7739 E 38th Street, Ste F<br/>
                    Tulsa, Oklahoma 74145
                  </address>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Form / Glassmorphism */}
        <div className="bg-[#0B061B] flex flex-col justify-center p-8 md:p-16 relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl w-full"
          >
            <div className="mb-12">
              <span className="inline-block py-1 px-3 border border-[#FF4800]/50 rounded-full text-xs font-bold tracking-[0.2em] text-[#FF4800] uppercase bg-[#FF4800]/10 mb-4">
                Secure Intake Portal
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Initiate Your Project</h2>
              <p className="text-white/50 text-base leading-relaxed">
                Provide the details of your upcoming medical, dental, or commercial build. A project director will review your submission and contact you within 24 hours.
              </p>
            </div>

            {status === "success" ? (
              <div className="bg-white/5 border border-[#FF4800]/50 p-12 rounded-3xl text-center backdrop-blur-sm">
                <div className="text-5xl mb-6">✓</div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Transmission Received</h3>
                <p className="text-white/60">Your project details are secure. Our team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Legal Name</label>
                    <input 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF4800] transition-colors" 
                      placeholder="Dr. Jane Smith" 
                      value={form.name} 
                      onChange={(e) => setForm({ ...form, name: e.target.value })} 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Direct Email</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF4800] transition-colors" 
                      placeholder="jane@clinic.com" 
                      value={form.email} 
                      onChange={(e) => setForm({ ...form, email: e.target.value })} 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Phone</label>
                    <input 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF4800] transition-colors" 
                      placeholder="(918) 555-0000" 
                      value={form.phone} 
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Practice Name</label>
                    <input 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF4800] transition-colors" 
                      placeholder="Tulsa Medical Group" 
                      value={form.company} 
                      onChange={(e) => setForm({ ...form, company: e.target.value })} 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Project Classification</label>
                    <select 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF4800] transition-colors appearance-none" 
                      value={form.projectType} 
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    >
                      <option className="bg-[#0B061B]" value="">Select Classification</option>
                      <option className="bg-[#0B061B]">Medical Facility</option>
                      <option className="bg-[#0B061B]">Dental Construction</option>
                      <option className="bg-[#0B061B]">Oral Surgery Suite</option>
                      <option className="bg-[#0B061B]">Medical Gas Installation</option>
                      <option className="bg-[#0B061B]">Commercial Improvement</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Target Timeline</label>
                    <select 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF4800] transition-colors appearance-none" 
                      value={form.timeline} 
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                    >
                      <option className="bg-[#0B061B]" value="">Select Timeline</option>
                      <option className="bg-[#0B061B]">Immediate (ASAP)</option>
                      <option className="bg-[#0B061B]">1–3 Months</option>
                      <option className="bg-[#0B061B]">3–6 Months</option>
                      <option className="bg-[#0B061B]">6+ Months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Budget Parameter</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF4800] transition-colors appearance-none" 
                    value={form.budget} 
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  >
                    <option className="bg-[#0B061B]" value="">Select Range</option>
                    <option className="bg-[#0B061B]">Under $500K</option>
                    <option className="bg-[#0B061B]">$500K – $1M</option>
                    <option className="bg-[#0B061B]">$1M – $2M</option>
                    <option className="bg-[#0B061B]">$2M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Scope Details</label>
                  <textarea 
                    required 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF4800] transition-colors resize-none" 
                    placeholder="Describe the square footage, location, and specific medical/dental requirements..." 
                    value={form.message} 
                    onChange={(e) => setForm({ ...form, message: e.target.value })} 
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-4 px-8 py-4 bg-[#FF4800] hover:bg-orange-500 text-white font-bold text-sm tracking-[0.2em] uppercase rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed group w-full md:w-auto self-start flex items-center gap-4 justify-center"
                >
                  {status === "sending" ? "Encrypting Data..." : "Transmit Details"}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                
                {status === "error" && (
                  <p className="text-red-500 text-sm mt-2">Transmission failed. Please call our direct line.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Modern FAQ Grid */}
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Operations <span className="text-[#FF4800]">FAQ</span></h2>
          <p className="text-white/50 text-lg">Frequently accessed procedural knowledge.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="group cursor-default">
              <h4 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-[#FF4800] transition-colors">{faq.q}</h4>
              <p className="text-white/60 leading-relaxed text-base">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
