import React, { createContext, useState } from 'react';
import { ItemsList } from '../Items/itemsList';


export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {}
//     for (let i = 1; i < ItemsList.length + 1; i++) {
//         cart[i] = 0;
//     }
//     return cart;
// }

export const ShopContextProv = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = ItemsList.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }

        return totalAmount;
    }


    //little icon next to a cart, showing how many items in the cart!!!!!!!!!!!!!!!!!

    // const getTotalItems = () => {
    //     let totalItems = 0;
    //     Object.values(cartItems).forEach((item) => {
    //         if (item.quantity > 0) {
    //             totalItems += item.quantity;
    //         }
    //     });
    
    //     return totalItems;
    // }


    const addToCart = (itemId, itemPrice ) => {
        const existingItem = cartItems.find((item) => item.id === itemId);

        if (existingItem) {
            // Item already exists, update quantity
            setCartItems(
            cartItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
            );
        } else {
            // Item doesn't exist, add it to the array
            setCartItems([
            ...cartItems,
            { id: itemId, price: itemPrice, quantity: 1 }
            ]);
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev, [itemId]: prev[itemId] - 1}))
    };

    const manualCartItem = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, manualCartItem, getTotalAmount};

    
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
