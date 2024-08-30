import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        if (item && item.price && item.id && item.image && item.name) {
            setCartItems(prevItems => [...prevItems, item]);
        } else {
            console.error('Invalid item:', item);
        }
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
