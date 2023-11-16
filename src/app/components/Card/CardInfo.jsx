'use client'
import React, { useState } from 'react'

function CardInfo() {
    const [cardInfo, setCardInfo] = useState('Info')
  return (
    <div className=" mt-[34px]  mr-[36px] ">
            <section className="flex flex-row justify-between  items-center place-items-center  ">
                <button onClick={() => cardInfo != 'Info' ? setCardInfo('Info') : ""} className={` ${cardInfo == "Info" ? "border-[#EDA3B5]  text-[#EDA3B5]"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3   justify-center flex `}>Info</button>
                <button onClick={() => cardInfo != 'Brand' ? setCardInfo('Brand') : ""} className={` ${cardInfo == "Brand" ? "border-[#EDA3B5]  text-[#EDA3B5]"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3  justify-center flex`}>Brand</button>
                <button onClick={() => cardInfo != 'Delivery' ? setCardInfo('Delivery') : ""} className={`${cardInfo == "Delivery" ? "border-[#EDA3B5]  text-[#EDA3B5]"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3   justify-center flex`}>Delivery</button>
            </section>
           {cardInfo == 'Info' ? (
             <h2 key={'InfoDetails'} className="mt-[32px] text-[#8E8E93] text-[16px] ] items-start p-0 leading-[24px] h-[72px] w-[469px] ">
             Dress with tulle and collar Peter Pan from REDValentino 
 (Red Valentino). Peter Pan collar, tulle panels, sleeveless model, 
 concealed back zipper and pleated skirt.
             </h2>
           ) : ""}
           {cardInfo =='Brand' ? (
             <h2 key={'BrandDetails'} className="mt-[32px] text-[#8E8E93] text-[16px] leading-[24px] items-start p-0 h-[72px] w-[469px] ">
             Brand with tulle and collar Peter Pan from REDValentino 
 (Red Valentino). Peter Pan collar, tulle panels, sleeveless model, 
 concealed back zipper and pleated skirt. Black colour.
             </h2>
           ): ""}
            {cardInfo == 'Delivery' ? (
                 <h2 key={'DeliveryDetails'} className="mt-[32px] text-[#8E8E93] text-[16px] leading-[24px] items-start p-0 h-[72px] w-[469px] ">
                 Delivery with tulle and collar Peter Pan from REDValentino 
     (Red Valentino). Peter Pan collar, tulle panels, sleeveless model, 
     concealed back zipper and pleated skirt. Black colour.
                 </h2>
            ) : ""}
          </div>
  )
}

export default CardInfo