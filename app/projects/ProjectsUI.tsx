"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import CountUp from "@/components/CountUp";
import AnimateIn from "@/components/AnimateIn";
import MarqueeBanner from "@/components/MarqueeBanner";

/* ─────────────────────────── Types ─────────────────────────── */
interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  location: string;
  size: string;
  summary: string;
  overview: string;
  img: string;
  images: string[];
  stats: { value: string; label: string }[];
  highlights: string[];
  featured: boolean;
  span: "single" | "double";
}

/* ─────────────────────────── Data ─────────────────────────── */
/* Images verified against https://www.udgok.com/projects.html source */
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Paradigm Oral Health",
    category: "Healthcare",
    year: "2025",
    location: "Tulsa, OK",
    size: "4,800 SF",
    summary: "State-of-the-art oral surgery center with ASSE 6010 medical gas systems, 6 operatories, sterile processing, and backup generator.",
    overview: "State-of-the-art oral surgery center featuring 6 fully-equipped exam rooms, complete medical gas installation (O2, N2O, vacuum), backup generator, advanced laboratory facilities, and dedicated sterile/dirty/clean rooms meeting the highest healthcare standards.",
    img: "/images/IMG_7608.jpeg",
    images: [
      "/images/IMG_7608.jpeg",
      "/images/IMG_7607.jpeg",
      "/images/IMG_7609.jpeg",
      "/images/IMG_7618.jpeg",
      "/images/IMG_7619.jpeg",
      "/images/IMG_7623.jpeg",
      "/images/IMG_7627.jpeg",
      "/images/IMG_7631.jpeg",
      "/images/IMG_7641.jpeg",
      "/images/IMG_7602.jpeg",
    ],
    stats: [
      { value: "6", label: "Exam Rooms" },
      { value: "3", label: "Months" },
      { value: "Full", label: "Medical Gas" },
      { value: "Nov 2025", label: "Completed" },
    ],
    highlights: [
      "6 exam rooms with full equipment",
      "Medical gas systems (O2, N2O, vacuum)",
      "Backup generator installation",
      "Sterile / dirty / clean room separation",
      "Advanced laboratory facilities",
    ],
    featured: true,
    span: "double",
  },
  {
    id: 2,
    title: "DSN Cybersecurity",
    category: "Commercial",
    year: "2025",
    location: "Tulsa, OK",
    size: "25,000 SF",
    summary: "Secure commercial headquarters with biometric access control, LED display walls, and enterprise data infrastructure.",
    overview: "A complete tenant improvement of DSN's Tulsa headquarters. The scope included biometric access control at all entry points, LED video wall installations, server room infrastructure with redundant cooling, executive conference suites, and open-plan collaboration spaces — all built to NFPA 75 data center standards.",
    img: "/images/dsn-cyber-1.jpeg",
    images: [
      "/images/dsn-cyber-1.jpeg",
      "/images/dsn-cyber-2.jpeg",
    ],
    stats: [
      { value: "25,000", label: "Square Feet" },
      { value: "Biometric", label: "Access Control" },
      { value: "NFPA 75", label: "Data Standard" },
      { value: "2025", label: "Completed" },
    ],
    highlights: [
      "Biometric access control at all entry points",
      "LED display wall and video conference rooms",
      "Server room with redundant cooling infrastructure",
      "Executive suites and open collaboration zones",
      "Full AV integration and structured cabling",
    ],
    featured: false,
    span: "single",
  },
  {
    id: 3,
    title: "Perfect Foods Fuel Station",
    category: "Commercial",
    year: "2024",
    location: "Bixby, OK",
    size: "6,500 SF",
    summary: "Ground-up fuel & convenience destination on 2 acres with carwash, EV charging, and fresh food program.",
    overview: "A ground-up fuel and convenience destination built on 2 acres in Bixby. The project delivered a full-service carwash, 12-position EV charging canopy, branded fuel dispensers, fresh food service kitchen, and a modern interior retail environment — completed in under 6 months.",
    img: "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/67cbe41ca38cbd1a3a515a54_Perfect-food-image.jpg",
    images: [
      "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/67cbe41ca38cbd1a3a515a54_Perfect-food-image.jpg",
    ],
    stats: [
      { value: "6,500", label: "Square Feet" },
      { value: "2 Acres", label: "Site" },
      { value: "EV Ready", label: "12 Chargers" },
      { value: "< 6 Mo", label: "Delivery" },
    ],
    highlights: [
      "Full-service automated carwash",
      "12-position EV charging canopy (350kW)",
      "Fresh food service kitchen and grab-and-go",
      "Branded fuel canopy and dispensers",
      "Modern retail interior with custom fixtures",
    ],
    featured: false,
    span: "single",
  },
  {
    id: 4,
    title: "The Eye Institute",
    category: "Healthcare",
    year: "2024",
    location: "Tulsa, OK",
    size: "12,000 SF",
    summary: "Full design-build of a specialty ophthalmology facility with 6 medical-grade exam rooms and optical showroom.",
    overview: "A complete design-build project for one of Tulsa's leading ophthalmology practices. The Eye Institute required medical-grade finishes throughout, a precision optical showroom, six fully equipped exam rooms, and a surgical prep suite — all delivered on schedule and under budget.",
    img: "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e052b3ba68b4bb1790fda_Doc-Lobby%202.webp",
    images: [
      "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e052b3ba68b4bb1790fda_Doc-Lobby%202.webp",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    ],
    stats: [
      { value: "6", label: "Exam Rooms" },
      { value: "12,000", label: "Square Feet" },
      { value: "Medical", label: "Grade Finishes" },
      { value: "2024", label: "Completed" },
    ],
    highlights: [
      "6 fully equipped ophthalmology exam rooms",
      "Precision optical showroom with custom millwork",
      "Medical-grade lighting and flooring throughout",
      "Surgical prep suite and sterile processing room",
      "ADA compliant design from ground up",
    ],
    featured: false,
    span: "double",
  },
  {
    id: 5,
    title: "Dayco Memphis",
    category: "Industrial",
    year: "2023",
    location: "Memphis, TN",
    size: "125,000 SF",
    summary: "Large-scale manufacturing facility with advanced automation systems and precision mechanical rooms.",
    overview: "One of our largest industrial projects — a 125,000 SF manufacturing facility for Dayco in Memphis. The project required precision coordination of advanced automation systems, high-bay MEP installation, climate-controlled production environments, and optimized material flow throughout the facility.",
    img: "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e00eb95a13edff0453515_dayco.jpg",
    images: [
      "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e00eb95a13edff0453515_dayco.jpg",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    ],
    stats: [
      { value: "125,000", label: "Square Feet" },
      { value: "Advanced", label: "Automation" },
      { value: "High-Bay", label: "MEP Install" },
      { value: "2023", label: "Completed" },
    ],
    highlights: [
      "125,000 SF industrial manufacturing floor",
      "Advanced automation system coordination",
      "High-bay MEP installation and coordination",
      "Climate-controlled production environments",
      "Optimized material flow and logistics layout",
    ],
    featured: false,
    span: "single",
  },
  {
    id: 6,
    title: "Historic Apartment Remodel",
    category: "Residential",
    year: "2023",
    location: "Tulsa, OK",
    size: "80 Units",
    summary: "80-unit historic building renovation with structural upgrades and full MEP system replacement.",
    overview: "Full modernization of an 80-unit historic residential building in downtown Tulsa. The project preserved the building's original architectural character while delivering complete structural reinforcement, full MEP system replacement, and modern unit renovations across all 80 apartments.",
    img: "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e0282d99a23e674c03624_OIP.jpg",
    images: [
      "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e0282d99a23e674c03624_OIP.jpg",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=80",
    ],
    stats: [
      { value: "80", label: "Units" },
      { value: "Full", label: "MEP Replaced" },
      { value: "Historic", label: "Preservation" },
      { value: "2023", label: "Completed" },
    ],
    highlights: [
      "80 fully renovated residential units",
      "Structural reinforcement and seismic upgrades",
      "Complete MEP system replacement",
      "Historic facade and character preservation",
      "Modern kitchen and bath packages throughout",
    ],
    featured: false,
    span: "single",
  },
  {
    id: 7,
    title: "AVID Hotel Tulsa",
    category: "Hospitality",
    year: "2023",
    location: "Tulsa, OK",
    size: "87 Rooms",
    summary: "IHG-certified boutique hotel with fitness center, business lounge, and premium guest amenity package.",
    overview: "An IHG-certified AVID Hotel built to brand standard in Tulsa. The project delivered 87 guest rooms, a state-of-the-art fitness center, business lounge, and full back-of-house support spaces — all within IHG's strict prototype specifications and on a compressed 14-month schedule.",
    img: "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e03794dda2e92ee728302_OIP%20(1).jpg",
    images: [
      "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e03794dda2e92ee728302_OIP%20(1).jpg",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    ],
    stats: [
      { value: "87", label: "Guest Rooms" },
      { value: "IHG", label: "Certified" },
      { value: "14 Mo", label: "Schedule" },
      { value: "2023", label: "Completed" },
    ],
    highlights: [
      "87 IHG-certified guest rooms",
      "State-of-the-art fitness center",
      "Business lounge and meeting rooms",
      "Full back-of-house support spaces",
      "Brand prototype compliance throughout",
    ],
    featured: false,
    span: "single",
  },
  {
    id: 8,
    title: "Swift Recon Automation",
    category: "Industrial",
    year: "2023",
    location: "Oklahoma City, OK",
    size: "45,000 SF",
    summary: "High-tech automation facility with climate-controlled server infrastructure and data centers.",
    overview: "A cutting-edge 45,000 SF technology and automation facility for Swift Recon in Oklahoma City. The project included precision climate-controlled server rooms, redundant power infrastructure, data center cabling, and a flexible production floor with raised access flooring throughout.",
    img: "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e0418813ffc6a400a3c42_R.png",
    images: [
      "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e0418813ffc6a400a3c42_R.png",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    ],
    stats: [
      { value: "45,000", label: "Square Feet" },
      { value: "Redundant", label: "Power Systems" },
      { value: "Raised", label: "Access Floors" },
      { value: "2023", label: "Completed" },
    ],
    highlights: [
      "Climate-controlled server infrastructure",
      "Redundant power and cooling systems",
      "Raised access flooring throughout",
      "Data center cabling and structured wiring",
      "Flexible production floor with automation mounts",
    ],
    featured: false,
    span: "double",
  },
  {
    id: 9,
    title: "Candlewood Suites",
    category: "Hospitality",
    year: "2023",
    location: "Regional",
    size: "122 Suites",
    summary: "Extended-stay hotel with full kitchenette packages, business amenities, and fitness center.",
    overview: "A full extended-stay hotel build for the Candlewood Suites brand, delivering 122 fully appointed suites with complete kitchenette packages, in-suite laundry provisions, fitness center, and business facilities — all built to IHG brand standard.",
    img: "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e045fa78aa3ada9f2b994_3043410_17110209380058605629.jpg",
    images: [
      "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e045fa78aa3ada9f2b994_3043410_17110209380058605629.jpg",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
    ],
    stats: [
      { value: "122", label: "Suites" },
      { value: "Full", label: "Kitchenettes" },
      { value: "IHG", label: "Brand Standard" },
      { value: "2023", label: "Completed" },
    ],
    highlights: [
      "122 extended-stay suites",
      "Full kitchenette packages in all units",
      "In-suite laundry provisions",
      "Fitness center and business lounge",
      "IHG brand standard compliance",
    ],
    featured: false,
    span: "single",
  },
  {
    id: 10,
    title: "Sinclair EV Station",
    category: "Commercial",
    year: "2027",
    location: "Oklahoma",
    size: "Upcoming",
    summary: "Next-gen fuel & EV destination with 12 high-capacity DC fast chargers and 350kW power infrastructure.",
    overview: "An upcoming next-generation fuel and EV destination for the Sinclair brand in Oklahoma. The development will include 12 high-capacity DC fast chargers at 350kW, a full food service program, trucker lounge, and expanded fuel canopy — designed to serve both passenger vehicles and commercial trucking.",
    img: "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e05d754992e579e480457_image%20(1).png",
    images: [
      "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e05d754992e579e480457_image%20(1).png",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
    ],
    stats: [
      { value: "12", label: "EV Chargers" },
      { value: "350kW", label: "Power" },
      { value: "Trucking", label: "Ready" },
      { value: "2027", label: "Upcoming" },
    ],
    highlights: [
      "12 DC fast chargers at 350kW capacity",
      "Full food service program and trucker lounge",
      "Expanded fuel canopy for commercial vehicles",
      "Sinclair brand standards throughout",
      "Solar canopy integration planned",
    ],
    featured: false,
    span: "single",
  },
  {
    id: 11,
    title: "Multi-State Storage & Residential",
    category: "Residential",
    year: "2022",
    location: "Rogers AR / Springfield MO",
    size: "Multi-Site",
    summary: "Multi-state self-storage and residential development with AI security analytics and climate-controlled units.",
    overview: "A multi-state self-storage development program spanning facilities in Arkansas and Missouri. Each site delivered climate-controlled unit programs, advanced security and AI-assisted analytics, digital access control, and branded exterior packages — all coordinated under a single construction management contract.",
    img: "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e079563b2e649a512d2f2_storageworld-3.jpeg",
    images: [
      "https://cdn.prod.website-files.com/66c0d7ca1ef0c151011b7d14/684e079563b2e649a512d2f2_storageworld-3.jpeg",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&q=80",
    ],
    stats: [
      { value: "Multi", label: "State Program" },
      { value: "AI", label: "Analytics" },
      { value: "Climate", label: "Controlled" },
      { value: "2022", label: "Completed" },
    ],
    highlights: [
      "Multi-state site coordination (AR/MO)",
      "Climate-controlled storage unit programs",
      "AI-assisted security and analytics",
      "Digital access control at all sites",
      "Branded exterior and signage package",
    ],
    featured: false,
    span: "single",
  },
  {
    id: 12,
    title: "Ed Young Shopping Center",
    category: "Retail",
    year: "2024",
    location: "Bartlesville, OK",
    size: "5,500 SF",
    summary: "Retail center redevelopment with modern facade, full MEP upgrades, and ADA-compliant site work.",
    overview: "A full-scale retail center redevelopment anchored by a liquor and convenience store. The scope included new exterior facades across all tenant bays, complete MEP system replacement, ADA site improvements, parking lot reconstruction, and a new anchor tenant build-out delivered in 8 months.",
    img: "/images/edyoung-1.jpg",
    images: [
      "/images/edyoung-1.jpg",
      "/images/edyoung-2.jpg",
      "/images/edyoung-3.jpg",
    ],
    stats: [
      { value: "5,500", label: "Square Feet" },
      { value: "8 Mo", label: "Completion" },
      { value: "Full", label: "MEP Upgrade" },
      { value: "2024", label: "Completed" },
    ],
    highlights: [
      "New exterior facades across all tenant bays",
      "Complete MEP system replacement",
      "ADA-compliant parking and site work",
      "Anchor tenant build-out (liquor & convenience)",
      "Full parking lot reconstruction",
    ],
    featured: false,
    span: "single",
  },
];

