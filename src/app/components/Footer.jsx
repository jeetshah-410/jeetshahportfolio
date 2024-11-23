import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        {/* Logo Image */}
        <div className="logo">
          <Image 
            src="/images/LOGO.webp"   // Ensure the logo is placed in the public folder
            alt="Logo" 
            width={50}               // Set the desired width for the logo
            height={50}               // Set the desired height for the logo
          />
        </div>

        {/* Footer Text */}
        <p className="text-slate-600">All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
