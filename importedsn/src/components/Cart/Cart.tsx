"use client"
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useEffect } from "react";

const Cart = () => {
    const { cart, removeFromCart } = useCart()
    useEffect(() => {
        console.log(cart);
    })
    return (
        <div className="flex flex-col gap-4 w-full max-w-[1000px] mx-auto">
            {cart.length === 0 ? (
                <div>
                    <h2 className="text-white">Tu carrito esta vacio</h2>
                </div>
            ) : cart.map((product) => (
                <div key={product.id} className="bg-white flex justify-evenly items-center w-full h-[70px] rounded-md">
                    <h2 className="text-black font-semibold">{product.productName}</h2>
                    <h2 className="text-black font-bold">{product.price}</h2>
                    {/* <img src={product.images[0]} className="w-full max-w-[60px] max-h-[60px] bg-red-800" alt="" /> */}
                    <Image
                        src={product.images[0]}
                        className="w-full max-w-[60px] max-h-[60px]"
                        width={60} // Asegura que Next.js lo renderice correctamente
                        height={60}
                        alt=""
                    />
                    {/* <h2 className="">{product.images.[0]}</h2> */}
                    <button
                        className="bg-red-500 rounded-full"
                        onClick={() => removeFromCart(Number(product.id))}
                    >
                        X
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cart;