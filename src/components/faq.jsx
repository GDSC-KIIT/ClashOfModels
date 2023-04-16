import React from "react";
import { DisclosureComponent } from "./faqDisclose";
import { motion } from "framer-motion";

export const FAQ = () => {
  return (
    <div
    id="faq"
    className="px-4 md:px-[20vw] bg">
      <motion.h1
      initial={{
        y: -10,
        opacity: 0,
      }}
      viewport={{once:true}}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        type: "spring",
        delay: 0.5,
      }}
      className="text-center text-glow text-[32px] leading-none md:text-6xl mx-auto text-white pb-8 headings clash-bold">
        Any Questions?
      </motion.h1>
      <div className=" rounded-2xl transition-all delay-100 ease-in pt-6 pb-24">
        <DisclosureComponent
          heading={"I do not know about AI, can I still participate?"}
        >
          <p>
            The primary objective for Clash of Models is to help people grasp
            the basics of artificial intelligence. We’ve got you even if you
            don’t know much about AI.
          </p>
        </DisclosureComponent>
        <DisclosureComponent heading={"What will be the overall timings"}>
          <p>
            There will be a brief session from 10AM which will help you grasp
            the fundamentals of AI, following which, we will have a
            mini-hackathon. The event is likely to end by 5PM
          </p>
        </DisclosureComponent>
        <DisclosureComponent heading={"How do I register?"}>
          <p>
            The registrations will be on our community page, the link for which
            will be provided shortly
          </p>
        </DisclosureComponent>
        <DisclosureComponent heading={"Is there a fee or is the event free?"}>
          <p>
            There is absolutely no fee for registering and participating. All we
            want is for people to come and enjoy while learning something new.
          </p>
        </DisclosureComponent>
        <DisclosureComponent heading={"What is Rewards AI?"}>
          <p>
            Rewards AI is a low-code artificial intelligence platform developed
            at GDSC KIIT, which currently has two products for reinforcement
            learning. The first product is our SDK, which allows users to go one
            step further in customising their models using our python library.
            In the Rewards Platform, users do not have to worry about
            programming anything, and can put focus completely on building their
            model. Rewards AI is a low-code artificial intelligence platform
            developed at GDSC KIIT, which currently has two products for
            reinforcement learning
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={
            "What is the winning criteria?"
          }
        >
          <p>
          The winning criteria totally depends on whether the participant's car can finish till the end of the race track or not. If we observe that none of the participants are able to finish off the race track then we will evaluate based on which car has driven farthest in the evaluation race track. If we see several  participants are able to finish to the end of track then we will evaluate on the time required to finish the track. 
          </p>
        </DisclosureComponent>
                <DisclosureComponent
          heading={"In case of further doubts, how do I approach?"}
        >
          <p>
            Write to us at{" "}
            <a
              href="mailto:dsckiit@gmail.com"
              className="text-blue-400 hover:underline"
            >
              dsckiit@gmail.com
            </a>{" "}
            or DM us at{" "}
            <a
              className="text-blue-400 hover:underline"
              href="https://www.instagram.com/gdsckiit/"
            >
              @gdsckiit
            </a>
          </p>
        </DisclosureComponent>
      </div>
    </div>
  );
};
