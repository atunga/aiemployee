import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          padding: "64px",
          background: "linear-gradient(135deg, #101214 0%, #171a1d 55%, #291d14 100%)",
          color: "#f2eadf",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(117,240,193,0.4)",
              background: "rgba(117,240,193,0.12)",
              color: "#75f0c1",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            RC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#9af5d2" }}>rAIzor Crest</div>
            <div style={{ fontSize: 24, color: "rgba(242,234,223,0.72)" }}>AI leverage for operators</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700 }}>Build AI employees that own real work.</div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "rgba(242,234,223,0.8)" }}>
            Starter Kit, Guide, and AI Employee Lab for founders and operators who want leverage over hype.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
