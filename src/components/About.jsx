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
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti numquam doloremque minima, provident aut delectus, quae ex pariatur explicabo molestiae cumque aliquid. Dolores placeat, officiis, unde mollitia a inventore rerum, eos sapiente ratione incidunt iure pariatur ipsum at? Ipsam voluptates repellat doloremque accusantium minima magni. Optio deserunt aut libero possimus?</p>
      </div>
    </div>
  );
};

export default About;
