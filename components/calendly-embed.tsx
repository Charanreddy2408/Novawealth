"use client";

export function CalendlyEmbed({ url }: { url: string }) {
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
