"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  Landmark,
  LineChart,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { problems, processSteps } from "@/content/site-content";
import { stockMedia } from "@/lib/site-config";

const reveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
      variants={reveal}
      transition={{ duration: 0.7, delay: delay * 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section className="hero">
      {/* Desktop portrait (background div) */}
      <div
        className="hero-portrait-bg"
        aria-hidden="true"
      />
      {/* Mobile portrait (real img for precise centering) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Karthik-20-orange.jpg"
        alt=""
        aria-hidden="true"
        className="hero-portrait-mobile"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.55 }}
        >
          Financial advice for established migrant families who want <span>greater clarity around tax, investing, super and retirement.</span>
        </motion.h1>
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.45 }}
        >
          You&apos;ve worked hard to build your life in Australia. Now make sure your finances are working just as hard.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.45 }}
        >
          <Link href="/contact" className="button button-light">
            Start a Conversation <ArrowRight size={18} />
          </Link>
          <Link href="/10-year-check" className="hero-secondary-link">
            Take the 10-Year Financial Check-Up →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


// ─── Problem / Stakes ─────────────────────────────────────────────────────────

export function ProblemSection() {
  const reduceMotion = useReducedMotion();
  const [activeProblem, setActiveProblem] = useState(0);
  const categories = [
    "Tax pressure",
    "Investment uncertainty",
    "Super clarity",
    "Retirement alignment",
    "The whole picture",
  ];
  const problemImages = [
    // Australian tax — ATO / myGov style (replace USA tax docs)
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
    // Investing — Australian financial charts
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    // Super/retirement — older Australian couple
    "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=800&q=80",
    // Retirement alignment — Indian/South Asian family (parents + children)
    "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=80",
    // The whole picture — professional multicultural meeting
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="section problem-section" id="financial-signals">
      <div className="background-word" aria-hidden="true">
        CLARITY
      </div>
      <div className="shell">
        <div className="split-heading">
          <Reveal>
            <p className="eyebrow">The gap we help close</p>
            <h2>Earning well and working hard—but still unsure whether you&apos;re making the right financial moves?</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lead">
              You&apos;ve built a career, a family and financial momentum in Australia.
              On paper, things may look pretty good. But as your finances have grown, so have the decisions.
            </p>
          </Reveal>
        </div>
        <div className="problem-stack-layout">
          <div className="problem-file-stack" role="tablist" aria-label="Financial clarity gaps">
          {problems.map((problem, index) => (
            <motion.button
              type="button"
              role="tab"
              className="problem-file"
              aria-selected={activeProblem === index}
              aria-controls="problem-focus"
              onClick={() => setActiveProblem(index)}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{
                opacity: 1,
                x: activeProblem === index ? 0 : index * 35,
                y: activeProblem === index ? 0 : index * 7,
                scale: activeProblem === index ? 1 : 0.965,
                rotate: (index - 2) * 1.1,
                zIndex: activeProblem === index ? 10 : index + 1,
              }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              key={problem.q}
            >
              <Image src={problemImages[index]} alt="" fill sizes="(max-width: 640px) 85vw, 420px" />
              <span className="problem-file-shade" />
              <span className="problem-file-tab">0{index + 1}</span>
              <span className="problem-file-label">
                <small>Financial signal</small>
                <strong>{categories[index]}</strong>
              </span>
            </motion.button>
          ))}
          </div>
          <motion.article
            className="problem-focus"
            id="problem-focus"
            role="tabpanel"
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
            key={activeProblem}
          >
            <div className="problem-focus-top">
              <span>0{activeProblem + 1} / 05</span>
              <small>{categories[activeProblem]}</small>
            </div>
            <div className="problem-qa-container group">
              <p className="problem-q">{problems[activeProblem].q}</p>
              <div className="problem-a-wrapper">
                <div className="problem-a-inner">
                  <p className="problem-a">{problems[activeProblem].a}</p>
                </div>
              </div>
            </div>
            <div className="problem-focus-index" aria-label="Choose another financial signal">
              {problems.map((problem, index) => (
                <button
                  type="button"
                  aria-label={`Show: ${problem.q}`}
                  aria-pressed={activeProblem === index}
                  onClick={() => setActiveProblem(index)}
                  key={problem.q}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
            <span className="problem-focus-note">
              The challenge isn&apos;t that you haven&apos;t done enough. It&apos;s knowing whether the financial decisions you&apos;re making today are helping you get where you want to go. You don&apos;t need to know all the answers. You just need a clearer way to make the right decisions.
            </span>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

// ─── Founder ──────────────────────────────────────────────────────────────────

export function FounderSection() {
  return (
    <section className="section founder-section">
      <div className="shell founder-grid">
        <Reveal className="founder-image-wrap">
          <Image
            src={stockMedia.founder}
            alt="Karthik Ganapathy — Founder & Financial Adviser, Nova Wealth"
            width={900}
            height={1100}
            className="founder-image"
          />
        </Reveal>
        <Reveal className="founder-copy" delay={0.1}>
          <p className="eyebrow">Why I Started Nova Wealth</p>
          <h2>I understand what it&apos;s like to build a financial life in a country you didn&apos;t grow up in.</h2>
          <p className="lead">
            I came to Australia young and had to learn how the financial system
            worked for myself. Like many migrant families, I understood the
            importance of working hard and creating opportunities.
          </p>
          <p className="lead">
            What I learned along the way is that working hard and making the
            right financial decisions aren&apos;t always the same thing. As your
            income grows and life becomes more established, the questions change.
          </p>
          <blockquote>
            &ldquo;I started Nova Wealth to help families make sense of those decisions
            and feel more confident about the future they&apos;re creating.&rdquo;
          </blockquote>
          <p className="founder-name-tag">
            <strong>Karthik Ganapathy</strong>
            <span>Founder &amp; Financial Adviser</span>
          </p>
          <Link href="/about" className="text-link">
            Meet Karthik <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ─── How We Help ──────────────────────────────────────────────────────────────

export function HowWeHelpSection() {
  const pillars = [
    {
      icon: LineChart,
      title: "Build & Invest",
      copy: "Build wealth with purpose and an investment strategy aligned with your goals.",
    },
    {
      icon: BarChart3,
      title: "Manage Tax Smarter",
      copy: "Consider opportunities to manage tax more effectively as part of your broader financial strategy.",
    },
    {
      icon: Landmark,
      title: "Strengthen Your Super",
      copy: "Understand whether your super is positioned to support the future you want.",
    },
    {
      icon: ShieldCheck,
      title: "Protect Your Family",
      copy: "Help protect the people you love and the financial position you've worked hard to create.",
    },
    {
      icon: HeartHandshake,
      title: "Retire With Confidence",
      copy: "Understand what retirement could look like, what you may need and whether you're on track.",
    },
  ];

  return (
    <section className="section proof-section" id="how-we-help">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Five areas. One picture.</p>
          <h2>Your finances shouldn&apos;t feel like five separate puzzles.</h2>
          <p className="lead">
            We help you look at the bigger picture, understand what deserves
            your attention now and make informed decisions about what comes next.
          </p>
        </Reveal>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="pillar-card"
                initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="pillar-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </motion.div>
            );
          })}
        </div>
        <Reveal delay={0.4} className="how-we-help-cta">
          <Link href="/how-we-help" className="button">
            See How We Help <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

export function HowItWorksSection() {
  return (
    <section className="section how-it-works-section" id="how-it-works">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">What happens next</p>
          <h2>Getting clearer about your finances doesn&apos;t need to be complicated.</h2>
        </Reveal>
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <motion.div
              className="process-step"
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
              style={{ cursor: "default" }}
            >
              <span className="process-step-number">{step.number}</span>
              <div className="process-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <Reveal delay={0.4} className="process-cta">
          <Link href="/contact" className="button">
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ─── 10-Year Check-Up ─────────────────────────────────────────────────────────

export function CheckUpSection() {
  return (
    <section className="section checkup-section" id="10-year-check">
      <div className="shell checkup-inner">
        <Reveal>
          <p className="eyebrow">Not ready to start a conversation yet?</p>
          <h2>Are You Financially on Track for the Next 10 Years?</h2>
          <p>
            You&apos;ve worked hard to get to where you are. But the financial
            decisions you make over the next decade could have a big impact on
            what comes after it.
          </p>
          <p className="checkup-topics">Tax &bull; Super &bull; Investments &bull; Debt &bull; Family Protection &bull; Retirement</p>
          <Link href="/10-year-check" className="button button-light">
            Check If I&apos;m On Track <ArrowRight size={18} />
          </Link>
          <p className="checkup-note">Quick to complete. No complicated financial jargon.</p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Your next step</p>
          <h2>You&apos;ve spent years building your life in Australia.</h2>
          <p className="final-cta-sub">Now let&apos;s make the most of what you&apos;ve built.</p>
          <p>
            Get greater clarity around the financial decisions ahead and
            confidence that you&apos;re moving towards the future you want.
          </p>
          <Link href="/contact" className="button">
            Start a Conversation <ArrowRight size={18} />
          </Link>
          <p className="final-cta-note">
            No pressure. Just a conversation about where you are, where you&apos;d
            like to go and whether Nova Wealth is the right fit to help.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Trust Strip (retained, minor updates) ────────────────────────────────────

export function TrustStrip() {
  const themes = [
    "Tax strategy",
    "Investment clarity",
    "Superannuation",
    "Family protection",
    "Retirement confidence",
    "One coordinated plan",
  ];
  return (
    <section id="trust" className="trust-strip">
      <div className="trust-message shell">
        <p>Clear financial education for families.</p>
        <p>Personal advice built around one coordinated plan.</p>
      </div>
      <div className="marquee" aria-label="Areas brought together by Nova Wealth">
        <div className="marquee-track">
          {[...themes, ...themes].map((theme, index) => (
            <span key={`${theme}-${index}`}>
              <Check /> {theme}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
