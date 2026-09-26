"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Heart,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor">
      <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
    </svg>
  );
}
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { founderBelief, founderStory } from "@/content/site-content";
import { stockMedia } from "@/lib/site-config";
import { adviserRatingsProfile, adviserReviews } from "@/content/social-content";
import { siteConfig } from "@/lib/site-config";

// ─── Animation helper ─────────────────────────────────────────────────────────
function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const reduce = useReducedMotion();
  const offsets = { up: { y: 28 }, left: { x: -28 }, right: { x: 28 }, none: {} };
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: delay * 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Section 1: Founder – Hero + Story combined ───────────────────────────────
function FounderSection() {
  return (
    <section className="about-founder-section">

      {/* ── Part 1: Two-column intro — portrait + opening paragraphs ── */}
      <div className="shell about-founder-grid">
        {/* LEFT: portrait */}
        <Reveal direction="left" className="about-portrait-col">
          <div className="about-portrait-frame">
            <Image
              src={stockMedia.founder}
              alt="Karthik Ganapathy — Founder, Nova Wealth"
              fill
              priority
              sizes="(max-width: 980px) 100vw, 44vw"
              className="about-portrait-photo"
            />
            {/* Floating badge */}
            <div className="about-portrait-badge">
              <Star size={13} fill="currentColor" />
              <span>{adviserRatingsProfile.rating} on AdviserRatings</span>
            </div>
            {/* Decorative stat pill */}
            <div className="about-portrait-stat">
              <MapPin size={12} />
              <span>Australia-wide advice</span>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: intro copy — kept short so both columns end together */}
        <div className="about-founder-copy">
          <Reveal>
            <p className="eyebrow">Why I Started Nova Wealth</p>
            <h1 className="about-founder-h1">
              I arrived in Australia with $500&mdash;and had to build my financial life from scratch.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="about-founder-para">Like many international students, I came to Australia with ambition, hope and a willingness to work hard.</p>
            <p className="about-founder-para">I had just $500 with me. I didn&rsquo;t understand the Australian financial system, and there was no roadmap showing me how to build a secure financial future in a new country.</p>
            <p className="about-founder-para">But those early years taught me an important lesson: if you are prepared to work hard, Australia can offer incredible opportunities.</p>
          </Reveal>
        </div>
      </div>

      {/* ── Part 2: Full-width story body ── */}
      <div className="shell about-founder-story">
        <Reveal>
          <p className="about-founder-para">After graduating, I secured a corporate role with NAB. My starting salary in 2007 was $35,000&mdash;a significant amount of money for a student coming straight out of university. I was earning more than many of my friends and felt as though I was finally succeeding.</p>

          <h3 className="about-founder-h3">So, what did I do with my new income?</h3>
          <p className="about-founder-para">Within a month, I took out a personal loan and bought a $17,000 car.</p>
          <p className="about-founder-para">At the time, the car made me happy. It felt like a symbol of how far I had come. But in hindsight, it was not a particularly smart financial decision. I continued paying for that car for the next seven years.</p>

          <p className="about-founder-para">That experience eventually taught me another, more important lesson:</p>
          <blockquote className="about-pull-quote">
            <span className="about-pull-quote-mark">&ldquo;</span>
            Earning good money and knowing how to build wealth are not the same thing.
            <span className="about-pull-quote-mark close">&rdquo;</span>
          </blockquote>

          <p className="about-founder-para">A higher income did not automatically teach me how tax worked, how to invest, how to use super effectively or how to make financial decisions that would benefit me over the long term.</p>
          <p className="about-founder-para">It took me close to a decade&mdash;and then years of study and professional experience as a financial adviser&mdash;to properly understand how the different pieces of wealth creation work together.</p>

          <p className="about-founder-para">As I began advising families, I realised my experience was not unusual.</p>
          <p className="about-founder-para">Many migrant families arrive in Australia with limited resources and build their lives from the ground up. They establish successful careers or businesses, buy homes, raise children and earn good incomes.</p>
          <p className="about-founder-para">But they are also expected to understand an unfamiliar financial system while making some of the biggest financial decisions of their lives.</p>
          <p className="about-founder-para">They work hard and earn well, yet still wonder:</p>
          <h3 className="about-founder-h3" style={{ fontStyle: "italic" }}>
            Are we paying too much tax? Are we investing in the right places? Is our super working hard enough? And are we doing enough for retirement?
          </h3>

          <p className="about-founder-para">That is why I started Nova Wealth.</p>
          <p className="about-founder-para">I wanted to create the kind of financial advice relationship I would have valued while building my own life in Australia&mdash;personal, educational and focused on bringing every part of a family&rsquo;s finances together.</p>
          <p className="about-founder-para">Today, my passion is helping migrant families learn from my experience, avoid costly mistakes and make more informed decisions with the wealth they have worked so hard to build.</p>
          <p className="about-founder-para">Because working hard can create opportunity.</p>
          <p className="about-founder-para">But knowing how to make your money work for you can change what that opportunity becomes.</p>
        </Reveal>

        <Reveal delay={0.2} className="about-founder-sig">
          <h3 className="text-xl font-medium mb-1">Karthik Ganapathy</h3>
          <p className="about-founder-role mb-8">
            <Award size={15} /> Founder &amp; Financial Adviser
          </p>
          <div className="about-founder-actions">
            <a
              href="https://www.linkedin.com/in/karthikganapathys/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-social-btn linkedin"
              onClick={() => track("social_click", { platform: "linkedin", location: "about_founder" })}
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/karthik_financialadviser?stkn=eW5lYmRicTVhbmt1&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="about-social-btn instagram"
              onClick={() => track("social_click", { platform: "instagram", location: "about_founder" })}
            >
              <InstagramIcon size={16} /> Instagram
            </a>
            <a
              href="https://www.tiktok.com/@karthik.ganapathy?_r=1&_t=ZS-99h66MePJLj"
              target="_blank"
              rel="noopener noreferrer"
              className="about-social-btn tiktok"
              onClick={() => track("social_click", { platform: "tiktok", location: "about_founder" })}
            >
              <TikTokIcon size={16} /> TikTok
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}



