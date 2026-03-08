"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const serviceAreas = [
  { href: "/dallas-medical-construction", label: "Dallas-Fort Worth" },
  { href: "/tulsa-medical-construction", label: "Tulsa Medical" },
  { href: "/tulsa-ok-design-build", label: "Tulsa" },
  { href: "/oklahoma-city-medical-construction", label: "Oklahoma City" },
];

// Content for the spatial blueprint menu
const menuContent = {
  services: {
    title: "Capabilities",
    items: [
      { top: "Medical", sub: "Offices & Clinics", href: "/medical-office-design-build-tulsa", img: "/images/ai-medical-exterior.png" },
      { top: "Dental", sub: "Practices & Suites", href: "/dental-office-construction-tulsa", img: "/images/ai-dental-interior.png" },
      { top: "Surgical", sub: "Oral & Maxillofacial", href: "/oral-surgeon-office-construction-tulsa", img: "/images/ai-surgery-suite.png" },
      { top: "Specialty", sub: "Medical Gas Systems", href: "/medical-gas-installation", img: "/images/modern-medical-office-building-exterior-sunny-day.jpg" },
      { top: "Commercial", sub: "Retail & Build-Outs", href: "/tenant-improvements", img: "/images/ai-construction-mep.png" },
    ]
  },
  company: {
    title: "The Firm",
    items: [
      { top: "Firm", sub: "Our Story & Vision", href: "/about", img: "/images/ai_commercial_retail_plaza.png" },
      { top: "Safety", sub: "Protocols & Standards", href: "/safety-program", img: "/images/ai_commercial_retail_plaza.png" },
      { top: "Network", sub: "Partners & Affiliates", href: "/partners", img: "/images/IMG_7623.jpeg" },
      { top: "Trade", sub: "Subcontractor Portal", href: "/subcontractors", img: "/images/medical-office-design-build.png" },
    ]
  },
  resources: {
    title: "Intelligence",
    items: [
      { top: "Insights", sub: "Knowledge Center", href: "/resources", img: "/images/IMG_7609.jpeg" },
      { top: "Tools", sub: "Calculators", href: "/tools", img: "/images/tools-hero.png" },
      { top: "Future", sub: "AI & Robotics", href: "/ai-robotics", img: "/images/ring-futuristic.png" },
      { top: "Guides", sub: "For Developers", href: "/guide-developers", img: "/images/ai_tulsa_skyline_architecture.png" },
    ]
  }
};

type MenuKey = "services" | "company" | "resources" | null;

