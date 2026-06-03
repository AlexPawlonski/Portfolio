import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#242424",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#69DBFF",
            letterSpacing: "-2px",
          }}
        >
          Alex Pawlonski
        </div>
        <div
          style={{
            fontSize: "36px",
            color: "#ff6969",
            fontWeight: "600",
          }}
        >
          Développeur Full-stack · Spécialisé Front-end
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#aaaaaa",
            marginTop: "10px",
          }}
        >
          React.js · Next.js · TypeScript · Tailwind CSS
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
