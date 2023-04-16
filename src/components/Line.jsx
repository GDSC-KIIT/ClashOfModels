import React from "react";
import { motion } from "framer-motion";

const Line = ({ time, desc }) => {
  return (
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
      <div className="w-[40vw] mt-2 text-right pr-5 ">{time}</div>
      <div className="flex flex-col items-center gap-2 w-[20vw]] mt-2    ">
        <div className="bg-[#FABB03] h-6 w-6 rounded-full" />
        <div className="h-16 w-[0.1rem] bg-white"></div>
      </div>
      <div className="w-[40vw] mt-2 pl-5">{desc}</div>
    </motion.div>
  );
};

export default Line;
