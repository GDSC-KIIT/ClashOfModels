import React from 'react'

const LandingPage = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center sm:justify-start flex-col gap-8 sm:flex-row"
            // style={{ background: 'radial-gradient(circle, #FFD969, #FABB03)' }}
        >
            <h1 className='flex flex-col sm:ml-24 text-center sm:text-left'> <span className='text-3xl sm:text-6xl'> Clash Of </span><span className='text-5xl sm:text-9xl impact'>Models</span></h1>
            <div className='sm:absolute bottom-[25vh] left-24 flex gap-8 text-xl'>
                <h2>Strategize</h2>
                <ul className=' list-disc flex gap-8'>
                    <li>
                        <h2>Train</h2>
                    </li>
                    <li>
                        <h2>Race</h2>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LandingPage