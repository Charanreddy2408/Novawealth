import { ImageResponse } from "next/og";

export const alt = "Nova Wealth Advisers — clarity for your financial future";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "white",
          background: "linear-gradient(135deg, #150e07 0%, #6f2f10 48%, #b4680c 78%, #e0991b 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ fontSize: 54, fontWeight: 900, color: "#fbbd11" }}>N</div>
          <div style={{ fontSize: 32, fontWeight: 800 }}>Nova Wealth Advisers</div>
        </div>
        <div style={{ maxWidth: 980, fontSize: 68, lineHeight: 1.05, letterSpacing: -3 }}>
          One clear strategy for your family, wealth and future in Australia.
        </div>
        <div style={{ fontSize: 22, color: "#fbe7c7" }}>
          Financial advice for established migrant families
        </div>
      </div>
    ),
    size,
  );
}
