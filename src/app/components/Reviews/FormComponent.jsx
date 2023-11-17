'use client'
import React from 'react'

function FormComponent() {
  return (
    <>
    <form className=' max-w-full text-[#1B2437] flex flex-col mt-[14px]'>
        <div className='grid grid-cols-2 gap-x-[38px] justify-start w-full'>
        <div className='items-center'>
        <label for="first-name" class=" text-sm  leading-6 ">Name</label>
         <input type="text"  placeholder='Type name...' className=" mt-[7px] w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
         </div>
        
         <div>
        <label for="first-name" class=" text-sm  leading-6 ">Email</label>
         <input type="email" placeholder='Type email...'  className=" mt-[7px] w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
         </div>
        </div>
        <div className='mt-[41px] '>
        <label className=' mt-[111px] text-[16px] '>
          Message  
        </label>
        <input placeholder="Type message..." className=' mt-[7px] w-full    border-0 px-3.5   ring-1 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 items-start flex  h-[186px]  rounded-md' />
       
        </div>
        <div className=' justify-end flex mt-[32px]'>
        <button className=' border-[#EDA3B5] border-2 rounded-2xl w-[160px] h-[58px] items-center  text-[#EDA3B5] font-semibold text-[20px] '>Add Review</button>
        </div>
        
    </form>
    </>
  )
}

export default FormComponent