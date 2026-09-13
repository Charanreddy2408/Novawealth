import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Are You Financially on Track for the Next 10 Years?",
  alternates: { canonical: "/10-year-check" },
  description:
    "Take our quick financial check-up to see where you're on track and where there may be gaps worth reviewing — covering tax, super, investments, debt, protection and retirement.",
};

export default function TenYearCheckPage() {
  return (
    <>
      <section className="page-hero" data-word="Check">
        <ScrollReveal className="shell">
          <p className="eyebrow eyebrow-light">Quick financial check-up</p>
          <h1>Are You Financially on Track for the Next 10 Years?</h1>
          <p>
            You&apos;ve worked hard to get to where you are. But the financial
            decisions you make over the next decade could have a significant
            impact on the options available to you later.
          </p>
        </ScrollReveal>
      </section>
      <section className="content-section paper">
        <div className="shell">
          <ScrollReveal delay={0.1}>
             <div className="scoreapp-container" style={{ width: '100%', minHeight: '820px', borderRadius: '16px', overflow: 'hidden', backgroundColor: 'transparent' }}>
                <iframe
                  src="https://novawealthquiz.scoreapp.com/"
                  style={{ width: '100%', height: '820px', border: 'none' }}
                  allowFullScreen
                  loading="lazy"
                  title="Nova Wealth Financial Check-Up Assessment"
                />
             </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="content-section">
        <div className="shell">
          <ScrollReveal className="callout">
            <p className="eyebrow eyebrow-light">Ready to go further?</p>
            <h2>You don&apos;t need to know all the answers. Just start the conversation.</h2>
            <Link href="/contact" className="button button-light">
              Start a Conversation <ArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
