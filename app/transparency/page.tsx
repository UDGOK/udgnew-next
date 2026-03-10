import type { Metadata } from "next";
import TransparencyUI from "./TransparencyUI";

export const metadata: Metadata = {
    title: "AI Transparency | Responsible AI Use in Construction | UDGOK",
    description: "How UDGOK uses artificial intelligence in construction — full disclosure of AI tools, data protection, human oversight, and our commitment to responsible AI. NIST AI RMF 1.0 aligned.",
    keywords: [
        "AI transparency construction",
        "responsible AI construction company",
        "AI disclosure construction",
        "artificial intelligence construction Tulsa",
        "AI ethics construction",
        "NIST AI RMF construction",
        "human oversight AI construction",
        "AI data protection construction",
        "AI policy construction company",
    ],
    openGraph: {
        title: "AI Transparency | Responsible AI in Construction | UDGOK",
        description: "Full disclosure of how UDGOK uses AI in construction — tools, data protection, human oversight, and accountability.",
        url: "https://udgok.com/transparency",
        type: "website",
    },
    alternates: { canonical: "https://udgok.com/transparency" },
};

export default function TransparencyPage() {
    return <TransparencyUI />;
}
