import React from "react";
import { GlobeDemo } from "./Globe";

export default function AboutUs() {
  return (
    <div className="relative w-full bg-black text-[#d0fcb3] p-6 flex flex-row">
      <div className="w-2/3 relative z-10">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="mb-4">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="w-1/3 flex items-center justify-center relative z-0">
        <GlobeDemo />
      </div>
    </div>
  );
}
