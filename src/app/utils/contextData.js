'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import { productData } from './data';

const ContextData = createContext();
export const useContextData = () => useContext(ContextData);

export function ContextProvider({children}) {
    const [cartCount,setCartCount] = useState(0);    
    const [cartProducts,setCartProducts] = useState([])
    const [allProducts,setAllProducts] = useState(productData)
    const [pickedColor,setPickedColor] = useState('')
    const [size,setSize] = useState('')
    const [amount,setAmount] = useState(0)
    const [headerLocation,setHeaderLocation] = useState('Home')
    const [selectedProduct,setSelectedProduct] = useState(1)
    const [showModal, setShowModal] = useState(false)
    
    useEffect(() => {
      saveDatatoLocalStorage(cartProducts);
    }, [cartProducts])
    const saveDatatoLocalStorage = (cart) => {
      sessionStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('cart', JSON.stringify(cart));
    };
  
    const pickProduct = (id) => {
        const selected = allProducts.filter((product) => product.id === id)[0];
        if (selected) {
          setSelectedProduct(selected);
        }
      };

      const addToCart = (id, size, pickedColor) => {       
        const selectedProduct = allProducts.find((product) => product.id === id);
        console.log(id,size,pickedColor)
        if (selectedProduct) {
          const { image, price, title } = selectedProduct;
            console.log(image)
          const existingProduct = cartProducts.find(
            (item) =>
              item.id === id &&
              item.size === size &&
              item.color === pickedColor
          );
    
          if (existingProduct) {           
            setCartProducts((prevCart) => {
              const newCart = [...prevCart];
              const existingProductIndex = newCart.indexOf(existingProduct);
              newCart[existingProductIndex].quantity += 1;
              return newCart;
            });
          } else {           
            setCartProducts((prevCart) => [
              ...prevCart,
              { id, size, color: pickedColor, image, price, title, quantity: 1 },
            ]);            
            setCartCount(cartProducts.length +1);
          }
        }
        
      };
      const removeFromCart = (productId, size, color) => {
        
        const updatedCart = cartProducts.filter(
          (item) =>
            item.id !== productId || item.size !== size || item.color !== color
        );
            setCartProducts(updatedCart);
               setCartCount(updatedCart.length);
      };
     
    
    
    
    

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
        console.log('Added Review')
      };

      function toggleModal() {
        setShowModal(!showModal);
      }


 return (
    <ContextData.Provider value={{setCartProducts: (cart) => {
      setCartProducts(cart);
      saveDatatoLocalStorage(cart);
    },removeFromCart,toggleModal,showModal,pickProduct,selectedProduct,addToCart,addReviewToProduct,cartCount,cartProducts,allProducts,pickedColor,setPickedColor,size,setSize,amount,headerLocation,setHeaderLocation,setCartProducts}}>
        {children}
    </ContextData.Provider>
    
 )
 }
