"use client";

import React from 'react'
import Carousel from './ui/carousel';
const Generator = () => {

  


  const slideData = [
  {
    title: "Go",
    button: "Explore more",
    src: "/go.png",
    link: "/generator/go",
  },
  {
    title: "Node",
    button: "Explore more",
    src: "/node.jpg",
    link: "/generator/nodejs",
  },
  {
    title: "Python",
    button: "Explore more",
    src: "/python.jpeg",
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