import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Antonio Jebrael — The AI Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          position: "relative",
        }}
      >
        {/* Subtle accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #3b82f6, transparent)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#fafafa",
              margin: 0,
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            Antonio Jebrael
          </h1>
          <p
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#3b82f6",
              margin: 0,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            The AI Architect
          </p>
        </div>

        {/* Subtle bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: "#333",
              display: "flex",
            }}
          />
          <p
            style={{
              fontSize: "14px",
              color: "#555",
              margin: 0,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            antoniojebrael.dev
          </p>
          <div
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: "#333",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
