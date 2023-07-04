import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart,product])
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <ShopContext.Provider value={{cart,addToCart,clearCart}} >
            {children}
        </ShopContext.Provider>
    )
}