"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Herosection } from "@/components/Herosection";
import { TimelineDemo } from "@/components/Events";
import AboutUs from "@/components/AboutUs";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GlobeDemo } from "@/components/Globe";
export default function Home() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);

  // Function to handle smooth scrolling
  const scrollToTimeline = () => {
    if (timelineRef.current) {
      window.scrollTo({
        top: timelineRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <Herosection />

      <div
        onClick={scrollToTimeline}
        className="cursor-pointer mt-96 flex justify-center items-center"
      >
        {/* Scroll Indicator */}
        {/* <p className="text-white text-lg"></p> */}
      </div>
      <div id="timeline" ref={timelineRef} className="mt-48">
        <TimelineDemo />
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
}
