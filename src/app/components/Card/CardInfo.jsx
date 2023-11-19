'use client'
import React, { useState } from 'react'

function CardInfo({info,brand,delivery}) {
    const [cardInfo, setCardInfo] = useState('Info')
  return (
    <div className=" mt-[34px]  mr-[36px] ">
            <section id='productinfo' className="flex flex-row justify-between  items-center place-items-center  ">
                <button key='Info' onClick={() => cardInfo != 'Info' ? setCardInfo('Info') : ""} className={` ${cardInfo == "Info" ? "border-[#EDA3B5]  text-[#EDA3B5]"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3   justify-center flex `}>Info</button>
                <button key='Brand' onClick={() => cardInfo != 'Brand' ? setCardInfo('Brand') : ""} className={` ${cardInfo == "Brand" ? "border-[#EDA3B5]  text-[#EDA3B5]"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3  justify-center flex`}>Brand</button>
                <button key='Delivery' onClick={() => cardInfo != 'Delivery' ? setCardInfo('Delivery') : ""} className={`${cardInfo == "Delivery" ? "border-[#EDA3B5]  text-[#EDA3B5]"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3   justify-center flex`}>Delivery</button>
            </section>
           {cardInfo == 'Info' ? (
             <h2 key={'InfoDetails'} className="mt-[32px] text-[#8E8E93] text-[16px] ] items-start p-0 leading-[24px] h-[72px] w-[469px] ">
             {info}
             </h2>
           ) : ""}
           {cardInfo =='Brand' ? (
             <h2 key={'BrandDetails'} className="mt-[32px] text-[#8E8E93] text-[16px] leading-[24px] items-start p-0 h-[72px] w-[469px] ">
             {brand}
             </h2>
           ): ""}
            {cardInfo == 'Delivery' ? (
                 <h2 key={'DeliveryDetails'} className="mt-[32px] text-[#8E8E93] text-[16px] leading-[24px] items-start p-0 h-[72px] w-[469px] ">
                {delivery}
                 </h2>
            ) : ""}
          </div>
  )
}

export default CardInfo