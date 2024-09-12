import React from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import profileData from "@/data/profileData.json";
import { FollowerPointerCard } from "./ui/following-pointer";
import Image from "next/image";

const ProfileSection: React.FC = () => {
  interface ProfileData {
    name: string;
    title: string;
    description: string;
    imageUrl: string;
    socialLinks: {
      linkedin?: string;
      twitter?: string;
      facebook?: string;
    };
  }

  return (
    <div className="bg-navy-900 text-white px-4 py-8 md:pl-20 relative">
      {/* Decorative squares */}
      <div className="absolute top-8 right-8 md:right-24 w-6 h-6 md:w-8 md:h-8 border border-gray-600 rotate-45"></div>
      <div className="absolute bottom-8 right-4 md:right-8 w-10 h-10 md:w-16 md:h-16 border border-gray-600 rotate-45"></div>

      {profileData.map((profile: ProfileData, index: number) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center md:items-start md:space-x-12 mb-12 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image and Name Section wrapped inside FollowerPointerCard */}
          <FollowerPointerCard
            title={
              <div className="flex space-x-2 items-center">
                <Image
                  src={profile.imageUrl}
                  height="60"
                  width="60"
                  alt={profile.name}
                  className="rounded-full border-2 border-white"
                />
                <p className="text-xl md:text-3xl font-bold">{profile.name}</p>
              </div>
            }
          >
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={profile.imageUrl}
                  alt={profile.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-lg md:text-2xl text-center font-bold mt-4 md:mt-6">
                {profile.name}
              </h1>
            </div>
          </FollowerPointerCard>

          {/* Title and Description Section */}
          <div className="md:w-2/3 mt-6 md:mt-0 text-center md:text-left">
            <div className="mb-4 md:mb-6">
              <span className="text-lg md:text-2xl font-semibold bg-gray-700 px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-md">
                {profile.title}
              </span>
            </div>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              {profile.description}
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-6">
              {profile.socialLinks.linkedin && (
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition"
                >
                  <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
                </a>
              )}
             
           
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileSection;
