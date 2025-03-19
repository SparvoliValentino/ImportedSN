'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { IProducto } from '@/interfaces/IProduct';

interface CartContextType {
    cart: IProducto[];
    addToCart: (product: IProducto) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<IProducto[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
            setCart(storedCart);
        }
    }, []);

    const addToCart = (product: IProducto) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((product) => Number(product.id) !== productId);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };
    

    const clearCart = () => {
        setCart([]);
        localStorage.setItem('cart', '[]');
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount: cart.length }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};