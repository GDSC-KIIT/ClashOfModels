import React, { useEffect, useState } from "react";
import TimeElements from "./TimeElements";
import { motion } from "framer-motion";
import Line from "./Line";

const Timeline = () => {
  return (
    <div className="h-fit pb-20 bg relative pt-2 w-full flex flex-col items-center justify-center px-10 gap-24">
      {/* <div>
        <h2 className="headings satoshi text-center mt-0">Timeline</h2>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-64 sm:gap-44 mt-40 text-right sm:mt-24">
          <TimeElements time="1:30 PM" desc="FAQ Session" />
          <TimeElements time="10:00 AM" desc="Introduction to rewards.ai" />
          <TimeElements time="10:00 AM" desc="Introduction to rewards.ai" />
        </div>
        <img src="./time.svg" alt="" className="h-[120vh] w-fit mx-4" />
        <div className="flex flex-col gap-64 sm:gap-44">
          <TimeElements time="10:00 AM" desc="Breaking down AI" />
          <TimeElements time="3:00 PM" desc="Installing to rewards.ai" />
          <TimeElements time="10:00 AM" desc="Introduction to rewards.ai" />
          <TimeElements time="10:00 AM" desc="Introduction to rewards.ai" />
        </div>
      </div> */}
      <motion.h2
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
          delay: 0.5,
        }}
        className="headings satoshi text-center mt-10 tracking-[3px]"
      >
        Timeline
      </motion.h2>
      <div className="w-fit">
        <Line time="10:00 AM" desc="Breakiasdfng down AI" />
        <Line time="10:00 AM" desc="Breaking down AI" />
        <Line time="10:00 AM" desc="Breakiasdfng down AI" />
        <Line time="10:00 AM" desc="Breaking down AI" />
        <Line time="10:00 AM" desc="BreaasdfsSking down AI" />
        <Line time="10:00 AM" desc="Breakadsfing down AI" />
        <Line time="10:00 AM" desc="Breaking down AI" />
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
          <div className="w-[40vw] mt-2 text-right pr-5 "></div>
          <div className="flex flex-col items-center gap-2 w-[20vw]] mt-2    ">
            <div className="bg-white h-6 w-6 rounded-full" />
            <div className="h-16 w-[0.1rem] bg-black"></div>
          </div>
          <div className="w-[40vw] mt-2 pl-5"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
