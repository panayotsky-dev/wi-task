'use client'
import React, { createContext, useState, useContext } from 'react';
import { productData } from './data';

const ContextData = createContext();
export const useContextData = () => useContext(ContextData);

export function ContextProvider({children}) {
    const [cartCount,setCartCount] = useState(0);    
    const [cartProducts,setCartProducts] = useState([])
    const [allProducts,setAllProducts] = useState(productData)
    const [pickedColor,setPickedColor] = useState('')
    const [pickedSize,setPickedSize] = useState('')
    const [amount,setAmount] = useState(0)
    const [headerLocation,setHeaderLocation] = useState('Home')
    const [selectedProduct,setSelectedProduct] = useState(null)
    
    const pickProduct = (id) => {
        const selected = allProducts.filter((product) => product.id === id)[0];
        if (selected) {
          setSelectedProduct(selected);
        }
      };

    const addToCart = (productId) =>{
        setCartCount((prevCount) => prevCount +1);
        setCartProducts((prevCart) => [...prevCart,productId]);        
    }
    const addReviewToProduct = (productId, review) => {
        setAllProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId
              ? {
                  ...product,
                  reviews: [...product.reviews, review],                  
                  score: (product.score * product.reviews.length + review.rating) / (product.reviews.length + 1),
                }
              : product
          )
        );
      };


 return (
    <ContextData.Provider value={{pickProduct,selectedProduct,addToCart,addReviewToProduct,cartCount,cartProducts,allProducts,pickedColor,setPickedColor,pickedSize,setPickedSize,amount,headerLocation,setHeaderLocation}}>
        {children}
    </ContextData.Provider>
    
 )
 }
