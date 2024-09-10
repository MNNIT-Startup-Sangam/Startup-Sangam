// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <nav className="flex space-x-6">
            <Link href="/" className="text-sm hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="text-sm hover:text-gray-400">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-gray-400">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
