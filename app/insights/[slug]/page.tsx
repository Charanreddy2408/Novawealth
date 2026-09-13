import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { insightsData } from "@/content/insights-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const insight = insightsData.find((i) => i.slug === resolvedParams.slug);
  if (!insight) return { title: "Insight Not Found" };

  return {
    title: insight.title,
    description: insight.summary,
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const insight = insightsData.find((i) => i.slug === resolvedParams.slug);

  if (!insight) {
    notFound();
  }

  // Determine CTA logic based on category
  const isRetirement = insight.category.includes("Retirement");
  const isFamily = insight.category.includes("Family");

  return (
    <>
      {/* Blog Article Header */}
      <section className="article-header">
        <div className="shell article-header-inner">
          <Link href="/insights" className="back-link">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="article-meta">
            <span className="article-category">{insight.category}</span>
          </div>
          <h1>{insight.title}</h1>
          <p className="article-author">
            By <strong>{insight.author}</strong>
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <div className="shell article-featured-image-wrap">
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="article-featured-image"
        />
      </div>

      {/* Article Content Area */}
      <section className="article-content-wrapper pb-20">
        <div className="shell flex flex-col items-center">
          <div className="article-main">
            <article
              className="article-body"
              dangerouslySetInnerHTML={{ __html: insight.htmlContent }}
            />
            
            <div className="article-disclaimer">
              <p>
                <strong>General information only:</strong> This article does not take into account your objectives, financial situation or needs. Before acting on any information, consider whether it is appropriate for your circumstances and seek professional advice where appropriate. Tax, superannuation and other rules can change, so current professional advice may be required.
              </p>
            </div>
          </div>

          <div className="article-bottom-cta">
            <div className="bottom-cta-card">
              {isRetirement ? (
                <>
                  <h3>Retirement Ready Scorecard</h3>
                  <p>Not sure whether your finances are on track for the future you want? Our quick scorecard helps identify areas worth reviewing.</p>
                  <Link href="/10-year-check" className="button text-center">
                    Check If I'm On Track
                  </Link>
                </>
              ) : isFamily ? (
                <>
                  <h3>Plan for the Future</h3>
                  <p>Understanding how your wealth supports your family requires a coordinated plan. Let's see if we are the right fit to help.</p>
                  <Link href="/contact" className="button text-center">
                    Book a Consultation
                  </Link>
                </>
              ) : (
                <>
                  <h3>Get Clear on Your Finances</h3>
                  <p>Take our comprehensive Financial Readiness Quiz to identify exactly what areas of your wealth strategy you should be focusing on next.</p>
                  <div className="checklist-features-inline">
                    <span><CheckCircle2 size={16} /> Tax reduction</span>
                    <span><CheckCircle2 size={16} /> Investment coordination</span>
                    <span><CheckCircle2 size={16} /> Debt management</span>
                  </div>
                  <Link href="/10-year-check" className="button text-center">
                    10 Year Financial Check-up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
