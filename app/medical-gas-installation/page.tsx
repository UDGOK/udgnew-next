import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Medical Gas Installation Oklahoma | NFPA 99 Certified | UDGOK",
  description: "Certified NFPA 99 medical gas installation in Tulsa and Oklahoma. UDGOK installs and certifies oxygen, nitrous oxide, medical air, and vacuum systems for dental and medical practices.",
  keywords: [
    "medical gas installation Oklahoma",
    "medical gas installer Tulsa",
    "NFPA 99 medical gas systems",
    "dental medical gas installation",
    "nitrous oxide installation dental office",
    "oxygen piping system Oklahoma",
    "vacuum system installation dental",
    "ASSE 6010 certified installer",
    "medical gas certification Oklahoma",
    "medical air compressor installation",
    "WAGD system installation",
    "medical gas testing verification",
  ],
  openGraph: {
    title: "Medical Gas Installation Oklahoma | NFPA 99 | UDGOK",
    description: "ASSE 6010 certified medical gas installation for dental and medical facilities. Oxygen, N2O, medical air, and vacuum systems across Oklahoma.",
    url: "https://udgok.com/medical-gas-installation",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/medical-gas-installation" },
};

export default function MedicalGasPage() {
  return (
    <>
      <ServiceJsonLd
        name="Medical Gas Installation"
        description="Licensed NFPA 99 medical gas installation and ASSE 6030 verification for dental offices, surgical centers, and healthcare facilities across Oklahoma."
        url="https://udgok.com/medical-gas-installation"
      />
      <ServicePage
        label="Medical Gas Systems"
        title="Medical Gas Installation"
        description="NFPA 99 certified medical gas systems for dental, medical, and surgical facilities across Oklahoma and Texas."
        imageSrc="/images/modern-medical-office-building-exterior-entrance.jpg"
        imageAlt="Medical gas installation by UDGOK"
        tldr="UDGOK provides ASSE 6010 certified medical gas installation for dental offices, surgical centers, and healthcare facilities across Oklahoma. We install oxygen, nitrous oxide, medical air, and vacuum piped systems to NFPA 99 standards, with third-party ASSE 6030 verification testing. Medical gas installation costs range from $15,000 to $80,000+ depending on system complexity and facility size."
        intro="Medical gas installation is a life-safety system requiring ASSE 6010 certified installers and strict adherence to NFPA 99. UDGOK's medical gas division installs, tests, and certifies complete piped gas systems for any size facility — from a 3-operatory dental office to a multi-suite ambulatory surgical center."
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
        sections={[
          {
            heading: "How much does medical gas installation cost?",
            body: `<p>Medical gas installation costs depend on the type of facility, number of outlets, and gas types required:</p>
<table><thead><tr><th>Facility Type</th><th>Typical Gas Types</th><th>Cost Range</th></tr></thead>
<tbody>
<tr><td>3–6 Chair Dental Office</td><td>Air, Vacuum, N2O (optional)</td><td>$15,000–$35,000</td></tr>
<tr><td>Large Dental / Oral Surgery</td><td>Air, Vacuum, O2, N2O, WAGD</td><td>$35,000–$60,000</td></tr>
<tr><td>Medical Office (no gases)</td><td>Medical Air, Vacuum only</td><td>$8,000–$20,000</td></tr>
<tr><td>Ambulatory Surgery Center</td><td>O2, N2O, Medical Air, Vacuum, WAGD</td><td>$50,000–$150,000+</td></tr>
</tbody></table>
<p>Costs include copper piping, zone valve boxes, outlet stations, alarm panels, and ASSE 6030 third-party verification testing. Source equipment (compressors, vacuum pumps, cylinder manifolds) is additional.</p>`,
          },
          {
            heading: "What certifications are required for medical gas installation?",
            body: `<p>Medical gas installation is heavily regulated. NFPA 99 (Health Care Facilities Code) requires:</p>
<ul>
<li><strong>ASSE 6010:</strong> Certification for medical gas installers — required for anyone brazing medical gas piping</li>
<li><strong>ASSE 6020:</strong> Certification for medical gas inspectors (used during construction oversight)</li>
<li><strong>ASSE 6030:</strong> Certification for medical gas verifiers — required for final testing and certification</li>
<li><strong>ASSE 6040:</strong> Certification for medical gas maintenance personnel</li>
</ul>
<p>All UDGOK medical gas installers hold current ASSE 6010 certification. We engage independent ASSE 6030 certified verifiers for third-party testing — this is required by NFPA 99 Section 5.1.12 and cannot be performed by the same entity that installed the system.</p>`,
          },
          {
            heading: "What testing is performed on medical gas systems?",
            body: `<p>NFPA 99 requires comprehensive testing before any medical gas system is placed in service. The ASSE 6030 verification includes:</p>
<ul>
<li><strong>Standing pressure test:</strong> 24-hour test at 150% of system operating pressure to verify joint integrity</li>
<li><strong>Cross-connection test:</strong> Verify each outlet delivers the correct gas and only that gas</li>
<li><strong>Flow test:</strong> Confirm adequate flow rates at the most remote outlets</li>
<li><strong>Purity test:</strong> Particulate count and dew point testing per CGA G-4.1 standards</li>
<li><strong>Alarm verification:</strong> Test all master, area, and zone alarm functions</li>
<li><strong>Labeling verification:</strong> Confirm NFPA-required labels on all outlets, valves, and piping</li>
</ul>
<p>UDGOK provides complete test documentation and third-party verification certificates that satisfy OSDH (Oklahoma State Department of Health) and Joint Commission requirements.</p>`,
          },
        ]}
        faqs={[
          { q: "How much does medical gas installation cost for a dental office?", a: "Medical gas installation for a standard 4–6 chair dental office costs $15,000–$35,000 for piping, outlets, zone valves, and alarm panels. Offices adding nitrous oxide sedation should budget an additional $8,000–$15,000 for N2O piping and WAGD systems." },
          { q: "What is ASSE 6010 certification?", a: "ASSE 6010 is a certification from the American Society of Sanitary Engineering that qualifies an individual to install medical gas piping systems. NFPA 99 requires all medical gas brazing and installation to be performed by ASSE 6010 certified personnel." },
          { q: "Is third-party testing required for medical gas systems?", a: "Yes. NFPA 99 Section 5.1.12 requires that medical gas systems be tested and verified by an ASSE 6030 certified verifier who is independent of the installing contractor. UDGOK arranges this third-party verification for every project." },
          { q: "Do you install medical gas systems for existing practices?", a: "Yes. We retrofit medical gas systems into existing dental and medical offices, including adding nitrous oxide to practices that didn't originally have it. Retrofit installations typically cost 10–20% more than new construction due to access challenges." },
          { q: "What areas does UDGOK serve for medical gas installation?", a: "We install medical gas systems across Oklahoma including Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sapulpa, Oklahoma City, and throughout northeast Oklahoma. We also serve the Dallas/Plano, TX metro area." },
        ]}
        cta="Get a Medical Gas Quote →"
      />
    </>
  );
}
