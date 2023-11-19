'use client'
import Image from 'next/image'
import Header from './components/Header'
import CardComponent from './components/Card/CardComponent'
import ReviewsComponent from './components/Reviews/ReviewsComponent'
import { ContextProvider, useContextData } from './utils/contextData'
import Footer from './components/Footer'
import OtherComponent from './components/OtherComponent'
import { useState } from 'react'
import ModalCart from './components/ModalCart'
import Modal from 'react-modal'


export default function Home() {
  const { allProducts,headerLocation,pickProduct,selectedProduct,showModal } = useContextData();
  
  const selected = allProducts.filter((product) => product.id === 1)[0];

  let mainContent;

  switch (headerLocation) {
    case 'Home':
      mainContent = (
        <>
          <CardComponent product={selected} />
          <ReviewsComponent />
        </>
      );
      break;

    
    case 'Shop':
      mainContent = <OtherComponent title='- Shop -' />;
      break;

    case 'Blog':
      mainContent = <OtherComponent title='- Blog -' />;
      break;

    case 'Contact':
      mainContent = <OtherComponent title='- Contact -' />;
      break;

    default:
      
      mainContent = null;
      break;
  }
  
  return (
    
 
    <main className="flex min-h-screen flex-col items-center bg-[#F6F6F6]">
       
      <Header />
      <>
      {showModal && (
        <ModalCart
          name={selected.title}
          image={selected.image}
          
        />
        )}
      {mainContent}
      </>
      <Footer />
    </main>
    
    
  )
}
