import React, { useEffect, useState } from "react";
import TimeElements from "./TimeElements";
import { motion } from "framer-motion";
import Line from "./Line";

const Timeline = () => {
  return (
    <div 
    id="timeline"
    className="h-fit pb-20 bg relative pt-2 w-full flex flex-col items-center justify-center px-10 gap-24">

      <motion.h2
        initial={{
          y: -10,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          type: "spring",
          delay: 0.5,
        }}
        className="headings clash-bold headings text-center mt-10 tracking-[3px]"
      >
        Timeline
      </motion.h2>
      <div className="w-fit text-lg">
        <Line time="10:00 AM" desc="Introducing Clash of Models" />
        <Line time="11:00 AM" desc="Breaking Down AI and Reinforcement Learning" />
        <Line time="12:30 PM" desc="Diving into rewards.ai" />
        <Line time="2:00 PM" desc="FAQs and Lunch Break" />
        <Line time="3:00 PM" desc="Get! Set! Ready? RACE!" />
        <motion.div
          initial={{
            y: -10,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          className="flex gap-1 w-fit justify-center text-sm sm:text-base text-white"
        >
          <div className="w-[40vw] mt-2 text-right pr-5 ">5:00 PM</div>
          <div className="flex flex-col items-center gap-2 w-[20vw]] mt-2    ">
            <div className="bg-white h-6 w-6 rounded-full" />
            <div className="h-16 w-[0.1rem] bg-black"></div>
          </div>
          <div className="w-[40vw] mt-2 pl-5">Winners Declaration</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
