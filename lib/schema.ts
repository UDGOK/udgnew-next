/**
 * Single source of truth for UDGOK's structured-data identity.
 *
 * Why this file exists
 * ────────────────────
 * The same business facts were previously restated in three places
 * (app/layout.tsx, app/page.tsx, components/JsonLd.tsx) and they disagreed:
 *
 *   - `name` was "UDGOK — Upscale Development Group of Oklahoma" in the layout
 *     but "Upscale Development Group" in JsonLd.tsx
 *   - `logo` was /logo.png in one and /images/logo.png in the other
 *   - the street address omitted "Suite F", which llms.txt and the footer include
 *   - opening hours were 07:00–17:00 in JSON-LD but 7:00 AM–6:00 PM in llms.txt
 *   - a LocalBusiness node in app/page.tsx reused the SAME @id as the
 *     Organization node in app/layout.tsx, with a different @type
 *
 * That last one matters most: two nodes sharing one @id with different types is
 * ambiguous to every consumer. And inconsistency is not a cosmetic problem —
 * when structured data contradicts a site's other signals, Google discounts the
 * markup and may ignore it entirely, and external AI assistants are less
 * forgiving than Google about it.
 *
 * Every fact below must ALSO match the Google Business Profile, the footer, and
 * public/llms.txt, character for character. If you change something here, change
 * it there too.
 */

export const SITE = "https://www.udgok.com";

/** Stable @id anchors. One node per @id, forever. */
export const ID = {
  organization: `${SITE}/#organization`,
  localBusiness: `${SITE}/#localbusiness`,
  website: `${SITE}/#website`,
} as const;

export const NAP = {
  legalName: "Upscale Development Group of Oklahoma",
  name: "UDGOK — Upscale Development Group of Oklahoma",
  alternateName: "UDGOK",
  streetAddress: "7739 E 38th St, Suite F",
  addressLocality: "Tulsa",
  addressRegion: "OK",
  postalCode: "74145",
  addressCountry: "US",
  telephone: "+1-918-520-3823",
  email: "projects@udgok.com",
  latitude: 36.0998,
  longitude: -95.883,
  /** Must match the hours published on the Google Business Profile. */
  opens: "07:00",
  closes: "18:00",
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
} as const;

/**
 * Entity-reconciliation graph. This is how search engines and LLMs confirm that
 * a scattered set of listings all refer to ONE business — it is the single
 * highest-value structured-data field for a local company.
 *
 * RULE: every URL here must resolve. A broken sameAs weakens the entity rather
 * than strengthening it. The previous LinkedIn URL
 * (linkedin.com/company/upscale-development-group) returned 404 and has been
 * removed rather than guessed at.
 *
 * TODO(yasir): add back, once each URL is confirmed by opening it logged-out —
 *   - the real LinkedIn company URL
 *   - the Google Business Profile share URL (g.page/... or maps.app.goo.gl/...)
 *   - the BBB profile URL
 *   - the Houzz profile URL
 *   - Apple Business Connect, once claimed
 */
export const SAME_AS: string[] = [
  "https://www.facebook.com/udgok",
  "https://www.instagram.com/udgok",
  "https://www.yelp.com/biz/upscale-development-group-tulsa",
];

export const AREA_SERVED = [
  { city: "Tulsa", state: "Oklahoma" },
  { city: "Broken Arrow", state: "Oklahoma" },
  { city: "Bixby", state: "Oklahoma" },
  { city: "Jenks", state: "Oklahoma" },
  { city: "Owasso", state: "Oklahoma" },
  { city: "Sand Springs", state: "Oklahoma" },
  { city: "Sapulpa", state: "Oklahoma" },
  { city: "Glenpool", state: "Oklahoma" },
  { city: "Claremore", state: "Oklahoma" },
  { city: "Haskell", state: "Oklahoma" },
  { city: "Oklahoma City", state: "Oklahoma" },
  { city: "Edmond", state: "Oklahoma" },
  { city: "Dallas", state: "Texas" },
  { city: "Plano", state: "Texas" },
] as const;

export const areaServedNodes = AREA_SERVED.map(({ city, state }) => ({
  "@type": "City",
  name: city,
  containedInPlace: { "@type": "State", name: state },
}));

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: NAP.streetAddress,
  addressLocality: NAP.addressLocality,
  addressRegion: NAP.addressRegion,
  postalCode: NAP.postalCode,
  addressCountry: NAP.addressCountry,
};

