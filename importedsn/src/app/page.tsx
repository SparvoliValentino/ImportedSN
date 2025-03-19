import Header from "@/components/Header/Header";
import Image from "next/image";
import imageBackground from '../../public/imagenFondo1.jpg'
import ProductHomeCard from "@/components/ProductHomeCard/ProductHomeCard";
import RandomProductHome from "@/components/RandomizerProductHome/RandomizerProductHome";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[400px]">
        {/* Imagen de fondo */}
        <Image
          src={imageBackground}
          alt="Fondo"
          className="w-full h-full object-cover blur-xs mask-image"
          fill
          priority
        />

        {/* Capa de opacidad gris */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-70"></div>

        {/* Texto centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white text-4xl font-bold">Bienvenido a Imported SN</h1>
          <button className="text-white font-bold bg-blue-700 w-[200px] h-[50px] rounded-xl">Explorar productos</button>
        </div>
      </div>

      <div className="w-full max-w-[1500px] mx-auto flex flex-col items-center gap-4 justify-center my-7">
        <h2 className="text-5xl font-bold">Nuestros productos</h2>
        <RandomProductHome/>
      </div>
    </div>
  );
}
