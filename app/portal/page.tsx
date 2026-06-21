import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Subcontractor Bid Portal | UDGOK",
  description: "Access the UDGOK Subcontractor Bid Portal to view active projects, download construction documents, and submit competitive bids.",
};

const FEATURES = [
  {
    icon: "📋",
    title: "Active Projects",
    desc: "Browse current bid opportunities with full project details, scope, and deadlines.",
  },
  {
    icon: "📄",
    title: "Construction Documents",
    desc: "Access plans, specs, lien waivers, and insurance documents — all in one place.",
  },
  {
    icon: "💰",
    title: "Submit Bids",
    desc: "Submit your bid directly through the portal. Fast, secure, and organized.",
  },
  {
    icon: "🔔",
    title: "Real-Time Updates",
    desc: "Stay up to date on project statuses — active, upcoming, and closed.",
  },
];

const STEPS = [
  { num: "01", title: "Create Account", desc: "Sign up with your email in seconds" },
  { num: "02", title: "Browse Projects", desc: "View all open bid opportunities" },
  { num: "03", title: "Review Documents", desc: "Download plans & specs directly" },
  { num: "04", title: "Submit Your Bid", desc: "Send your proposal securely" },
];

export default async function PortalPage() {
  const { userId } = await auth();
  if (userId) {
    redirect("/portal/dashboard");
  }

  return (
    <main style={{ minHeight: "100vh", background: "#0B061B", color: "#fff" }}>
      {/* Background Effects */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
      <div style={{ position: "fixed", top: "-30%", right: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255,72,0,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "-20%", left: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ─── HERO SECTION ─── */}
        <section style={{ padding: "5rem 1.5rem 3rem", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
          <Link href="/">
            <Image src="/images/logo-transparent.png" alt="UDGOK" width={180} height={68} style={{ height: "55px", width: "auto", objectFit: "contain", margin: "0 auto" }} />
          </Link>

          <div style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", background: "rgba(255,72,0,0.08)", border: "1px solid rgba(255,72,0,0.2)", borderRadius: "100px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF4800", display: "inline-block" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800" }}>
              Subcontractor Bid Portal
            </span>
          </div>

          <h1 style={{ marginTop: "1.5rem", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Your Gateway to<br />Premium Construction Projects
          </h1>

          <p style={{ marginTop: "1.25rem", fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: "600px", margin: "1.25rem auto 0" }}>
            Access bid opportunities, review construction documents, and submit proposals — all through one secure, streamlined platform built for Oklahoma&apos;s best trade partners.
          </p>
        </section>

        {/* ─── TWO COLUMN: FEATURES + SIGN IN ─── */}
        <section className="portal-features-grid" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem 4rem" }}>

          {/* Left Column — Features */}
          <div>
            <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1.5rem" }}>
              What You Get
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", padding: "1.25rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", transition: "border-color 0.3s" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0, width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,72,0,0.06)", borderRadius: "12px" }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "0.25rem" }}>{f.title}</div>
                    <div style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "rgba(255,255,255,0.4)" }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {["🔒 256-bit Encrypted", "⚡ Instant Access", "📱 Mobile Friendly"].map((t, i) => (
                <span key={i} style={{ fontSize: "0.7rem", fontWeight: 600, color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: "0.35rem" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Right Column — Sign In */}
          <div>
            <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "1.5rem" }}>
              Sign In or Create Account
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "1.5rem", display: "flex", justifyContent: "center" }}>
              <SignIn
                appearance={{
                  elements: {
                    rootBox: { width: "100%" },
                    card: { backgroundColor: "transparent", border: "none", borderRadius: "16px", boxShadow: "none", padding: "0" },
                    headerTitle: { color: "#fff", fontSize: "1.1rem" },
                    headerSubtitle: { color: "rgba(255,255,255,0.5)" },
                    formFieldLabel: { color: "rgba(255,255,255,0.5)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" },
                    formFieldInput: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", color: "#fff" },
                    formButtonPrimary: { background: "#FF4800", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "14px", fontSize: "0.75rem" },
                    footerAction: { color: "rgba(255,255,255,0.4)" },
                    footerActionLink: { color: "#FF4800" },
                    identityPreview: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" },
                    identityPreviewText: { color: "#fff" },
                    identityPreviewEditButton: { color: "#FF4800" },
                    formFieldInputShowPasswordButton: { color: "rgba(255,255,255,0.5)" },
                    dividerLine: { borderColor: "rgba(255,255,255,0.1)" },
                    dividerText: { color: "rgba(255,255,255,0.3)" },
                    socialButtonsBlockButton: { border: "1px solid rgba(255,255,255,0.12)", color: "#fff" },
                    socialButtonsBlockButtonText: { color: "#fff" },
                    alertText: { color: "#E53935" },
                    formFieldSuccessText: { color: "#00A842" },
                  },
                }}
                routing="path"
                path="/portal"
                signUpUrl="/portal/sign-up"
                forceRedirectUrl="/portal/dashboard"
              />
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem 4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800", marginBottom: "0.75rem" }}>
              How It Works
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Get Started in Minutes
            </h2>
          </div>

          <div className="portal-steps-grid">
            {STEPS.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "1.75rem 1rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", position: "relative" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "rgba(255,72,0,0.15)", marginBottom: "0.75rem", fontFamily: "monospace" }}>{s.num}</div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", marginBottom: "0.35rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{s.desc}</div>
                {i < 3 && (
                  <div className="portal-step-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── BOTTOM CTA ─── */}
        <section style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.5rem 4rem", textAlign: "center" }}>
          <div style={{ background: "linear-gradient(135deg, rgba(255,72,0,0.08), rgba(255,72,0,0.02))", border: "1px solid rgba(255,72,0,0.15)", borderRadius: "24px", padding: "2.5rem 2rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Ready to Bid on Premium Projects?
            </h3>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
              UDGOK partners with the best subcontractors in Oklahoma for medical, dental, and commercial construction projects. Create your account to get started.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/portal#" style={{ padding: "0.85rem 2rem", background: "#FF4800", color: "#fff", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "14px", textDecoration: "none" }}>
                Sign In Above ↑
              </Link>
              <Link href="/contact" style={{ padding: "0.85rem 2rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "14px", textDecoration: "none" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "0 1.5rem 3rem", fontSize: "0.7rem", color: "rgba(255,255,255,0.2)" }}>
          © {new Date().getFullYear()} Upscale Development Group (UDGOK). Access restricted to authorized trade partners.
          <br />
          <span style={{ display: "inline-flex", gap: "1.5rem", marginTop: "0.5rem" }}>
            <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms-of-service" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Terms of Service</Link>
          </span>
        </div>

      </div>

      {/* Responsive Styles */}
      <style>{`
        .portal-features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        .portal-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .portal-step-arrow { position: absolute; right: -0.75rem; top: 50%; transform: translateY(-50%); color: rgba(255,72,0,0.3); font-size: 1rem; font-weight: 700; }
        @media (max-width: 768px) {
          .portal-features-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .portal-steps-grid { grid-template-columns: 1fr 1fr !important; }
          .portal-step-arrow { display: none !important; }
          main section { padding-left: 1rem !important; padding-right: 1rem !important; }
        }
        @media (max-width: 480px) {
          .portal-steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
