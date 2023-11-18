import React, { useEffect, useState } from 'react'

function ProductDetails({product}) {
    const [selectedSize,setSelectedSize] = useState('')
    const [color,setColor] = useState('')
    useEffect(() => {
      
    }, [selectedSize,color])
    
  return (
    <div className='mt-[32px]  grid grid-cols-2'>
            <div className=' pr-[36px]'>
                <div className='flex flex-row justify-between '>
                    <span className='text-[#1B2437] text-[16px]'>Size</span>
                    <span className='text-[#EDA3B5] text-right text-[16px] font-bold'>Size Guide</span>
                </div>
                <div className='flex flex-row justify-between mt-[8px]'>
                    {product.sizes.map((size,index) => (
                        <button key={index+size} onClick={() => {
                            setSelectedSize(size);
                          }} className={`${selectedSize === size ? " bg-[#EDA3B5] w-[60px] h-[44px]  text-white" : "border-gray-200 border-2"} w-[60px] h-[44px]   rounded-md text-[#1B2437] `}>{size}</button>
                    ))}
                    
                   
                </div>
            </div>
            <div className=' pr-[40px]'>
                    <span className='text-[#1B2437] text-[16px]'>Color</span>
                <div className='flex flex-row justify-between mt-[10px] pr-[40px] '>
   
<div key={'#1B2437'} className={`rounded-md outline-offset-5 ${color === '#1B2437' ? `border-2 border-[#1B2437]` : ""}`}>
    <button onClick={() =>color != '#1B2437' ? setColor('#1B2437') : setColor('')} className={`w-[24px] h-[24px] bg-[#1B2437] rounded-sm m-[5px] items-center flex`}></button>
  </div>
  <div key={'#127681'} className={`rounded-md outline-offset-5 ${color === '#127681' ? `border-2 border-[#127681]` : ""}`}>
    <button onClick={() =>  color != '#127681' ? setColor('#127681') : setColor('')} className={`w-[24px] h-[24px] bg-[#127681] rounded-sm m-[5px] items-center flex`}></button>
  </div>
  <div key={'#32E0C4'} className={`rounded-md outline-offset-5 ${color === '#32E0C4' ? `border-2 border-[#32E0C4]` : ""}`}>
    <button onClick={() => color != '#32E0C4' ? setColor('#32E0C4') : setColor('')} className={`w-[24px] h-[24px] bg-[#32E0C4] rounded-sm m-[5px] items-center flex`}></button>
  </div>
                </div>
                
            </div>
            
    </div>
  )
}

export default ProductDetails