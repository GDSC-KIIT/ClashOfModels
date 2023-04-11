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
        className='absolute w-full apple text-xl mt-5'>
            <ul className='sm:flex justify-center gap-14 hidden'>
                <div className='h-32 w-32 absolute left-16'>
                <img src="./clashlogo.svg" alt="" />
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