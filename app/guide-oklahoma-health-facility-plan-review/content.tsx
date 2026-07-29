import Link from "next/link";

/**
 * Content for the ODH plan review guide.
 *
 * EDITORIAL RULE FOR THIS PAGE: every regulatory claim is tied to a citable
 * primary source (OAC rule number, ODH form, or City of Tulsa publication).
 * Where the primary sources do not support a claim, the page says so rather
 * than filling the gap — see the "what this guide will not tell you" section.
 * That is deliberate. Regulatory content that guesses is a liability, and
 * hedged-but-sourced beats confident-but-wrong with readers and answer engines
 * alike.
 *
 * If you revise this page substantively, bump `dateModified` in the Article
 * JSON-LD on page.tsx AND `updated` in lib/insights.ts.
 */

const cell: React.CSSProperties = {
  padding: "0.85rem 1rem",
  borderBottom: "1px solid #E4E2DD",
  verticalAlign: "top",
  fontSize: "0.95rem",
  lineHeight: 1.6,
};

const th: React.CSSProperties = {
  ...cell,
  background: "#1C1F24",
  color: "#fff",
  fontSize: "0.7rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  fontWeight: 700,
  borderBottom: "none",
};

function Callout({ children, tone = "amber" }: { children: React.ReactNode; tone?: "amber" | "dark" }) {
  return (
    <aside
      style={{
        background: tone === "dark" ? "#1C1F24" : "#FAF8F4",
        color: tone === "dark" ? "#fff" : "#23272E",
        borderLeft: "3px solid #FF4800",
        padding: "1.75rem 2rem",
        margin: "2.5rem 0",
        lineHeight: 1.75,
      }}
    >
      {children}
    </aside>
  );
}

function Source({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#CF5F29", fontWeight: 600 }}>
      {children}
    </a>
  );
}

