import React from "react";
import { motion } from "framer-motion";

const Sponsor = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 0.9,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1,
    },
  };
  return (
    <div
      id="sponsors"
      className=" h-fit md:h-screen w-full bg flex flex-col items-center justify-evenly gap-5 pb-8"
    >
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
        className="clash-bold headings mb-16 md:mb-0 text-md text-center"
      >
        Our Sponsors
      </motion.h2>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col md:flex-row md:gap-32 gap-14 items-center justify-center">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
          >
            <a href="https://senseback.ai/">
              <img
                src="./senseback.svg"
                alt="senseback"
                className="bg-white px-14 rounded-full py-10"
              />
            </a>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
          >
            <a href="https://www.matterize.it/">
              <img src="./matterize.svg" alt="matterize" className=" p-6 rounded-lg" />
            </a>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-32 gap-14 justify-center items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
          >
            <a href="https://barista.co.in/">
              <img src="./barista.svg" alt="barista" className="h-32 rounded-lg" />
            </a>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
          >
            <a href="https://www.biggiesburger.com/">
              <img
                src="./biggies.svg"
                alt="biggies"
                className="bg-white pt-1 px-5 h-32 w-auto rounded-full"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
