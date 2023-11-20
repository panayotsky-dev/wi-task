import React, { useState } from 'react'
import { useContextData } from '../utils/contextData'
import {motion} from 'framer-motion'

function ModalCart({ name,image,  
    }) {
        const {toggleModal} = useContextData()
        const [cartNav,setCartNav] = useState('Cart')
  return (
  <div   className='absolute inset-0 flex items-center justify-center  z-10 bg-inherit'>
    <div className=" w-full  max-w-[1140px] rounded-md bg-white  ">
            <section id='cartNav' className="flex flex-row justify-between   items-center place-items-center   ">
                <button key='Cart' onClick={() => cartNav != 'Cart' ? setCartNav('Cart') : ""} className={` ${cartNav == "Cart" ? "border-[#EDA3B5]  text-[#EDA3B5] font-bold"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3  text-[20px]  justify-center flex py-[16px] `}>Cart</button>
                <button key='Checkout' onClick={() => cartNav != 'Checkout' ? setCartNav('Checkout') : ""} className={` ${cartNav == "Checkout" ? "border-[#EDA3B5]  text-[#EDA3B5] font-bold "  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3  text-[20px] justify-center flex py-[16px]`}>Checkout</button>
                <button key='Shipping' onClick={() => cartNav != 'Shipping' ? setCartNav('Shipping') : ""} className={`${cartNav == "Shipping" ? "border-[#EDA3B5]  text-[#EDA3B5] font-bold "  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3  text-[20px]  justify-center flex py-[16px]`}>Shipping</button>
                <button key='Done' onClick={() => cartNav != 'Done' ? setCartNav('Done') : ""} className={`${cartNav == "Done" ? "border-[#EDA3B5]  text-[#EDA3B5]  font-bold"  : "border-[#EFEFF4]  text-[#1B2437] "} border-b-2 w-1/3 text-[20px]  justify-center flex py-[16px]`}>Done</button>
            </section>
            
           {cartNav == 'Cart' ? (
             <section key={'cartDetails'} className="mt-[32px] text-[#8E8E93] text-[16px] ] items-start p-0 leading-[24px]  h-full ">
              <div className='grid grid-cols-2 border-b-2  mx-[32px] pb-[32px] '>
              <div className=' w-full justify-start  '>
              <div className=' flex flex-row '>
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
             <div className='items-center ml-[101px] flex flex-row'>
              <div className='flex flex-row items-center'>
                <button className='rounded-2xl w-[44px] h-[44px] border-2 mr-[16px]'><img src='/icons/minus.svg'  className=' pl-[8px] '/></button>
                <span className='mr-[16px] text-[#D1D1D6] text-[20px] font-bold '>1</span>
                <button className='rounded-2xl w-[44px] h-[44px] border-2 mr-[16px]'><img src='/icons/plus.svg'  className=' pl-[8px] '/></button>
              </div>
              <div className=' w-full justify-end flex  '>
                <div className='w-[135px]  justify-between flex  '>
                  <div className='text-[#1B2437]  '>
                  <span className=' text-[24px] mr-[7px] items-center'>$</span>
                  <span className='text-[34px] tracking-[0.4px] font-sans '>32</span>
                  </div>
                  <button><img src='/icons/cancel.svg' /></button>
                </div>
                
              </div>
              
             </div>
             
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
           <section id='totalAmount ' className='w-full flex justify-end bg-[#F6F6F6] text-[#1B2437]'>
                  <div className=' flex  w-full ml-[816px] '>
                  <span className='  items-center text-[#1B2437] py-[11px] text-[24px] font-sans mr-[16px]  '>Total amount</span>
                  <span className=' text-[24px] mr-[7px] items-center flex'>$</span>
                  <span className='text-[34px] tracking-[0.4px] font-sans '>32</span>
                  
                  </div>
                </section>
                <section className="w-full justify-between flex text-black pt-[24px] pb-[22px] items-center ">
                <motion.button onClick={toggleModal} whileTap={{scale:0.95}} className=' border rounded-2xl w-[160px] h-[52px] items-center bg-[#EDA3B5] text-white font-semibold text-[20px]'>Shop Now</motion.button>
        <motion.button whileTap={{scale:0.95}}  className=' border-[#EDA3B5] border-2 rounded-2xl w-[160px] h-[52px] items-center  text-[#EDA3B5] font-semibold text-[20px]'>Add to cart</motion.button>
                </section>
          </div>
          </div>
          
  )
}

export default ModalCart