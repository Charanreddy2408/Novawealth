"use client";

import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { adviserRatingsProfile, adviserReviews } from "@/content/social-content";

function Stars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  
  return (
    <span className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          fill={index < fullStars || (index === fullStars && hasHalf) ? "currentColor" : "none"}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export function AdviserReviewsSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const selected = adviserReviews[active];

  return (
    <section className="section adviser-reviews-section" id="client-reviews">
      <div className="shell">
        <div className="adviser-reviews-head">
          <div>
            <p className="eyebrow">Adviser Ratings reviews</p>
            <h2>What clients say about working with Nova Wealth.</h2>
          </div>
          <div className="adviser-rating-badge">
            <div className="adviser-rating-badge-top">
              <div className="adviser-rating-score">
                <strong>{adviserRatingsProfile.rating.toFixed(2)}</strong>
                <Stars rating={adviserRatingsProfile.rating} />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ar-logo-dark.svg"
                alt="Adviser Ratings"
                className="adviser-rating-logo"
                width={100}
                height={22}
              />
            </div>
            <div className="adviser-rating-divider"></div>
            <Link
              href={adviserRatingsProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="adviser-rating-logo-link"
              aria-label="View profile on Adviser Ratings"
            >
              <span>View profile <ArrowUpRight size={13} strokeWidth={2.5} /></span>
            </Link>
          </div>
        </div>

        <div className="adviser-reviews-layout">
          <div className="adviser-review-tabs" role="tablist" aria-label="Client reviews">
            {adviserReviews.map((review, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls="adviser-review-panel"
                onClick={() => setActive(index)}
                key={review.name}
              >
                <span>{review.name}</span>
                <small>{review.location}</small>
              </button>
            ))}
          </div>

          <motion.article
            className="adviser-review-panel"
            id="adviser-review-panel"
            role="tabpanel"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            key={selected.name}
          >
            <div className="adviser-review-panel-top">
              <div>
                <strong>{selected.name}</strong>
                <span>{selected.location}</span>
              </div>
              <Stars rating={selected.rating} />
            </div>
            <blockquote>"{selected.excerpt}"</blockquote>
            <footer>
              Review sourced from{" "}
              <Link href={adviserRatingsProfile.url} target="_blank" rel="noopener noreferrer">
                Adviser Ratings
              </Link>
              . Approved client feedback only.
            </footer>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
