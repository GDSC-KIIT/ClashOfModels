import React from 'react'

const Nav = () => {
    return (
        <nav className='absolute w-full apple text-xl mt-5'>
            <ul className='sm:flex justify-center gap-14 hidden'>
                <div className='sm:h-32 sm:w-32 md:h-24 md:w-24 absolute sm:left-16 md:left-9'>
                <img src="./clashlogo.svg" alt="" />
            </div>
                <li className='navelements cursor-pointer'>Sponsors</li>
                <li className='navelements cursor-pointer'>Prizes</li>
                <li className='navelements cursor-pointer'>Timeline</li>
                <li className='navelements cursor-pointer'>Rules</li>
            </ul>
        </nav>
    )
}

export default Nav