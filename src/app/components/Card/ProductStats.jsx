import React from 'react'

function ProductStats() {
  return (
    <div className='mt-[42px] justify-between flex flex-row  pr-[36px]'>
        <span className='text-[#1B2437] text-[24px] font-sans  leading-0 -mr-4 items-end flex'>$</span><span className=' text-[#1B2437] text-[34px] font-sans items-center'>1315</span>
        <button className=' border rounded-2xl w-[160px] h-[52px] items-center bg-[#EDA3B5] text-white font-semibold text-[20px]'>Shop Now</button>
        <button className=' border-[#EDA3B5] border-2 rounded-2xl w-[160px] h-[52px] items-center  text-[#EDA3B5] font-semibold text-[20px]'>Add to cart</button>
    </div>
  )
}

export default ProductStats