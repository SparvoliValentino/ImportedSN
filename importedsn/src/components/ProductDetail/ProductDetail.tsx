import { IProducto } from "@/interfaces/IProduct";
import Image from "next/image";

interface ProductDetailProps {
    product: IProducto;
}

const ProductDetail = ({ product }: ProductDetailProps) => {

    console.log("Imagen del producto:", product.images[0]);

    return (
        <div className="w-full flex flex-col mt-6 gap-6">
            <div className="flex justify-center gap-10">
                <div className="w-[400px] h-[400px] flex justify-center items-center border border-gray-300 rounded-lg shadow-lg">
                    <Image
                        src={product.images[0]}
                        alt={product.productName}
                        width={300} // Asegura que Next.js lo renderice correctamente
                        height={300}
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="w-[500px] h-[400px] flex justify-center items-center border-2 border-gray-500 rounded-lg shadow-xl">
                    <div className="w-3/4 h-3/4 flex flex-col justify-evenly items-start">
                        <h1 className="text-black font-bold text-3xl">{product.productName}</h1>
                        <p className="text-black font-semibold text-4xl">${product.price}</p>
                        <p className="text-gray-800 font-normal text-2xl">Categoría: {product.category}</p>
                        <button className="w-full bg-blue-700 rounded-lg hover:bg-blue-400 text-2xl font-bold">
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
