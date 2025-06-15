import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black rounded-lg shadow-sm text-white">
      <div className="max-w-screen-xl mx-auto py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <a href="/" className="flex items-center space-x-3">
            {/* Add your logo image src below */}
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <span className="text-2xl font-semibold whitespace-nowrap">Flowbite</span>
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
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-center text-xs sm:text-sm">
          © 2023 <a href="https://flowbite.com" className="hover:underline">Flowbite™</a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