export default function Navigation() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    setHoveredItem(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href;

  // Render the fullscreen spatial blueprint overlay
  const renderBlueprintMenu = () => {
    if (!activeMenu) return null;
    const data = menuContent[activeMenu];
    const activeImage = hoveredItem !== null ? data.items[hoveredItem].img : data.items[0].img;

    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: "80px",
          left: 0,
          width: "100%",
          height: "auto",
          minHeight: "500px",
          maxHeight: "85vh",
          background: "#0B061B", // Solid dark ink
          zIndex: 9999, // Ensure it sits above absolutely everything
          display: "flex",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          overflow: "hidden",
          boxShadow: "0 30px 60px rgba(0,0,0,0.7)"
        }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button 
          onClick={() => setActiveMenu(null)}
          title="Close Menu"
          style={{ position: "absolute", top: "1.5rem", right: "2rem", zIndex: 100, border: "none", background: "rgba(255,255,255,0.05)", color: "#fff", padding: "0.6rem 1.2rem", borderRadius: "100px", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FF4800"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
        >
          ✕ Close
        </button>
        {/* Left Side: Giant Typography Links */}
        <div style={{ flex: 1, padding: "4rem 8rem", display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.1 }}
            style={{ fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: "#FF4800", marginBottom: "3rem" }}
          >
            {data.title}
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {data.items.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href}
                onMouseEnter={() => setHoveredItem(idx)}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", opacity: hoveredItem === null || hoveredItem === idx ? 1 : 0.3, transition: "opacity 0.3s ease", transform: hoveredItem === idx ? "translateX(20px)" : "translateX(0)", transitionProperty: "opacity, transform" }}>
                  <span style={{ fontSize: "clamp(3rem, 5vw, 6rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", color: "#fff", lineHeight: 0.9, transition: "color 0.3s ease" }}>
                    {item.top} {hoveredItem === idx && <span style={{ color: "#FF4800", fontSize: "0.6em", verticalAlign: "middle" }}>→</span>}
                  </span>
                  <span style={{ fontSize: "1rem", fontWeight: 500, letterSpacing: "0.05em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
                    {item.sub}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Service Areas Mini Links at bottom if in services */}
          {activeMenu === "services" && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              style={{ marginTop: "auto", paddingTop: "4rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}
            >
              {serviceAreas.map(a => (
                <Link key={a.href} href={a.href} style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4800")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                  {a.label}
                </Link>
              ))}
            </motion.div>
          )}
        </div>

        {/* Right Side: Spatial Image/Blueprint Reveal */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden", borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
           {/* Blueprint grid background */}
           <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px", zIndex: 0 }} />
           
           <AnimatePresence mode="popLayout">
             <motion.div
               key={activeImage}
               initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
               animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
               exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.2 } }}
               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
               style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem" }}
             >
               <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "24px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
                 <Image src={activeImage} alt="Project Preview" fill style={{ objectFit: "cover" }} />
                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,6,27,0.8) 0%, transparent 50%)" }} />
                 {/* Wireframe overlay effect for that blueprint feel */}
                 <div style={{ position: "absolute", inset: 0, border: "2px solid rgba(255,72,0,0.3)", borderRadius: "24px", mixBlendMode: "overlay" }} />
               </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full transition-all duration-300"
        style={{
          zIndex: 10000,
          background: activeMenu ? "#0B061B" : (scrolled ? "rgba(11, 6, 27, 0.98)" : "rgba(255, 72, 0, 0.8)"),
          backdropFilter: activeMenu ? "none" : "blur(16px)",
          WebkitBackdropFilter: activeMenu ? "none" : "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0)",
          height: "80px",
        }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div
          style={{ maxWidth: "1800px", margin: "0 auto", height: "100%" }}
          className="flex justify-between items-center px-8"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center z-[1002] logo-glow" onClick={() => setActiveMenu(null)}>
            <Image
              src="/images/logo-transparent.png"
              alt="UDGOK - Upscale Development Group"
              width={160}
              height={60}
              style={{ height: "56px", width: "auto", objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex h-full items-center">
            <NavLink href="/projects" active={isActive("/projects")}>
              Work
            </NavLink>

            <button
              className={`nav-link-btn ${activeMenu === "services" ? "text-orange" : ""}`}
              onMouseEnter={() => setActiveMenu("services")}
              style={{
                display: "flex", alignItems: "center", height: "100%", padding: "0 1.5rem", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase",
                color: activeMenu === "services" ? "#FF4800" : "rgba(255,255,255,0.85)", textDecoration: "none", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s ease",
              }}
            >
              Services
            </button>

            <button
              className="nav-link-btn"
              onMouseEnter={() => setActiveMenu("company")}
              style={{
                display: "flex", alignItems: "center", height: "100%", padding: "0 1.5rem", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase",
                color: activeMenu === "company" ? "#FF4800" : "rgba(255,255,255,0.85)", textDecoration: "none", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s ease",
              }}
            >
              Company
            </button>

            <button
              className="nav-link-btn"
              onMouseEnter={() => setActiveMenu("resources")}
              style={{
                display: "flex", alignItems: "center", height: "100%", padding: "0 1.5rem", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase",
                color: activeMenu === "resources" ? "#FF4800" : "rgba(255,255,255,0.85)", textDecoration: "none", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s ease",
              }}
            >
              Resources
            </button>

            <NavLink href="/contact" active={isActive("/contact")}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-[1002]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Inject Spatial Menu inside header so onMouseLeave covers it */}
        <AnimatePresence>
          {renderBlueprintMenu()}
        </AnimatePresence>
      </header>

      {/* ── Premium Fullscreen Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: "fixed", inset: 0, zIndex: 10001, background: "#0B061B", overflowY: "auto", overscrollBehavior: "contain" }}
          >
            {/* Mobile Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px", padding: "0 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <Link href="/" onClick={() => setMobileOpen(false)} className="logo-glow">
                <Image src="/images/logo-transparent.png" alt="UDGOK" width={120} height={44} style={{ height: "44px", width: "auto", objectFit: "contain" }} priority />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                style={{ width: "44px", height: "44px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px", color: "#fff", fontSize: "1.2rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >✕</button>
            </div>

            {/* Menu Content */}
            <nav style={{ padding: "1.5rem" }}>
              {/* Top-Level Links */}
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Work" },
              ].map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{ display: "block", fontSize: "2rem", fontWeight: 800, color: isActive(link.href) ? "#FF4800" : "#fff", textDecoration: "none", padding: "1rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", textTransform: "uppercase", letterSpacing: "-0.02em" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Accordion Sections */}
              {Object.entries(menuContent).map(([key, data], gi) => (
                <MobileAccordion key={key} title={data.title} delay={0.1 + gi * 0.05}>
                  {data.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.85rem 0", color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <span>{item.top} <span style={{ opacity: 0.4, fontWeight: 400, fontSize: "0.9em" }}>{item.sub}</span></span>
                      <span style={{ color: "#FF4800", fontSize: "0.9rem" }}>→</span>
                    </Link>
                  ))}
                </MobileAccordion>
              ))}

              {/* Service Areas Accordion */}
              <MobileAccordion title="Service Areas" delay={0.25}>
                {serviceAreas.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    onClick={() => setMobileOpen(false)}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.85rem 0", color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <span>{a.label}</span>
                    <span style={{ color: "#FF4800", fontSize: "0.9rem" }}>→</span>
                  </Link>
                ))}
              </MobileAccordion>

              {/* Contact Link */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.4 }}>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{ display: "block", fontSize: "2rem", fontWeight: 800, color: isActive("/contact") ? "#FF4800" : "#fff", textDecoration: "none", padding: "1rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", textTransform: "uppercase", letterSpacing: "-0.02em" }}
                >
                  Contact
                </Link>
              </motion.div>

              {/* CTA Button */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} style={{ marginTop: "2rem" }}>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{ display: "block", textAlign: "center", padding: "1.25rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", borderRadius: "16px" }}
                >
                  Start Your Project →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        display: "flex", alignItems: "center", height: "100%", padding: "0 1.5rem", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase",
        color: active ? "#FF4800" : "rgba(255,255,255,0.85)", textDecoration: "none", transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF4800"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = active ? "#FF4800" : "rgba(255,255,255,0.85)"; }}
    >
      {children}
    </Link>
  );
}

function MobileAccordion({ title, delay = 0, children }: { title: string; delay?: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "1rem 0", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
      >
        <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800" }}>{title}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>▼</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden", paddingLeft: "0.5rem" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
