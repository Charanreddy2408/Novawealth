"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calculator, 
  Umbrella, 
  LineChart, 
  CreditCard, 
  Shield, 
  Compass,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const topics = [
  { 
    icon: Calculator, 
    label: "Tax", 
    hook: "Are you paying more tax than you need to?", 
    details: "As your income and assets grow, tax becomes a significant drag on your wealth. We examine whether your investments and income are structured appropriately to ensure you aren't paying more than your fair share." 
  },
  { 
    icon: Umbrella, 
    label: "Super", 
    hook: "Is your super positioned to support the future you want?", 
    details: "Superannuation is often your largest asset outside the family home, yet frequently ignored. We review your contribution strategy, investment allocation, and fee structures to ensure it's fully optimized for your retirement." 
  },
  { 
    icon: LineChart, 
    label: "Investments", 
    hook: "Are your investments working together with your broader plan?", 
    details: "Good investing isn't just about chasing returns; it's about aligning your portfolio with your actual goals. We help ensure your investments harmonize with your super, debt, and property for maximum efficiency." 
  },
  { 
    icon: CreditCard, 
    label: "Debt", 
    hook: "Is debt structured in a way that supports your goals?", 
    details: "Not all debt is created equal. We look at how efficiently you are paying down non-deductible home loans while potentially utilizing investment debt to accelerate your long-term wealth creation." 
  },
  { 
    icon: Shield, 
    label: "Protection", 
    hook: "Is your family financially protected if something goes wrong?", 
    details: "Building wealth means little if it can be wiped out by an unexpected event. We review your life, TPD, trauma, and income protection to ensure your family's lifestyle is genuinely secure." 
  },
  { 
    icon: Compass, 
    label: "Retirement", 
    hook: "Are you building towards the retirement you want?", 
    details: "Retirement planning becomes easier when it stops being a vague idea. We help you project your assets and income, giving you absolute clarity on when you can confidently step back from work." 
  },
];

export function InteractiveCheckup() {
  const [activeTab, setActiveTab] = useState(0);

  const currentTopic = topics[activeTab];
  const Icon = currentTopic.icon;

  return (
    <div className="interactive-display-container">
      <div className="display-sidebar">
        {topics.map((topic, i) => {
          const TabIcon = topic.icon;
          const isActive = activeTab === i;
          return (
            <button
              key={topic.label}
              className={`display-tab ${isActive ? "active" : ""}`}
              onClick={() => setActiveTab(i)}
              onMouseEnter={() => setActiveTab(i)}
            >
              <TabIcon size={20} />
              <span>{topic.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="tab-indicator" 
                  className="display-tab-indicator" 
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
      
      <div className="display-content-area">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="display-content-inner"
          >
            <div className="display-content-icon">
              <Icon size={48} />
            </div>
            <h3>{currentTopic.label}</h3>
            <h2>{currentTopic.hook}</h2>
            <p>{currentTopic.details}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="display-score-cta">
        <div className="score-cta-inner">
          <h3>Ready to see where you stand?</h3>
          <p>Get a personalized indication of the areas working well and the areas worth reviewing.</p>
          <Link href="#" className="button">
            Take the 10-Year Score App <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
