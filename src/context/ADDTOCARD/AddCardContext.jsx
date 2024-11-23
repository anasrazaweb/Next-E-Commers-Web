"use client"
// import payload from 'postmen/lib/payload';
// import React, { createContext, useReducer } from 'react';
// const initialState = {
//     cart: []
// }
// export const reducer = (state, action) => {
//     switch (action.type) {
//         case 'ADDTOCART':
//             // Check if item is already in the cart
//             const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
//             if (existingItemIndex >= 0) {
//                 // Update quantity if item exists
//                 const updatedItems = state.cart.map((item, index) =>
//                     index === existingItemIndex
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 );
//                 return { ...state, cart: updatedItems };
//             } else {
//                 // Add new item to cart
//                 return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
//             }


//         default:
//             return state;
//     }
// };

// const AddCardContext = createContext();

// const AddCardContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const addToCard = (item) => {
//         dispatch({ type: 'ADDTOCART', payload: item });
//     };
//     const DelteCard = (id) => {

//     }

//     return (
//         <AddCardContext.Provider value={{ ...state, addToCard, DelteCard }}>
//             {children}
//         </AddCardContext.Provider>
//     );
// };

// export { AddCardContext, AddCardContextProvider };



import React, { createContext, useState } from 'react'

export const AddCardContext = createContext()

export const AddCardContextProvider = ({ children }) => {
    const [Product, setProduct] = useState([])
    const AddToCart = (item) => {
        setProduct((prev) => {
            const existingItemIndex = prev.findIndex((product) => product.id === item.id);

            if (existingItemIndex >= 0) {
                // If item already exists, increase its quantity
                const updatedProducts = [...prev];
                updatedProducts[existingItemIndex].quantity += 1;
                console.log(updatedProducts, "updatedProducts")
                return updatedProducts;
            } else {
                // If item doesn't exist, add it with quantity 1
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };


    const addQuantity = (id) => {
        setProduct((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Number(item.quantity + 1) }
                    : item
            )
        );
    };

    const subtractQuantity = (id) => {
        setProduct((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Number(Math.max(1, item.quantity - 1)) }
                    : item
            )
        );
    };

    const removeFromCart = (id) => {
        setProduct((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <AddCardContext.Provider value={{ Product, AddToCart, addQuantity, subtractQuantity, removeFromCart }}>
            {children}
        </AddCardContext.Provider >
    )
}