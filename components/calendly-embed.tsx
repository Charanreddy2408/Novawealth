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
    <div style={{ position: "relative", width: "100%", height: "700px" }}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Schedule a consultation"
      />
      {/* 
        CSS Mask to cover the "Powered by Calendly" watermark in the top right.
        Note: The official way to remove this is by turning off "Calendly branding" in your Calendly Account Settings.
      */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          right: "10px", // Leaves space for the native scrollbar
          width: "130px",
          height: "130px",
          backgroundColor: "#ffffff",
          pointerEvents: "none",
          zIndex: 10
        }}
        aria-hidden="true"
      />
    </div>
  );
}
