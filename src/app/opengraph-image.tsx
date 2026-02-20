import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Énkar Neil — Photographer & Visual Artist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "300",
              color: "white",
              marginBottom: "20px",
              letterSpacing: "0.05em",
            }}
          >
            Énkar Neil
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "800px",
              lineHeight: 1.4,
              fontWeight: "300",
            }}
          >
            Photographer & Visual Artist
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.5)",
              fontWeight: "300",
            }}
          >
            enkarneil.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
