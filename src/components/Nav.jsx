import React from 'react'

const Nav = () => {
    return (
        <nav className='absolute w-full apple text-xl mt-5'>
            <ul className='sm:flex justify-center gap-14 hidden'>
                <li>Sponsors</li>
                <li>Prizes</li>
                <li>Timeline</li>
                <li>Rules</li>
            </ul>
        </nav>
    )
}

export default Nav