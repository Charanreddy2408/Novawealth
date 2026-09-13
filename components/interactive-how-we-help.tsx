"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Pillar = {
  id: string;
  number: string;
  title: string;
  hook: string;
  body: string[];
};

export function InteractivePillars({ pillars }: { pillars: Pillar[] }) {
  const [activeTab, setActiveTab] = useState(0);

  const activePillar = pillars[activeTab];

  return (
    <div className="interactive-display-container">
      <div className="display-sidebar">
        {pillars.map((pillar, i) => {
          const isActive = activeTab === i;
          return (
            <button
              key={pillar.id}
              className={`display-tab ${isActive ? "active" : ""}`}
              onClick={() => setActiveTab(i)}
              onMouseEnter={() => setActiveTab(i)}
            >
              <span style={{ fontFamily: "var(--font-display)", opacity: 0.4, fontSize: "1.2rem", marginRight: "0.8rem", pointerEvents: "none" }}>
                {pillar.number}
              </span>
              <span>{pillar.title}</span>
              {isActive && (
                <motion.div
                  layoutId="pillar-tab-indicator"
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
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="display-content-inner"
          >
            <div 
              style={{ 
                fontFamily: "var(--font-display)", 
                color: "var(--brand)", 
                fontSize: "6rem", 
                lineHeight: 0.8,
                opacity: 0.15, 
                marginBottom: "1.5rem" 
              }}
            >
              {activePillar.number}
            </div>
            
            <h2>{activePillar.title}</h2>
            
            {/* The hook is strong/brand colored in the design system for h3 */}
            <h3>{activePillar.hook}</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {activePillar.body.map((paragraph, i) => (
                <p key={i}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
