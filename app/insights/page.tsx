import type { Metadata } from "next";
import { PageHero } from "@/components/page-elements";
import { InsightsGrid } from "@/components/insights-grid";
import { YouTubeShowcase } from "@/components/youtube-showcase";

export const metadata: Metadata = {
  title: "Insights",
  alternates: { canonical: "/insights" },
  description:
    "Clear, practical insights on building wealth, tax, investing, super and retirement - written for families building their financial future in Australia.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Financial insights for the decisions that matter."
        description="Clear, practical insights on building wealth, tax, investing, super and retirement - written for families building their financial future in Australia."
        word="Learn"
      />

      <YouTubeShowcase />
      
      <section className="content-section pt-10" id="articles">
        <div className="shell">
          <div className="text-center mb-10">
            <h2 style={{ fontSize: '2.4rem', color: '#160e05' }}>Explore More Insights</h2>
          </div>
          <InsightsGrid />
        </div>
      </section>
    </>
  );
}
