import React from 'react'

const TimeElements = (params) => {
  return (
    <div className='flex flex-col text-white satoshi'>
        <span>
            {params.time}
        </span>
        <span>
            {params.desc}
        </span>
    </div>
  )
}

export default TimeElements