"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const DonationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "+919152783125";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    // Check if popup has been shown before
    const hasShownPopup = localStorage.getItem('donationPopupShown');
    if (!hasShownPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem('donationPopupShown', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleContact = () => {
    window.open(whatsappLink, '_blank');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Support Our Project
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
          If you wanna donate so that we can level up this project, we'd love to hear from you!
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleContact}
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationPopup; 