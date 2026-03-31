"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EstimateData {
  type: "dental" | "medical" | "asc";
  rooms: number;
  lowEnd: number;
  highEnd: number;
  roiGap: number;
}

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: EstimateData;
}

export default function EstimateModal({ isOpen, onClose, data }: EstimateModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cell: "",
    specialty: "",
    projectType: "New Build",
    additionalInfo: "",
  });

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);
      setErrorMessage("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ...data }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => onClose(), 3000);
      } else {
        const errorData = await response.json();
        const msg = errorData.message ? `${errorData.error}: ${errorData.message}` : errorData.error;
        setErrorMessage(msg || "Failed to send estimate. Please call (918) 520-3823.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0B061B]/80 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF4800] to-transparent" />

            <div className="p-8 md:p-12">
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                ✕
              </button>

              {!isSuccess ? (
                <>
                  {/* Header */}
                  <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-0.5 bg-[#FF4800]/20 text-[#FF4800] text-[0.6rem] font-black rounded uppercase tracking-widest">
                        Step {step} of 2
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none mb-4">
                      Finalize Your <span className="text-[#FF4800]">Feasibility Brief</span>
                    </h2>
                    <p className="text-white/40 text-sm">
                      Modeling a <span className="text-white font-bold">{data.rooms} {data.type === "dental" ? "Operatory" : "Clinical"} {data.type.toUpperCase()}</span> facility.
                    </p>
                    {errorMessage && (
                      <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-xs italic">
                        {errorMessage}
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        {/* Page Specific Logic */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="text-[0.6rem] font-bold uppercase tracking-widest text-[#FF4800] mb-2 block">Focus / Specialty</label>
                            <input
                              required
                              type="text"
                              placeholder={data.type === "dental" ? "e.g. General, Ortho, Pediatrics" : "e.g. Primary Care, Cardiology"}
                              value={formData.specialty}
                              onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#FF4800] outline-none transition-all placeholder:text-white/20"
                            />
                          </div>
                          <div>
                            <label className="text-[0.6rem] font-bold uppercase tracking-widest text-[#FF4800] mb-2 block">Project Type</label>
                            <select
                              value={formData.projectType}
                              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#FF4800] outline-none transition-all appearance-none"
                            >
                              <option className="bg-[#0B061B]">New Ground-Up Build</option>
                              <option className="bg-[#0B061B]">Tenant Build-Out (Renovation)</option>
                              <option className="bg-[#0B061B]">Facility Expansion</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="text-[0.6rem] font-bold uppercase tracking-widest text-[#FF4800] mb-2 block">Clinical Requirements / Notes</label>
                          <textarea
                            rows={3}
                            placeholder={data.type === "asc" ? "e.g. AAAHC/CMS Accreditation requirements..." : "e.g. Specific X-ray or Sterile processing needs..."}
                            value={formData.additionalInfo}
                            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#FF4800] outline-none transition-all placeholder:text-white/20 resize-none"
                          />
                        </div>

                        <button
                          type="button"
                          onClick={nextStep}
                          className="w-full bg-white/5 border border-white/10 hover:border-white/30 text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl transition-all"
                        >
                          Next Step →
                        </button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="md:col-span-2">
                             <label className="text-[0.6rem] font-bold uppercase tracking-widest text-[#FF4800] mb-2 block">Full Name</label>
                             <input
                               required
                               type="text"
                               placeholder="Dr. Jordan Smith"
                               value={formData.name}
                               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                               className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#FF4800] outline-none transition-all placeholder:text-white/20"
                             />
                          </div>
                          <div>
                            <label className="text-[0.6rem] font-bold uppercase tracking-widest text-[#FF4800] mb-2 block">Direct Email</label>
                            <input
                              required
                              type="email"
                              placeholder="jsmith@clinic.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#FF4800] outline-none transition-all placeholder:text-white/20"
                            />
                          </div>
                          <div>
                            <label className="text-[0.6rem] font-bold uppercase tracking-widest text-[#FF4800] mb-2 block">Cell / Direct Phone</label>
                            <input
                              required
                              type="tel"
                              placeholder="(918) 555-0100"
                              value={formData.cell}
                              onChange={(e) => setFormData({ ...formData, cell: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#FF4800] outline-none transition-all placeholder:text-white/20"
                            />
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="bg-white/5 border border-white/10 hover:border-white/30 text-white/40 hover:text-white font-black text-xs uppercase tracking-[0.2em] py-5 px-8 rounded-2xl transition-all"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-[#FF4800] hover:bg-orange-600 text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl shadow-[#FF4800]/20 transition-all disabled:opacity-50"
                          >
                            {isSubmitting ? "Generating Brief..." : "Send Detailed Brief"}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-[#FF4800]/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-[#FF4800]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Brief Sent To Estimator</h2>
                  <p className="text-white/40 max-w-sm mx-auto mb-8">
                    Yasir and the clinical team will review your {data.type} model and contact you within 24 hours to discuss the feasibility study.
                  </p>
                  <button 
                    onClick={onClose}
                    className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF4800] hover:text-white transition-colors"
                  >
                    Close Feasibility Model
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
