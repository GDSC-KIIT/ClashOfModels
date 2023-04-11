import React from 'react'
import {motion} from 'framer-motion'

const Nav = () => {
    return (
        <motion.Nav
        initial={{
            y:-20,
            opacity:0
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{
            duration:1
        }}
        className='absolute w-full apple text-xl mt-5 z-10'>
            <ul className='sm:flex justify-center gap-14 hidden'>
                <div className='sm:h-32 sm:w-32 md:h-24 md:w-24 absolute sm:left-16 md:left-9'>
                <img src="./clashlogo.svg" alt="" className=''/>
            </div>
                <li className='navelements cursor-pointer relative z-10'>Sponsors</li>
                <li className='navelements cursor-pointer relative z-10'>Prizes</li>
                <li className='navelements cursor-pointer relative z-10'>Timeline</li>
                <li className='navelements cursor-pointer relative z-10'>Rules</li>
            </ul>
        </motion.Nav>
    )
}

export default Nav