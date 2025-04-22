import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialCardProps {
  data: {
    name: string;
    title: string;
    text: string;
  };
}

export default function TestimonialCard({ data }: TestimonialCardProps) {
  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: 0.3,
      ease: "easeInOut", // Add easing
    },
  };

  return (
    <div className="flex w-full rounded-md bg-[#252E59] h-full">
      <div className="bg-[#d9d9d9] rounded-md w-1/3 py-10 px-5 flex flex-col justify-end">
        <AnimatePresence mode="wait">
          <motion.div key={data.name} {...fadeAnimation}>
            <p className="italic text-lg font-bold text-black">- {data.name}</p>
            <p className="text-xs text-black">{data.title}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="bg-[#252E59] rounded-md w-2/3 py-10 px-5 flex flex-col gap-5">
        <div>
          <img className="w-20 h-20" src="/images/comma.png" alt="comma" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={data.text} {...fadeAnimation}>
            <p className="text-white font-poppins">" {data.text} "</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
