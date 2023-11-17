'use client'
import { useContextData } from '@/app/utils/contextData'
import React, { useState } from 'react'


function NavigationComponent() {
    const {headerLocation,setHeaderLocation} = useContextData()
    
  return (
    <div className=' justify-center grid items-center mt-[68px] '> 
       <ul className='  justify-center grid grid-cols-4 place-items-center items-center gap-x-[40px]  '>
        <div>
        <button  onClick={() => setHeaderLocation('Home')} className='text-[24px] font-sans'>
            Home
        </button>
        <span className={`${headerLocation ==='Home' ? "visible" : "invisible" } text-[24px] font-sans flex justify-center`}>
            |
        </span>
        </div>
        <div>
        <button  onClick={() => setHeaderLocation('Shop')} className='text-[24px] font-sans'>
            Shop
        </button>
        <span className={` ${headerLocation ==='Shop' ? "visible" : "invisible" } text-[24px] font-sans flex justify-center `}>
            |
        </span>
        </div>
        <div>
        <button  onClick={() => setHeaderLocation('Blog')} className='text-[24px] font-sans'>
            Blog
        </button>
        <span className={`${headerLocation ==='Blog' ? "visible" : "invisible" } text-[24px] font-sans flex justify-center `}>
            |
        </span>
        </div>
        <div className=''>
        <button  onClick={() => setHeaderLocation('Contact')} className='text-[24px] font-sans'>
            Contact
        </button>
        <span className={`${headerLocation ==='Contact' ? "visible" : "invisible" } text-[24px] font-sans flex justify-center `}>
            |
        </span>
        </div>
        
       
        
       </ul>

       </div>
  )
}

export default NavigationComponent