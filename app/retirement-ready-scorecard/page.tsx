import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ExternalEmbed } from "@/components/external-embed";
import { PageHero } from "@/components/page-elements";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Retirement Ready Scorecard",
  alternates: { canonical: "/retirement-ready-scorecard" },
  description:
    "Take the two-minute Retirement Ready Scorecard to identify strengths, gaps and the next areas to address before retirement.",
};

export default function ScorecardPage() {
  return (
    <>
      <PageHero
        eyebrow="Retirement Ready Scorecard"
        title="How Retirement Ready Are You?"
        description="Take the two-minute Retirement Ready Scorecard to identify strengths, gaps and the next areas to address before retirement."
        word="Ready"
      />
      <section className="content-section paper">
        <div className="shell content-grid">
          <ScrollReveal>
            <p className="eyebrow">A focused starting point</p>
            <h2>See where you feel prepared—and where clarity may be missing.</h2>
            <div className="readiness-points">
              <p><Check size={17} /> Consider your retirement time frame and income needs.</p>
              <p><Check size={17} /> Review how super, investments and protection fit together.</p>
              <p><Check size={17} /> Identify priorities to discuss with a financial adviser.</p>
              <p>
                The scorecard is educational and does not provide personal
                financial advice or account for your complete circumstances.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <ExternalEmbed url={siteConfig.scoreAppUrl} type="scorecard" />
          </ScrollReveal>
        </div>
      </section>
      <section className="content-section">
        <ScrollReveal className="shell callout">
          <h2>Ready to discuss your score and priorities?</h2>
          <p>Book a personalised consultation to discuss your score and priorities.</p>
          <a className="button button-light" href="/book">Book a Consultation</a>
        </ScrollReveal>
      </section>
    </>
  );
}
