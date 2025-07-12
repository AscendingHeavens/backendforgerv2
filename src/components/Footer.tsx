import Image from "next/image";
import React from "react";

const Footer = () => {
  const whatsappNumber = "+919152783125";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="bg-black rounded-lg shadow-sm text-white">
      <div className="max-w-screen-xl mx-auto py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <a href="/" className="flex items-center space-x-3">
            {/* Add your logo image src below */}
            <Image src="/whitebg.png" alt="Logo" width={300} height={300} />
            <span className="text-2xl font-semibold whitespace-nowrap"></span>
          </a>

          <ul className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm font-medium">
            <li>
              <a href="#" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Licensing</a>
            </li>
            <li>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                Contact
       
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-center text-xs sm:text-sm">
          © 2023 <a href="https://ascending-heavens.com" className="hover:underline">Ascending Heavens</a>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