const CATEGORIES = ["All", "Healthcare", "Commercial", "Industrial", "Hospitality", "Retail", "Residential"];

const STATS = [
  { n: "150+", l: "Projects Delivered" },
  { n: "12", l: "Project Sectors" },
  { n: "33%", l: "Faster Delivery" },
  { n: "98%", l: "Client Satisfaction" },
];

/* ─────────────────────────── Modal ─────────────────────────── */
function ProjectModal({ project, onClose, projectIndex }: { project: Project; onClose: () => void; projectIndex: number }) {
  const [activeImg, setActiveImg] = useState(0);

  // Lock scroll & keyboard nav
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveImg((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft") setActiveImg((i) => (i - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose, project.images.length]);

  const num = String(projectIndex + 1).padStart(2, "0");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(11,6,27,0.85)",
          backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#fff",
            width: "100%",
            maxWidth: "1200px",
            maxHeight: "90vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
          }}
        >
          {/* ── Header ── */}
          <div style={{
            display: "flex", alignItems: "center", gap: "2rem",
            padding: "1.5rem 2rem",
            borderBottom: "3px solid #0B061B",
            flexShrink: 0,
          }}>
            <span style={{ fontSize: "2.5rem", fontWeight: 900, color: "#FF4800", letterSpacing: "-0.05em", lineHeight: 1 }}>
              {num}
            </span>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", margin: 0, lineHeight: 1 }}>
                {project.title}
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.4rem" }}>
                <span style={{ fontSize: "0.65rem", color: "#666", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  📍 {project.location}
                </span>
                <span style={{ color: "#ccc" }}>•</span>
                <span style={{ fontSize: "0.65rem", color: "#FF4800", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {project.category}
                </span>
                <span style={{ color: "#ccc" }}>•</span>
                <span style={{ fontSize: "0.65rem", color: "#666", fontWeight: 600, letterSpacing: "0.1em" }}>
                  {project.year}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: "44px", height: "44px",
                background: "#0B061B", border: "none",
                color: "#fff", fontSize: "1.2rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, fontFamily: "inherit",
              }}
            >
              ✕
            </button>
          </div>

          {/* ── Body ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", flex: 1, overflow: "hidden", minHeight: 0 }}>

            {/* Left — gallery */}
            <div style={{ display: "flex", flexDirection: "column", borderRight: "3px solid #0B061B", overflow: "hidden" }}>
              {/* Main image */}
              <div style={{ position: "relative", flex: 1, overflow: "hidden", background: "#0B061B", minHeight: 0 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <Image
                      src={project.images[activeImg]}
                      alt={`${project.title} — image ${activeImg + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Arrow nav */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImg((i) => (i - 1 + project.images.length) % project.images.length)}
                      style={{
                        position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)",
                        width: "40px", height: "40px", background: "rgba(11,6,27,0.8)",
                        border: "none", color: "#fff", fontSize: "1rem", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >←</button>
                    <button
                      onClick={() => setActiveImg((i) => (i + 1) % project.images.length)}
                      style={{
                        position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)",
                        width: "40px", height: "40px", background: "rgba(11,6,27,0.8)",
                        border: "none", color: "#fff", fontSize: "1rem", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >→</button>
                    <div style={{
                      position: "absolute", bottom: "1rem", left: "50%", transform: "translateX(-50%)",
                      display: "flex", gap: "6px",
                    }}>
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImg(i)}
                          style={{
                            width: i === activeImg ? "24px" : "8px",
                            height: "8px",
                            background: i === activeImg ? "#FF4800" : "rgba(255,255,255,0.5)",
                            border: "none", borderRadius: "100px", cursor: "pointer",
                            transition: "all 0.2s ease", padding: 0,
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail strip */}
              {project.images.length > 1 && (
                <div style={{
                  display: "flex", gap: 0, borderTop: "3px solid #0B061B",
                  overflowX: "auto", flexShrink: 0,
                }}>
                  {project.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      style={{
                        position: "relative",
                        width: "100px", height: "72px",
                        flexShrink: 0,
                        border: "none",
                        borderRight: "2px solid #0B061B",
                        cursor: "pointer",
                        padding: 0,
                        outline: i === activeImg ? "3px solid #FF4800" : "none",
                        outlineOffset: "-3px",
                        overflow: "hidden",
                      }}
                    >
                      <Image src={src} alt="" fill style={{ objectFit: "cover", filter: i === activeImg ? "none" : "grayscale(60%)", transition: "filter 0.2s" }} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right — details */}
            <div style={{ overflowY: "auto", display: "flex", flexDirection: "column" }}>
              {/* Stats grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "3px solid #0B061B", flexShrink: 0 }}>
                {project.stats.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "1.25rem 1.5rem",
                      borderRight: i % 2 === 0 ? "2px solid #0B061B" : "none",
                      borderBottom: i < 2 ? "2px solid #0B061B" : "none",
                      background: "#F7F4F7",
                    }}
                  >
                    <div style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 900, color: "#FF4800", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.3rem" }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#666" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Overview */}
              <div style={{ padding: "1.5rem", borderBottom: "2px solid rgba(11,6,27,0.1)", flexShrink: 0 }}>
                <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "2px solid #FF4800", display: "inline-block" }}>
                  Overview
                </div>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#333", margin: 0 }}>
                  {project.overview}
                </p>
              </div>

              {/* Highlights */}
              <div style={{ padding: "1.5rem", flex: 1 }}>
                <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid #FF4800", display: "inline-block" }}>
                  Project Highlights
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.8rem", color: "#333", lineHeight: 1.5 }}>
                      <span style={{ color: "#FF4800", fontWeight: 800, flexShrink: 0, marginTop: "1px" }}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div style={{ padding: "1.5rem", borderTop: "2px solid rgba(11,6,27,0.1)", flexShrink: 0 }}>
                <Link
                  href="/contact"
                  onClick={onClose}
                  style={{
                    display: "block", width: "100%", padding: "1rem",
                    background: "#FF4800", color: "#fff", textDecoration: "none",
                    fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.15em",
                    textTransform: "uppercase", textAlign: "center",
                  }}
                >
                  Start a Similar Project →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────── Featured hero ─────────────────────────── */
function FeaturedProject({ p, onClick }: { p: Project; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <AnimateIn direction="up" duration={1}>
      <div ref={ref} onClick={onClick} style={{ position: "relative", height: "75vh", overflow: "hidden", borderBottom: "4px solid #0B061B", cursor: "pointer" }}>
        <motion.div style={{ position: "absolute", inset: "-10%", y }}>
          <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} priority />
        </motion.div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,6,27,0.92) 45%, rgba(11,6,27,0.3) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,6,27,0.6) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "4rem 5rem" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
            <span style={{ background: "#FF4800", color: "#fff", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", padding: "0.4rem 1rem" }}>Featured Project</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>{p.category} · {p.year} · {p.location}</span>
          </motion.div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88, color: "#fff", textTransform: "uppercase", marginBottom: "2rem" }}>
              {p.title}
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "3rem", maxWidth: "900px" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: "520px", margin: 0 }}>{p.summary}</p>
            <div style={{ display: "flex", gap: "3rem", flexShrink: 0 }}>
              <div>
                <div style={{ fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF4800", marginBottom: "0.4rem" }}>Size</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff" }}>{p.size}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", paddingLeft: "1.5rem", borderLeft: "2px solid rgba(255,255,255,0.2)" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>View Project</span>
                <span style={{ color: "#FF4800", fontSize: "1.2rem" }}>→</span>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4, delay: 0.9 }} style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: "#FF4800" }} />
      </div>
    </AnimateIn>
  );
}

/* ─────────────────────────── Project card ─────────────────────────── */
function ProjectCard({ p, index, onClick }: { p: Project; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimateIn delay={index * 0.06} direction="up">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={onClick}
        style={{ position: "relative", overflow: "hidden", cursor: "pointer", background: "#0B061B" }}
      >
        <div style={{ position: "relative", height: p.span === "double" ? "520px" : "380px", overflow: "hidden" }}>
          <motion.div animate={{ scale: hovered ? 1.06 : 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} style={{ position: "absolute", inset: 0 }}>
            <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover", filter: hovered ? "grayscale(0%) brightness(0.75)" : "grayscale(35%) brightness(0.65) contrast(1.05)", transition: "filter 0.7s ease" }} />
          </motion.div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,6,27,0.95) 0%, rgba(11,6,27,0.2) 60%, transparent 100%)" }} />

          <motion.div animate={{ y: hovered ? 0 : -4, opacity: hovered ? 1 : 0.85 }} transition={{ duration: 0.3 }} style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
            <span style={{ background: "#FF4800", color: "#fff", fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.35rem 0.85rem" }}>{p.category}</span>
          </motion.div>
          <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", fontSize: "0.6rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em" }}>{p.year}</div>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem 2rem 2.5rem" }}>
            <motion.div animate={{ y: hovered ? -6 : 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                {p.location} · {p.size}
              </div>
              <h3 style={{ fontSize: p.span === "double" ? "clamp(1.6rem, 3vw, 2.5rem)" : "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, color: "#fff", textTransform: "uppercase", margin: 0 }}>
                {p.title}
              </h3>
            </motion.div>
            <motion.div animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }} transition={{ duration: 0.35, delay: hovered ? 0.05 : 0 }} style={{ marginTop: "1rem" }}>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(255,255,255,0.65)", margin: "0 0 0.75rem", maxWidth: "480px" }}>{p.summary}</p>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#FF4800", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                View Project →
              </span>
            </motion.div>
          </div>
        </div>
        <motion.div animate={{ scaleX: hovered ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "#FF4800", transformOrigin: "left" }} />
      </motion.div>
    </AnimateIn>
  );
}

/* ─────────────────────────── Parallax Masonry Grid ─────────────────────────── */
function ParallaxGrid({ items, onOpen }: { items: Project[], onOpen: (p: Project, idx: number) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  // Create 3D parallax floating effects
  const col2Y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const col3Y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <div ref={containerRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4rem", alignItems: "flex-start", padding: "6rem 5rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {col1.map((p) => (
          <ProjectCard key={p.id} p={p} index={items.indexOf(p)} onClick={() => onOpen(p, items.indexOf(p))} />
        ))}
      </div>
      <motion.div style={{ display: "flex", flexDirection: "column", gap: "4rem", y: col2Y }}>
        {col2.map((p) => (
          <ProjectCard key={p.id} p={p} index={items.indexOf(p)} onClick={() => onOpen(p, items.indexOf(p))} />
        ))}
      </motion.div>
      <motion.div style={{ display: "flex", flexDirection: "column", gap: "4rem", y: col3Y }}>
        {col3.map((p) => (
          <ProjectCard key={p.id} p={p} index={items.indexOf(p)} onClick={() => onOpen(p, items.indexOf(p))} />
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */
export default function ProjectsUI() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [openIndex, setOpenIndex] = useState(0);

  const openModal = useCallback((p: Project, idx: number) => { setOpenProject(p); setOpenIndex(idx); }, []);
  const closeModal = useCallback(() => setOpenProject(null), []);

  const featured = PROJECTS.find((p) => p.featured)!;
  const filteredAll = PROJECTS.filter((p) => activeFilter === "All" || p.category === activeFilter);
  const filtered = filteredAll.filter((p) => !p.featured);

  return (
    <main className="bg-[#0B061B]">
      {/* Modal */}
      {openProject && <ProjectModal project={openProject} onClose={closeModal} projectIndex={openIndex} />}

      {/* Hero */}
      <section style={{ background: "#0B061B", borderBottom: "4px solid #0B061B", overflow: "hidden", padding: "8rem 5rem 5rem", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
            <span style={{ width: "32px", height: "2px", background: "#FF4800", display: "inline-block" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.3em", color: "#FF4800", textTransform: "uppercase" }}>Portfolio</span>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "flex-end" }}>
            <div style={{ overflow: "hidden" }}>
              <motion.h1 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: "clamp(4rem, 10vw, 9rem)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.82, color: "#fff", textTransform: "uppercase", margin: 0 }}>
                Our<br /><span style={{ WebkitTextStroke: "2px #FF4800", color: "transparent" }}>Work</span>
              </motion.h1>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ maxWidth: "340px", paddingBottom: "0.75rem" }}>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.55)", margin: 0 }}>
                Every project we build is a statement — of precision, capability, and the standard we hold ourselves to.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", background: "#fff", borderBottom: "4px solid #0B061B" }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ padding: "3rem 2rem", textAlign: "center", borderRight: i < 3 ? "4px solid #0B061B" : "none" }}>
            <div style={{ fontSize: "clamp(2.25rem,5vw,3.5rem)", fontWeight: 900, color: i % 2 === 0 ? "#FF4800" : "#0B061B", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: "0.5rem" }}>
              <CountUp value={s.n} />
            </div>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#999" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <MarqueeBanner />

      {/* Featured */}
      <FeaturedProject p={featured} onClick={() => openModal(featured, 0)} />

      {/* Filter bar */}
      <div style={{ borderBottom: "4px solid #0B061B", padding: "0 5rem", background: "#fff", display: "flex", alignItems: "center", gap: 0, overflowX: "auto" }}>
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            whileHover={{ background: activeFilter === cat ? "#0B061B" : "#f7f4f7" }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "1.25rem 2rem", border: "none",
              borderRight: "2px solid rgba(11,6,27,0.1)",
              background: activeFilter === cat ? "#0B061B" : "transparent",
              color: activeFilter === cat ? "#fff" : "#666",
              fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em",
              textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit",
              transition: "color 0.2s", whiteSpace: "nowrap",
              borderBottom: activeFilter === cat ? "3px solid #FF4800" : "3px solid transparent",
            }}
          >
            {cat}
          </motion.button>
        ))}
        <div style={{ marginLeft: "auto", padding: "1.25rem 2rem", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "#999", whiteSpace: "nowrap" }}>
          {filtered.length} Projects
        </div>
      </div>

      {/* 3D Parallax Masonry Grid */}
      <section style={{ background: "#0B061B", borderBottom: "4px solid white" }}>
        <ParallaxGrid items={filtered} onOpen={openModal} />
      </section>

      {/* Performance strip */}
      <AnimateIn>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "#0B061B", borderBottom: "4px solid #0B061B" }}>
          {[
            { n: "01", title: "33% Faster", sub: "Average delivery vs. industry benchmark" },
            { n: "02", title: "6% Lower", sub: "Unit costs vs. comparable bids" },
            { n: "03", title: "<3%", sub: "Change order rate across all projects" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "4rem 3rem", borderRight: i < 2 ? "4px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.3em", color: "#FF4800", marginBottom: "1.25rem" }}>{item.n}</div>
              <div style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1, marginBottom: "0.75rem" }}>{item.title}</div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{item.sub}</div>
            </div>
          ))}
        </section>
      </AnimateIn>

      {/* CTA */}
      <AnimateIn>
        <section style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "4rem", padding: "6rem 5rem", borderBottom: "4px solid #0B061B", background: "#fff" }}>
          <div>
            <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1.5rem" }}>— Start Building</div>
            <h2 style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88, textTransform: "uppercase", margin: 0 }}>
              Ready to Be Our<br /><span style={{ color: "#FF4800" }}>Next Project?</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flexShrink: 0 }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" style={{ display: "block", padding: "1.25rem 3rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", whiteSpace: "nowrap" }}>
                Start Your Project →
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/design-build" style={{ display: "block", padding: "1.25rem 3rem", background: "transparent", color: "#0B061B", textDecoration: "none", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", border: "3px solid #0B061B", whiteSpace: "nowrap" }}>
                Our Process
              </Link>
            </motion.div>
          </div>
        </section>
      </AnimateIn>
    </main>
  );
}