// ─── Section 1.5: Why Good advice shouldn’t wait ──────────────────────────────────────────────
function WhyGoodAdviceSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[var(--paper)]">
      {/* Decorative ambient blur behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[120%] bg-[var(--grad-sun)] opacity-[0.03] blur-3xl pointer-events-none rounded-full" />
      
      {/* Decorative background word - positioned on the cream section */}
      <div className="about-bg-word" style={{ opacity: 0.15, bottom: 'auto', top: '-1rem' }} aria-hidden="true">STORY</div>
      
      <div className="shell relative z-10">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(48,32,12,0.06),_0_0_0_1px_rgba(48,32,12,0.05)] bg-white flex flex-col md:flex-row transform transition-all duration-700 hover:shadow-[0_30px_60px_rgba(48,32,12,0.1),_0_0_0_1px_rgba(199,124,16,0.3)]">
          
          {/* Left side: Heading */}
          <div className="md:w-5/12 p-10 md:p-14 lg:p-16 flex flex-col justify-center relative overflow-hidden shrink-0" style={{ background: 'var(--grad-sun)' }}>
             {/* Abstract light burst overlay */}
             <div className="absolute top-[-30%] left-[-20%] w-[180%] h-[180%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)] rounded-full pointer-events-none" />
             <Reveal>
               <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl mb-8 border border-white/20 shadow-lg">
                 <ShieldCheck className="w-6 h-6 text-white" />
               </div>
               <h2 className="text-3xl lg:text-4xl font-display font-medium text-white leading-[1.2] m-0 relative z-10">
                 Why good advice shouldn’t wait until <span className="text-[#ffe6b3]">retirement.</span>
               </h2>
             </Reveal>
          </div>
          
          {/* Right side: Body & CTA */}
          <div className="md:w-7/12 p-10 md:p-14 lg:p-16 bg-white flex flex-col justify-center">
            <Reveal delay={0.1}>
              <p className="text-xl md:text-2xl text-[var(--ink)] mb-6 font-display font-medium leading-snug">
                Good financial advice shouldn’t only arrive when retirement is around the corner.
              </p>
              <p className="text-[1rem] text-[var(--muted)] mb-6 leading-relaxed">
                Some of your most important financial decisions are made while your career is strong, your family is growing, and you still have time for those decisions to make a meaningful difference.
              </p>
              
              <div className="pl-5 border-l-[3px] border-[#efc069] mb-8 py-1 bg-amber-50/40 rounded-r-xl">
                <p className="text-[0.95rem] text-[var(--muted)] m-0 leading-relaxed font-medium">
                  That includes how you manage tax, invest outside super, reduce debt, protect your family, and prepare for retirement.
                </p>
              </div>
              
              <p className="text-[1rem] text-[var(--ink)] mb-10 leading-relaxed font-semibold">
                Our role is to help you understand which decisions matter now—so you can make the most of the opportunities ahead.
              </p>
              
              <div>
                <Link href="/contact" className="button inline-flex items-center group">
                  Start a Conversation <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: Values ────────────────────────────────────────────────────────
