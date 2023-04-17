import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const slideIn = (direction) => ({
    hidden: {
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.8,
        delay: 0.3,
      },
    },
  });
  return (
    <div
      id="about"
      className="h-fit bg sm:h-screen w-full pt-24 sm:pt-0 flex flex-col sm:flex-row relative pb-10 justify-around items-center px-7 gap-24 abt"
    >
      <img
        src="./aboutpic1.svg"
        className=" h-[35vw] w-[35vw]"
        alt="rewards logo"
      />
      <p
        // variants={slideIn("right")}
        // initial="hidden"
        // whileInView="show"
        // viewport={{once:true}}
        className="items-center sm:items-start text-center sm:text-left flex flex-col gap-1"
      >
        <span className="text-white text-3xl satoshi">What is </span>
        <h2 className="headings satoshi mt-[-20px]">Clash of Models?</h2>
        <p className="text-white mori text-glow">
          GDSC KIIT presents to you it’s newest event: ‘Clash of Models’. Made
          for absolute beginners, it focuses on building the intuition required
          for AI/ML and how to use that moving forward.
        </p>
        <br />
        <p className="text-white mori">
          Learn the basic of AI and Neural Networks and train your AI model car
          to race and win against your competitors. Don’t miss this chance to
          win exciting prizes and learn cool tech! (naukri chahiye? AI padho)
        </p>
      </p>
    </div>
  );
};

export default About;
