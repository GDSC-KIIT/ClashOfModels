import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer=()=>{
    return(
        <div className="py-4 bg">

        <motion.div
        initial={{

            y: 80,
        opacity: 0,
    }}
      whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        className="py-6" style={{ background: "radial-gradient(circle, #FFD969, #FABB03)" }}>
            <div className="top flex justify-between items-center gap-10 w-full px-10">
                <img src='./clashlogo.svg' alt="reward logo" className="md:w-[12rem] w-[8rem]"/>
                <div>
                    <p>powered by</p>
                    <img src='./gdsclogo.svg' alt="gdsc" className="h-[1.5rem] mt-2"/>
                </div>
            </div>
          
            <div className="flex justify-between w-full px-10 mt-8">
                <p className="text-xs">© 2022 GDSC KIIT. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <a href="https://www.linkedin.com/company/gdsckiit/">
                        <img src='./socials/linkd.svg' alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/gdsckiit/">
                        <img src='./socials/insta.svg' alt="insta" />
                    </a>
                    <a href="https://github.com/GDSC-KIIT">
                        <img src='./socials/github.svg' alt="github" />
                    </a>
                    <a href="https://medium.com/dsckiit">
                        <img src='./socials/medium.svg' alt="medium" />
                    </a>
                    
                </div>
            </div>


        </motion.div>
        </div>

    );
};

export default Footer;