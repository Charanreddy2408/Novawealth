"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { insightsData, insightsCategories } from "@/content/insights-data";

export function InsightsGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredInsights = activeCategory
    ? insightsData.filter((insight) => insight.category === activeCategory)
    : insightsData;

  return (
    <div className="insights-hub-layout">
      {/* Filters */}
      <div className="insights-filters">
        <button
          className={`filter-btn ${activeCategory === null ? "active" : ""}`}
          onClick={() => setActiveCategory(null)}
        >
          All Topics
        </button>
        {insightsCategories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="insights-grid">
        <AnimatePresence>
          {filteredInsights.map((insight) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="insight-card"
              key={insight.slug}
            >
              <Link href={`/insights/${insight.slug}`} className="insight-card-link">
                <div className="insight-image-wrap">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="insight-img"
                  />
                </div>
                <div className="insight-card-content">
                  <span className="insight-cat">{insight.category}</span>
                  <h3>{insight.title}</h3>
                  <p>{insight.summary}</p>
                  <span className="read-more">
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
