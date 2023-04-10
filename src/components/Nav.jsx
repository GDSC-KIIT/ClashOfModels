import React from 'react'

const Nav = () => {
    return (
        <nav className='absolute w-full apple text-xl mt-5'>
            <ul className='sm:flex justify-center gap-14 hidden'>
                <li className=' cursor-pointer'>Sponsors</li>
                <li className=' cursor-pointer'>Prizes</li>
                <li className=' cursor-pointer'>Timeline</li>
                <li className=' cursor-pointer'>Rules</li>
            </ul>
        </nav>
    )
}

export default Nav