import type { Metadata } from "next";
import { ConsultationCallout, PageHero } from "@/components/page-elements";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Who We Help",
  alternates: { canonical: "/who-we-help" },
  description:
    "Financial advice for established migrant families, business owners and those preparing for retirement across Australia.",
};

const audiences = [
  {
    id: "migrant-families",
    number: "01",
    title: "Established Migrant Families",
    subtitle: "Make the most of what you've worked hard to build.",
    body: [
      "You may have built a strong career, purchased property, accumulated super and investments and created opportunities for your family.",
      "Now the questions are less about getting started and more about making the right decisions with what you have created.",
      "We help bring those decisions into focus and give you greater clarity about what deserves your attention.",
    ],
  },
  {
    id: "business-owners",
    number: "02",
    title: "Business Owners",
    subtitle: "Turn business success into greater personal financial security.",
    body: [
      "Building a successful business does not automatically create a clear personal financial strategy.",
      "We help business owners think about the relationship between their business, personal assets, super, investments, debt and longer-term financial security.",
      "Where specialist tax, accounting or legal advice is required, we work alongside appropriately qualified professionals.",
    ],
  },
  {
    id: "retirement",
    number: "03",
    title: "Preparing for Retirement",
    subtitle: "Move towards retirement with greater clarity and confidence.",
    body: [
      "As retirement gets closer, financial decisions can become increasingly important.",
      "We help you understand where you currently stand, what retirement may look like and whether there are decisions worth considering while you still have time to act.",
    ],
  },
];

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we help"
        title="Financial advice for families who have built momentum and want greater clarity about what comes next."
        description="You do not need to have everything organised before speaking with us. You simply need to have reached the stage where the decisions are becoming important enough that you no longer want to make them in isolation."
        word="Family"
      />
      <section className="content-section paper audience-section" id="audiences">
        <div className="shell">
          <ScrollReveal>
            <p className="eyebrow">Find your situation</p>
            <h2>Nova Wealth primarily works with migrant families who have established their life in Australia.</h2>
          </ScrollReveal>

          <div className="bento-trio-grid">
            {audiences.map((audience) => (
              <ScrollReveal key={audience.id} className="bento-card" delay={0.05}>
                <div className="bento-card-num">{audience.number}</div>
                <div className="bento-card-content">
                  <h2 id={audience.id}>{audience.title}</h2>
                  <p className="bento-card-hook">{audience.subtitle}</p>
                  {audience.body.map((paragraph, i) => (
                    <p key={i}>{audience.body[i]}</p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <ConsultationCallout title="You don't need to have everything figured out before you start the conversation." />
    </>
  );
}
