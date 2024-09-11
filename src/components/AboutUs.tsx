import React from "react";
import { GlobeDemo } from "./Globe";

export default function AboutUs() {
  return (
    <div className="relative w-full bg-black text-[#d0fcb3] p-6 flex flex-row">
      <div className="w-2/3 relative z-10">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="mb-4 text-white text-justify">
          The Innovation and Incubation Hub MNNIT Foundation, IIHMF at Motilal
          Nehru National Institute of Technology Allahabad is more than just a
          space, it is where ideas, research, and business plans come to life.
          IIHMF is focused on supporting the next generation of thinkers and
          doers by providing them with the tools, resources, and insight needed
          to make concepts real.With a focus on building a flourishing startup
          culture, IIHMF is providing a platform where notions meet
          expectations, and people can make the connections required to support
          and access vital information, turning their ideas into reality.
        </p>
        <h1 className="text-4xl font-bold mb-6 text-justify">About IIC</h1>
        <p className="mb-4 text-white text-justify">
          The Ministry of Education (formerly the Ministry of Human Resource
          Development), Government of India, established the MHRD Innovation
          Cell to promote creativity and foster innovation within higher
          education institutions. The main objective of the Innovation Cell is
          to cultivate an entrepreneurial spirit among students by supporting
          them in developing their ideas from an early stage. To achieve this,
          the Ministry launched Institution's Innovation Councils (IICs) across
          universities and colleges, empowering them to drive innovative
          thinking and actions. IICs focus on practical implementation, guiding
          students to create and develop new solutions through a structured
          framework.
        </p>
        <h1 className="text-4xl font-bold mb-6 text-justify">Events Hosted by IIC</h1>
        <div className="mb-4 text-white text-justify">
          MNNIT's IIC organizes a variety of events to promote innovation and
          entrepreneurship among students, such as:
          <ul className="list-disc ml-5 text-justify">
            <li>Workshops on creative thinking and startup strategies</li>
            <li>Hackathons to develop innovative solutions</li>
            <li>Expert talks on industry trends</li>
            <li>Pitch sessions to connect ideas with investors</li>
            <li>Startup showcases featuring emerging businesses</li>
            <li>
              Guest speakers like Sandeep Jain, TEDx speaker Nisha Khanna, and
              Major Vandana Sharma
            </li>
            <li>Innovation competitions, mentorship sessions, and festivals</li>
          </ul>
        </div>
      </div>

      {/* Interactive Globe on the right side */}
      <div className="w-1/3 flex items-center justify-center absolute top-0 right-0 h-full z-0 overflow-hidden">
        <GlobeDemo />
      </div>
    </div>
  );
}
