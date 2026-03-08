import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Medical Gas Installation Oklahoma",
  description: "Certified NFPA 99 medical gas installation in Tulsa and Oklahoma. UDGOK installs and certifies oxygen, nitrous oxide, medical air, and vacuum systems for dental and medical practices.",
  alternates: { canonical: "https://udgok.com/medical-gas-installation" },
};

export default function MedicalGasPage() {
  return (
    <ServicePage
      label="Medical Gas Systems"
      title="Medical Gas Installation"
      description="NFPA 99 certified medical gas systems for dental, medical, and surgical facilities across Oklahoma and Texas."
      imageSrc="/images/modern-medical-office-building-exterior-entrance.jpg"
      imageAlt="Medical gas installation by UDGOK"
      intro="Medical gas installation is a life-safety system requiring ASSE 6010 certified installers and strict adherence to NFPA 99. UDGOK's medical gas division installs, tests, and certifies complete piped gas systems for any size facility."
      stats={[
        { n: "ASSE 6010", l: "Certified Installers" },
        { n: "NFPA 99", l: "Code Compliance" },
        { n: "4 Gas", l: "Types Installed" },
        { n: "100%", l: "Third-Party Verified" },
      ]}
      features={[
        { icon: "🫁", title: "Oxygen Systems", desc: "Bulk oxygen supply, LOX systems, H-cylinder manifolds with automatic changeover and alarm panels." },
        { icon: "😴", title: "Nitrous Oxide", desc: "N2O piping systems with zone valve boxes, WAGD (waste anesthetic gas disposal), and scavenging." },
        { icon: "💨", title: "Medical Air", desc: "NFPA 99-compliant dental air or medical-grade air compressors with filtration and dew point monitoring." },
        { icon: "🌀", title: "Vacuum Systems", desc: "Wet and dry vacuum systems sized for procedure counts, including dental high-volume evacuation." },
        { icon: "🔔", title: "Alarm Systems", desc: "Master alarm panels, area alarm panels, and zone valve assemblies with NFPA-required features." },
        { icon: "📋", title: "Testing & Certification", desc: "ASSE 6030 verifier testing, cross-connection testing, and third-party certification documentation." },
      ]}
    />
  );
}
