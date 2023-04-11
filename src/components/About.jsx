import React from "react";
import {motion} from 'framer-motion'

const About = () => {
  const slideIn =  (direction) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      opacity:0,
    },
    show: {
      x: 0,
      opacity:1,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay: 0.5,
      },
    },
  });
  return (
    <div
      className="h-fit sm:h-screen w-full pt-24 sm:pt-0 flex flex-col sm:flex-row relative pb-10 justify-around items-center px-7 gap-24 abt"
      style={{ background: "radial-gradient(circle, #030302,  #141401)" }}
    >
      <motion.img 
        variants={slideIn('left')}
        initial='hidden'
        whileInView='show'
        
      src="./aboutpic.svg" className=" h-[35vw] w-[35vw]" alt="" />
      <motion.div
      variants={slideIn('right')}
      initial='hidden'
      whileInView='show'
      className=" px-10 items-center sm:items-start text-center sm:text-left flex flex-col gap-1">
        <span className="text-white apple text-3xl ">What is </span>
        <h2 className="headings impact">Clash of Models?</h2>
        <p className="text-white">GDSC KIIT presents to you it’s newest event: ‘Clash of Models’. Made for absolute beginners, it focuses on building the intuition required for AI/ML and how to use that moving forward.</p>
        <br />
        <p className="text-white">Learn the basic of AI and Neural Networks and train your AI model car to race and win against your competitors. Don’t miss this chance to win exciting prizes and learn cool tech!
        (naukri chahiye? AI padho)</p>
      </div>
    </div>
  );
};

export default About;
