import React from "react";
import {motion} from 'framer-motion'

export const Rules = () => {
  return (
    <div 
    id="rules"
    className=" flex flex-col justify-center w-[100vw] mx-auto bg">
      <motion.h1 
      initial={{
        y: -10,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{once:true}}
      transition={{
        duration: 1,
        type: "spring",
        delay: 0.5,
      }}
      className="text-center pt-5 text-glow text-5xl md:text-6xl font-semibold clash-bold headings pb-1">
        Rules
      </motion.h1>
      <div className="mx-4 md:my-12">
        <ul className="pl-10 pb-20 pt-10 text-xl pr-5 xs:leading-3 text-glow font-Mori list-disc flex flex-col gap-8 max-w-3xl mx-auto leading-7 text-white/80">
          <li>Participants are requested to show up at the venue on time.</li>
          <li>
          The session will start at 10AM, after which we will not be responsible for bringing any participants up to speed.
          </li>
          <li>
          Participants are allowed to form teams of at max 3 people during the competition. 
          </li>
          <li>
          Participants have to fill out a google form to let us know which participants are participating as a team and which participants are participating as a team.
          </li>
        </ul>
      </div>
    </div>
  );
};