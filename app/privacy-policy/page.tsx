import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Upscale Development Group (UDGOK). Learn how we collect, use, and protect your personal information during construction project inquiries, bid submissions, and site visits.",
  alternates: { canonical: "https://udgok.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const effective = "March 1, 2026";

  return (
    <>
      <section
        style={{
          background: "linear-gradient(180deg, #0B061B 0%, #111 100%)",
          padding: "8rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#FF4800",
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Legal
        </p>
        <h1
          style={{
            color: "#fff",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "1rem" }}>
          Effective Date: {effective}
        </p>
      </section>

      <article
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "4rem 2rem 6rem",
          color: "#1a1a2e",
          lineHeight: 1.85,
          fontSize: "1.05rem",
        }}
      >
        <Section title="1. Introduction">
          <p>
            Upscale Development Group LLC, doing business as UDGOK
            (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;), is committed to protecting the privacy of our
            clients, subcontractors, bidders, and website visitors. This Privacy
            Policy describes how we collect, use, disclose, and safeguard your
            information when you visit our website at{" "}
            <strong>udgok.com</strong>, submit a project inquiry, use our bid
            portal, or engage our construction services.
          </p>
          <p>
            By accessing this website or providing personal information to us,
            you consent to the practices described in this policy.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <h3 style={h3}>2.1 Information You Provide Directly</h3>
          <ul style={ul}>
            <li>
              <strong>Project Inquiry Forms:</strong> Name, email address, phone
              number, company name, project type, project location, and budget
              range.
            </li>
            <li>
              <strong>Bid Portal Registration:</strong> Company name, contact
              name, email, phone, trade/specialty, contractor license number,
              and state of licensure.
            </li>
            <li>
              <strong>Bid Submissions:</strong> Project-specific bid amounts,
              proposal documents, scope narratives, and attached files (PDF,
              JPEG, DWG).
            </li>
            <li>
              <strong>Subcontractor Applications:</strong> Insurance
              certificates, bonding information, safety records, OSHA logs, and
              W-9 forms.
            </li>
            <li>
              <strong>Email Communications:</strong> Any information you provide
              via email to our project managers or estimating team.
            </li>
          </ul>

          <h3 style={h3}>2.2 Automatically Collected Information</h3>
          <ul style={ul}>
            <li>IP address, browser type, operating system</li>
            <li>Pages visited, time spent on pages, referring URLs</li>
            <li>Device identifiers and general geographic location</li>
            <li>
              Cookies and similar tracking technologies (see Section 6)
            </li>
          </ul>

          <h3 style={h3}>2.3 Construction-Specific Information</h3>
          <p>
            In the course of providing our services, we may collect additional
            information including but not limited to: property addresses, floor
            plans, architectural drawings, MEP specifications, medical equipment
            layouts, site photographs, ADA compliance documentation, and local
            permitting records. This information is used solely for the purpose
            of delivering construction services.
          </p>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul style={ul}>
            <li>To respond to project inquiries and provide estimates</li>
            <li>
              To manage the subcontractor bidding process and evaluate bids
            </li>
            <li>
              To communicate project updates, schedules, and change orders
            </li>
            <li>To process subcontractor prequalification applications</li>
            <li>To comply with local, state, and federal building codes and regulations</li>
            <li>To maintain jobsite safety records as required by OSHA</li>
            <li>To send project-related correspondence and invoices</li>
            <li>To improve our website, services, and user experience</li>
            <li>To comply with legal obligations and protect our rights</li>
          </ul>
        </Section>

        <Section title="4. Disclosure of Information">
          <p>We may share your information with:</p>
          <ul style={ul}>
            <li>
              <strong>Project Team Members:</strong> Architects, engineers,
              subcontractors, and suppliers directly involved in your
              construction project, on a need-to-know basis.
            </li>
            <li>
              <strong>Regulatory Bodies:</strong> Municipal building departments,
              state licensing boards, OSHA, and the Oklahoma Department of
              Health when required for permitting, inspections, or compliance.
            </li>
            <li>
              <strong>Insurance Providers:</strong> Workers&apos; compensation,
              general liability, and professional liability carriers as
              required.
            </li>
            <li>
              <strong>Service Providers:</strong> Email delivery services
              (Resend), hosting providers (Vercel), and analytics platforms that
              assist in our operations.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law,
              subpoena, court order, or to protect our rights in legal
              proceedings.
            </li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal
            information to third parties for marketing purposes.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain project-related records for a minimum of{" "}
            <strong>seven (7) years</strong> following project completion, in
            accordance with Oklahoma construction lien laws, statute of
            limitations for construction defect claims, and IRS record-keeping
            requirements. Bid portal account information is retained for the
            duration of the account plus two (2) years after the last activity.
            Website analytics data is retained for twenty-six (26) months.
          </p>
        </Section>

        <Section title="6. Cookies & Tracking">
          <p>
            We use essential cookies necessary for website functionality and may
            use analytics cookies (e.g., Google Analytics) to understand how
            visitors interact with our site. You may disable cookies through
            your browser settings, though this may limit certain website
            features.
          </p>
        </Section>

        <Section title="7. Data Security">
          <p>
            We implement industry-standard security measures to protect your
            information, including:
          </p>
          <ul style={ul}>
            <li>SSL/TLS encryption for all data transmitted via our website</li>
            <li>Encrypted password storage using bcrypt hashing</li>
            <li>
              Role-based access controls for the bid portal and project files
            </li>
            <li>Regular security reviews of our hosting infrastructure</li>
          </ul>
          <p>
            While we strive to protect your information, no method of electronic
            transmission or storage is 100% secure. We cannot guarantee absolute
            security.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul style={ul}>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>
              Request deletion of your personal data (subject to legal retention
              requirements)
            </li>
            <li>Opt out of non-essential communications</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <strong>projects@udgok.com</strong> or call{" "}
            <strong>(918) 520-3823</strong>.
          </p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>
            Our website and services are not directed to individuals under 18
            years of age. We do not knowingly collect personal information from
            children. If you believe we have inadvertently collected such
            information, please contact us immediately.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date. Continued use of
            our website after changes constitutes acceptance of the revised
            policy.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            If you have questions about this Privacy Policy or our data
            practices, contact us at:
          </p>
          <div style={{ background: "#f8f9fa", padding: "1.5rem", borderRadius: "12px", marginTop: "1rem" }}>
            <p style={{ margin: 0 }}>
              <strong>Upscale Development Group LLC</strong>
              <br />
              7739 E 38th Street, Ste F
              <br />
              Tulsa, OK 74145
              <br />
              Phone: (918) 520-3823
              <br />
              Email: projects@udgok.com
            </p>
          </div>
        </Section>
      </article>
    </>
  );
}

const h3: React.CSSProperties = {
  fontSize: "1.15rem",
  fontWeight: 700,
  marginTop: "1.5rem",
  marginBottom: "0.5rem",
  color: "#0B061B",
};

const ul: React.CSSProperties = {
  paddingLeft: "1.5rem",
  marginBottom: "1rem",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "3rem" }}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 800,
          color: "#0B061B",
          marginBottom: "1rem",
          paddingBottom: "0.75rem",
          borderBottom: "2px solid #FF4800",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
