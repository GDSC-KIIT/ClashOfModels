import React from "react";

const About = () => {
  return (
    <div
      className="h-screen w-full flex justify-around items-center px-7 gap-24"
      style={{ background: "radial-gradient(circle, #030302,  #141401)" }}
    >
      <img src="./aboutpic.svg" className=" h-[35vw] w-[35vw]" alt="" />
      <div className=" px-10 flex flex-col gap-1">
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
