import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Start a Conversation",
  alternates: { canonical: "/contact" },
  description:
    "Start a conversation with Nova Wealth. No pressure — just a conversation about where you are, where you'd like to go and whether we're the right fit to help.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" data-word="Talk">
        <ScrollReveal className="shell">
          <p className="eyebrow eyebrow-light">One clear next step</p>
          <h1>Let&apos;s start with a conversation.</h1>
          <p>
            You do not need to have all your finances organised before speaking
            with us. And you do not need to know exactly what advice you need.
          </p>
        </ScrollReveal>
      </section>
      <section className="content-section">
        <div className="shell" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <ScrollReveal delay={0.1}>
            <CalendlyEmbed url="https://calendly.com/karthikgs/freeconsultation?month=2026-09&hide_gdpr_banner=1&background_color=ffffff&text_color=191512" />
          </ScrollReveal>
        </div>
      </section>
      <section className="content-section paper">
        <div className="shell">
          <ScrollReveal className="callout">
            <p className="eyebrow eyebrow-light">Not ready yet?</p>
            <h2>Are You Financially on Track for the Next 10 Years?</h2>
            <p>
              Take our quick financial check-up to see where you&apos;re already
              on track and where there may be gaps worth reviewing.
            </p>
            <TrackedLink href="/10-year-check" className="button button-light" trackingEvent="scorecard_start" trackingData={{ location: "contact_secondary" }}>
              Check If I&apos;m On Track <ArrowRight />
            </TrackedLink>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