function ValuesSection() {
  const values = [
    {
      icon: Lightbulb,
      title: "Clarity first",
      copy: "We explain the reasoning, priorities and trade-offs behind each recommendation so you always understand what you're doing and why.",
    },
    {
      icon: Heart,
      title: "Earlier advice",
      copy: "The most valuable financial decisions happen before retirement, when you still have time to build wealth deliberately for your family.",
    },
    {
      icon: ShieldCheck,
      title: "One connected plan",
      copy: "Tax, investments, super, protection and retirement are considered together rather than managed in silos.",
    },
    {
      icon: BookOpen,
      title: "Education matters",
      copy: "Through social media and practical resources, we make financial knowledge accessible for families navigating a new country.",
    },
    {
      icon: Users,
      title: "Family at the centre",
      copy: "Advice is built around your whole family — children's goals, protection and generational wealth — not just individual products.",
    },
    {
      icon: MapPin,
      title: "Migrant perspective",
      copy: "We understand the unique financial position of established migrant families and speak to it from personal experience.",
    },
  ];

  return (
    <section className="about-values-section">
      <div className="shell">
        <Reveal className="about-values-head">
          <p className="eyebrow eyebrow-light">What we stand for</p>
          <h2>Six principles that shape every piece of advice we give.</h2>
        </Reveal>
        <div className="about-values-grid">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.07} className="about-value-card">
                <span className="about-value-icon">
                  <Icon size={21} strokeWidth={1.6} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.copy}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Team ──────────────────────────────────────────────────────────
const teamMembers = [
  {
    name: "Keerthi",
    role: "Operations Manager",
    tagline: "Manages the day-to-day operations at Nova Wealth, ensuring our processes run smoothly and efficiently.",
    specialty: ["operations manager", "Team managment", "Procees Improvement", "Operation Stategy"],
    photo: stockMedia.keerthiBlue,
    linkedin: "#",
  },
  {
    name: "Gowthamraj Hari",
    role: "Advice Associate & Paraplanner",
    tagline: "Building the detailed research and modelling behind every strategy.",
    specialty: ["Strategy modelling", "Active preparation", "Compliance","Technical"],
    photo: "/image1.png",
    linkedin: "https://www.linkedin.com/in/gowthamrajhari",
  },
  {
    name: "Yesyeswini Sarma",
    role: "Advice Assistant",
    tagline: "Supporting client meetings and coordinating strategy implementation.",
    specialty: ["Review preparation", "Implementation", "Process coordination", "Client onboarding"],
    photo: "/image2.png",
    linkedin: "https://www.linkedin.com/in/yesyeswini-sarma-865924112",
  },
  {
    name: "Gayathri S",
    role: "Client Service Associate",
    tagline: "Managing account applications and administrative workflows.",
    specialty: ["Account setups", "Client services", "Platform administration", "Data management"],
    photo: "/image3.png",
    linkedin: "https://www.linkedin.com/in/gayathri-s-4114373b5",
  },
];

function TeamCard({ member, index }: { member: (typeof teamMembers)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="team-card"
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="team-card-photo-wrap">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, 380px"
          className="team-card-photo"
        />
        <div className="team-card-photo-shade" />
        {/* Specialty tags revealed on hover */}
        <motion.div
          className="team-card-specialties"
          initial={{ opacity: 0, y: 16 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {member.specialty.map((s) => (
            <span key={s} className="team-spec-tag">{s}</span>
          ))}
        </motion.div>
      </div>

      <div className="team-card-body">
        <div className="team-card-top">
          <div>
            <p className="team-card-name">{member.name}</p>
            <p className="team-card-role">{member.role}</p>
          </div>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="team-linkedin"
            aria-label={`${member.name} on LinkedIn`}
          >
            <LinkedInIcon size={16} />
          </a>
        </div>
        <p className="team-card-tagline">{member.tagline}</p>
      </div>
    </motion.div>
  );
}

function TeamSection() {
  return (
    <section className="about-team-section" id="team">
      <div className="shell">
        <Reveal className="about-team-head">
          <p className="eyebrow">The people behind your plan</p>
          <h2>Personal advice, supported by a dedicated team.</h2>
          <p className="lead">
            Meet the people who help turn your strategy into action and keep your
            financial plan moving forward.
          </p>
        </Reveal>
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Recognition ───────────────────────────────────────────────────
function RecognitionSection() {
  const featuredReview = adviserReviews[0];
  return (
    <section className="about-recognition-section">
      <div className="shell about-recognition-grid">
        <Reveal className="about-recognition-score">
          <div className="about-score-badge">
            <div className="about-score-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="about-score-num">{adviserRatingsProfile.rating}</p>
            <p className="about-score-label">
              {adviserRatingsProfile.reviewCount} verified reviews on AdviserRatings
            </p>
            <a
              href={adviserRatingsProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              View profile <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="about-featured-review">
          <span className="about-review-quote-mark">&ldquo;</span>
          <blockquote>{featuredReview.excerpt}</blockquote>
          <footer>
            <strong>{featuredReview.name}</strong>
            <span>{featuredReview.location}</span>
          </footer>
        </Reveal>
        <Reveal delay={0.2} className="about-recognition-cta">
          <p className="eyebrow">Your next step</p>
          <h2>Personal advice built around your family.</h2>
          <Link href="/contact" className="button">
            Start a Conversation <ArrowRight size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <FounderSection />
      <WhyGoodAdviceSection />
      <ValuesSection />
      <TeamSection />
      <RecognitionSection />
    </>
  );
}
