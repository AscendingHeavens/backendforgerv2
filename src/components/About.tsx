"use client";

import React from "react";
import Star from "./Star";

const About = () => {
  return (
    <section id="about" className=" bg-black py-12 flex w-full flex-col items-center px-6">
      <p className="font-poppins text-xl md:text-2xl font-bold mb-5">About us</p>
      <p className="flex flex-col text-white md:flex-row gap-2 font-nunito text-4xl md:text-5xl font-bold items-center text-center md:text-left">
        <Star width={50} />
        It’s not about ideas. It’s about making ideas happen.
        <Star width={50} rotate={110} />
      </p>
      <div className="flex flex-col md:flex-row w-full px-6 md:px-28 gap-6 md:gap-10 mt-4">
        <p className="w-full text-white text-justify mt-6 md:mt-10 font-poppins text-lg md:text-xl">
        At Ascending Heavens, innovation drives everything we do. We operate across three focused branches, each committed to bringing technology and solutions to life in meaningful ways.

Ascending Heavens Tech is where we build impactful, forward-thinking projects designed to make a difference. Ascending Heavens Solutions is dedicated to client-driven work—transforming ideas into fully realized digital experiences. And through Ascending Heavens Media, we help brands amplify their presence with smart, strategic social media marketing.

In addition, we’ve developed a side initiative specifically for developers—an open-source project designed to simplify backend integration for those who primarily work on the frontend. We've seen how backend complexities can slow down creativity, so we created a platform that removes those barriers and makes building great products easier.

This project is a reflection of our ongoing commitment to the developer community—built by developers, for developers.
        </p>
      </div>
    </section>
  );
};

export default About;
