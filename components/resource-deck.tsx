"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { resourceTopics } from "@/content/site-content";

const descriptions = [
  "See how tax considerations connect with cash flow, investing and your family’s broader financial plan.",
  "Understand contribution planning, super structures and the role of super when preparing for retirement.",
  "Explore diversification, investment fundamentals and more deliberate long-term wealth decisions.",
  "Review retirement timing, income planning and the financial gaps worth identifying earlier.",
  "Learn how insurance, estate-planning coordination and practical risk management can protect a family.",
  "Recognise common delays and avoidable decisions when establishing and building a life in Australia.",
];

export function ResourceDeck() {
  const [active, setActive] = useState(0);

  return (
    <div className="resource-deck" aria-label="Financial learning chapters">
      {resourceTopics.map((resource, index) => {
        const Icon = resource.icon;
        const selected = active === index;
        return (
          <motion.button
            type="button"
            className="resource-chapter"
            data-active={selected}
            aria-expanded={selected}
            onClick={() => setActive(index)}
            layout
            transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
            key={resource.title}
          >
            <span className="resource-chapter-number">0{index + 1}</span>
            <Icon aria-hidden="true" />
            <div className="resource-chapter-title">
              <small>{resource.category}</small>
              <strong>{resource.title}</strong>
            </div>
            <AnimatePresence initial={false}>
              {selected && (
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.16, duration: 0.3 }}
                >
                  {descriptions[index]}
                </motion.p>
              )}
            </AnimatePresence>
            <span className="resource-chapter-action">
              {selected ? "Open chapter" : "View"}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
