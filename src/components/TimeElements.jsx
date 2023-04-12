import React,{useState} from 'react'

const TimeElements = (params) => {
    const [time, settime] = useState(params)
  return (
    <div className='flex flex-col text-white clash-light'>
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