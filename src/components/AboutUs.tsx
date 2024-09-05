import React from "react";
import { GlobeDemo } from "./Globe";

export default function AboutUs() {
  return (
    <div className="relative w-full bg-black text-[#d0fcb3] p-6 flex flex-row">
      <div className="w-2/3 relative z-10">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="mb-4">
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
        <h1 className="text-4xl font-bold mb-6">About IIC and its Events</h1>
        <p className="mb-4">
          The Ministry of Education (formally known as Ministry of Human
          Resource Development), Government of India, set up the MHRD Innovation
          Cell to encourage creativity and new ideas in colleges and
          universities. MIC’s goal is to inspire young students by helping them
          develop their ideas early on, which is why they created the
          Institution’s Innovation Councils (IICs) to bring this vision to life.
          These IICs are all about action! They host engaging events like
          workshops on creative thinking and startup strategies, hackathons to
          develop innovative solutions, expert talks on industry trends, pitch
          sessions to connect ideas with investors, and startup showcases. In
          the past, MNNIT's IIC has had the privilege of hosting influential
          figures such as Sandeep Jain(CEO of GeeksforGeeks), TEDx speakers like
          Nisha Khanna, and even retired army officers like Major Vandana
          Sharma. You’ll also find innovation competitions, mentorship sessions
          and innovation festivals that celebrate creativity and hands-on
          experience.
        </p>
      </div>

      {/* Interactive Globe on the right side */}
      <div className="w-1/3 flex items-center justify-center relative z-0">
        <GlobeDemo />
      </div>
    </div>
  );
}
