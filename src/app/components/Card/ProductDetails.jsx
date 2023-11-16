import React, { useState } from 'react'

function ProductDetails() {
    const [selectedSize,setSelectedSize] = useState('S')
    const [color,setColor] = useState('1')
  return (
    <div className='mt-[32px]  grid grid-cols-2'>
            <div className=' pr-[36px]'>
                <div className='flex flex-row justify-between '>
                    <span className='text-[#1B2437] text-[16px]'>Size</span>
                    <span className='text-[#EDA3B5] text-right text-[16px] font-bold'>Size Guide</span>
                </div>
                <div className='flex flex-row justify-between mt-[8px]'>

                    <button onClick={() => setSelectedSize('XS')} className={`${selectedSize === 'XS' ? " bg-[#EDA3B5] w-[60px] h-[44px]  text-white" : ""} w-[60px] h-[44px]  border-gray-200 border-2 rounded-md text-[#1B2437] `}>XS</button>
                    <button onClick={() => setSelectedSize('S')}  className={`${selectedSize === 'S' ? " bg-[#EDA3B5] w-[60px] h-[44px]  text-white" : ""} w-[60px] h-[44px]  border-gray-200 border-2 rounded-md text-[#1B2437] `}>S</button>
                    <button onClick={() => setSelectedSize('M')}  className={`${selectedSize === 'M' ? " bg-[#EDA3B5] w-[60px] h-[44px]  text-white" : ""} w-[60px] h-[44px]  border-gray-200 border-2 rounded-md text-[#1B2437] `}>M</button>
                </div>
            </div>
            <div className=' pr-[40px]'>
            
                    <span className='text-[#1B2437] text-[16px]'>Color</span>
                   
               
                <div className='flex flex-row justify-between mt-[10px] pr-[40px] '>
                    <div key='gray'className={`${color== 1 ? " border-slate-600 border-[2px]" : "" }  rounded-md outline-offset-5`}>
                    <button onClick={() => setColor(1)} className='w-[24px] h-[24px] bg-slate-600  rounded-sm m-[5px] items-center flex  '></button>
                    </div>
                   
                    <div  key='teal'className={`${color == 2 ? "border-[#127681] border-[2px]" : ""}   rounded-md outline-offset-5`}>
                    <button  onClick={() => setColor(2)} className='w-[24px] h-[24px] bg-[#127681]  rounded-sm m-[5px] items-center flex  '></button>
                    </div>
                    <div key='green' className={`${color == 3 ? "border-[#32E0C4] border-[2px]" : ""}    rounded-md outline-offset-5  `}>
                    <button  onClick={() => setColor(3)}className='w-[24px] h-[24px] bg-[#32E0C4]  rounded-sm m-[5px] items-center flex  '></button>
                    </div>
                </div>
                
            </div>
            
    </div>
  )
}

export default ProductDetails