"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const serviceAreas = [
  { href: "/dallas-medical-construction", label: "Dallas-Fort Worth (TX)" },
  { href: "/tulsa-medical-construction", label: "Tulsa Medical" },
  { href: "/tulsa-ok-design-build", label: "Tulsa" },
  { href: "/broken-arrow-ok-design-build", label: "Broken Arrow" },
  { href: "/bixby-ok-design-build", label: "Bixby" },
  { href: "/jenks-ok-design-build", label: "Jenks" },
  { href: "/owasso-ok-design-build", label: "Owasso" },
  { href: "/sand-springs-ok-design-build", label: "Sand Springs" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-[1000] transition-all duration-300"
        style={{
          background: "rgba(20, 20, 25, 0.98)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.12)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "0 2px 20px rgba(0,0,0,0.3)",
          height: "80px",
        }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div
          style={{ maxWidth: "1800px", margin: "0 auto", height: "100%" }}
          className="flex justify-between items-center px-8"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center z-[1002] logo-glow">
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
                display: "flex", alignItems: "center", height: "100%",
                padding: "0 1.5rem", fontSize: "0.85rem", fontWeight: 500,
                letterSpacing: "0.05em", textTransform: "uppercase",
                color: activeMenu === "services" ? "#FF4800" : "rgba(255,255,255,0.85)",
                textDecoration: "none", background: "none", border: "none",
                cursor: "pointer", transition: "color 0.2s ease",
              }}
            >
              Services <ChevronDown />
            </button>

            <button
              className="nav-link-btn"
              onMouseEnter={() => setActiveMenu("company")}
              style={{
                display: "flex", alignItems: "center", height: "100%",
                padding: "0 1.5rem", fontSize: "0.85rem", fontWeight: 500,
                letterSpacing: "0.05em", textTransform: "uppercase",
                color: activeMenu === "company" ? "#FF4800" : "rgba(255,255,255,0.85)",
                textDecoration: "none", background: "none", border: "none",
                cursor: "pointer", transition: "color 0.2s ease",
              }}
            >
              Company <ChevronDown />
            </button>

            <button
              className="nav-link-btn"
              onMouseEnter={() => setActiveMenu("resources")}
              style={{
                display: "flex", alignItems: "center", height: "100%",
                padding: "0 1.5rem", fontSize: "0.85rem", fontWeight: 500,
                letterSpacing: "0.05em", textTransform: "uppercase",
                color: activeMenu === "resources" ? "#FF4800" : "rgba(255,255,255,0.85)",
                textDecoration: "none", background: "none", border: "none",
                cursor: "pointer", transition: "color 0.2s ease",
              }}
            >
              Resources <ChevronDown />
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

        {/* Services Dropdown */}
        <MegaMenu active={activeMenu === "services"}>
          <div className="mega-sidebar">
            <div className="mega-title">Core Service</div>
            <Link href="/design-build" className="mega-link">Design-Build</Link>
            <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.5 }}>
              Our integrated approach streamlines project delivery from concept to completion.
            </p>
          </div>
          <div className="mega-grid">
            <MenuColumn title="Healthcare">
              <MenuItem href="/medical-office-design-build-tulsa">Medical Office</MenuItem>
              <MenuItem href="/dental-office-construction-tulsa">Dental Office</MenuItem>
              <MenuItem href="/oral-surgeon-office-construction-tulsa">Oral Surgery</MenuItem>
              <MenuItem href="/eye-clinic-construction-tulsa">Eye Clinics</MenuItem>
              <MenuItem href="/medical-gas-installation">Medical Gas Systems</MenuItem>
            </MenuColumn>
            <MenuColumn title="Commercial">
              <MenuItem href="/tenant-improvements">Tenant Improvements</MenuItem>
              <MenuItem href="/convenience-store-construction-tulsa">Convenience Stores</MenuItem>
              <MenuItem href="/shopping-center-construction-tulsa">Shopping Centers</MenuItem>
              <MenuItem href="/preconstruction">Preconstruction</MenuItem>
              <MenuItem href="/virtual-design-construction">Virtual Design (VDC)</MenuItem>
            </MenuColumn>
            <MenuColumn title="Service Areas">
              {serviceAreas.map((a) => (
                <MenuItem key={a.href} href={a.href}>{a.label}</MenuItem>
              ))}
            </MenuColumn>
          </div>
        </MegaMenu>

        {/* Company Dropdown */}
        <MegaMenu active={activeMenu === "company"}>
          <div className="mega-sidebar">
            <div className="mega-title">About UDGOK</div>
            <Link href="/about" className="mega-link">Our Story</Link>
            <Link href="/safety-program" className="menu-item" style={{ display: "block" }}>Safety Program</Link>
          </div>
          <div className="mega-grid">
            <MenuColumn title="Connect">
              <MenuItem href="/partners">Partners &amp; Affiliations</MenuItem>
              <MenuItem href="/community">In The Community</MenuItem>
              <MenuItem href="/subcontractors">Subcontractor Portal</MenuItem>
            </MenuColumn>
            <MenuColumn title="Knowledge">
              <MenuItem href="/resources">Knowledge Center</MenuItem>
              <MenuItem href="/tools">Calculators &amp; Tools</MenuItem>
              <MenuItem href="/guide-developers">Developer&apos;s Guide</MenuItem>
              <MenuItem href="/guide-commercial-brokers">Broker&apos;s Guide</MenuItem>
            </MenuColumn>
          </div>
        </MegaMenu>

        {/* Resources Dropdown */}
        <MegaMenu active={activeMenu === "resources"}>
          <div className="mega-sidebar">
            <div className="mega-title">Innovation</div>
            <Link href="/ai-robotics" className="mega-link">AI &amp; Robotics</Link>
            <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.5 }}>
              Discover how we&apos;re leveraging cutting-edge technology to revolutionize construction.
            </p>
          </div>
          <div className="mega-grid">
            <MenuColumn title="Resources">
              <MenuItem href="/resources">Knowledge Center</MenuItem>
              <MenuItem href="/tools">Calculators &amp; Tools</MenuItem>
              <MenuItem href="/guide-developers">Developer&apos;s Guide</MenuItem>
              <MenuItem href="/guide-commercial-brokers">Broker&apos;s Guide</MenuItem>
              <MenuItem href="/market-intelligence">Market Intelligence</MenuItem>
            </MenuColumn>
          </div>
        </MegaMenu>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed z-[999] overflow-y-auto"
        style={{
          top: "80px", left: 0, width: "100%",
          height: "calc(100vh - 80px)",
          background: "#0B061B",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          padding: "2rem",
        }}
      >
        <Link href="/" className="mobile-nav-link">Home</Link>
        <Link href="/projects" className="mobile-nav-link">Work</Link>

        <MobileGroup title="Healthcare">
          <MobileSubLink href="/medical-office-design-build-tulsa">Medical Office</MobileSubLink>
          <MobileSubLink href="/dental-office-construction-tulsa">Dental Office</MobileSubLink>
          <MobileSubLink href="/oral-surgeon-office-construction-tulsa">Oral Surgery</MobileSubLink>
          <MobileSubLink href="/eye-clinic-construction-tulsa">Eye Clinics</MobileSubLink>
          <MobileSubLink href="/medical-gas-installation">Medical Gas Systems</MobileSubLink>
        </MobileGroup>

        <MobileGroup title="Commercial">
          <MobileSubLink href="/design-build">Design-Build</MobileSubLink>
          <MobileSubLink href="/tenant-improvements">Tenant Improvements</MobileSubLink>
          <MobileSubLink href="/convenience-store-construction-tulsa">Convenience Stores</MobileSubLink>
          <MobileSubLink href="/shopping-center-construction-tulsa">Shopping Centers</MobileSubLink>
          <MobileSubLink href="/preconstruction">Preconstruction</MobileSubLink>
        </MobileGroup>

        <MobileGroup title="Service Areas">
          {serviceAreas.map((a) => (
            <MobileSubLink key={a.href} href={a.href}>{a.label}</MobileSubLink>
          ))}
        </MobileGroup>

        <MobileGroup title="Company">
          <MobileSubLink href="/about">About Us</MobileSubLink>
          <MobileSubLink href="/safety-program">Safety Program</MobileSubLink>
          <MobileSubLink href="/partners">Partners</MobileSubLink>
          <MobileSubLink href="/community">Community</MobileSubLink>
          <MobileSubLink href="/subcontractors">Subcontractor Portal</MobileSubLink>
        </MobileGroup>

        <MobileGroup title="Resources">
          <MobileSubLink href="/resources">Knowledge Center</MobileSubLink>
          <MobileSubLink href="/tools">Calculators &amp; Tools</MobileSubLink>
          <MobileSubLink href="/guide-developers">Developer&apos;s Guide</MobileSubLink>
          <MobileSubLink href="/ai-robotics">AI &amp; Robotics</MobileSubLink>
        </MobileGroup>

        <Link href="/contact" className="mobile-nav-link">Contact</Link>
      </div>

      <style jsx>{`
        .mega-sidebar {
          border-right: 2px solid rgba(0,0,0,0.1);
          padding-right: 2.5rem;
        }
        .mega-title {
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #FF4800;
          margin-bottom: 1.5rem;
          letter-spacing: 0.15em;
        }
        .mega-link {
          display: block;
          font-size: 1.4rem;
          font-weight: 700;
          color: #0B061B;
          text-decoration: none;
          margin-bottom: 1.25rem;
          transition: color 0.2s, transform 0.2s;
          line-height: 1.3;
        }
        .mega-link:hover { color: #FF4800; transform: translateX(4px); }
        .mega-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(200px, 1fr));
          gap: 2.5rem 3rem;
        }
        .mobile-nav-link {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>
    </>
  );
}

function NavLink({
  href, active, children,
}: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        display: "flex", alignItems: "center", height: "100%",
        padding: "0 1.5rem", fontSize: "0.85rem", fontWeight: 500,
        letterSpacing: "0.05em", textTransform: "uppercase",
        color: active ? "#FF4800" : "rgba(255,255,255,0.85)",
        textDecoration: "none", transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF4800"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = active ? "#FF4800" : "rgba(255,255,255,0.85)"; }}
    >
      {children}
    </Link>
  );
}

function MegaMenu({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "absolute", top: "80px", left: 0, width: "100%",
        background: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        padding: "3rem 0",
        opacity: active ? 1 : 0,
        visibility: active ? "visible" : "hidden",
        transform: active ? "translateY(0)" : "translateY(-10px)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        zIndex: 999,
      }}
    >
      <div
        style={{
          maxWidth: "1400px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "280px 1fr",
          gap: "4rem", padding: "0 3rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function MenuColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ minWidth: "220px" }}>
      <h4 style={{
        fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase",
        color: "#0B061B", marginBottom: "1.5rem", letterSpacing: "0.12em",
        paddingBottom: "0.75rem", borderBottom: "2px solid #FF4800",
      }}>
        {title}
      </h4>
      {children}
    </div>
  );
}

function MenuItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        display: "block", textDecoration: "none", marginBottom: "0.75rem",
        color: "#0B061B", fontSize: "1.05rem", fontWeight: 600,
        padding: "0.5rem 0.75rem", borderRadius: "6px",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "#FF4800";
        el.style.background = "rgba(255,72,0,0.06)";
        el.style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "#0B061B";
        el.style.background = "transparent";
        el.style.transform = "translateX(0)";
      }}
    >
      {children}
    </Link>
  );
}

function MobileGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "1rem 0" }}>
      <span style={{ display: "block", color: "#FF4800", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        {title}
      </span>
      <div style={{ paddingLeft: "1rem" }}>{children}</div>
    </div>
  );
}

function MobileSubLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{ display: "block", padding: "0.5rem 0", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "1rem" }}
    >
      {children}
    </Link>
  );
}

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: "0.4rem", marginTop: "1px" }}>
      <path d="M1 3L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
