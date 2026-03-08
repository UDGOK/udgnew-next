import Link from "next/link";
import PageHero from "@/components/PageHero";

interface ArticlePageProps {
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageSrc?: string;
  children: React.ReactNode;
}

export default function ArticlePage({
  title, category, date, author, readTime, imageSrc, children
}: ArticlePageProps) {
  return (
    <>
      <PageHero
        label={`${category} | ${date} | ${readTime}`}
        title={title}
        imageSrc={imageSrc || "/images/medical-office-design-build.png"}
        imageAlt={title}
      />
      
      <div style={{ display: "grid", gridTemplateColumns: "3fr 8fr", gap: "4rem", maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem" }}>
        
        {/* Sidebar */}
        <aside style={{ borderRight: "2px solid rgba(0,0,0,0.1)", paddingRight: "2rem" }}>
          <div style={{ paddingBottom: "2rem", borderBottom: "2px solid #FF4800", marginBottom: "2rem" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#666", marginBottom: "0.5rem" }}>Author</div>
            <div style={{ fontWeight: 800 }}>{author}</div>
          </div>
          <div style={{ paddingBottom: "2rem", borderBottom: "2px solid rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#666", marginBottom: "0.5rem" }}>Share</div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button style={{ background: "none", border: "none", color: "#FF4800", cursor: "pointer", fontWeight: 700 }}>LinkedIn</button>
              <button style={{ background: "none", border: "none", color: "#FF4800", cursor: "pointer", fontWeight: 700 }}>Twitter</button>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#666", marginBottom: "1rem" }}>More Articles</div>
            <Link href="/insights" style={{ fontSize: "0.9rem", color: "#0B061B", textDecoration: "none", fontWeight: 600 }}>Back to Insights →</Link>
          </div>
        </aside>

        {/* Content */}
        <article className="article-content" style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#333" }}>
          {children}
        </article>
      </div>
      
      {/* Article CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .article-content h2 { font-size: 2rem; font-weight: 800; margin: 3rem 0 1.5rem; letter-spacing: -0.02em; color: #0B061B; }
        .article-content h3 { font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem; color: #0B061B; }
        .article-content p { margin-bottom: 1.5rem; }
        .article-content ul, .article-content ol { margin-bottom: 2rem; padding-left: 1.5rem; }
        .article-content li { margin-bottom: 0.5rem; }
        .article-content blockquote { padding: 2rem; background: #F7F4F7; border-left: 4px solid #FF4800; font-style: italic; font-size: 1.25rem; font-weight: 600; color: #0B061B; margin: 3rem 0; }
      `}} />

      {/* CTA */}
      <section style={{ padding: "6rem 2rem", background: "#0B061B", color: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, marginBottom: "2rem" }}>Ready to discuss your project?</h2>
        <Link href="/contact" style={{ display: "inline-block", padding: "1.25rem 3rem", background: "#FF4800", color: "#fff", textDecoration: "none", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Contact Our Team →
        </Link>
      </section>
    </>
  );
}
