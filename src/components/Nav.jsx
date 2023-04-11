import React from 'react'

const Nav = () => {
    return (
        <nav className='absolute w-full apple text-xl mt-5'>
            <ul className='sm:flex justify-center gap-14 hidden'>
                <div className='h-32 w-32 absolute left-16'>
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