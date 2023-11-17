import React from 'react'
import ReviewStats from '../Card/ReviewStats'

function Reviews() {
  return (
    <div className='mt-[50px] bg-[#E5E5EA] text-black h-[195px] rounded-md flex flex-col pl-[17px]'>
        <span className='pt-[18px] text-[#8E8E93] text-[24px]'>{"John Doe<john.doe@gmail.com>"}</span>
        <ReviewStats />
        <span className='text-[16px] text-[#8E8E93] mt-[20px]'>Example review</span>
    </div>
  )
}

export default Reviews