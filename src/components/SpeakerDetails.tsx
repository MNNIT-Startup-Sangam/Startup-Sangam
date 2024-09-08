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
    <div className="bg-navy-900 text-white pl-20 relative">
      {/* Decorative squares */}
      <div className="absolute top-8 right-24 w-8 h-8 border border-gray-600 rotate-45"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border border-gray-600 rotate-45"></div>

      {profileData.map((profile: ProfileData, index: number) => (
        <div
          key={index}
          className="pl-10 flex flex-col md:flex-row items-center md:items-start md:space-x-12 mb-12"
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
                <p className="text-3xl font-bold">{profile.name}</p>
              </div>
            }
          >
            <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
              <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={profile.imageUrl}
                  alt={profile.name}
                  width={240}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl text-center font-bold">{profile.name}</h1>
            </div>
          </FollowerPointerCard>

          {/* Title and Description Section */}
          <div className="md:w-2/3">
            <div className="mb-6">
              <span className="text-2xl font-semibold bg-gray-700 px-4 py-2 rounded-lg shadow-md">
                {profile.title}
              </span>
            </div>
            <p className="text-lg leading-relaxed mb-6">{profile.description}</p>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              {profile.socialLinks.linkedin && (
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
              )}
              {profile.socialLinks.twitter && (
                <a
                  href={profile.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition"
                >
                  <Twitter className="w-8 h-8" />
                </a>
              )}
              {profile.socialLinks.facebook && (
                <a
                  href={profile.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-600 transition"
                >
                  <Facebook className="w-8 h-8" />
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
