import type { Metadata } from "next";
import { ConsultationCallout, PageHero } from "@/components/page-elements";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InteractivePillars } from "@/components/interactive-how-we-help";

export const metadata: Metadata = {
  title: "How We Help",
  alternates: { canonical: "/how-we-help" },
  description:
    "Financial advice across five connected areas: building and investing, tax strategy, superannuation, family protection and retirement planning.",
};

const pillars = [
  {
    id: "build-invest",
    number: "01",
    title: "Build & Invest",
    hook: "Make investing decisions with purpose.",
    body: [
      "Investing is not about following the latest idea or simply trying to achieve the highest possible return.",
      "A good investment strategy starts with understanding what you are investing for, when you may need the money, how much risk you are comfortable taking and how your investments fit alongside super, property and debt.",
      "We help you develop an investment approach aligned with your goals and circumstances.",
    ],
  },
  {
    id: "tax",
    number: "02",
    title: "Manage Tax Smarter",
    hook: "Make tax part of the conversation — not the entire strategy.",
    body: [
      "Tax is an important consideration, particularly as income and assets grow.",
      "We help you consider how your broader financial decisions may interact with tax and work with appropriately qualified tax professionals where required.",
      "The goal is not simply to reduce tax at any cost. It is to make informed decisions that support your broader financial position.",
    ],
  },
  {
    id: "super",
    number: "03",
    title: "Strengthen Your Super",
    hook: "Make sure your super is supporting the future you want.",
    body: [
      "For many Australians, superannuation will become one of their largest financial assets. Yet it is often left untouched for years.",
      "We can help you review areas such as investment strategy, contributions, structure, beneficiaries, fees and retirement planning.",
      "The aim is to help you understand whether your super is positioned appropriately for the years ahead.",
    ],
  },
  {
    id: "protect",
    number: "04",
    title: "Protect Your Family",
    hook: "Protect what you've worked hard to build.",
    body: [
      "A strong financial strategy should also consider what happens if life does not go according to plan.",
      "We help you consider the financial risks your family may face and whether appropriate protection is in place.",
      "This may include life insurance, total and permanent disability cover, income protection and trauma cover. Protection recommendations are based on individual circumstances and needs.",
    ],
  },
  {
    id: "retire",
    number: "05",
    title: "Retire With Confidence",
    hook: "Know what you're working towards.",
    body: [
      "Retirement becomes easier to plan for when it stops being a vague idea.",
      "We help you think about the lifestyle you would like, when you may want to reduce or stop work, the assets and income you may need, super, investments, debt and relevant tax considerations.",
      "The aim is to help you understand where you stand and what decisions may improve your position over time.",
    ],
  },
];

export default function HowWeHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="How we help"
        title="Financial products are not a financial strategy."
        description="Super, investments, insurance, property, savings and debt may all be part of your financial life. The important question is whether the decisions around them support the future you are trying to create."
        word="Strategy"
      />
      <section className="content-section paper" id="pillars">
        <div className="shell">
          <ScrollReveal>
            <p className="eyebrow">Five connected areas</p>
            <h2>Nova Wealth helps bring the bigger picture into focus.</h2>
          </ScrollReveal>
          
          <div style={{ marginTop: '3rem' }}>
            <InteractivePillars pillars={pillars} />
          </div>
        </div>
      </section>
      <ConsultationCallout title="Bring every part of your financial life into one clear strategy." />
    </>
  );
}
