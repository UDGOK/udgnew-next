import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd, MedicalBusinessJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Medical Office Design-Build Tulsa OK | 100+ Built",
  description: "Tulsa's top medical office design-build contractor. 100+ healthcare facilities delivered. $150–$350/sf with ADA, HIPAA, and ASHRAE 170 compliance.",
  openGraph: {
    images: [{ url: "https://www.udgok.com/images/og-default.png", width: 1200, height: 630, alt: "UDGOK — Medical & Dental Design-Build Construction in Tulsa, Oklahoma" }],
    title: "Medical Office Design-Build Tulsa OK",
    description: "Turnkey medical office construction in Tulsa. Specialized HVAC, ADA compliance, and medical-grade systems for clinics and specialty practices.",
    url: "https://www.udgok.com/medical-office-design-build-tulsa",
    type: "website",
  },
  alternates: { canonical: "https://www.udgok.com/medical-office-design-build-tulsa" },
};

export default function MedicalOfficePage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Medical Office Design-Build Tulsa", url: "https://www.udgok.com/medical-office-design-build-tulsa" }
  ];
  const PAGE_FAQS = [
          {
            q: "How much does it cost to build a medical office in Tulsa?",
            a: "<ul><li><strong>Primary care (3,000 sq ft):</strong> $150–$200/sf → $450K–$600K total</li><li><strong>Urgent care (4,000 sq ft):</strong> $180–$240/sf → $720K–$960K total</li><li><strong>Specialty with imaging:</strong> $250–$350/sf — add $150K–$500K+ for imaging room construction</li><li><strong>Budget tip:</strong> Add 10–15% contingency, plus $50K–$500K+ for medical equipment depending on specialty</li></ul>",
          },
          {
            q: "Do you handle medical office design and construction?",
            a: "<ul><li><strong>Single contract:</strong> Architecture, engineering, and construction all under one roof — no coordination headaches</li><li><strong>Cost savings:</strong> Typically saves 15–20% vs. hiring a separate architect and contractor</li><li><strong>Faster delivery:</strong> Design and construction phases overlap, shaving weeks off your timeline</li></ul>",
          },
          {
            q: "What medical specialties do you build for?",
            a: "<ul><li><strong>Primary care & family medicine</strong> — standard exam rooms, nurse stations, lab</li><li><strong>Urgent care & walk-in clinics</strong> — X-ray rooms, procedure areas, high patient volume flow</li><li><strong>Dermatology & med-spa</strong> — procedure rooms with specialized lighting and ventilation</li><li><strong>Orthopedics & pain management</strong> — imaging suites, physical therapy areas, procedure rooms</li><li><strong>Ophthalmology & cardiology</strong> — specialized equipment rooms with reinforced floors and dedicated power</li><li><strong>Multi-specialty groups</strong> — shared resources with specialty-specific build-outs</li></ul>",
          },
          {
            q: "Can you build a medical office in an existing retail space?",
            a: "<ul><li><strong>Yes — we do this regularly.</strong> Converting retail or office space into a medical suite is often 20–35% less expensive than ground-up construction</li><li><strong>Key things we evaluate:</strong> HVAC capacity for medical-grade air changes, plumbing access for exam room sinks, electrical capacity for medical equipment, and ADA accessibility upgrades</li><li><strong>Common conversions:</strong> Strip malls, office parks, and standalone retail buildings — each has trade-offs we'll walk you through</li></ul>",
          },
          {
            q: "What cities do you build medical offices in?",
            a: "<ul><li><strong>Tulsa metro:</strong> Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sapulpa, Haskell, Sand Springs</li><li><strong>Oklahoma City metro:</strong> OKC, Edmond, Norman, Moore</li><li><strong>Texas expansion:</strong> Dallas/Plano, TX</li></ul>",
          },
          {
            q: "What HIPAA requirements apply to medical office construction?",
            a: "<ul><li><strong>Sound-rated walls (STC 50+):</strong> Prevents patient conversations from being overheard in adjacent rooms or hallways</li><li><strong>Private consultation rooms:</strong> Dedicated space for discussing test results and treatment plans</li><li><strong>Secure server rooms:</strong> Climate-controlled, access-restricted space for electronic health records (EHR) systems</li><li><strong>Layout privacy:</strong> Check-in counters and workstations designed to prevent casual viewing of patient screens</li></ul>",
          },
          {
            q: "Does UDGOK install medical gas systems?",
            a: "<ul><li><strong>ASSE 6010 certified installers</strong> on staff — the highest certification for medical gas installation</li><li><strong>Systems we install:</strong> Oxygen, nitrous oxide, medical air, and vacuum — all to NFPA 99 standards</li><li><strong>Third-party verified:</strong> Independent ASSE 6030 inspection on every medical gas project</li><li><strong>Required for:</strong> Sedation dentistry, oral surgery suites, and ambulatory surgery centers in Oklahoma</li></ul>",
          },
          {
            q: "What is the difference between a tenant improvement and ground-up medical office?",
            a: "<ul><li><strong>Tenant improvement (TI):</strong> Build-out within an existing commercial shell — renovate to meet medical requirements. Typically 20–35% less cost, 3–5 month timeline</li><li><strong>Ground-up:</strong> New building from the foundation up — full control over layout and systems. 10–14 month timeline, higher cost but no compromises</li><li><strong>Watch out for with TIs:</strong> Existing spaces may have limited HVAC capacity, poor plumbing access, or structural constraints that can increase costs</li></ul>",
          },
          {
            q: "How do I budget for a medical office build-out in Oklahoma?",
            a: "<ul><li><strong>Step 1 — Estimate by specialty:</strong> Primary care $150–$200/sf, urgent care $180–$240/sf, specialty with imaging $250–$350/sf</li><li><strong>Step 2 — Add contingency:</strong> 10–15% of construction cost for unexpected conditions</li><li><strong>Step 3 — Equipment budget:</strong> $50K–$500K+ depending on specialty (not included in construction cost)</li><li><strong>Free budgeting:</strong> UDGOK offers free preconstruction budgeting to establish your total project cost before you sign a lease</li></ul>",
          },
          {
            q: "Does UDGOK handle healthcare regulatory compliance?",
            a: "<ul><li><strong>OSHA workplace safety</strong> — proper ventilation, hazardous material storage, and egress requirements</li><li><strong>ADA Title III accessibility</strong> — full compliance built into every design</li><li><strong>NFPA 99 medical gas</strong> — certified installation and third-party verification</li><li><strong>Oklahoma Dept. of Health inspections</strong> — we manage the entire approval process</li><li><strong>AAAHC accreditation</strong> — for ambulatory surgery centers requiring facility accreditation</li><li><strong>Bottom line:</strong> Compliance is designed in from day one, not added as an afterthought</li></ul>",
          },
        ];
  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />
      <FAQJsonLd questions={PAGE_FAQS} /><ServiceJsonLd
        name="Medical Office Design-Build Tulsa"
        description="Full-service medical office design-build in Tulsa, Oklahoma. UDGOK delivers turnkey clinics, specialty practices, and urgent care facilities with specialized MEP systems."
        url="https://www.udgok.com/medical-office-design-build-tulsa"
      />
      <MedicalBusinessJsonLd
        description="Tulsa, Oklahoma's top-rated medical office design-build contractor. 100+ healthcare facilities delivered including primary care clinics, urgent care centers, specialty practices, and multi-physician offices with ADA, HIPAA, and ASHRAE 170 compliance."
        url="https://www.udgok.com/medical-office-design-build-tulsa"
        specialization="Medical office construction, Healthcare design-build, Medical clinic build-out, Urgent care construction, ADA compliant medical office, HIPAA compliant construction, Medical-grade HVAC, Medical gas installation"
      />
      <ServicePage
        label="Medical Office"
        title="Medical Office Design-Build Tulsa"
        description="Turnkey medical offices engineered for clinical workflow, regulatory compliance, and patient experience."
        imageSrc="/images/ai-medical-exterior.png"
        imageAlt="Medical office design-build Tulsa by UDGOK"
        tldr="UDGOK is Tulsa's most experienced medical design-build firm, specializing in **Revenue-Ready** delivery for physician-owned practices. We overlap design and construction to get your clinic seeing patients 30% faster than traditional builders. From STC-50+ acoustic privacy for HIPAA compliance to specialized ASHRAE 170 ventilation, we build medical infrastructure that protects your clinical practice and your ROI."
        intro="Medical office construction demands precision that commercial contractors often can't deliver. Exam room dimensions, HVAC pressure relationships, ADA clearances, and infection control ventilation all require healthcare-specific expertise. UDGOK has delivered 100+ medical facilities across Oklahoma — from 1,200 sq ft solo practices to 15,000+ sq ft multi-physician specialty clinics. See our <a href='/guide-medical-office-cost-tulsa'>2026 medical office cost guide</a> for full per-square-foot pricing."
        practiceOwnerBox={{
          heading: "Maximizing ROI for Medical Practice Owners",
          bullets: [
            "<strong>Revenue-Ready Delivery:</strong> Our design-build methodology overlaps permitting and construction phases, getting your clinic open up to 60 days sooner than traditional methods.",
            "<strong>Absolute HIPAA Privacy:</strong> We implement specialized STC-50+ acoustic wall assemblies and sound masking to ensure patient consultations remain completely private.",
            "<strong>Clinical Workflow Optimization:</strong> We design layouts that minimize staff travel distances and optimize patient throughput, reducing daily operational stress for your team."
          ]
        }}
        galleryImages={[
          {
            src: "/images/clarus-brightsmile-reception.webp",
            alt: "BrightSmile Dental reception area with front desk and patient seating Tulsa",
            caption: "BrightSmile Dental — reception area with dual check-in stations and patient lounge",
          },
          {
            src: "/images/clarus-operatory-walnut.webp",
            alt: "Completed operatory with dental chair medical gas connections and walnut casework",
            caption: "Operatory with medical gas, natural light & custom walnut casework",
          },
          {
            src: "/images/clarus-consulting-room.webp",
            alt: "Design consultation room with interactive floorplan display",
            caption: "Design consultation room — review your layout on a 65\" interactive display",
          },
        ]}
        portfolioImages={[
          {
            src: "/images/clarus-brightsmile-triptych.webp",
            alt: "BrightSmile Dental complete project showcase reception operatory and 8-op floorplan",
            caption: "BrightSmile Dental — Tulsa",
            subcaption: "Reception, operatory & 8-op floorplan with imaging suite",
          },
          {
            src: "/images/clarus-modern-family-triptych.webp",
            alt: "Modern Family Dental Clinic reception hallway and 6-op dimensioned floorplan",
            caption: "Modern Family Dental Clinic",
            subcaption: "Reception, hallway & 6-op floorplan with full dimensions",
          },
        ]}
        videoSrc="/videos/walking-on-field-lumber.mp4"
        videoLabel="Field Review"
        videoHeadingStart="Precision in"
        videoHeadingAccent="Every Detail"
        stats={[
          { n: "100+", l: "Medical Facilities" },
          { n: "4–7mo", l: "Design to Occupancy" },
          { n: "ADA", l: "Full Compliance" },
          { n: "HIPAA", l: "Privacy Standards" },
        ]}
        features={[
          { icon: "🏥", title: "Clinical Layout Design", desc: "Exam rooms, nurse stations, and patient flow designed to maximize provider efficiency and minimize wait times." },
          { icon: "❄️", title: "Medical-Grade HVAC", desc: "Air change rates, pressure relationships, and filtration engineered for clinical environments per ASHRAE 170." },
          { icon: "♿", title: "ADA Compliance", desc: "Full accessibility including exam table clearances, turning radii, accessible restrooms, and signage requirements." },
          { icon: "🔒", title: "HIPAA Privacy", desc: "Sound-rated walls (STC 50+), private consultation rooms, and layout design that protects patient information." },
          { icon: "🔌", title: "Medical IT Infrastructure", desc: "Cat6A cabling, dedicated server rooms, and EMR workstation power for modern practice management systems." },
          { icon: "📋", title: "Regulatory Navigation", desc: "Oklahoma State Department of Health, CMS, and Joint Commission standards met from design through occupancy." },
        ]}
        testimonial={{
          quote: "UDGOK took over our 6,000 sq ft urgent care build-out in Bixby after another contractor couldn't handle the ASHRAE 170 HVAC requirements. They re-engineered our negative pressure rooms, passed the Dept. of Health inspection flawlessly, and got us open before flu season.",
          author: "Dr. Sarah M.",
          role: "Medical Director",
          location: "Bixby, OK"
        }}
        sections={[
          {
            heading: "How much does it cost to build a medical office in Tulsa?",
            body: `<p>Medical office construction costs in the Tulsa metro range from <strong>$150 to $350 per square foot</strong> depending on the medical specialty and equipment requirements.</p>
<table><thead><tr><th>Practice Type</th><th>Cost per Sq Ft</th><th>Typical Size</th><th>Total Range</th></tr></thead>
<tbody>
<tr><td>Primary Care / Family Medicine</td><td>$150–$200</td><td>2,000–4,000 sq ft</td><td>$300K–$800K</td></tr>
<tr><td>Urgent Care / Walk-In</td><td>$180–$240</td><td>3,000–5,000 sq ft</td><td>$540K–$1.2M</td></tr>
<tr><td>Dermatology / Med-Spa</td><td>$200–$280</td><td>2,500–4,000 sq ft</td><td>$500K–$1.1M</td></tr>
<tr><td>Orthopedics / Imaging</td><td>$250–$350</td><td>4,000–10,000 sq ft</td><td>$1M–$3.5M</td></tr>
</tbody></table>
<p><strong>Imaging suites</strong> (MRI, CT, X-ray) add significant cost due to lead shielding, structural reinforcement, and heavy electrical requirements — budget an additional $150,000–$500,000+ for imaging room construction alone. Need a full budget breakdown? See our <a href='/guide-medical-office-cost-tulsa'>2026 medical office cost guide</a>.</p>`,
          },
          {
            heading: "What HVAC requirements apply to medical offices in Oklahoma?",
            body: `<p>Medical offices must meet <strong>ASHRAE Standard 170</strong> — the national standard for healthcare ventilation. In plain terms, each room type needs a specific amount of fresh air circulation and pressure control to keep patients and staff safe:</p>
<ul>
<li><strong>Exam rooms:</strong> Minimum 6 air changes per hour — ensures clean air between patient visits</li>
<li><strong>Procedure rooms:</strong> 6–15 air changes per hour with positive pressure — keeps airborne contaminants from entering during procedures</li>
<li><strong>Waiting areas:</strong> 4–6 air changes per hour with fresh outdoor air — reduces cross-contamination in shared spaces</li>
<li><strong>Soiled utility rooms:</strong> Negative pressure with 10 air changes per hour — contains odors and contaminants</li>
<li><strong>Clean storage:</strong> Positive pressure with 4 air changes per hour — protects sterile supplies</li>
</ul>
<p>UDGOK designs and commissions HVAC systems that meet all healthcare ventilation codes while keeping your energy bills manageable. Our typical medical office HVAC costs run $25–$50 per square foot installed. We also handle <a href='/medical-gas-installation'>medical gas installation</a> for practices that need oxygen, nitrous oxide, or medical air systems.</p>`,
          },
          {
            heading: "What ADA requirements must medical offices meet?",
            body: `<p>Medical offices in Oklahoma must comply with the <strong>2010 ADA Standards for Accessible Design</strong> plus Oklahoma Accessibility Code. Here's what that means for your layout:</p>
<ul>
<li><strong>Hallways & exam access:</strong> 36" minimum clear width — wide enough for wheelchairs and walkers throughout your clinic</li>
<li><strong>Exam rooms:</strong> 60" turning radius with 30"×48" clear floor space at exam tables — ensures every patient can be comfortably examined</li>
<li><strong>Reception counter:</strong> At least one 36"-high section — so wheelchair-using patients can interact at eye level</li>
<li><strong>Restrooms:</strong> 60" turning radius, grab bars, and accessible fixtures — required in every patient-accessible restroom</li>
<li><strong>Parking:</strong> Accessible spaces based on total parking count — including van-accessible spaces with 8' loading zones</li>
<li><strong>Signage:</strong> Tactile/Braille room signs and visual alarms — required on all permanent rooms and spaces</li>
</ul>
<p>UDGOK includes full ADA compliance review in every medical office project at no additional cost. Getting this wrong can mean costly retrofits, DOJ enforcement actions, and patient discrimination lawsuits.</p>`,
          },
          {
            heading: "How long does it take to build a medical office?",
            body: `<p>Medical office construction timelines depend on project complexity. Here are typical durations for Tulsa metro projects:</p>
<ul>
<li><strong>Simple tenant build-out (2,000–3,000 sq ft):</strong> 4–5 months total — 6 weeks design, 2 weeks permitting, 10–12 weeks construction</li>
<li><strong>Multi-specialty clinic (5,000–10,000 sq ft):</strong> 6–9 months total — more complex mechanical and layout coordination</li>
<li><strong>Ground-up medical office building:</strong> 10–14 months total — includes site work, foundation, and full exterior</li>
</ul>
<p>UDGOK's <a href='/design-build'>design-build approach</a> saves 20% on schedule versus the traditional design-bid-build method by overlapping design and construction phases. Our <a href='/preconstruction'>preconstruction services</a> help lock in your budget before construction begins. For time-sensitive projects like practice relocations, we offer fast-track delivery starting at 12 weeks for a standard build-out.</p>`,
          },
        ]}
        faqs={PAGE_FAQS}
        cta="See What Your Practice Could Look Like"
        secondaryCta={{ text: "Compare 4-Op vs 6-Op Layouts", href: "/contact" }}
        calculatorType="medical"
      />
    </>
  );
}
