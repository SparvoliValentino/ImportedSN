"use client";

import { useCart } from "@/context/CartContext";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";

const WHATSAPP_NUMBER = "5493364018300"; // Número final

const Cart = () => {
  const { cart, removeFromCart, updateCantidad } = useCart();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const total = cart.reduce(
    (acc, curr) => acc + curr.price * (curr.cantidad ?? 1),
    0
  );

  const whatsappMessage = useMemo(() => {
    if (cart.length === 0) return "";

    const message = cart
      .map((product, index) => {
        const cantidad = product.cantidad ?? 1;
        const subtotal = product.price * cantidad;
        return `Producto ${index + 1}:\n- Nombre: ${product.productName}\n- Precio unitario: $${product.price}\n- Cantidad: ${cantidad}\n- Subtotal: $${subtotal}\n`;
      })
      .join("\n");

    return `¡Hola! Quisiera finalizar mi compra con los siguientes productos:\n\n${message}\nTotal: $${total}`;
  }, [cart]);

  const generateWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[1000px] mx-auto">
      {cart.length === 0 ? (
        <div className="w-full flex flex-col justify-evenly items-center h-[300px]">
          <h2 className="text-gray-400 text-xl text-center">
            Tu carrito se encuentra vacío, así que es momento de comenzar tu búsqueda
          </h2>
          <Link
            href={"/productos"}
            className="bg-blue-500 hover:bg-blue-200 rounded-2xl p-3 text-white font-bold"
          >
            Explorá nuestros productos
          </Link>
        </div>
      ) : (
        cart.map((product) => {
          const cantidad = product.cantidad ?? 1;

          return (
            <div
              key={product.id}
              className="bg-white flex justify-evenly items-center w-full h-[70px] rounded-md"
            >
              <Image
                src={product.images[0]}
                className="w-full max-w-[60px] max-h-[60px]"
                width={60}
                height={60}
                alt=""
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (cantidad > 1) {
                      updateCantidad(product.id, cantidad - 1);
                    }
                  }}
                  className="px-2 py-1 bg-gray-600 text-white rounded disabled:opacity-50"
                  disabled={cantidad === 1}
                >
                  -
                </button>
                <span className="font-semibold text-black">{cantidad}</span>
                <button
                  onClick={() => updateCantidad(product.id, cantidad + 1)}
                  className="px-2 py-1 bg-gray-600 text-white rounded"
                >
                  +
                </button>
              </div>
              <h2 className="text-black font-semibold">{product.productName}</h2>
              <h2 className="text-black font-bold">${product.price}</h2>
              <button
                className="bg-red-500 rounded-full p-1 w-[40px] h-[40px]"
                onClick={() => removeFromCart(product.id)}
              >
                <FontAwesomeIcon icon={faX} className="text-white" />
              </button>
            </div>
          );
        })
      )}

      {cart.length > 0 && (
        <>
          <div className="w-full max-w-[500px] mx-auto flex flex-col justify-center items-center border-t-2 border-gray-300 pt-4">
            <h2 className="text-black text-2xl">TOTAL: ${total}</h2>
            <p className="text-gray-500 text-center text-[12px]">
              Tené en cuenta que este monto no incluye el envío. Podés consultarlo por WhatsApp al finalizar tu pedido.
            </p>
          </div>

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
        </>
      )}
    </div>
  );
};

export default Cart;
