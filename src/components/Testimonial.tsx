"use client";
import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Star from "./Star";
import { AnimatePresence, motion } from "framer-motion";


export default function Testimonials() {
  const testimonials = [
    {
      name: "Sophia Carter",
      title: "Marketing Specialist",
      text: "The team exceeded my expectations! Their dedication to detail were remarkable. I highly recommend their services for anyone looking to enhance their business.",
    },
    {
      name: "Liam Anderson",
      title: "Entrepreneur",
      text: "This has been a game-changer for my startup. The insights and support provided were top-notch. It’s refreshing to work with a team that truly understands your needs.",
    },
    {
      name: "Isabella Garcia",
      title: "Graphic Designer",
      text: "As a designer, I’ve worked with many collaborators, but this experience stood out. Their innovative approach and professionalism left a lasting impression.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const getPrevIndex = () =>
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (currentIndex + 1) % testimonials.length;

  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1.45 },
  };

  const TestimonialInfo = ({ name, title }: { name: string; title: string }) => (
    <AnimatePresence mode="wait">
      <motion.div key={name} {...fadeAnimation} className="flex flex-col">
        <p className="italic text-lg font-bold text-black">- {name}</p>
        <p className="text-xs text-black">{title}</p>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section className="bg-black ;px-6 md:px-28 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
        <p className="font-poppins text-3xl text-white md:text-5xl font-semibold flex items-center gap-4 md:gap-10">
          <Star width={70} rotate={270} />
          Hear What Others Say!
        </p>
        <p className="text-lg md:text-xl font-poppins text-slate-300 text-center md:text-left mt-4 md:mt-0">
          
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-end">
          <button
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex justify-center items-center border-slate-300 hover:bg-[#3059fd] hover:border-[#3059fd]"
            onClick={() => setCurrentIndex(getPrevIndex())}
          >
            <ArrowLeft color="white" />
          </button>
          <div className="w-full bg-slate-200 rounded-lg md:rounded-r-lg h-36 md:h-48 px-6 flex flex-col justify-end py-4 mt-6">
            <TestimonialInfo name={testimonials[getPrevIndex()].name} title={testimonials[getPrevIndex()].title} />
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="w-full md:w-1/2">
          <TestimonialCard data={testimonials[currentIndex]} />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
          <div className="w-full bg-slate-200 rounded-lg md:rounded-r-lg h-36 md:h-48 px-6 flex flex-col justify-end py-4">
            <TestimonialInfo name={testimonials[getNextIndex()].name} title={testimonials[getNextIndex()].title} />
          </div>
          <button
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex justify-center items-center border-slate-300 hover:bg-[#3059fd] hover:border-[#3059fd] mt-6"
            onClick={() => setCurrentIndex(getNextIndex())}
          >
            <ArrowRight color="white" />
          </button>
        </div>
      </div>
    </section>
  );
}
