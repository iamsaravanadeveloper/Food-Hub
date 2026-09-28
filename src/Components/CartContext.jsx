import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addToCart = (food) => {

        setCart((prevCart) => {

            const existingFood = prevCart.find(
                (item) => item.id === food.id
            );

            if (existingFood) {

                return prevCart.map((item) =>
                    item.id === food.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );

            }

            return [
                ...prevCart,
                {
                    ...food,
                    price: 199,
                    quantity: 1
                }
            ];
        });
    };


    const increaseQuantity = (id) => {

        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );

    };


    const decreaseQuantity = (id) => {

        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );

    };


    const removeFromCart = (id) => {

        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== id)
        );

    };


    const totalAmount = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );


    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                totalAmount
            }}
        >
            {children}
        </CartContext.Provider>
    );
}


export function useCart() {
    return useContext(CartContext);
}