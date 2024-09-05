import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import profileData from '@/data/profileData.json';


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
        }};
  const { name, title, description, imageUrl, socialLinks }: ProfileData = profileData;

  return (
    <div className="bg-navy-900 text-white p-8 relative">
      {/* Decorative squares */}
      <div className="absolute top-8 right-24 w-8 h-8 border border-gray-600 rotate-45"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border border-gray-600 rotate-45"></div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className=" flex items-center  gap-6 md:w-1/3 mb-1 md:mb-0">
        <div className="w-80 h-80 rounded-full overflow-hidden mx-auto md:mx-0">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold mb-2 underline">{name}</h2>
         
        </div>
        
        <div className="md:w-2/3 md:pl-8">
          <div className="mb-4">
            <span className="text-xl font-semibold bg-gray-700 px-3 py-1 rounded">{title}</span>
          </div>
          <p className="mb-4 text-lg">{description}</p>
          <div className="flex space-x-4">
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6" />
              </a>
            )}
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;