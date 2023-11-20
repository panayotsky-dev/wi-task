import React from 'react'
import { useContextData } from '../utils/contextData';

function Footer() {
const {headerLocation,setHeaderLocation} = useContextData()
const locations = ['Home','Shop','Blog','Contact']
  return (
    <div className='w-full'>
        <div className='bg-white text-black mb-[1px] mt-[52px]  items-center justify-center '> <div className=' justify-center grid items-center mt-[68px] '> 
       <ul className='  justify-center grid grid-cols-4 place-items-center   items-center gap-x-[40px] h-[80px]  '>
        {locations.map((location,index) => (
 <span key={location+index} onClick={() => setHeaderLocation(location)}  className={`${headerLocation == location ? " line-through" : ""} text-[24px] font-sans justify-center items-center cursor-pointer `}>
 {location}
</span>
        ))}
       </ul>

       </div> </div>
    
        <div className="flex items-end w-full  bg-gray-100 ">
          <footer className="w-full text-black-700 bg-white body-font ">
            <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap   pl-[200px]">
              <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <img src='logo.png' alt='logoImage' className='mr-[16px] mt-1 w-[22px] h-[24px]'/>
            <h1 className=' text-[24px] font-sans ' >Clay Shop</h1>
                </a>
                <p className="mt-[24px] text-[16px] text-[#8E8E93]  leading-[24px]">
                  Fashion is a popular 
aesthetic expression at a particular time, place and in a specific context, especially in clothing, footwear, lifestyle, accessories, makeup.
                </p>
              </div>
    
              <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                  <h2 className="mb-3 text-m font-medium tracking-widest text-gray-900 title-font">
                    Hot Links
                  </h2>
                  <nav className="mb-10 list-none">
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        Home
                      </a>
                    </li>
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        Shop
                      </a>
                    </li>
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        Blog
                      </a>
                    </li>
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        Conctact
                      </a>
                    </li>
                  </nav>
                </div>
    
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                  <h2 className="mb-3 text-m font-medium tracking-widest text-gray-900 title-font">
                    More Info
                  </h2>
                  <nav className="mb-10 list-none">
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        How it works
                      </a>
                    </li>
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        About us
                      </a>
                    </li>
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        Decline rules
                      </a>
                    </li>
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        {"Terms & conditions"}
                      </a>
                    </li>
                  </nav>
                </div>
    
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                  <h2 className="mb-3 text-m font-medium tracking-widest text-gray-900 title-font">
                    Customer Care
                  </h2>
                  <nav className="mb-10 list-none">
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        FAQ
                      </a>
                    </li>
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        Terms of use
                      </a>
                    </li>
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mt-3">
                      <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                        Discount system
                      </a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
    
            <div className="bg-gray-200  w-full">
              <div className="flex flex-col items-center justify-between sm:flex-row">
                <div className="container px-5 py-4 justify-start flex ">
                  <p className="text-sm text-gray-700 capitalize xl:text-center">
                    © Clay Shop All rights reserved{" "}
                  </p>
                </div>
    
                <div className="container px-5 py-4 mx-auto justify-end flex">
                  <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a className="text-gray-900 cursor-pointer hover:text-gray-700">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-900 cursor-pointer hover:text-gray-700">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-900 cursor-pointer hover:text-gray-700">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>

    </div>
      );
  
}

export default Footer