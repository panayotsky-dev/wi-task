import React, { useState } from 'react'

function ProductDetails({sizes,colors}) {
    const [selectedSize,setSelectedSize] = useState('S')
    const [color,setColor] = useState('#1B2437')
  return (
    <div className='mt-[32px]  grid grid-cols-2'>
            <div className=' pr-[36px]'>
                <div className='flex flex-row justify-between '>
                    <span className='text-[#1B2437] text-[16px]'>Size</span>
                    <span className='text-[#EDA3B5] text-right text-[16px] font-bold'>Size Guide</span>
                </div>
                <div className='flex flex-row justify-between mt-[8px]'>
                    {sizes.map((size,index) => (
                        <button key={index+size} onClick={() => {
                            setSelectedSize(size);
                          }} className={`${selectedSize === size ? " bg-[#EDA3B5] w-[60px] h-[44px]  text-white" : "border-gray-200 border-2"} w-[60px] h-[44px]   rounded-md text-[#1B2437] `}>{size}</button>
                    ))}
                    
                   
                </div>
            </div>
            <div className=' pr-[40px]'>
                    <span className='text-[#1B2437] text-[16px]'>Color</span>
                <div className='flex flex-row justify-between mt-[10px] pr-[40px] '>
                {colors.map((pickedColor,index) => (
                        <div key={pickedColor+index} className={`rounded-md outline-offset-5 ${color == pickedColor ? `border-2 border-[${pickedColor}]` : ""}`}>
                        <button onClick={() => setColor(pickedColor)} className={`w-[24px] h-[24px] bg-[${pickedColor}] rounded-sm m-[5px] items-center flex`}></button>
                      </div>
                    ))}
                </div>
                
            </div>
            
    </div>
  )
}

export default ProductDetails