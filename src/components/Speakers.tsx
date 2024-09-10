"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Spotlight } from "./ui/Spotlight";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center antialiased px-4 sm:px-6 md:px-8">
      <Spotlight
        className="-top-40 left-0 sm:left-40 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl sm:text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#d0fcb3] to-[#b2f886] font-bold text-center">
          SPEAKERS
        </h1>
        <p className="font-semibold max-w-lg mx-auto my-4 text-base sm:text-lg text-center">
          Startup Sangam: <br /> Where Vision Ignites and Innovation Speaks
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
