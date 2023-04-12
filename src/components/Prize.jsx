
import React, { useEffect, useState } from "react";
import PrizeCard from "./PrizeCard";
import first from '../../public/first.svg'
import second from '../../public/second.svg';
import third from '../../public/third.svg';
const Prizes = ()=>{
    return(
        <div className='h-fit pb-20 bg relative pt-2 w-full flex flex-col items-center justify-center px-10 gap-24'
       >
        <div>
            <h2 className="headings satoshi text-center mt-0">Prizes</h2>
        </div>
        <div className="flex flex-wrap gap-8 justify-center items-center mt-[-2rem]">
            <PrizeCard img={first} title="WINNER" price="5,000" />
            <PrizeCard img={second} title="FIRST RUNNER UP" price="5,000" />
            <PrizeCard img={third} title="SECOND RUNNER UP" price="5,000" />
        </div>
    </div>
    );
}

export default Prizes;
