
// components/Footer.tsx
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { Phone } from "lucide-react";
import footer_logo from '../Assets/logo_tbi.png';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-6"> {/* Changed background to grey */}
      <div className="container mx-auto px-5">
        <div>
          <h2 className="text-left text-2xl font-bold">GET IN TOUCH</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Contact Info */}
          <ul className="space-y-2">
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
          <div className="px-6">
            <img src="/assets/images/logo_tbi.png" className="w-32 h-32 px-1" alt="Footer Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
