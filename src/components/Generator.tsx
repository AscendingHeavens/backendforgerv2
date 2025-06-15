"use client";

import React from 'react'
import Carousel from './ui/carousel';
const Generator = () => {

  


  const slideData = [
  {
    title: "Go",
    button: "Explore more",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?...",
    link: "/generator/go",
  },
  {
    title: "Node",
    button: "Explore more",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?...",
    link: "/generator/nodejs",
  },
  {
    title: "Python",
    button: "Explore more",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?...",
    link: "/generator/python",
  },
];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}

    export default Generator