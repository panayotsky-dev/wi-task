'use client'
import React, { useState } from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'
import { IoBagOutline } from "react-icons/io5"
import { IoBagSharp } from "react-icons/io5"
import { HiMagnifyingGlass } from "react-icons/hi2";
import NavigationComponent from './Header/NavigationComponent'
import {motion} from 'framer-motion'
import { useContextData } from '../utils/contextData'

function Header() {
 const socialIcons = [
    {
        id:1,
        alt:'facebookIcon',
        image:'/Icons/facebook_icn_1.png',
        link:'facebook.com'

    },
    {
        id:2,
        alt:'instagramIcon',
        image:'/Icons/instagram_icn _1.png',
        link:'instagram.com'

    },
    {
        id:3,
        alt:'twitterIcon',
        image:'/Icons/twitter_icn_1.png',
        link:'twitter.com'

    },
 ]

 const {cartCount} = useContextData()

  return (
    <div className='w-full bg-white text-black  h-full top-0  '>
       <div className='px-[40px] mt-[19px] justify-between text-black flex'>
        <motion.div 
         initial={{opacity:1,x:-300,}}
         animate={{ opacity: 1,x:0, }}
         transition={{type:"spring",stiffness:100,}}
         
          className='flex flex-row items-center justify-center '>
            <img src='logo.png' alt='logoImage' className='mr-[16px] mt-1 w-[22px] h-[24px]'/>
            <h1 className=' text-[24px] font-sans ' >Clay Shop</h1>
        </motion.div>
        <motion.div 
         initial={{opacity:1,y:-300,}}
         animate={{ opacity: 1,y:0, }}
         transition={{type:"spring",stiffness:100,}}
         whileTap={{scale:0.95}}
        className='grid  grid-cols-3 gap-x-[40px] items-center'>
            <a  href="www.instagram.com" target='_blank'><img src='/Icons/instagram_icn _1.png' /></a>
            <a  href="www.twitter.com" target='_blank'> 
        <img src='/Icons/twitter_icn_1.png' /></a>
        <a href="www.facebook.com" target='_blank'>
            <img src='/Icons/facebook_icn_1.png' /></a>
            
            
        </motion.div>
        <motion.div
         initial={{opacity:1,x:300,}}
         animate={{ opacity: 1,x:0, }}
         transition={{type:"spring",stiffness:100,}}
         
          className='grid grid-cols-2 gap-[24px] justify-between items-center'>
            <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.95}}><HiMagnifyingGlass /></motion.div>
            {cartCount == 0 ? (
                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.95}}><IoBagOutline /></motion.div>
            ):(<div className='items-center justify-center flex flex-row -ml-4'>
                <IoBagOutline />
                <motion.div className="rounded-full bg-[#EDA3B5] w-6 ml-2  flex justify-center items-center text-center"
                animate={{opacity:1,x:0,y:0}}
                initial={{opacity:0,y:-200,}}
                
                exit={{opacity:0,y:100,x:100}}>
                        <p className='text-sm text-white font-semibold mx-1 '
                        >{cartCount}</p>
                        </motion.div>
            </div>)}
            
            
        </motion.div>
       </div>
       <NavigationComponent />
       

    </div>
  )
}

export default Header