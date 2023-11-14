import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'
import { IoBagOutline } from "react-icons/io5"
import { IoBagSharp } from "react-icons/io5"
import { HiMagnifyingGlass } from "react-icons/hi2";

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

  return (
    <div className='w-full bg-white text-black h-[180px] px-[40px]'>
       <div className='mt-[19px] justify-between text-black flex'>
        <div className='flex flex-row items-center justify-center '>
            <img src='logo.png' alt='logoImage' className='mr-[16px] mt-1 w-[22px] h-[24px]'/>
            <h1 className=' text-[24px] font-sans ' >Clay Shop</h1>
        </div>
        <div className='grid  grid-cols-3 gap-x-[40px] items-center'>
            <img src='/Icons/facebook_icn_1.png' />
            <img src='/Icons/instagram_icn _1.png' />
            <img src='/Icons/twitter_icn_1.png' />
        </div>
        <div className='grid grid-cols-2 gap-[24px] justify-between items-center'>
            <HiMagnifyingGlass />
            <IoBagOutline />
        </div>
       </div>

    </div>
  )
}

export default Header