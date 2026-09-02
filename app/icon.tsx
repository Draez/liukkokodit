import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Talon harja-symboli, sama kuin navin logossa. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1E3A2F",
        }}
      >
        <svg width="44" height="44" viewBox="0 0 26 26">
          <path
            d="M3 13 13 4l10 9M6 11.5V22h14V11.5"
            fill="none"
            stroke="#F3F1EA"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M10 22v-6h6v6"
            fill="none"
            stroke="#D9B98A"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
