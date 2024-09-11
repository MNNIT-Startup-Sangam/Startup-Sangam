import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#119da4] bg-opacity-25">
      <ul className='p-4 md:p-6 pl-6 md:pl-10 flex gap-8 md:gap-16 text-white list-none'>
        <li className='cursor-pointer text-base md:text-md'>Events</li>
        <li className='cursor-pointer text-base md:text-md'>About Us</li>
        <li className='cursor-pointer text-base md:text-md'>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
