import React from "react";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.nav
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
      <ul className="sm:flex justify-center gap-10 hidden text-[16px] mori">
        <div className="sm:h-32 sm:w-32 md:w-[7rem] absolute sm:left-16 md:left-9">
          <img src="./clashlogo.svg" alt="" className="" />
        </div>
        <a href="#about">
          <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">
            About
          </li>
        </a>
        <a href="#timeline">
          <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">
            Timeline
          </li>
        </a>
        <a href="#sponsors">
          <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">
            Sponsors
          </li>
        </a>
        <a href="#prizes">
          <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">
            Prizes
          </li>
        </a>
        <a href="#rules">
          <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">
            Rules
          </li>
        </a>
        <a href="#faq">
          <li className="cursor-pointer relative z-10 opacity-70 hover:opacity-100">
            FAQs
          </li>
        </a>
      </ul>
    </motion.nav>
  );
};

export default Nav;
