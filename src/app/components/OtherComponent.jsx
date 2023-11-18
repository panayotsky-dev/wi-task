'use client'
import React from 'react'
import {motion} from 'framer-motion'

function OtherComponent({title}) {
  return (
    <div className=" w-[1140px] h-[660px] justify-center items-center flex bg-white mt-[62px] text-[#1B2437]     rounded-xl">
      
    
    <motion.span key={title}  animate={{opacity:1,x:0}}
        initial={{opacity:0,x:-400}}
        exit={{opacity:1,x:0}}
        transition={{delay:0.2}}
    className='text-2xl text-black
    '>{title}</motion.span>
  </div>
  )
}

export default OtherComponent