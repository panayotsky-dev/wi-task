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

    const addToCart = (preductId) =>{
        setCartCount((prevCount) => prevCount +1);
        setCartProducts((prevCart) => [...prevCart,preductId]);        
    }


 return (
    <ContextData.Provider value={{addToCart,cartCount,cartProducts,allProducts,pickedColor,setPickedColor,pickedSize,setPickedSize,amount,headerLocation,setHeaderLocation}}>
        {children}
    </ContextData.Provider>
    
 )
 }
