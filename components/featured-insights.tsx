import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { insightsData } from "@/content/insights-data";
import { featuredInsightSlugs } from "@/content/featured-insights";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TrackedLink } from "@/components/tracked-link";

export function FeaturedInsights() {
  const featured = featuredInsightSlugs.map((slug) =>
    insightsData.find((i) => i.slug === slug)
  ).filter(Boolean) as typeof insightsData;

  return (
    <section className="section featured-insights-section paper">
      <div className="shell">
        <div className="split-heading">
          <ScrollReveal>
            <p className="eyebrow">Insights & Education</p>
            <h2>Financial insights for the decisions that matter.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="lead" style={{ maxWidth: "500px" }}>
              The more clearly you understand your options, the easier it is to make good financial decisions for your family.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="insights-grid" style={{ marginTop: '3rem' }}>
          {featured.map((insight, i) => (
            <ScrollReveal className="insight-card" key={insight.slug} delay={i * 0.1}>
              <TrackedLink href={`/insights/${insight.slug}`} className="insight-card-link" trackingEvent="article_click" trackingData={{ title: insight.title, category: insight.category, slug: insight.slug, location: "featured" }}>
                <div className="insight-image-wrap">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="insight-img"
                  />
                </div>
                <div className="insight-card-content">
                  <span className="insight-cat">{insight.category}</span>
                  <h3>{insight.title}</h3>
                  <p>{insight.summary}</p>
                  <span className="read-more">
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>
              </TrackedLink>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <Link href="/insights" className="button button-outline" style={{ border: '1px solid #160e05', color: '#160e05', background: 'transparent' }}>
              View All Insights <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
