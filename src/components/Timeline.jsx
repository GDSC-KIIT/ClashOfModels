import React,{useEffect, useState} from "react";
import TimeElements from "./TimeElements";

const Timeline = () => {
  return (
    <div className='h-fit pb-20 bg relative pt-2 w-full flex flex-col items-center justify-center px-10 gap-24'
       >
        <div>
            <h2 className="headings satoshi text-center mt-0">Timeline</h2>
        </div>
        <div className="flex">

        <div className="flex flex-col gap-64 sm:gap-44 mt-40 text-right sm:mt-24">

        <TimeElements time="1:30 PM" desc="FAQ Session"/>  
        <TimeElements time="10:00 AM" desc="Introduction to rewards.ai"/>  
        <TimeElements time="10:00 AM" desc="Introduction to rewards.ai"/>  
        </div>
        <img src="./time.svg" alt="" className="h-[120vh] w-fit mx-4"/>
        <div className="flex flex-col gap-64 sm:gap-44">

        <TimeElements time="10:00 AM" desc="Breaking down AI"/>  
        <TimeElements time="3:00 PM" desc="Installing to rewards.ai"/>  
        <TimeElements time="10:00 AM" desc="Introduction to rewards.ai"/>  
        <TimeElements time="10:00 AM" desc="Introduction to rewards.ai"/>  
        </div>
        </div>
    </div>
  )
}

export default Timeline