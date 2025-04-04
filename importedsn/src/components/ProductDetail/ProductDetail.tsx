"use client"

import { useCart } from "@/context/CartContext";
import { IProducto } from "@/interfaces/IProduct";
import Image from "next/image";
import Swal from "sweetalert2";
import Link from "next/link";
import { Poppins } from 'next/font/google';
import { useState } from "react";

const poppins = Poppins({ weight: '900', subsets: ['latin'], });


interface ProductDetailProps {
    product: IProducto;
}
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;


const ProductDetail = ({ product }: ProductDetailProps) => {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const { id, productName, price, images, stock } = product
    const { addToCart } = useCart()

    const handleAddToCart = () => {
        Swal.fire({
            title: "Vas a anadir este producto a tu carrito",
            text: "Estas seguro?",
            icon: "warning",
            confirmButtonColor: "#3085d6",
        }).then((result) => {
            if (result.isConfirmed) {
                addToCart({ id, productName, price, images });
                Swal.fire("Añadido!", "El producto fue añadido al carro exitosamente.", "success");
            }
        });
    }


    const handleBuyNow = () => {
        Swal.fire({
            title: "Vas a salir de esta pagina para comprar este producto",
            text: "Estas seguro?",
            icon: "warning",
            confirmButtonColor: "#3085d6",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Correcto!", "Fuiste redireccionado a la compra del producto.", "success");
                const message = `¡Hola! Estoy interesado en este producto:\n\n- Nombre: ${productName}\n- Precio: $${price}`;
                const encodedMessage = encodeURIComponent(message);
                const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
                window.open(whatsappLink, "_blank");
            }
        });

    };

    return (
        <div className="w-full md:max-w-[1200px] md:my-5 mx-auto flex flex-col mt-6 gap-6">
            <div className="flex flex-col md:flex-row justify-center gap-10">
                <div className="w-full md:w-[500px] md:h-[500px] flex flex-col justify-center items-center md:border md:border-gray-300 rounded-lg md:shadow-lg relative">
                    <h2 className="block md:hidden text-black font-bold text-4xl">{product.productName}</h2>

                    {/* Contenedor con miniaturas y la imagen principal */}
                    <div className="w-full flex flex-row justify-evenly items-centermd:flex-col">
                        {/* Miniaturas (solo si hay más de una) */}
                        {product.images.length > 1 && (
                            <div className="flex flex-col gap-2 items-center md:items-start">
                                {product.images.map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        alt={`Miniatura ${index}`}
                                        width={60}
                                        height={60}
                                        className={`cursor-pointer opacity-50 w-[70px] h-[70px] hover:opacity-100 transition ${selectedImage === img ? "border-2 border-blue-500 opacity-100" : ""
                                            }`}
                                        onMouseEnter={() => setSelectedImage(img)}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Imagen principal */}
                        <Image
                            src={selectedImage}
                            alt={product.productName}
                            width={400}
                            height={400}
                            className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-contain"
                        />
                    </div>
                </div>


                <div className="w-full md:w-[500px] h-[400px] flex justify-center items-center md:rounded-lg md:shadow-xl">
                    <div className="w-3/4 h-3/4 flex flex-col justify-evenly items-start">
                        <div className="flex justify-between w-[200px]">
                            <Link href={"/productos"} className="text-blue-400 font-normal text-xs">Productos</Link>
                            <p className="text-blue-400 font-normal text-xs">&gt;</p>
                            <Link href={`productos/${product.category}`} className="text-blue-400 font-normal text-xs">{product.category}</Link>
                        </div>
                        <h1 className="hidden md:block text-black font-bold text-3xl">{product.productName}</h1>
                        <p className="text-black font-semibold text-4xl">${product.price}</p>
                        <p className="text-gray-800 font-normal text-2xl">Categoría: {product.category}</p>
                        {
                            stock ? (
                                <p className="text-green-800 font-normal text-md">Stock disponible</p>
                            ) : (
                                <p className="text-red-800 font-bold text-md ">Stock no disponible</p>
                            )
                        }
                        {
                            stock ? (
                                <div className="w-full flex flex-col gap-3">
                                    <button
                                        onClick={handleBuyNow}
                                        className="w-full bg-green-500 rounded-lg hover:bg-green-700 text-2xl font-bold text-white">
                                        Comprar ahora
                                    </button>
                                    <button
                                        onClick={handleAddToCart}
                                        className="w-full bg-blue-700 rounded-lg hover:bg-blue-500 text-2xl font-bold  text-white">
                                        Añadir al carrito
                                    </button>
                                </div>
                            ) : (
                                <div className="w-full flex gap-3 flex-col">
                                    <button
                                        disabled
                                        className="w-full bg-gray-500 rounded-lg hover:bg-gray-700 text-2xl font-bold text-white">
                                        Comprar ahora
                                    </button>
                                    <button
                                        disabled
                                        className="w-full bg-gray-700 rounded-lg hover:bg-gray-500 text-2xl font-bold  text-white">
                                        Añadir al carrito
                                    </button>
                                </div>
                            )
                        }
                        {/* <button
                            onClick={handleAddToCart}
                            className="w-full bg-green-500 rounded-lg hover:bg-green-700 text-2xl font-bold text-white">
                            Comprar ahora
                        </button>
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-blue-700 rounded-lg hover:bg-blue-500 text-2xl font-bold  text-white">
                            Añadir al carrito
                        </button> */}
                    </div>
                </div>
            </div>

            {/* Barra azul con degradado en los costados */}
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="w-full bg-blue-500 h-[50px] relative mask-image-gradient flex justify-center items-center tracking-widest">
                    <h2 className={`${poppins.className} text-outline text-2xl md:text-4xl md:tracking-widest font-bold text-white`}>Detalle del producto</h2>
                </div>
                <div className="w-full flex flex-col mt-6 gap-6 p-7">
                    <p className="text-gray-800 font-normal text-xl text-justify">{product.descripcion}</p>
                </div>
            </div>
        </div>
    );

};

export default ProductDetail;
