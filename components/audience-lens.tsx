"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { audiences } from "@/content/site-content";
import { stockMedia } from "@/lib/site-config";

export function AudienceLens() {
  const [active, setActive] = useState(0);
  const audience = audiences[active];
  const Icon = audience.icon;
  const image = stockMedia[audience.image as keyof typeof stockMedia];

  return (
    <div className="audience-lens">
      <div className="audience-selector" role="tablist" aria-label="Choose your situation">
        {audiences.map((item, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="audience-stage"
            onClick={() => setActive(index)}
            key={item.title}
          >
            <span>0{index + 1}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </div>

      <div className="audience-stage" id="audience-stage" role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div
            className="audience-stage-image"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            key={audience.title}
          >
            <Image src={image} alt={audience.title} fill sizes="(max-width: 760px) 100vw, 70vw" />
          </motion.div>
        </AnimatePresence>
        <div className="audience-stage-shade" />
        <AnimatePresence mode="wait">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            key={audience.title}
          >
            <div className="audience-stage-meta">
              <span>Who we help</span>
              <span>{String(active + 1).padStart(2, "0")} / 04</span>
            </div>
            <Icon aria-hidden="true" />
            <h2>{audience.title}</h2>
            <p>{audience.description}</p>
            <Link href="/contact" className="button button-light">
              See how we can help <ArrowUpRight />
            </Link>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
