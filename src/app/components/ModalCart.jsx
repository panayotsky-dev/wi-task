import React, { useState } from 'react'
import { useContextData } from '../utils/contextData'
import {motion} from 'framer-motion'

function ModalCart({ name,image,  
    }) {
        const {toggleModal} = useContextData()
        const [cartNav,setCartNav] = useState('Cart')
  return (
  <div   className='absolute inset-0 flex items-center justify-center  z-10 bg-inherit'>
    <div className=" w-full  max-w-[1140px] rounded-md bg-white mt-4  ">
            <section id='cartNav' className="flex flex-row justify-between   items-center place-items-center  ">
                <button key='Cart' onClick={() => cartNav != 'Cart' ? setCartNav('Cart') : ""} className={` ${cartNav == "Cart" ? "border-[#EDA3B5]  text-[#EDA3B5]"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3   justify-center flex `}>Cart</button>
                <button key='Checkout' onClick={() => cartNav != 'Checkout' ? setCartNav('Checkout') : ""} className={` ${cartNav == "Checkout" ? "border-[#EDA3B5]  text-[#EDA3B5]"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3  justify-center flex`}>Checkout</button>
                <button key='Shipping' onClick={() => cartNav != 'Shipping' ? setCartNav('Shipping') : ""} className={`${cartNav == "Shipping" ? "border-[#EDA3B5]  text-[#EDA3B5]"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3   justify-center flex`}>Shipping</button>
                <button key='Done' onClick={() => cartNav != 'Done' ? setCartNav('Done') : ""} className={`${cartNav == "Done" ? "border-[#EDA3B5]  text-[#EDA3B5]"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3   justify-center flex`}>Done</button>
            </section>
            
           {cartNav == 'Cart' ? (
             <section key={'cartDetails'} className="mt-[32px] text-[#8E8E93] text-[16px] ] items-start p-0 leading-[24px]  h-fit grid grid-cols-2 border-b-2  mx-[32px]">
             <div className=' w-full justify-start  '>
              <div className='py-[32px] flex flex-row '>
                <img src='/product/dres1.png' className='w-[112px] h-[112px] mr-[32px] rounded-md ' />
                <div className='flex flex-col justify-between'>
                <span className='text-[#1B2437] text-[34px] font-sans tracking-[0.4px]'>Gucci Leather belt</span>
                <div className='flex flex-row items-center'>
                <span className='text-[#1B2437] text-[16px] mr-[8px] '>Size</span>
                <span className='text-[#8E8E93] text-[16px] leading-[24px]'>70 cm</span>
                </div>
                <div className='flex flex-row items-center'>
                <span className='text-[#1B2437] text-[16px] mr-[8px]'>Color</span>
                <button  className={`w-[16px] h-[16px] bg-[#1B2437] rounded-sm m-[5px] items-center flex`}></button>
                <button  className={`w-[16px] h-[16px] bg-[#F3C623] rounded-sm m-[5px] items-center flex`}></button>
                </div>
                </div>
                
                
              </div>
             </div>
             <div>
              <h1>text</h1>
             </div>
             </section>
           ) : ""}
           {cartNav =='Checkout' ? (
             <h2 key={'CheckoutDetails'} className="mt-[32px] text-[#8E8E93] text-[16px]  justify-center w-full flex leading-[24px] items-start p-0 h-[72px]">
             - Checkout - 
             </h2>
           ): ""}
              {cartNav =='Shipping' ? (
             <h2 key={'ShippingDetails'} className="mt-[32px] text-[#8E8E93] text-[16px]  justify-center w-full flex leading-[24px] items-start p-0 h-[72px] ">
             - Shipping - 
             </h2>
           ): ""}
              {cartNav =='Done' ? (
             <h2 key={'DoneDetails'} className="mt-[32px] text-[#8E8E93] text-[16px]  justify-center w-full flex leading-[24px] items-start p-0 h-[72px]  ">
             - Done - 
             </h2>
           ): ""}
           <section id='totalAmount ' className='w-full flex justify-end bg-[#F6F6F6]'>
                  <h1 className=' justify-end items-center text-black  '>Total amount</h1>
                </section>
                <section className="w-full justify-between flex text-black">
                <motion.button onClick={toggleModal} whileTap={{scale:0.95}} className=' border rounded-2xl w-[160px] h-[52px] items-center bg-[#EDA3B5] text-white font-semibold text-[20px]'>Shop Now</motion.button>
        <motion.button whileTap={{scale:0.95}}  className=' border-[#EDA3B5] border-2 rounded-2xl w-[160px] h-[52px] items-center  text-[#EDA3B5] font-semibold text-[20px]'>Add to cart</motion.button>
                </section>
          </div>
          </div>
          
  )
}

export default ModalCart