export const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [...NAP.days],
  opens: NAP.opens,
  closes: NAP.closes,
};

const SERVICES: { name: string; path: string }[] = [
  { name: "Medical Office Design-Build", path: "/medical-office-design-build-tulsa" },
  { name: "Dental Office Construction", path: "/dental-office-construction-tulsa" },
  { name: "Oral Surgery Center Construction", path: "/oral-surgeon-office-construction-tulsa" },
  { name: "Eye Clinic Construction", path: "/eye-clinic-construction-tulsa" },
  { name: "Ambulatory Surgery Center Construction", path: "/ambulatory-surgery-center-construction" },
  { name: "Medical Gas Installation", path: "/medical-gas-installation" },
  { name: "Commercial Tenant Improvements", path: "/tenant-improvements" },
  { name: "Design-Build Delivery", path: "/design-build" },
  { name: "Preconstruction Services", path: "/preconstruction" },
  { name: "Virtual Design & Construction (BIM/VDC)", path: "/virtual-design-construction" },
  { name: "Pre-Engineered Metal Buildings", path: "/pre-engineered-metal-buildings-tulsa" },
  { name: "Warehouse Construction", path: "/warehouse-construction-tulsa" },
];

/**
 * The whole site identity as one @graph, emitted once from the root layout.
 *
 * Note there is deliberately NO aggregateRating or review node. Google has
 * disallowed self-serving review markup on LocalBusiness/Organization since
 * September 2019, and unverifiable reviewer identities are a spam violation.
 * Star ratings come from the Google Business Profile. Do not add them here.
 */
export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ID.website,
        url: SITE,
        name: NAP.name,
        publisher: { "@id": ID.organization },
        inLanguage: "en-US",
      },
      {
        "@type": ["Organization", "GeneralContractor"],
        "@id": ID.organization,
        name: NAP.name,
        legalName: NAP.legalName,
        alternateName: NAP.alternateName,
        url: SITE,
        logo: {
          "@type": "ImageObject",
          url: `${SITE}/images/logo.png`,
          caption: NAP.name,
        },
        image: `${SITE}/images/og-default.png`,
        description:
          "Licensed Oklahoma design-build general contractor specializing in medical office, dental office, oral surgery, and eye clinic construction, plus commercial, industrial, and retail projects across Oklahoma and North Texas.",
        foundingDate: "2015",
        founder: {
          "@type": "Person",
          name: "Yasir Jahangir",
          jobTitle: "Founder & President",
        },
        telephone: NAP.telephone,
        email: NAP.email,
        address: postalAddress,
        areaServed: areaServedNodes,
        sameAs: SAME_AS,
        knowsAbout: [
          "Medical Office Construction",
          "Dental Office Construction",
          "Oral Surgery Center Construction",
          "Ambulatory Surgery Center Construction",
          "Medical Gas Installation (NFPA 99)",
          "Infection Control Risk Assessment (ICRA)",
          "ADA Compliance in Healthcare Facilities",
          "Design-Build Construction Delivery",
          "Commercial Tenant Improvements",
          "Pre-Engineered Metal Buildings",
          "Construction Management",
          "Virtual Design and Construction (BIM)",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Construction Services",
          itemListElement: SERVICES.map(({ name, path }) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name, url: `${SITE}${path}` },
          })),
        },
      },
      {
        // Physical location. Separate @id from the Organization on purpose —
        // one node per @id. `parentOrganization` links them.
        "@type": ["LocalBusiness", "GeneralContractor"],
        "@id": ID.localBusiness,
        name: NAP.name,
        parentOrganization: { "@id": ID.organization },
        url: SITE,
        image: `${SITE}/images/og-default.png`,
        telephone: NAP.telephone,
        email: NAP.email,
        address: postalAddress,
        geo: {
          "@type": "GeoCoordinates",
          latitude: NAP.latitude,
          longitude: NAP.longitude,
        },
        areaServed: areaServedNodes,
        openingHoursSpecification: openingHours,
        priceRange: "$$$",
        currenciesAccepted: "USD",
        sameAs: SAME_AS,
      },
    ],
  };
}
