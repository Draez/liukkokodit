import { ImageResponse } from "next/og";
import { logoDataUri } from "@/components/Logo";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Logon talo-merkki mustana koivunbeigellä pohjalla. */
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
          background: "#D9BF8F",
          borderRadius: 12,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse, ei DOM */}
        <img src={logoDataUri("mark", "#161513")} width={50} height={51} alt="" />
      </div>
    ),
    size,
  );
}
