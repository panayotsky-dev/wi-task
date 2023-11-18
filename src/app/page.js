'use client'
import Image from 'next/image'
import Header from './components/Header'
import CardComponent from './components/Card/CardComponent'
import ReviewsComponent from './components/Reviews/ReviewsComponent'
import { ContextProvider, useContextData } from './utils/contextData'

export default function Home() {
  const { allProducts,pickProduct,selectedProduct } = useContextData();


  return (
    
 
    <main className="flex min-h-screen flex-col items-center  bg-[#F6F6F6] ">
       
      <Header />
      <CardComponent  product={allProducts}/>
      <ReviewsComponent />
      
    </main>
    
    
  )
}
