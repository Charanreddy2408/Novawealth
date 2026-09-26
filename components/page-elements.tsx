import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TrackedLink } from "@/components/tracked-link";

export function PageHero({
  eyebrow,
  title,
  description,
  word,
}: {
  eyebrow: string;
  title: string;
  description: string;
  word: string;
}) {
  return (
    <section className="page-hero" data-word={word}>
      <ScrollReveal className="shell">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </ScrollReveal>
    </section>
  );
}

export function ConsultationCallout({
  title = "Feel more confident about your financial future.",
}: {
  title?: string;
}) {
  return (
    <section className="content-section">
      <div className="shell">
        <ScrollReveal className="callout">
          <p className="eyebrow eyebrow-light">One clear next step</p>
          <h2>{title}</h2>
          <p>
            With the right advice and one coordinated strategy, your family can
            move forward with greater clarity, confidence and peace of mind.
          </p>
          <TrackedLink href="/contact" className="button button-light" trackingEvent="booking_click" trackingData={{ location: "page_callout" }}>
            Start a Conversation <ArrowRight />
          </TrackedLink>
        </ScrollReveal>
      </div>
    </section>
  );
}
