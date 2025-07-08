import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav
      className="w-full bg-[#0a0a0a] shadow-md relative py-0 sm:py-3"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-0 sm:min-h-[70px] w-full">
          <div className="flex items-center">
            <Image
              src="/White-VNSH-Logo.webp"
              alt="VNSH Logo"
              className="w-[150px] sm:w-[180px] h-auto hover:opacity-90"
              width={180}
              height={50}
              priority
            />
          </div>
          <span className="text-white text-lg sm:text-xl font-medium mt-3 sm:mt-0">
            Questions? | 888-526-1885
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
