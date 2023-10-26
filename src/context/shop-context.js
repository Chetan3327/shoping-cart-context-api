import { createContext, useState } from "react"
import PRODUCTS from "../products"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const getTotal = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * Number(itemInfo.price);
          }
        }
        return totalAmount;
      };
    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    const addToCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: Number(prev[id])+1}))
    }
    const removeFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id]-1}))
    }
    const updateCart = (newAmount, id) => {
        setCartItems((prev) => ({...prev, [id]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCart, getTotal}

    console.log(cartItems);

    return(
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}