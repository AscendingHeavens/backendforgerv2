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
      text: "This has been a game-changer for my startup. The insights and support provided were top-notch. It's refreshing to work with a team that truly understands your needs.",
    },
    {
      name: "Isabella Garcia",
      title: "Graphic Designer",
      text: "As a designer, I've worked with many collaborators, but this experience stood out. Their innovative approach and professionalism left a lasting impression.",
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
        <p className="italic text-base sm:text-lg font-bold text-black">- {name}</p>
        <p className="text-xs sm:text-sm text-black">{title}</p>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section className="bg-black px-4 sm:px-6 lg:px-8 xl:px-28 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8 sm:mb-12 lg:mb-16">
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-10 mb-4">
            <Star width={50} rotate={270} className="sm:w-[60px] lg:w-[70px]" />
            <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-semibold">
              Hear What Others Say!
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-poppins text-slate-300 max-w-2xl mx-auto lg:mx-0">
            Discover how BackendForger is transforming the way developers build and deploy their applications.
          </p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="w-full mb-6">
          <TestimonialCard data={testimonials[currentIndex]} />
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <button
            className="w-12 h-12 rounded-full border-2 flex justify-center items-center border-slate-300 hover:bg-[#3059fd] hover:border-[#3059fd] transition-colors duration-200"
            onClick={() => setCurrentIndex(getPrevIndex())}
          >
            <ArrowLeft color="white" size={20} />
          </button>
          
          <div className="flex-1 bg-slate-200 rounded-lg h-20 px-4 flex flex-col justify-center">
            <TestimonialInfo name={testimonials[getPrevIndex()].name} title={testimonials[getPrevIndex()].title} />
          </div>
          
          <div className="flex-1 bg-slate-200 rounded-lg h-20 px-4 flex flex-col justify-center">
            <TestimonialInfo name={testimonials[getNextIndex()].name} title={testimonials[getNextIndex()].title} />
          </div>
          
          <button
            className="w-12 h-12 rounded-full border-2 flex justify-center items-center border-slate-300 hover:bg-[#3059fd] hover:border-[#3059fd] transition-colors duration-200"
            onClick={() => setCurrentIndex(getNextIndex())}
          >
            <ArrowRight color="white" size={20} />
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row items-stretch justify-between gap-8 xl:gap-10">
        {/* Left Section */}
        <div className="w-1/4 flex flex-col items-end">
          <button
            className="w-16 h-16 rounded-full border-2 flex justify-center items-center border-slate-300 hover:bg-[#3059fd] hover:border-[#3059fd] transition-colors duration-200"
            onClick={() => setCurrentIndex(getPrevIndex())}
          >
            <ArrowLeft color="white" size={24} />
          </button>
          <div className="w-full bg-slate-200 rounded-r-lg h-48 px-6 flex flex-col justify-end py-4 mt-6">
            <TestimonialInfo name={testimonials[getPrevIndex()].name} title={testimonials[getPrevIndex()].title} />
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="w-1/2">
          <TestimonialCard data={testimonials[currentIndex]} />
        </div>

        {/* Right Section */}
        <div className="w-1/4 flex flex-col items-start">
          <div className="w-full bg-slate-200 rounded-l-lg h-48 px-6 flex flex-col justify-end py-4">
            <TestimonialInfo name={testimonials[getNextIndex()].name} title={testimonials[getNextIndex()].title} />
          </div>
          <button
            className="w-16 h-16 rounded-full border-2 flex justify-center items-center border-slate-300 hover:bg-[#3059fd] hover:border-[#3059fd] transition-colors duration-200 mt-6"
            onClick={() => setCurrentIndex(getNextIndex())}
          >
            <ArrowRight color="white" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
