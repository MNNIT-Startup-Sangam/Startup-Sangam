"use client";
import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#119da4] bg-opacity-25 backdrop-blur-sm">
      <ul className="p-4 md:p-6 pl-6 md:pl-10 flex gap-8 md:gap-16 text-gray-200 list-none">
        <li
          className="cursor-pointer text-base md:text-md"
          onClick={() => scrollToSection("events")}
        >
          Events
        </li>
        <li
          className="cursor-pointer text-base md:text-md"
          onClick={() => scrollToSection("about")}
        >
          About Us
        </li>
        <li
          className="cursor-pointer text-base md:text-md"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
