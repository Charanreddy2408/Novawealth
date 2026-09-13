"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { adviceOutcomes } from "@/content/site-content";
import { stockMedia } from "@/lib/site-config";

const outcomeDetails = [
  {
    image: stockMedia.professional,
    focus: ["Cash-flow strategy", "Investment advice", "Tax-effective wealth creation"],
  },
  {
    image: stockMedia.business,
    focus: ["Contribution planning", "Super strategy", "SMSF advice where appropriate"],
  },
  {
    image: stockMedia.family,
    focus: ["Personal insurance", "Risk management", "Estate-planning coordination"],
  },
  {
    image: stockMedia.retirement,
    focus: ["Pre-retirement planning", "Retirement income", "Ongoing reviews"],
  },
];

export function AdviceMatrix() {
  const [active, setActive] = useState(0);
  const selected = adviceOutcomes[active];
  const SelectedIcon = selected.icon;

  return (
    <div className="advice-matrix-layout">
      <div className="strategy-matrix" aria-label="Advice outcomes by purpose and time horizon">
        <div className="matrix-axis-top" aria-hidden="true">
          <span>Priorities today</span>
          <span>Future confidence</span>
        </div>
        <div className="matrix-body">
          <div className="matrix-axis-side" aria-hidden="true">
            <span>Build</span>
            <span>Protect</span>
          </div>
          <div className="matrix-cells" role="tablist" aria-label="Advice outcomes">
            {adviceOutcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  aria-controls="strategy-brief"
                  onClick={() => setActive(index)}
                  key={outcome.title}
                >
                  <Image src={outcomeDetails[index].image} alt="" fill sizes="(max-width: 760px) 50vw, 28vw" />
                  <span className="matrix-cell-shade" />
                  <span className="matrix-cell-top">
                    <small>{outcome.number}</small>
                    <Icon />
                  </span>
                  <strong>{outcome.title}</strong>
                </button>
              );
            })}
            <div className="matrix-center" aria-hidden="true">
              <small>One</small>
              <strong>strategy</strong>
            </div>
          </div>
        </div>
      </div>

      <aside
        className="strategy-brief"
        id="strategy-brief"
        role="tabpanel"
        key={selected.title}
      >
        <div className="strategy-brief-top">
          <span>{selected.number}</span>
          <SelectedIcon />
        </div>
        <p className="eyebrow eyebrow-light">Selected outcome</p>
        <h2>{selected.title}</h2>
        <p>{selected.description}</p>
        <div className="strategy-focus-list">
          {outcomeDetails[active].focus.map((item) => (
            <span key={item}><Check /> {item}</span>
          ))}
        </div>
        <Link href="/book" className="button button-light">
          Discuss your priorities <ArrowUpRight />
        </Link>
      </aside>
    </div>
  );
}
