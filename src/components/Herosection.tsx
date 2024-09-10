"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";

export function Herosection() {
  const images = [
    "/assets/images/WhatsApp Image 2024-08-31 at 16.39.31.jpeg",
    "/assets/images/WhatsApp Image 2024-08-31 at 16.39.32.jpeg",
"/assets/images/WhatsApp Image 2024-08-31 at 16.39.44.jpeg",
"/assets/images/WhatsApp Image 2024-08-31 at 16.39.45.jpeg",

"/assets/images/WhatsApp Image 2024-08-31 at 16.39.46.jpeg",

"/assets/images/WhatsApp Image 2024-08-31 at 16.39.47.jpeg",

"/assets/images/WhatsApp Image 2024-08-31 at 16.39.48.jpeg",
"/assets/images/WhatsApp Image 2024-08-31 at 16.39.31.jpeg",
"/assets/images/WhatsApp Image 2024-08-31 at 16.39.32.jpeg",

"/assets/images/WhatsApp Image 2024-08-31 at 16.39.34.jpeg",
"/assets/images/WhatsApp Image 2024-08-31 at 16.39.35.jpeg",

"/assets/images/WhatsApp Image 2024-08-31 at 16.39.37.jpeg",
"/assets/images/WhatsApp Image 2024-08-31 at 16.39.38.jpeg",
"/assets/images/WhatsApp Image 2024-08-31 at 16.39.39.jpeg",
"/assets/images/WhatsApp Image 2024-08-31 at 16.39.40.jpeg",
"/assets/images/WhatsApp Image 2024-08-31 at 16.39.41.jpeg",
"/assets/images/WhatsApp Image 2024-08-31 at 16.39.43.jpeg",


  ];

  return (
    <section id="hero" className="hero-section">
    <ImagesSlider className="absolute z-0 h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="pl-5 text-lg md:text-xl md:pl-3 font-semibold self-start text-start bg-clip-text text-transparent bg-gradient-to-b from-[#fefefe] to-[#dadada] ">

          MNNIT
        </motion.p>
        <motion.p className="font-bold text-4xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#d0fcb3] to-[#b2f886] pb-1">

          STARTUP <br /> SANGAM
        </motion.p>
        <motion.p className="tracking-wide text-base md:text-xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#fefefe] to-[#dadada] pb-10">

        INNOVATIO FUTURI
        </motion.p>
        <motion.p className="text-base md:text-lg font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#fefefe] to-[#dadada] pb-4">

          19th-20th September 2024
        </motion.p>
        <button className="px-3 py-2 md:px-4 md:py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-2 md:mt-4">

          <span>Register Now →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
    </section>
  );
}
