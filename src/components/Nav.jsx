import React from "react";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.Nav
      initial={{
        y: -20,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="absolute w-full apple text-xl mt-5 z-10"
    >
      <ul className="sm:flex justify-center gap-14 hidden text-[16px]">
        <div className="sm:h-32 sm:w-32 md:w-[7rem] absolute sm:left-16 md:left-9">
          <img src="./clashlogo.svg" alt="" className="" />
        </div>
        <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">About</li>
        <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">Timeline</li>
        <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">Sponsors</li>
        <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">Prizes</li>
        <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">Rules</li>
        <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">FAQs</li>
      </ul>
    </motion.Nav>
  );
};

export default Nav;
