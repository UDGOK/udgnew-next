import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Create Account | UDGOK Bid Portal",
  description: "Create an account to access the UDGOK Subcontractor Bid Portal.",
};

export default function SignUpPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0B061B", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "520px" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link href="/">
            <Image src="/images/logo-transparent.png" alt="UDGOK" width={160} height={60} style={{ height: "50px", width: "auto", objectFit: "contain", margin: "0 auto" }} />
          </Link>
          <div style={{ marginTop: "1.5rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF4800" }}>
            Create Account
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <SignUp
            appearance={{
              elements: {
                rootBox: { width: "100%" },
                card: { backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", boxShadow: "none" },
                headerTitle: { color: "#fff" },
                headerSubtitle: { color: "rgba(255,255,255,0.5)" },
                formFieldLabel: { color: "rgba(255,255,255,0.5)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" },
                formFieldInput: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", color: "#fff" },
                formButtonPrimary: { background: "#FF4800", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: "14px" },
                footerAction: { color: "rgba(255,255,255,0.4)" },
                footerActionLink: { color: "#FF4800" },
              },
            }}
            routing="path"
            path="/portal/sign-up"
            signInUrl="/portal"
            forceRedirectUrl="/portal/dashboard"
          />
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>
          © {new Date().getFullYear()} UDGOK. Access restricted to authorized contractors.
        </div>
      </div>
    </main>
  );
}
