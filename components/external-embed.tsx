"use client";

import { ArrowUpRight, CalendarDays, ClipboardCheck } from "lucide-react";
import { track } from "@/lib/analytics";

export function ExternalEmbed({
  url,
  type,
}: {
  url: string;
  type: "calendly" | "scorecard";
}) {
  const isBooking = type === "calendly";
  if (!url) {
    const Icon = isBooking ? CalendarDays : ClipboardCheck;
    return (
      <div className="placeholder-panel">
        <div>
          <Icon size={52} strokeWidth={1.3} />
          <h2>{isBooking ? "Booking calendar" : "Retirement Ready Scorecard"}</h2>
          <p>
            {isBooking
              ? "The live Calendly calendar will appear here when the Nova Wealth booking link is supplied."
              : "The live ScoreApp assessment will appear here when the Nova Wealth ScoreApp link is supplied."}
          </p>
        </div>
      </div>
    );
  }

  if (isBooking) {
    return (
      <div className="calendly-embed-container" style={{ minHeight: "750px", position: "relative" }}>
        <div
          className="calendly-inline-widget"
          data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1`}
          style={{ minWidth: "320px", height: "750px" }}
        />
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
      </div>
    );
  }

  return (
    <div>
      <iframe
        className="embed-frame"
        src={url}
        title="Retirement Ready Scorecard"
        loading="lazy"
        allow="payment"
      />
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-link"
        onClick={() => track("scorecard_start", { placement: "embed_fallback" })}
      >
        Open in a new window <ArrowUpRight size={17} />
      </a>
    </div>
  );
}
