"use client";
import { useEffect, useState } from "react";
import { IProducto } from "@/interfaces/IProduct";
import { fetchingProducts } from "@/helpers/productHelper";
import ProductCard from "../ProductHomeCard/ProductHomeCard"; // Componente para mostrar productos
import categoria from "@/app/productos/categoria/[category]/page";

// const FilteredProducts = () => {
//   const [products, setProducts] = useState<IProducto[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<IProducto[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedProducts = await fetchingProducts();
//       setProducts(fetchedProducts);

//       // ✅ Agregar la opción "Todo" a las categorías
//       const uniqueCategories = ["Todo", ...new Set(fetchedProducts.map((p) => p.category))];
//       setSelectedCategory("Todo"); // ✅ Asegura que la categoría inicial sea "Todo"
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (selectedCategory === "Todo") {
//       setFilteredProducts(products); // ✅ Si es "Todo", muestra todos los productos
//     } else {
//       setFilteredProducts(products.filter((p) => p.category === selectedCategory));
//     }
//   }, [selectedCategory, products]); // ✅ Se ejecuta cuando `selectedCategory` o `products` cambian


//   return (
//     <div className="w-full max-w-[1200px] mx-auto flex gap-6">
//       {/* 📌 Barra lateral fija con el filtro */}
//       <div className="w-[250px] h-[300px] bg-white p-4 shadow-md rounded-md flex-shrink-0">
//         <h2 className="text-md font-bold text-black mb-4">Filtrar por categoría</h2>

//         {/* Selector de Categoría */}
//         <select
//           className="w-full px-4 py-2 border border-gray-400 rounded-md text-black"
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//         >
//           <option value="all">Todo</option> {/* ✅ Opción "Todo" */}
//           {[...new Set(products.map((p) => p.category))].map((categoria) => (
//             <option key={categoria} value={categoria} className="text-black">
//               {categoria}
//             </option>
//           ))}
//         </select>
//       </div>


//       {/* 📌 Contenedor de productos (ocupa todo el espacio disponible) */}
// <div className="flex-grow flex flex-wrap gap-4 justify-center">
//   {filteredProducts.length > 0 ? (
//     filteredProducts.map((product) => (
//       <ProductCard
//         key={product.id}
//         id={product.id}
//         productName={product.productName}
//         price={product.price}
//         images={Array.isArray(product.images) ? product.images : ["/placeholder.png"]} // Solo pasamos la primera imagen
//       />
//     ))
//   ) : (
//     <p className="text-gray-500">No hay productos en esta categoría.</p>
//   )}
// </div>
//     </div>
//   );
// };

// export default FilteredProducts;

const FilteredProducts = ({ categoria }: { categoria: string }) => {
  const [products, setProducts] = useState<IProducto[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProducto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchingProducts();
      setProducts(fetchedProducts);
  
      if (!categoria || categoria === "all" || categoria === "Todo") {
        setFilteredProducts(fetchedProducts);
        return;
      }
  
      const filtered = fetchedProducts.filter(
        (product) =>
          typeof product.category === "string" &&
          product.category.toLowerCase() === categoria.toLowerCase()
      );
  
      setFilteredProducts(filtered);
    };
  
    fetchData();
  }, [categoria]);
  

  return (
    <div className="flex-grow flex flex-wrap gap-4 justify-center">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            productName={product.productName}
            price={product.price}
            images={Array.isArray(product.images) ? product.images : ["/placeholder.png"]}
          />
        ))
      ) : (
        <p className="text-gray-500">No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default FilteredProducts;
