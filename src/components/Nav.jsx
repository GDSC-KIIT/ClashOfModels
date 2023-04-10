import React from "react";
import logo from "../assets/logo.svg";
const Nav = () => {
  return (
    
    <div className="flex justify-between items-center ml-20 mr-20 mt-10">
      <div className="">
        <img src={logo} alt="" />
      </div>
      <nav className=''>
        <ul className='flex justify-between gap-10 text-white font-medium text-xl'>
            <li className=' cursor-pointer opacity-50 hover:opacity-80'>About</li>
            <li className=' cursor-pointer opacity-50 hover:opacity-80'>Timeline</li>
            <li className=' cursor-pointer opacity-50 hover:opacity-80'>Sponsors</li>
            <li className=' cursor-pointer opacity-50 hover:opacity-80'>Prizes</li>
            <li className=' cursor-pointer opacity-50 hover:opacity-80'>Rules</li>
            <li className=' cursor-pointer opacity-50 hover:opacity-80'>FAQs</li>
        </ul>
    </nav>
    </div>
  );
};

export default Nav;
