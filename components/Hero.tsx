"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="w-full  h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        <div className="w-full flex justify-between items-center flex-wrap">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            className="flex flex-col gap-[24px]"
          >
            <h1 className="text-[40px] font-normal leading-[60px]">
              A user experience <br />
              designer at Accenture
            </h1>

            <h2 className="text-primary-foreground text-opacity-25 text-[36px] font-normal leading-[54px]">
              Based in Philippines
              <br /> designing inclusive products <br />
              and services for people
            </h2>
          </motion.div>
          <div className="flex flex-col gap-[40px] mt-[120px]">
            <div className="w-[469px] h-[455px] bg-secondary"></div>
            <div className="w-[469px] h-[455px] bg-primary"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