export default function PlanReviewContent() {
  return (
    <>
      <p style={{ fontSize: "1.25rem", lineHeight: 1.7, fontWeight: 500, color: "#23272E" }}>
        <strong>Short answer:</strong> Oklahoma requires state-level health facility
        plan review for licensed facilities — hospitals, hospital outpatient
        departments, ambulatory surgery centers, skilled nursing, and a handful of
        others. The Oklahoma State Department of Health has{" "}
        <strong>10 calendar days</strong> to decide whether your application is
        administratively complete and <strong>45 calendar days</strong> to complete
        technical review. Both are written into the rule. The catch is that the
        45-day clock <em>stops</em> the moment ODH asks you for more information.
      </p>

      <p>
        Most of the schedule risk on an Oklahoma healthcare project is not in the
        construction. It is in the gap between &ldquo;we submitted&rdquo; and
        &ldquo;we&rsquo;re approved,&rdquo; and that gap is almost entirely a
        function of how good the first submittal was. This guide covers what
        triggers state review, what ODH actually requires, what it costs, and the
        fee mechanism that punishes a sloppy submittal harder than most teams
        realise.
      </p>

      <h2>Does state plan review even apply to your project?</h2>

      <p>
        This is the question that matters most, and the one most practice owners
        get wrong in both directions. ODH publishes a closed list of facility types
        subject to plan review, and the trigger is <strong>licensure status, not
        clinical activity</strong>.
      </p>

      <div style={{ overflowX: "auto", margin: "2rem 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #E4E2DD" }}>
          <thead>
            <tr>
              <th style={th}>Facility</th>
              <th style={th}>State plan review</th>
              <th style={th}>Governing rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cell}>Hospital (acute, psychiatric, rehab, LTAC)</td>
              <td style={{ ...cell, fontWeight: 700, color: "#CF5F29" }}>Required</td>
              <td style={cell}>OAC 310:667</td>
            </tr>
            <tr style={{ background: "#FCFBF9" }}>
              <td style={cell}>Hospital Outpatient Department (HOD)</td>
              <td style={{ ...cell, fontWeight: 700, color: "#CF5F29" }}>Required</td>
              <td style={cell}>OAC 310:667</td>
            </tr>
            <tr>
              <td style={cell}>Ambulatory Surgical Center</td>
              <td style={{ ...cell, fontWeight: 700, color: "#CF5F29" }}>Required</td>
              <td style={cell}>OAC 310:615</td>
            </tr>
            <tr style={{ background: "#FCFBF9" }}>
              <td style={cell}>Skilled nursing / ICF-IID</td>
              <td style={{ ...cell, fontWeight: 700, color: "#CF5F29" }}>Required</td>
              <td style={cell}>OAC 310:675</td>
            </tr>
            <tr>
              <td style={cell}>Assisted living / continuum care</td>
              <td style={{ ...cell, fontWeight: 700, color: "#CF5F29" }}>Required</td>
              <td style={cell}>OAC 310:663</td>
            </tr>
            <tr style={{ background: "#FCFBF9" }}>
              <td style={cell}>Freestanding inpatient hospice</td>
              <td style={{ ...cell, fontWeight: 700, color: "#CF5F29" }}>Required</td>
              <td style={cell}>OAC 310:661</td>
            </tr>
            <tr>
              <td style={cell}>
                <strong>Private dental office</strong>
              </td>
              <td style={{ ...cell, color: "#6B7280" }}>Not on ODH&rsquo;s list</td>
              <td style={cell}>—</td>
            </tr>
            <tr style={{ background: "#FCFBF9" }}>
              <td style={cell}>
                <strong>Private physician office / clinic</strong>
              </td>
              <td style={{ ...cell, color: "#6B7280" }}>Not on ODH&rsquo;s list</td>
              <td style={cell}>—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout>
        <strong>Be careful how you read the bottom two rows.</strong> ODH does not
        publish a sentence saying &ldquo;dental offices are exempt.&rdquo; What it
        publishes is a closed list of applicable facility types that does not
        include them, and rules that by their own terms apply only to licensed
        hospitals and ASCs. That is a strong inference, not a quoted exemption. If
        your project is anywhere near the line, confirm it with ODH Plan Review
        before you rely on it — and note that dental sedation and anesthesia
        facility permits run through the{" "}
        <Source href="https://oklahoma.gov/dentistry.html">
          Oklahoma Board of Dentistry
        </Source>
        , a different agency entirely.
      </Callout>

      <h3>The same room can flip from &ldquo;no review&rdquo; to &ldquo;full review&rdquo;</h3>

      <p>
        Here is the part worth internalising. A physician clinic operating under its
        own tax ID is not on ODH&rsquo;s list. The <em>identical suite</em>, licensed
        as a provider-based Hospital Outpatient Department, is on the list and pulls
        in full FGI Hospitals review. Nothing about the medicine changed. The
        licensure structure did.
      </p>

      <p>
        The same trap exists on the surgical side. Oklahoma defines an ambulatory
        surgical center at OAC 310:615-1-2 as an establishment{" "}
        <em>
          &ldquo;with an organized medical staff of physicians, with permanent
          facilities that are equipped and operated primarily for the purpose of
          performing surgical procedures, with continuous physician services
          available on call, and registered professional nurse services on site,
          whenever a patient is in the facility, which provides services or other
          accommodations for patients to recover for a period not to exceed
          twenty-three (23) hours after surgery.&rdquo;
        </em>{" "}
        &ldquo;Organized medical staff&rdquo; is separately defined as three or more
        physicians under approved bylaws. A two-physician procedure suite that adds
        a third partner, adopts bylaws, staffs an RN, and starts recovering patients
        post-op can cross that definitional line without anyone deciding to become
        an ASC.
      </p>

      <p>
        Note also that &ldquo;physician&rdquo; in these rules means MD or DO. Dentists
        appear under &ldquo;Practitioner,&rdquo; not &ldquo;Physician&rdquo; — which
        is why an oral surgery suite and an ASC are not the same regulatory animal,
        even when the build looks similar.
      </p>

      <h2>The two stages — and why only one is mandatory</h2>

      <p>
        ODH runs a two-stage process, and it is commonly misunderstood as two
        required submissions. It is not.
      </p>

      <ol>
        <li>
          <strong>Stage 1 — Optional preliminary review.</strong> Early documents plus
          a Project Narrative / Functional Program, submitted for feedback.{" "}
          <em>&ldquo;Approval of Stage 1 is not required.&rdquo;</em>
        </li>
        <li>
          <strong>Stage 2 — Required final review.</strong> Final construction
          documents plus the Functional Program.{" "}
          <em>
            &ldquo;The department must approve these documents before beginning
            construction.&rdquo;
          </em>
        </li>
      </ol>

      <p>
        You may skip Stage 1. The rule is explicit that a hospital may do so{" "}
        <em>&ldquo;at its own risk&rdquo;</em> (OAC 310:667-47-2(a)) — and that phrase
        is doing real work. Skipping Stage 1 on a complex project means the first
        time a reviewer sees your egress strategy or your departmental adjacencies is
        also the submittal that has to be approved before you can break ground.
      </p>

      <p>
        Two other routes exist. <strong>Fast-track</strong> allows the project to be
        submitted in up to four packages — site/foundation/structural/under-slab
        MEP, then architectural, then MEP, then equipment and furnishings — with site
        work permitted to begin once its package is approved. And hospitals can apply
        for <strong>self-certification</strong> on projects at or under $15 million,
        where an Oklahoma-licensed architect or engineer with at least five years of
        licensure attests to compliance. ODH decides self-certification applications
        within 21 calendar days and retains audit and withdrawal authority.
      </p>

      <h2>The clock: 10 days, then 45 — with a pause button</h2>

      <p>
        The timelines are codified at OAC 310:667-47-1(d), with identical language for
        ASCs at OAC 310:615-1-3.1(d). These are regulatory deadlines, not service
        targets.
      </p>

      <div style={{ overflowX: "auto", margin: "2rem 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #E4E2DD" }}>
          <thead>
            <tr>
              <th style={th}>Phase</th>
              <th style={th}>Deadline</th>
              <th style={th}>What it means</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cell}>Administrative completeness</td>
              <td style={{ ...cell, fontWeight: 700 }}>10 calendar days</td>
              <td style={cell}>
                ODH decides whether the filing is complete. If you correct
                deficiencies, they get another 10 days to re-check.
              </td>
            </tr>
            <tr style={{ background: "#FCFBF9" }}>
              <td style={cell}>Technical review</td>
              <td style={{ ...cell, fontWeight: 700 }}>45 calendar days</td>
              <td style={cell}>
                From the date a <em>completed</em> application is filed, to a final
                determination on code compliance.
              </td>
            </tr>
            <tr>
              <td style={cell}>Tolling on a request for information</td>
              <td style={{ ...cell, fontWeight: 700, color: "#CF5F29" }}>Clock stops</td>
              <td style={cell}>
                And up to <strong>30 additional days</strong> may be added to the
                deadline to make up for time lost reviewing inadequate materials.
              </td>
            </tr>
            <tr style={{ background: "#FCFBF9" }}>
              <td style={cell}>Failure to supplement</td>
              <td style={{ ...cell, fontWeight: 700 }}>90 calendar days</td>
              <td style={cell}>
                The application is <em>deemed withdrawn</em> absent an agreed
                extension for good cause.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        One provision is quietly in your favour: if ODH fails to notify you within
        the administrative completeness window,{" "}
        <em>
          &ldquo;the period for technical review shall begin at the close of the
          administrative completeness review period.&rdquo;
        </em>{" "}
        Silence starts your clock rather than stalling it.
      </p>

      <Callout tone="dark">
        <p style={{ margin: 0 }}>
          <strong style={{ color: "#FF4800" }}>What we will not tell you</strong> is
          how long review &ldquo;typically&rdquo; takes in practice. ODH does not
          publish current turnaround statistics, and any number you see quoted
          elsewhere is someone&rsquo;s anecdote. What is documented: 45 calendar days
          is the ceiling for technical review, the clock tolls on every information
          request, and submittals enter a queue{" "}
          <em>&ldquo;in the order that the upload is approved&rdquo;</em> — a
          pre-clock interval of undocumented length. Plan against the mechanism, not
          against a rumour.
        </p>
      </Callout>

      <h2>Fees — and the third-submittal reset</h2>

      <p>
        Plan review fees are tiered by total project cost, not by square footage or
        sheet count. For hospitals, ASCs, and inpatient hospice (OAC 310:667-47-1(b)
        and 310:615-1-3.1(b)):
      </p>

      <div style={{ overflowX: "auto", margin: "2rem 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #E4E2DD" }}>
          <thead>
            <tr>
              <th style={th}>Project cost</th>
              <th style={{ ...th, textAlign: "right" }}>Review fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cell}>Under $10,000</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>$250</td>
            </tr>
            <tr style={{ background: "#FCFBF9" }}>
              <td style={cell}>$10,000 – $50,000</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>$500</td>
            </tr>
            <tr>
              <td style={cell}>$50,001 – $250,000</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>$1,000</td>
            </tr>
            <tr style={{ background: "#FCFBF9" }}>
              <td style={cell}>$250,001 – $1,000,000</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>$1,500</td>
            </tr>
            <tr>
              <td style={cell}>Over $1,000,000</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums", fontWeight: 700 }}>
                $2,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Skilled nursing, assisted living, ICF/IID-16 and residential care are
        calculated differently — 0.02% of design and construction cost, minimum $50,
        maximum $1,000. Adult day care pays no fee.
      </p>

      <p>Other fees are fixed:</p>

      <ul>
        <li>Request for exception or temporary waiver of FGI Guidelines — <strong>$500</strong></li>
        <li>Application for self-certification — <strong>$1,000</strong></li>
        <li>Courtesy inspection before the final inspection — <strong>$500</strong></li>
        <li>
          Professional consultation or technical assistance —{" "}
          <strong>$500 per eight staff hours</strong> or major fraction thereof, plus
          travel costs where travel is required
        </li>
      </ul>

      <h3>The provision worth budgeting around</h3>

      <p>
        OAC 310:667-47-1(c) is the one to know, and almost nobody does:
      </p>

      <blockquote>
        &ldquo;The review fee shall cover the cost of review for up to two (2) stage
        one and two (2) stage two submittals and one final inspection. If a stage one
        or stage two submittal is not approved after two (2) submissions, another
        review fee based on the cost of the project shall be required with the third
        submittal.&rdquo;
      </blockquote>

      <p>
        On a project over $1 million, a third Stage 2 submittal costs another $2,000
        — and the money is the smaller problem. The resubmittal restarts a review
        cycle you cannot compress, on a project where you cannot legally start
        construction until it clears. Two thousand dollars of extra design
        coordination before the first submittal is cheap insurance against that.
      </p>

      <h2>What ODH actually wants to see</h2>

      <p>
        Submissions run on ODH form 1432, the Project Documents Review Application
        (revised 09/22/2025), and upload through an ODH Box account after the
        application is approved. Every submittal needs an application; the first one
        carries the fee.
      </p>

      <p>
        <strong>Seals.</strong> ODH is explicit:{" "}
        <em>
          &ldquo;All plan review submittals — except those for Adult Day Care Centers
          — must be signed and sealed by a licensed architect or engineer registered
          in the State of Oklahoma.&rdquo;
        </em>
      </p>

      <p>
        <strong>Drawings.</strong> Floor plans at 1/8&Prime; = 1&prime;-0&Prime;. Stage
        one documents must show scope, project location, required fire-safety and
        exiting criteria, construction type, compartmentation with fire and smoke
        barriers, bed count and services, and the assignment of every space, area and
        room on each floor including the basement.
      </p>

      <p>
        <strong>Imaging.</strong> If the project includes radiology or special imaging
        equipment, OAC 310:667-47-2(c)(2) requires plans, specifications and shielding
        criteria{" "}
        <em>&ldquo;prepared by a qualified medical physicist,&rdquo;</em> submitted and
        approved <em>before</em> the equipment is installed. This is a long-lead item
        that gets discovered late more often than it should.
      </p>

      <h3>The two documents ODH tells you will cost you if you skip them</h3>

      <p>
        Form 1432 flags the Functional Program and Space Program as recommended for
        FGI-code projects, with an unusually direct warning:{" "}
        <em>
          &ldquo;Not providing will increase likelihood of code comments and
          inspection issues.&rdquo;
        </em>{" "}
        That is ODH attributing its own comment volume to missing programs. The
        Functional Program describes how the facility operates; the Space Program is
        the room-by-room breakdown with areas.
      </p>

      <p>
        ODH&rsquo;s outside-applicant process guide also names the{" "}
        <strong>Safety Risk Assessment</strong> as something it may request. The SRA
        is an FGI 2018 requirement and it is routinely omitted by design teams working
        from habit rather than the current Guidelines.
      </p>

      <h3>File format is an administrative-completeness issue</h3>

      <p>
        This sounds trivial and is not. A submittal that fails ODH&rsquo;s formatting
        rules can burn a 10-day administrative cycle before technical review even
        begins. The requirements: PDF, text copyable and searchable, high contrast,
        straight clear pages, complete sets not combined with other documents,
        drawing layers flattened, bookmarks including sheet number and title,
        landscape orientation, sheet order matching the cover index, and — the one
        that catches people —{" "}
        <em>
          &ldquo;Security: Documents must be unsecured to allow plan reviewers to add
          marks, notes and/or comments.&rdquo;
        </em>{" "}
        A password-protected PDF is a rejected PDF.
      </p>

      <p>
        The naming convention is prescribed too:{" "}
        <code>Project #-Project Name-Type of document-Stage-Submittal-Phase-Date</code>.
      </p>

      <h2>Which FGI edition applies — and it is not the newest one</h2>

      <p>
        Oklahoma incorporates FGI by reference, and <strong>the edition differs by
        facility type</strong>:
      </p>

      <ul>
        <li>
          <strong>Hospitals</strong> — FGI <em>Guidelines for Design and Construction
          of Hospitals</em>, <strong>2018 Edition</strong> (OAC 310:667-41-1(a))
        </li>
        <li>
          <strong>Ambulatory surgery centers</strong> — FGI <em>Guidelines for Design
          and Construction of Outpatient Facilities</em>,{" "}
          <strong>2018 Edition</strong> (OAC 310:615-1-3(a))
        </li>
      </ul>

      <p>
        Both also adopt NFPA 101 Life Safety Code (2012, with TIAs 12-1 through 12-4)
        and NFPA 99 Health Care Facilities Code (2012, excluding Chapters 7, 8, 12 and
        13, with TIAs 12-2 through 12-6) as adopted by CMS.
      </p>

      <Callout>
        <strong>The practical consequence:</strong> a design team that just bought the
        current FGI Guidelines is working from the wrong book for Oklahoma state
        review. Oklahoma is on the 2018 cycle. Where FGI and Oklahoma statute
        conflict, statute prevails — and for Medicare-certified hospitals, the Life
        Safety Code edition adopted by CMS prevails over the chapter.
      </Callout>

      <h2>State review versus your City of Tulsa permit</h2>

      <p>
        These are two independent reviews by two different agencies applying two
        different code sets. ODH applies FGI plus NFPA under Title 310. The City of
        Tulsa applies its adopted building and zoning codes under Title 11.
      </p>

      <p>
        Worth clearing up a common confusion: the &ldquo;Health Department&rdquo;
        referenced throughout{" "}
        <Source href="https://www.cityoftulsa.org/government/departments/development-services/plans-review/">
          Tulsa&rsquo;s commercial permit process
        </Source>{" "}
        is the <em>Tulsa City/County</em> Health Department — food service, septic,
        consumer protection. That is a different agency from the Oklahoma State
        Department of Health Medical Facilities Service. Tulsa&rsquo;s published
        commercial permit process does not reference state health facility plan review
        at all.
      </p>

      <p>
        <strong>What is not negotiable</strong> comes from the state side. OAC
        310:667-47-3(a):{" "}
        <em>
          &ldquo;Construction other than minor alterations, shall not be commenced
          until Stage Two plan-review deficiencies have been satisfactorily
          resolved.&rdquo;
        </em>{" "}
        A city permit in hand does not authorise you to break ground on a licensed
        facility.
      </p>

      <p>
        We are not going to claim Tulsa will or will not issue a permit ahead of ODH
        approval — nothing published by either agency settles it, and we would rather
        tell you the question is open than invent an answer. In practice the two
        reviews are run in parallel to protect schedule. Confirm sequencing for your
        specific project with the Tulsa Permit Center and ODH Plan Review.
      </p>

      <h3>Tulsa first-review turnaround, from the City&rsquo;s own numbers</h3>

      <p>
        Tulsa Development Services publishes average first-review times monthly. From
        the May 2026 report, in business days:
      </p>

      <div style={{ overflowX: "auto", margin: "2rem 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #E4E2DD" }}>
          <thead>
            <tr>
              <th style={th}>Commercial project type</th>
              <th style={{ ...th, textAlign: "right" }}>Building</th>
              <th style={{ ...th, textAlign: "right" }}>Planning / Zoning</th>
              <th style={{ ...th, textAlign: "right" }}>Water / Sewer / Drainage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cell}>New</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>12.00</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>8.70</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>9.43</td>
            </tr>
            <tr style={{ background: "#FCFBF9" }}>
              <td style={cell}>Alteration (most tenant build-outs)</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>11.50</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>9.44</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>7.50</td>
            </tr>
            <tr>
              <td style={cell}>Shell building</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>15.00</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>10.00</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>11.00</td>
            </tr>
            <tr style={{ background: "#FCFBF9" }}>
              <td style={cell}>Addition</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>11.00</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>9.50</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>8.67</td>
            </tr>
            <tr>
              <td style={cell}>Alteration — priority review</td>
              <td style={{ ...cell, textAlign: "right", fontVariantNumeric: "tabular-nums", fontWeight: 700, color: "#CF5F29" }}>
                5.00
              </td>
              <td style={{ ...cell, textAlign: "right", color: "#6B7280" }}>—</td>
              <td style={{ ...cell, textAlign: "right", color: "#6B7280" }}>—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Read that table carefully:{" "}
        <strong>these are first-review times, not application-to-permit-issued</strong>.
        The City&rsquo;s report is titled &ldquo;Average Turnaround Times for 1st
        Reviews.&rdquo; Resubmittal cycles are additional. Anyone quoting
        &ldquo;11 days to get a permit in Tulsa&rdquo; is misreading this document.
      </p>

      <p>
        Priority review is worth knowing about: Tulsa states that{" "}
        <em>
          &ldquo;total process time through permitting for a priority review
          application averages 3 to 4 working days,&rdquo;
        </em>{" "}
        with the applicant encouraged to attend the architectural review. It is
        selectively granted — only 2 of 71 commercial reviews that month took that
        path. Also note the abandonment rules: an application is deemed abandoned 180
        days after filing, and a permit becomes invalid if work does not begin within
        180 days of issuance.
      </p>

      <h2>What changes trigger a new submittal</h2>

      <p>
        For an existing licensed facility, OAC 310:667-47-1(a) draws a hard line
        between alterations that require plan review and those that do not. This is
        the most useful single reference for a facility manager:
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", margin: "2rem 0" }}>
        <div>
          <h3 style={{ borderBottom: "2px solid #FF4800", paddingBottom: "0.5rem", fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Requires submittal
          </h3>
          <ul>
            <li>Changes affecting path of egress</li>
            <li>Change of use or occupancy</li>
            <li>Repurposing of spaces</li>
            <li>Structural modifications</li>
            <li>HVAC modifications</li>
            <li>Electrical work affecting the essential electrical system</li>
            <li>Modifying or relocating fire alarm initiation or notification devices</li>
            <li>Modifying or relocating any part of the sprinkler system</li>
            <li>Replacing fixed medical equipment where it triggers any of the above</li>
            <li>Replacing or modifying required magnetic or radiation shielding</li>
            <li>Changes or additions to egress control devices or systems</li>
          </ul>
        </div>
        <div>
          <h3 style={{ borderBottom: "2px solid #E4E2DD", paddingBottom: "0.5rem", fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280" }}>
            Does not
          </h3>
          <ul>
            <li>
              Painting, papering, tiling, carpeting, cabinets, countertops and similar
              finish work — provided the new finishes still meet the chapter
            </li>
            <li>Ordinary repairs and maintenance</li>
            <li>
              Nurse call, signalling, communication and IT system changes that still
              meet the chapter
            </li>
            <li>
              Replacing fixed or moveable medical equipment where electrical, HVAC and
              shielding are unaffected
            </li>
          </ul>
        </div>
      </div>

      <h2>After construction: inspection, then licensure</h2>

      <p>
        A final construction inspection by ODH verifies the work against the approved
        drawings and specifications including all approved addenda. Deficiencies get a
        written report, corrections, and a re-inspection. And then the sentence that
        governs your opening date (OAC 310:667-47-3(d)):
      </p>

      <blockquote>
        &ldquo;The facility shall not allow patient occupancy until a final approval
        is granted by the Department.&rdquo;
      </blockquote>

      <p>
        Before construction begins, the contractor also has to submit a schedule
        showing at minimum the start date, the dates HVAC, plumbing and medical gas
        installation commence, and the projected completion date.
      </p>

      <Callout>
        <strong>The scheduling trap:</strong> the licence application is due{" "}
        <em>with your construction drawings</em>, not at the end of the job. Both OAC
        310:667-1-3(b)(1) and 310:615-1-2.2(c)(1) require it{" "}
        <em>
          &ldquo;prior to or at the time final drawings for construction are submitted
          to the Department for review, which shall be at least thirty (30) days
          before&rdquo;
        </em>{" "}
        the facility begins operation. Teams that treat licensure as a closeout task
        discover this with weeks to go. ASC initial licence is $2,000 nonrefundable
        ($500 renewal); hospitals pay $10 per census bed, crib and bassinet. An
        application is not considered filed without its fee.
      </Callout>

      <h2>Certificate of Need: probably not your problem</h2>

      <p>
        Oklahoma has a CON program, and it is <strong>skilled-nursing only</strong>.
        63 O.S. § 1-852 applies it to long-term care facilities. It does{" "}
        <strong>not</strong> apply to hospitals or ambulatory surgery centers.
      </p>

      <p>
        The cleanest proof is ODH&rsquo;s own form: 1432 has exactly one CON field,
        labelled <em>&ldquo;Certificate of Need Number (Skilled Nursing OAC 675
        Only).&rdquo;</em> If you are building an ASC and someone tells you to start a
        CON application, they are thinking of another state.
      </p>

      <h2>A note on &ldquo;licensed contractor&rdquo; in Oklahoma</h2>

      <p>
        The Oklahoma Construction Industries Board states plainly that{" "}
        <em>
          &ldquo;General Contractors are not currently required to have a state
          license in Oklahoma for general contracting.&rdquo;
        </em>{" "}
        CIB licenses the electrical, mechanical, plumbing and roofing trades, plus
        building and home inspectors.
      </p>

      <p>
        Two things follow. First, &ldquo;licensed general contractor&rdquo; is a
        weaker claim in Oklahoma than it sounds, because there is no state licence to
        hold — municipalities set their own registration requirements, so confirm
        those for your jurisdiction. Second, the credentials that actually mean
        something on a healthcare project are the ones tied to the work: ASSE 6010 for
        medical gas installation under NFPA 99, ICRA qualification for infection
        control during construction in an occupied facility, and demonstrable
        experience with FGI-governed submittals.
      </p>

      <h2>What this guide deliberately does not tell you</h2>

      <p>
        Regulatory content that guesses is worse than no content, so here is what we
        could not source and therefore will not assert:
      </p>

      <ul>
        <li>
          A quoted exemption for dental or physician offices. ODH publishes a closed
          list; it does not publish an exemption. The inference is strong, the quote
          does not exist.
        </li>
        <li>
          A &ldquo;typical review takes X weeks&rdquo; figure. Only the 45-day
          regulatory ceiling is documented.
        </li>
        <li>
          Whether Tulsa will issue a building permit before ODH Stage 2 approval.
          Unsettled in both directions by the published sources.
        </li>
        <li>
          A ranked list of common rejection reasons. ODH attributes comments to
          missing Functional/Space Programs and may request a Safety Risk Assessment;
          beyond that there are no published statistics.
        </li>
      </ul>

      <p>
        For anything on that list, call ODH Plan Review before you build a schedule
        around an assumption.
      </p>

      <h2>Primary sources</h2>

      <ul>
        <li>
          <Source href="https://oklahoma.gov/health/services/licensing-inspections/medical-facilities-service/health-facilities-plan-review.html">
            ODH — Health Facilities Plan Review
          </Source>{" "}
          (applicable facility types, seal requirement, submittal process)
        </li>
        <li>
          <Source href="https://oklahoma.gov/content/dam/ok/en/health/health2/aem-documents/protective-health/medical-facilities-division/facility-services/licenses-applications/ODH%201432%20Plan%20Review%20Submittal%20Application%20with%20instructions.pdf">
            ODH Form 1432 — Project Documents Review Application
          </Source>{" "}
          (rev. 09/22/2025 — fees, stages, file format, CON field)
        </li>
        <li>
          <Source href="https://oklahoma.gov/content/dam/ok/en/health/health2/documents/updated-oac-310-667-0919.pdf">
            OAC 310:667 — Hospital standards
          </Source>{" "}
          (FGI 2018 adoption, timelines, fees, alteration triggers, inspection)
        </li>
        <li>
          <Source href="https://oklahoma.gov/content/dam/ok/en/health/health2/documents/oac-310-615-0919.pdf">
            OAC 310:615 — Ambulatory surgical centers
          </Source>{" "}
          (ASC definition, FGI Outpatient 2018, licensure)
        </li>
        <li>
          <Source href="https://www.cityoftulsa.org/government/departments/development-services/plans-review/">
            City of Tulsa — Plans Review
          </Source>{" "}
          (monthly first-review turnaround report, self-certification, priority review)
        </li>
        <li>
          <Source href="https://oklahoma.gov/cib.html">
            Oklahoma Construction Industries Board
          </Source>{" "}
          (state contractor licensing scope)
        </li>
        <li>
          <Source href="https://law.justia.com/codes/oklahoma/2020/title-63/section-63-1-852/">
            63 O.S. § 1-852 — Certificate of Need
          </Source>
        </li>
      </ul>

      <Callout tone="dark">
        <p style={{ marginTop: 0 }}>
          <strong style={{ color: "#FF4800" }}>Building a licensed facility in Oklahoma?</strong>
        </p>
        <p style={{ marginBottom: 0 }}>
          We have delivered 100+ healthcare projects across Oklahoma and North Texas,
          and we run ODH submittals as part of preconstruction rather than as a
          hand-off. If you want a read on whether your project triggers state review —
          and what that does to your schedule —{" "}
          <Link href="/contact" style={{ color: "#FF4800", fontWeight: 700 }}>
            talk to us
          </Link>
          . Related: our{" "}
          <Link href="/ambulatory-surgery-center-construction" style={{ color: "#FF4800", fontWeight: 600 }}>
            ASC construction
          </Link>{" "}
          and{" "}
          <Link href="/medical-gas-installation" style={{ color: "#FF4800", fontWeight: 600 }}>
            NFPA 99 medical gas
          </Link>{" "}
          pages.
        </p>
      </Callout>

      <p style={{ fontSize: "0.85rem", color: "#6B7280", borderTop: "1px solid #E4E2DD", paddingTop: "1.5rem", marginTop: "3rem" }}>
        This guide summarises publicly available Oklahoma regulations as of July 2026
        and is provided for general information. It is not legal advice and it is not
        a substitute for confirming requirements with the Oklahoma State Department of
        Health and your local permitting authority for your specific project. Rules
        change; verify before you rely.
      </p>
    </>
  );
}
