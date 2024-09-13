// components/Footer.tsx
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { Phone } from "lucide-react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6" id="contact"> {/* Changed background to grey */}
      <div className="w-full h-[1px] bg-gray-700 mb-4"></div>
      <div className="container mx-auto px-5">
        <div>
          <h2 className="text-left text-2xl font-bold mb-4 ">GET IN TOUCH</h2>
        </div>

        <div className="flex flex-col lg:flex-row md:justify-between md:items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10">
          {/* Contact Info */}
          <ul className="space-y-4 text-left"> {/* Changed text alignment to text-left */}
            <li className="flex items-center">
              <SlLocationPin className="mr-2" /> MNNIT Allahabad, Prayagraj (UP), India
            </li>
            <li className="flex items-center">
              <MdOutlineEmail className="mr-2" /> iihmf2022@gmail.com
            </li>
            <li className="flex items-center">
              <Phone className="mr-2" size={16} /> 0532-4075285
            </li>
          </ul>

          {/* Logo placed below */}
          <div className="flex justify-center lg:justify-start">
          <Image src="/assets/images/logo_tbi.png" width={128} height={128} alt="Footer Logo" className=" px-1" />

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
