import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

const LandingPage = () => {
  const pathVar = {
    hidden: {
      pathLength: 0,
      reverse: true,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      reverse: true,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };
  const btn = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1,
    },
  };

  const [fill, setfill] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setfill("black");
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div
      className="h-screen w-full flex items-center relative sm:justify-start flex-col gap-20 sm:flex-row pt-24"
      style={{ background: "radial-gradient(circle, #FFD969, #FABB03)" }}
    >
      <div className=" sm:pl-32 sm:pt-5 items-center sm:items-start gap-20 sm:gap-3 relative top-0 flex flex-col h-full">
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-col sm:flex-row items-center sm:gap-5 sm:mb-10"
        >
          <img src="./gdsc.svg" alt="" className="h-5 w-auto" />
          <img src="./x.png" alt="x" className="h-3" />
          <img src="./senseback.svg" alt="" className="h-5 w-auto" />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-col text-center sm:text-left gap-1"
        >
          <span className="text-3xl sm:text-7xl dark-gray clash-light">
            {" "}
            Clash Of{" "}
          </span>
          <span className="text-5xl headings sm:text-9xl clash-bold">
            Models
          </span>
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="left-24 flex gap-8 text-xl"
        >
          <h2 className="uppercase satoshi">Strategize</h2>
          <ul className=" list-disc flex gap-8">
            <li>
              <h2 className="uppercase satoshi">Train</h2>
            </li>
            <li>
              <h2 className="uppercase satoshi">Race</h2>
            </li>
          </ul>

          {/* <p className="tagline text-md mt-[-2.5rem]">Strategize - Train - Race</p> */}
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="flex text-center mt-3 gap-2 text-lg"
        >
          <div className="flex items-center gap-2">
            <img src="./loc.svg" className="h-4 w-4 " alt="" />
            <span className="satoshi text-base">
              15th April, 2023 - KIIT UNIVERSITY
            </span>
          </div>
        </motion.div>
        <a href="https://gdsc.community.dev/events/details/developer-student-clubs-kalinga-institute-of-industrial-technology-bhubaneswar-presents-clash-of-models-strategize-train-race/">
          <motion.button
            variants={btn}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className="text-white bg-purple-800 relative z-10 mt-4 cursor-pointer py-2 px-6 uppercase satoshi rounded-lg  text-sm hover:bg-purple-700"
          >
            Register Now
          </motion.button>
        </a>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="h-96 w-96 bg-[#7a05ff] hidden sm:block rounded-full absolute right-[10vw]"
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="h-96 w-96 rounded-full hidden sm:block absolute right-[10vw] circle"
      />
      <motion.svg
        viewBox="0 0 299 1024"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
        className="h-screen w-full absolute hidden sm:block left-[25vw] scale-150"
      >
        <motion.path
          initial="hidden"
          animate="visible"
          variants={pathVar}
          d="M150 0.5V467.5H142V486.5H23.5L13.5 491.5L4.5 507V547.5H28.5C28.8333 558 35.4 580.2 59 585C88.5 591 101.5 570.5 105.5 547.5H178C179.167 560 188 585 214 585C246.5 585 253 564 254.5 547.5H278.5V507C279.667 501.333 276.5 489.3 254.5 486.5H231L192 437L178 446.5L210.5 486.5H162V900"
          stroke="black"
          stroke-width="9"
          fill={fill}
        />
      </motion.svg>
    </div>
  );
};

export default LandingPage;
