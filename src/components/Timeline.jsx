import React,{useEffect, useState} from "react";


const Timeline = () => {
  return (
    <div className='h-fit pb-20 pt-2 w-full flex flex-col justify-center px-10 gap-24'
        style={{background:"radial-gradient(circle, #030302,  #141401)"}}>
        <div>
            <h2 className="headings impact text-center mt-0">Timeline</h2>
        </div>
        <img src="./time.svg" alt="" className="h-[120vh]"/>
    </div>
  )
}

export default Timeline