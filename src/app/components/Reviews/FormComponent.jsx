'use client'
import { useContextData } from '@/app/utils/contextData';
import React, { useState } from 'react'

function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { addReviewToProduct, pickedProduct } = useContextData();
  const handleAddReview = (e) => {
    e.preventDefault();

    const newReview = {
      name,
      email,
      rating: 4, 
      message,
    };

    addReviewToProduct(pickedProduct, newReview);   
    setName('');
    setEmail('');
    setMessage('');
  };

    
 
  return (
    <>
    <form className=' max-w-full text-[#1B2437] flex flex-col mt-[14px]' onSubmit={handleAddReview}>
        <div className='grid grid-cols-2 gap-x-[38px] justify-start w-full'>
        <div className='items-center'>
        <label for="first-name" class=" text-sm  leading-6 ">Name</label>
         <input onChange={(e) => setName(e.target.value)} type="text"  placeholder='Type name...' className=" mt-[7px] w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6" />
         </div>
        
         <div>
        <label for="first-name" class=" text-sm  leading-6 ">Email</label>
         <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Type email...'  className=" mt-[7px] w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
         </div>
        </div>
        <div className='mt-[41px] '>
        <label className=' mt-[111px] text-[16px] '>
          Message  
        </label>
        <input onChange={(e) => setMessage(e.target.value)} placeholder="Type message..." className=' mt-[7px] w-full    border-0 px-3.5   ring-1 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 items-start flex  pb-[151px] py-[17px] rounded-md' />
       
        </div>
        <div className=' justify-end flex mt-[32px]'>
        <button type="submit" className=' border-[#EDA3B5] border-2 rounded-2xl w-[160px] h-[58px] items-center  text-[#EDA3B5] font-semibold text-[20px] '>Add Review</button>
        </div>
        
    </form>
    </>
  )
}

export default FormComponent