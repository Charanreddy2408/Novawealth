import type { Metadata } from "next";
import {
  CheckUpSection,
  FinalCta,
  FounderSection,
  Hero,
  HowItWorksSection,
  HowWeHelpSection,
  ProblemSection,
  TrustStrip,
} from "@/components/home";
import { AdviserReviewsSection } from "@/components/adviser-reviews";
import { TikTokShowcase } from "@/components/tiktok-showcase";

import { FeaturedInsights } from "@/components/featured-insights";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FounderSection />

      <section className="section bg-white text-center pb-0" style={{ paddingTop: '5rem' }}>
        <div className="shell" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="eyebrow">LEARN WITH KARTHIK</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: '1.2', marginBottom: '1.5rem', color: '#160e05' }}>
            Financial advice is easier to act on when you understand your options.
          </h2>
          <div style={{ fontSize: '1.15rem', color: '#3d3329', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '1rem' }}>
              You don’t need to become a financial expert. But understanding the decisions in front of you can make it easier to ask the right questions and feel more confident about what happens next.
            </p>
            <p>
              Karthik regularly shares practical financial education around the issues established families are thinking about — from tax and super to investing and preparing for retirement.
            </p>
          </div>
        </div>
      </section>
      <TikTokShowcase />

      <HowWeHelpSection />
      <AdviserReviewsSection />
      <HowItWorksSection />
      <CheckUpSection />
      <FeaturedInsights />
      <FinalCta />
    </>
  );
}
