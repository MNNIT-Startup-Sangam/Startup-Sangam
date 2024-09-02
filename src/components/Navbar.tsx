import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <ul className='p-6 pl-10 flex gap-16 text-white list-none'>
        <li>Events</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
