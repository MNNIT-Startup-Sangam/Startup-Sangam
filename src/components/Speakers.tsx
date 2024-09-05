"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md   flex flex-col items-center justify-center antialiased">

      <div className="max-w-2xl mx-auto p-4">
        <h1 className="  text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-[#d0fcb3] to-[#b2f886]   font-bold">
         SPEAKERS
        </h1>
        <p></p>
        <p className="font-semibold max-w-lg mx-auto my-2 text-lg text-center  ">
        Startup Snagam: <br/> Where Vision Ignites and Innovation Speaks
        </p>
       
      </div>
      <BackgroundBeams />
    </div>
  );
}
