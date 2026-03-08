import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Upscale Development Group (UDGOK). Governs use of our website, bid portal, construction calculators, and outlines project engagement terms, liability limitations, and dispute resolution.",
  alternates: { canonical: "https://udgok.com/terms-of-service" },
};

export default function TermsOfServicePage() {
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
          Terms of Service
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
        <Section title="1. Acceptance of Terms">
          <p>
            These Terms of Service (&quot;Terms&quot;) constitute a legally
            binding agreement between you (&quot;User,&quot; &quot;you,&quot; or
            &quot;your&quot;) and Upscale Development Group LLC, doing business
            as UDGOK (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;), with principal offices at 7739 E 38th Street, Ste
            F, Tulsa, Oklahoma 74145.
          </p>
          <p>
            By accessing or using our website at <strong>udgok.com</strong>,
            including the Bid Portal, construction calculators, Knowledge Hub,
            and any related services, you agree to be bound by these Terms. If
            you do not agree, do not use this website.
          </p>
        </Section>

        <Section title="2. Description of Services">
          <p>Our website provides:</p>
          <ul style={ul}>
            <li>
              General information about our Design-Build construction services
              for medical, dental, commercial, and healthcare facilities
            </li>
            <li>
              A Subcontractor Bid Portal for registered bidders to view active
              projects and submit proposals
            </li>
            <li>
              Construction material calculators (concrete, drywall, paint,
              brick, roofing, flooring) provided for estimation purposes only
            </li>
            <li>
              Educational articles and construction knowledge resources
            </li>
            <li>
              A contact form for project inquiries and consultations
            </li>
          </ul>
        </Section>

        <Section title="3. Website Use — No Professional Advice">
          <p>
            The content on this website, including articles, calculators, cost
            ranges, timelines, and construction guides, is provided for{" "}
            <strong>general informational purposes only</strong> and does{" "}
            <strong>not</strong> constitute professional engineering, architectural,
            legal, or construction advice.
          </p>
          <p>
            <strong>
              Construction calculator results are rough estimates only.
            </strong>{" "}
            Actual material quantities, costs, and specifications will vary
            based on site conditions, local codes, material availability, labor
            rates, and project-specific factors. You should not rely on
            calculator outputs for procurement, bidding, or construction
            decisions without independent verification by a qualified
            professional.
          </p>
          <p>
            Cost ranges, project timelines, and construction data referenced on
            this site are based on historical Oklahoma and Texas market
            conditions and may not reflect current pricing.
          </p>
        </Section>

        <Section title="4. Bid Portal Terms">
          <h3 style={h3}>4.1 Registration & Access</h3>
          <p>
            Access to the Bid Portal requires registration. By registering, you
            represent that: (a) all information provided is accurate and
            current; (b) you are authorized to represent your company; (c) your
            company holds all licenses required by the state(s) in which you
            operate. We reserve the right to deny, suspend, or revoke portal
            access at our sole discretion.
          </p>

          <h3 style={h3}>4.2 Confidentiality of Project Information</h3>
          <p>
            All project documents, drawings, specifications, budgets, and
            related information made available through the Bid Portal are{" "}
            <strong>confidential and proprietary</strong>. By accessing these
            materials, you agree to:
          </p>
          <ul style={ul}>
            <li>
              Use project information solely for the purpose of preparing a bid
              response
            </li>
            <li>
              Not disclose, copy, distribute, or share project documents with
              any third party without our prior written consent
            </li>
            <li>
              Return or destroy all documents upon request or upon project
              award to another party
            </li>
            <li>
              Not use project information to solicit the project owner or other
              parties directly
            </li>
          </ul>
          <p>
            Violation of these confidentiality provisions may result in
            immediate portal access revocation and legal action.
          </p>

          <h3 style={h3}>4.3 Bid Submissions</h3>
          <p>
            Bids submitted through the portal are non-binding proposals unless
            and until a formal subcontract agreement is executed by both
            parties. Submission of a bid does not create a contractual
            obligation. We reserve the right to accept or reject any bid at our
            sole discretion, and award decisions are final.
          </p>
        </Section>

        <Section title="5. Construction Services Disclaimer">
          <p>
            <strong>
              These Terms govern the use of this website only, not construction
              services.
            </strong>{" "}
            All construction projects are governed by separate, project-specific
            contracts (e.g., AIA, ConsensusDocs, or custom agreements) that are
            executed independently. In the event of any conflict between these
            Terms and a project contract, the project contract shall control.
          </p>
          <p>
            Nothing on this website shall be construed as a guarantee of project
            pricing, timeline, or outcomes. All construction projects are
            subject to factors including but not limited to: permitting
            timelines, material availability, weather conditions, concealed site
            conditions, change orders, and regulatory requirements.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All content on this website — including but not limited to text,
            images, photographs, graphics, logos, page layouts, AI-generated
            imagery, calculator algorithms, and article content — is the
            property of Upscale Development Group LLC or its licensors and is
            protected by United States copyright and intellectual property laws.
          </p>
          <p>You may not:</p>
          <ul style={ul}>
            <li>
              Reproduce, distribute, or republish website content without
              written permission
            </li>
            <li>
              Use our name, logo, or branding to imply endorsement or
              affiliation
            </li>
            <li>
              Scrape, crawl, or systematically download website content for
              commercial use (standard search engine and AI indexing permitted)
            </li>
          </ul>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            <strong>
              TO THE MAXIMUM EXTENT PERMITTED BY OKLAHOMA LAW, UPSCALE
              DEVELOPMENT GROUP LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND
              AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO:
            </strong>
          </p>
          <ul style={ul}>
            <li>Your use of or inability to use this website</li>
            <li>
              Reliance on construction calculator outputs, cost estimates, or
              timeline projections published on this site
            </li>
            <li>
              Any decisions made based on content, articles, or resources
              available on this website
            </li>
            <li>
              Unauthorized access to or alteration of your data or
              transmissions
            </li>
            <li>
              Any third-party content or links referenced on this website
            </li>
          </ul>
          <p>
            <strong>
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED ONE HUNDRED DOLLARS
              ($100.00).
            </strong>{" "}
            This limitation applies regardless of the theory of liability
            (contract, tort, strict liability, or otherwise), even if we have
            been advised of the possibility of such damages. Some jurisdictions
            do not allow the exclusion of certain damages; in such cases, our
            liability shall be limited to the minimum extent permitted by law.
          </p>
        </Section>

        <Section title="8. Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless Upscale
            Development Group LLC and its officers, directors, employees, and
            agents from and against any and all claims, liabilities, damages,
            losses, costs, and expenses (including reasonable attorneys&apos;
            fees) arising out of or related to: (a) your use of this website;
            (b) your violation of these Terms; (c) your violation of any third
            party&apos;s rights; or (d) any information you submit through our
            website or bid portal.
          </p>
        </Section>

        <Section title="9. Dispute Resolution & Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the <strong>State of Oklahoma</strong>, without regard
            to its conflict of law provisions.
          </p>
          <p>
            Any dispute arising out of or relating to these Terms or your use of
            this website shall be resolved exclusively in the state or federal
            courts located in <strong>Tulsa County, Oklahoma</strong>. You
            consent to the personal jurisdiction of these courts and waive any
            objection to venue.
          </p>
          <p>
            For construction project disputes, the dispute resolution provisions
            in the applicable project contract shall govern. These Terms do not
            modify or supersede any project-specific dispute resolution
            clauses.
          </p>
        </Section>

        <Section title="10. Warranty Disclaimer">
          <p>
            THIS WEBSITE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND
            &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES
            OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that: (a) the website will be uninterrupted or
            error-free; (b) defects will be corrected; (c) the website is free
            of viruses or other harmful components; or (d) any content is
            accurate, reliable, or current.
          </p>
        </Section>

        <Section title="11. Third-Party Links & Services">
          <p>
            This website may contain links to third-party websites, including
            material suppliers, industry organizations, and regulatory bodies.
            We are not responsible for the content, privacy practices, or
            availability of these external sites. Linking does not imply
            endorsement.
          </p>
        </Section>

        <Section title="12. Insurance & Licensing">
          <p>
            Upscale Development Group LLC maintains general liability insurance,
            workers&apos; compensation insurance, and all licenses required by
            the State of Oklahoma for general contracting. Proof of insurance
            and licensing is available upon request to project owners and prime
            contractors. Display of this information on our website is for
            informational purposes and is not a guarantee of coverage for any
            particular project.
          </p>
        </Section>

        <Section title="13. Force Majeure">
          <p>
            We shall not be liable for any delay or failure in performance
            resulting from causes beyond our reasonable control, including but
            not limited to: natural disasters, pandemics, government actions,
            material shortages, supply chain disruptions, labor disputes, power
            outages, or internet service interruptions.
          </p>
        </Section>

        <Section title="14. Severability">
          <p>
            If any provision of these Terms is found to be invalid,
            unenforceable, or illegal by a court of competent jurisdiction, the
            remaining provisions shall continue in full force and effect. The
            invalid provision shall be modified to the minimum extent necessary
            to make it valid and enforceable.
          </p>
        </Section>

        <Section title="15. Modifications">
          <p>
            We reserve the right to modify these Terms at any time. Changes will
            be posted on this page with an updated effective date. Your
            continued use of the website after any modifications constitutes
            acceptance of the revised Terms. Material changes will be indicated
            by updating the effective date at the top of this page.
          </p>
        </Section>

        <Section title="16. Entire Agreement">
          <p>
            These Terms, together with our Privacy Policy, constitute the entire
            agreement between you and Upscale Development Group LLC regarding
            your use of this website. These Terms do not apply to construction
            services, which are governed by separate project contracts.
          </p>
        </Section>

        <Section title="17. Contact Information">
          <p>
            For questions about these Terms, contact us at:
          </p>
          <div
            style={{
              background: "#f8f9fa",
              padding: "1.5rem",
              borderRadius: "12px",
              marginTop: "1rem",
            }}
          >
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
