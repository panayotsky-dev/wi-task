'use client'
import React, { useState } from 'react'

function CardInfo() {
    const [cardInfo, setCardInfo] = useState('Info')
  return (
    <div className="  mr-[36px] mt-[34px]">
            <section className="flex flex-row justify-between  items-center place-items-center ">
                <button onClick={() => cardInfo != 'Info' ? setCardInfo('Info') : ""} className=" border-b-2 w-1/3  border-[#EDA3B5]  text-[#EDA3B5] justify-center flex">Info</button>
                <button onClick={() => cardInfo != 'Brand' ? setCardInfo('Brand') : ""} className=" border-b-2 w-1/3  border-gray-200 text-[#1B2437] justify-center flex">Brand</button>
                <button onClick={() => cardInfo != 'Delivery' ? setCardInfo('Delivery') : ""} className=" border-b-2 w-1/3  border-gray-200 text-[#1B2437] justify-center flex">Delivery</button>
            </section>
           {cardInfo == 'Info' ? (
             <h2 className="mt-[32px] text-[#8E8E93] text-[16px] leading-[24px] items-start p-0">
             Dress with tulle and collar Peter Pan from REDValentino 
 (Red Valentino). Peter Pan collar, tulle panels, sleeveless model, 
 concealed back zipper and pleated skirt. Black colour.
             </h2>
           ) : ""}
           {cardInfo =='Brand' ? (
             <h2 className="mt-[32px] text-[#8E8E93] text-[16px] leading-[24px] items-start p-0">
             Brand with tulle and collar Peter Pan from REDValentino 
 (Red Valentino). Peter Pan collar, tulle panels, sleeveless model, 
 concealed back zipper and pleated skirt. Black colour.
             </h2>
           ): ""}
            {cardInfo == 'Delivery' ? (
                 <h2 className="mt-[32px] text-[#8E8E93] text-[16px] leading-[24px] items-start p-0">
                 Delivery with tulle and collar Peter Pan from REDValentino 
     (Red Valentino). Peter Pan collar, tulle panels, sleeveless model, 
     concealed back zipper and pleated skirt. Black colour.
                 </h2>
            ) : ""}
          </div>
  )
}

export default CardInfo