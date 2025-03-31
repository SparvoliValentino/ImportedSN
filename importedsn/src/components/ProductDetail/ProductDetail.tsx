"use client"

import { useCart } from "@/context/CartContext";
import { IProducto } from "@/interfaces/IProduct";
import Image from "next/image";
import Swal from "sweetalert2";
import Link from "next/link";

interface ProductDetailProps {
    product: IProducto;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
    const { id, productName, price, images } = product

    const { addToCart } = useCart()
    const handleAddToCart = () => {
        console.log('estoy aqui')
        // const cart = JSON.parse(localStorage.getItem("cart") || "[]")
        Swal.fire({
            title: "Vas a anadir este producto a tu carrito",
            text: "Estas seguro?",
            icon: "warning",
            confirmButtonColor: "#3085d6",
        }).then((result) => {
            if (result.isConfirmed) {
                addToCart({ id, productName, price, images });
                Swal.fire("Added!", "The product has been added to your cart.", "success");
            }
        });
    }

    return (
        <div className="w-full flex flex-col mt-6 gap-6">
            <div className="flex flex-col md:flex-row justify-center gap-10">
                <div className="w-full md:w-[400px] md:h-[400px] flex flex-col justify-center items-center md:border md:border-gray-300 rounded-lg md:shadow-lg">
                    <h2 className="block md:hidden text-black font-bold text-4xl">{product.productName}</h2>
                    <Image
                        src={product.images[0]}
                        alt={product.productName}
                        width={300} // Asegura que Next.js lo renderice correctamente
                        height={300}
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="w-[500px] h-[400px] flex justify-center items-center md:border-2 md:border-gray-500 rounded-lg md:shadow-xl">
                    <div className="w-3/4 h-3/4 flex flex-col justify-evenly items-start">
                        <div className="flex justify-between w-[200px]">
                            <Link href={"/productos"} className="text-blue-400 font-normal text-xs"></Link>
                            <p className="text-blue-400 font-normal text-xs">&gt;</p>
                            <Link href={`productos/${product.category}`}className="text-blue-400 font-normal text-xs">{product.category}</Link>
                        </div>
                        <h1 className="hidden md:block text-black font-bold text-3xl">{product.productName}</h1>
                        <p className="text-black font-semibold text-4xl">${product.price}</p>
                        <p className="text-gray-800 font-normal text-2xl">Categoría: {product.category}</p>
                        <p className="text-green-800 font-normal text-md">Stock disponible</p>
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-green-500 rounded-lg hover:bg-green-700 text-2xl font-bold text-white">
                            Comprar ahora
                        </button>
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-blue-700 rounded-lg hover:bg-blue-500 text-2xl font-bold  text-white">
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>

            {/* Barra azul con degradado en los costados */}
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="w-full bg-blue-500 h-[50px] relative mask-image-gradient flex justify-center items-center tracking-widest">
                    <h2 className="text-center text-3xl text-white font-bold">Detalle del producto</h2>
                </div>
                <div className="w-full max-w-[1200px] flex items-center justify-center">
                    <p className="text-gray-800 font-normal text-2xl">{product.descripcion}</p>
                </div>
            </div>
        </div>
    );

};

export default ProductDetail;
