import {
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Landmark,
  LineChart,
  LockKeyhole,
  PiggyBank,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

export const problems = [
  {
    q: "Are we paying more tax than we need to?",
    a: "You earn good money, but sometimes it feels like a large amount disappears before you get the opportunity to put it to work.",
  },
  {
    q: "Are we investing in the right places?",
    a: "Property? Shares? Super? Paying down the mortgage? There are plenty of options — but which decisions actually make sense for your family?",
  },
  {
    q: "Is our super working hard enough?",
    a: "For many families, super will become one of their largest financial assets. But it can be difficult to know whether it is structured and invested appropriately for the years ahead.",
  },
  {
    q: "Are we doing enough for retirement?",
    a: "You want to enjoy life now, support your family and still feel confident that you are building towards the future you want.",
  },
  {
    q: "Is everything actually working together?",
    a: "Your accountant may handle tax. Your super is somewhere else. You may have insurance, property, investments and savings accumulated over the years. But who is looking at the whole picture?",
  },
];

export const adviceOutcomes = [
  {
    number: "01",
    title: "Build & Invest",
    description:
      "Build wealth with purpose and an investment strategy aligned with your goals — not the latest idea or the highest possible return.",
    icon: LineChart,
  },
  {
    number: "02",
    title: "Manage Tax Smarter",
    description:
      "Consider how your broader financial decisions may interact with tax, working with appropriately qualified tax professionals where required.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Strengthen Your Super",
    description:
      "Review investment strategy, contributions, structure, beneficiaries, fees and retirement planning to help your super work harder.",
    icon: Landmark,
  },
  {
    number: "04",
    title: "Protect Your Family",
    description:
      "Consider the financial risks your family may face and whether appropriate protection is in place — life, TPD, income protection and trauma cover.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Retire With Confidence",
    description:
      "Understand what retirement could look like, what you may need and whether you're on track — so the decisions you make today build the future you want.",
    icon: HeartHandshake,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Let's Talk",
    description:
      "We start by understanding your family, your finances and what you want the next stage of life to look like.",
  },
  {
    number: "02",
    title: "Build Your Strategy",
    description:
      "We work through the important decisions and build a clear strategy around what matters to you.",
  },
  {
    number: "03",
    title: "Move Forward With Confidence",
    description:
      "You understand what needs to happen next and have support to put your strategy into action.",
  },
];

export const audiences = [
  {
    title: "Established Migrant Families",
    description:
      "Make the most of what you've worked hard to build. You may have built a strong career, purchased property, accumulated super and created opportunities for your family. Now the questions are less about getting started and more about making the right decisions with what you have created.",
    icon: Users,
    image: "family",
  },
  {
    title: "Business Owners",
    description:
      "Turn business success into greater personal financial security. Building a successful business does not automatically create a clear personal financial strategy. We help you think about the relationship between your business, personal assets, super, investments, debt and longer-term financial security.",
    icon: BriefcaseBusiness,
    image: "business",
  },
  {
    title: "Preparing for Retirement",
    description:
      "Move towards retirement with greater clarity and confidence. As retirement gets closer, financial decisions can become increasingly important. We help you understand where you currently stand, what retirement may look like and whether there are decisions worth considering.",
    icon: WalletCards,
    image: "retirement",
  },
];

export const resourceTopics = [
  {
    title: "Tax-smart financial planning for migrant families",
    category: "Tax & Strategy",
    icon: BarChart3,
  },
  {
    title: "Superannuation explained clearly",
    category: "Super",
    icon: Landmark,
  },
  {
    title: "Investment and wealth-building fundamentals",
    category: "Investing",
    icon: LineChart,
  },
  {
    title: "Retirement planning and common gaps",
    category: "Retirement",
    icon: WalletCards,
  },
  {
    title: "Insurance, estate planning and protecting the family",
    category: "Protection",
    icon: LockKeyhole,
  },
  {
    title: "Financial mistakes to avoid when building a life in Australia",
    category: "Migrant Money",
    icon: GraduationCap,
  },
];

export const founderStory = [
  "I came to Australia young and, like many migrants, had to learn a new financial system while building a career and a life at the same time.",
  "I understood early on how important hard work was. What I didn't automatically understand was how super, investing, debt, tax and financial planning all fitted together.",
  "Over time, as I learnt more about financial advice, I saw just how valuable good decisions could be when they were made early enough. That shaped the way I think about financial planning today.",
  "Good advice shouldn't only arrive when retirement is around the corner. There are important decisions to make while your career is strong, your family is growing and you still have time for those decisions to make a meaningful difference.",
  "Nova Wealth was created to help families make those decisions with greater clarity and confidence.",
];

export const founderBelief =
  "Financial knowledge should be accessible. Personal advice should turn that knowledge into a clear plan for your family.";
