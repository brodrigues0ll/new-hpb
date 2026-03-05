import React from "react";
import Image from "next/image";
import logob from "../images/logoB_11zon.png";

const Loading = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center"
    style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%)" }}
  >
    {/* Ambient glow background */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(234,88,12,0.08) 0%, transparent 65%)",
      }}
      aria-hidden="true"
    />

    {/* Spinner + logo */}
    <div className="relative flex justify-center items-center mb-8">
      {/* Outer ring — slow spin */}
      <div
        className="absolute w-[140px] h-[140px] rounded-full animate-spin"
        style={{
          border: "1px solid rgba(234,88,12,0.15)",
          animationDuration: "4s",
        }}
        aria-hidden="true"
      />

      {/* Middle ring — gradient fast spin */}
      <div
        className="absolute w-[110px] h-[110px] rounded-full animate-spin"
        style={{
          border: "2px solid transparent",
          borderTopColor: "#ea580c",
          borderRightColor: "#d4a946",
          animationDuration: "1.2s",
          animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        aria-hidden="true"
      />

      {/* Inner ring — counter spin */}
      <div
        className="absolute w-[80px] h-[80px] rounded-full animate-spin"
        style={{
          border: "1px solid rgba(212,169,70,0.3)",
          borderBottomColor: "rgba(234,88,12,0.6)",
          animationDuration: "2s",
          animationDirection: "reverse",
        }}
        aria-hidden="true"
      />

      {/* Logo center */}
      <div
        className="relative z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center"
        style={{
          background: "rgba(20,20,20,0.9)",
          boxShadow: "0 0 30px rgba(234,88,12,0.2), 0 0 60px rgba(234,88,12,0.08)",
        }}
      >
        <Image
          src={logob}
          alt="Hotel Pousada Bambuzal"
          width={44}
          height={44}
          priority
          className="object-contain"
        />
      </div>
    </div>

    {/* Dots */}
    <div className="flex justify-center gap-1 mt-8" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1 h-1 rounded-full bg-orange-500 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.8s" }}
        />
      ))}
    </div>
  </div>
);

export default Loading;
