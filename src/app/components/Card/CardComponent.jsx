'use client'
import React, { useState } from "react";
import ReviewStats from "./ReviewStats";
import CardTitle from "./CardTitle";
import CardInfo from "./CardInfo";
import ProductDetails from "./ProductDetails";
import ProductStats from "./ProductStats";
import {motion} from 'framer-motion'
import { useContextData } from "@/app/utils/contextData";

function CardComponent({product}) {
  
  console.log('Product',{product})
    const [selectedImage,setSelectedImage] = useState(0)
  return (
    <div className=" xl:w-[1140px] justify-center  flex bg-white mt-[62px] text-[#1B2437] sm:w-fit md:h-full md:w-fit     md:max-h-[660px] rounded-xl">
      
      <div className="grid md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 ">
        <div className=" flex  flex-col justify-center pl-[40px]  pb-[40px] ">
          <div className="mt-[40px] px-[156px] justify-center items-center flex-col flex">
            <img 
              src={product.thumbnails[selectedImage]}
              alt="dres1"
              className="object-cover w-[280px] h-[436px]"
            />
            <div className="flex flex-row mt-[56px]  ">
              {product.thumbnails.map((image,index) => (
                <motion.div      
              initial={{opacity:0,x:-100}} 
              animate={{opacity:1,x:0}}      
              transition={{delay:0.1}} onClick={() => setSelectedImage(index)} className={`${selectedImage === index ? "-mt-4 border-[#EDA3B5] border-2  " : "" } w-[88px] h-[88px]  rounded-md flex   justify-center items-center  mr-[24px]`}>
                <motion.img whileHover={{scale:1.1}}
                  src={image}
                  className="w-[46px] h-[72px] flex-shrink-0 object-cover rounded-md "
                />
              </motion.div>
              ))}             

            </div>
          </div>

          <div></div>
        </div>
        <div className="px-[32px] ">
          <div className="flex flex-row justify-between items-center py-[32px]">
            <section className="px-[21px] pt-[6px] pb-[8px] text-[14px] text-[#1B2437] bg-neutral-300 rounded-full font-semibold">
              Popular
            </section>

            <div>
              <div className=" bg-pink-100 rounded-full p-2  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.7058 20.8998L11.7065 20.9003C11.7788 20.9597 11.8823 21 12 21C12.1177 21 12.2215 20.9596 12.2937 20.9004L12.2939 20.9002C13.2713 20.0996 14.2122 19.3485 15.038 18.6895C17.4792 16.7408 19.4882 15.1329 20.8709 13.5701L20.8709 13.57C22.381 11.8633 23 10.3492 23 8.75591C23 7.15508 22.4161 5.70786 21.3836 4.65873C20.3387 3.59726 18.8949 3 17.2956 3C16.1199 3 15.0567 3.3443 14.1114 4.02909L14.1113 4.02913C13.6296 4.37804 13.1869 4.80962 12.7914 5.32162C12.602 5.56682 12.3097 5.71039 11.9999 5.71036C11.6901 5.71033 11.3978 5.5667 11.2085 5.32147C10.8133 4.8097 10.3705 4.37811 9.8888 4.02909L11.7058 20.8998ZM11.7058 20.8998C10.7323 20.1024 9.79427 19.3536 8.97093 18.6964M11.7058 20.8998L8.97093 18.6964M8.97093 18.6964L8.97064 18.6962L8.97093 18.6964ZM2.61663 4.65873C3.66151 3.59725 5.1051 3 6.70459 3C7.88026 3 8.94346 3.34428 9.88873 4.02904L2.61663 4.65873Z"
                    stroke="#EDA3B5"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <CardTitle title={product.title} />

          <ReviewStats />
          <CardInfo  info={product.info} brand={product.brand} delivery={product.delivery}/>
          <ProductDetails sizes={product.sizes} colors={product.colors} />
          <ProductStats />
          
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
