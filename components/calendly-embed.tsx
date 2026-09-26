"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.event === "calendly.event_scheduled") {
        track("contact_submit", { method: "calendly" });
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  return (
    <div style={{ width: "100%", height: "700px" }}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Schedule a consultation"
      />
    </div>
  );
}
