import React, { useEffect, useState } from "react";
import logo from '../../public/clashlogo.svg';
import gdsc from '../../public/gdsclogo.svg'
import lnkd from '../../public/socials/linkd.svg';
import insta from '../../public/socials/insta.svg';
import github from '../../public/socials/github.svg';
import medium from '../../public/socials/medium.svg';
import { motion } from "framer-motion";

const Footer=()=>{
    return(
        <div className="py-4" style={{ background: "radial-gradient(circle, #FFD969, #FABB03)" }}>
            <div className="top flex justify-between w-full px-10">
                <img src={logo} alt="reward logo" className="w-[12rem]"/>
                <div>
                    <p>powered by</p>
                    <img src={gdsc} alt="gdsc" className="h-[1.5rem] mt-2"/>
                </div>
            </div>
          
            <div className="flex justify-between w-full px-10 mt-8">
                <p className="text-xs">© 2022 GDSC KIIT. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <a href="#">
                        <img src={lnkd} alt="linkedin" />
                    </a>
                    <a href="#">
                        <img src={insta} alt="insta" />
                    </a>
                    <a href="#">
                        <img src={github} alt="github" />
                    </a>
                    <a href="#">
                        <img src={medium} alt="medium" />
                    </a>
                    
                </div>
            </div>


        </div>

    );
};

export default Footer;