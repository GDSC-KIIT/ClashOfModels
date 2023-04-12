import React from "react";
import {motion} from "framer-motion"

const Sponsor = () => {
  return (
    <div className=" h-fit md:h-screen w-full bg flex flex-col items-center justify-evenly gap-5 pb-8">
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
       className="clash-bold headings mb-16 md:mb-0 text-md">Our Sponsors</motion.h2>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col md:flex-row md:gap-32 gap-14 items-center justify-center">
          <img
            src="./senseback.svg"
            alt=""
            className="bg-white px-14 rounded-full py-10"
          />
          <img src="./matterize.svg" alt="" className=" p-6 rounded-lg" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-32 gap-14 justify-center items-center">
          <img src="./barista.svg" alt="" className="h-32 rounded-lg" />
          <img
            src="./biggies.svg"
            alt=""
            className="bg-white pt-1 px-5 h-32 w-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
