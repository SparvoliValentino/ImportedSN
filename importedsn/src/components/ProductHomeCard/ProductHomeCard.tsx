import Image from "next/image";
import imagenEjemplo from '../../../public/imagenEjemploProducto.jpeg';
import Link from "next/link";
import Swal from "sweetalert2";
import { useCart } from "@/context/CartContext";

const ProductHomeCard = ({ id, productName, price, images }: { id: string, productName: string, price: number, images: string[] }) => {

  const { addToCart } = useCart()
  const imageUrl = images.length > 0 ? images[0] : "/placeholder.png"; //
  const handleAddToCart = () => {
    console.log('estoy aqui')
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
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
    <div className="w-[250px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200" key={id}>
      {/* Imagen del Producto */}
      <Link href={`/productos/${id}`} className="z-0">
        <div className="relative w-full h-[180px] flex items-center justify-center bg-gray-100">
          <Image
            src={imageUrl}
            alt="Producto"
            fill
            className="object-contain"
          />
        </div>

        {/* Información del Producto */}
        <div className="p-4">
          <h3 className="text-gray-800 font-semibold text-lg">
            {productName}
          </h3>
          <div className="flex items-center space-x-2">
            <p className="text-black font-bold text-xl">{price}</p>
          </div>

          {/* Botón de agregar al carrito */}
          <button
            onClick={handleAddToCart}
            className="mt-3 w-full bg-black text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 z-50">
            Añadir al carrito
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductHomeCard;
