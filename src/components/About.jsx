import React from 'react'

const About = () => {
  return (
    <div className='h-screen w-full'
    style={{ background: 'radial-gradient(circle, #030302,  #141401)' }}
    >
    <img src="./aboutpic.svg" className=' h-[35vw] w-[35vw] absolute top-[120vh] left-16' alt="" />
    <div className='text-right flex flex-col gap-1'>
    <span className='text-white apple text-3xl absolute top-[110vh] right-20'>What is </span>
    <h2 className='headings impact absolute top-[115vh] right-16'>
        Clash of Models?
    </h2>
    </div>
    </div>
  )
}

export default About