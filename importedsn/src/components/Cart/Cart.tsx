"use client"
import { useCart } from "@/context/CartContext";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useMemo } from "react";

const WHATSAPP_NUMBER = "5493364273461"; // Código de país + número, sin espacios ni guiones


const Cart = () => {
    const { cart, removeFromCart } = useCart()
    useEffect(() => {
        console.log(cart);
    })


    // 🧠 Generar mensaje de WhatsApp dinámicamente
    const whatsappMessage = useMemo(() => {
        if (cart.length === 0) return "";

        const message = cart
            .map((product, index) => {
                return `Producto ${index + 1}:\n- Nombre: ${product.productName}\n- Precio: $${product.price}\n- Descripción: ${product.descripcion || "Sin descripción"}\n`;
            })
            .join("\n");

        const total = cart.reduce((acc, curr) => acc + curr.price, 0);

        return `¡Hola! Quisiera finalizar mi compra con los siguientes productos:\n\n${message}\nTotal: $${total}`;
    }, [cart]);

    // 🧩 Función para armar la URL de WhatsApp
    const generateWhatsAppLink = () => {
        const encodedMessage = encodeURIComponent(whatsappMessage);
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    };


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
                        className="bg-red-500 rounded-full p-1 w-[40px] h-[40px]"
                        onClick={() => removeFromCart(Number(product.id))}
                    >
                        <FontAwesomeIcon icon={faX} className="text-black "/>
                    </button>
                </div>
            ))}

            <div className="my-5 flex justify-center items-center w-full">
                <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-green-600 text-white text-center py-3 px-6 rounded-lg hover:bg-green-700 transition"
                >
                    Finalizar compra por WhatsApp
                </a>
            </div>
        </div>
    )
}

export default Cart;