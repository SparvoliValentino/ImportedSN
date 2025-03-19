"use client";
import { useEffect, useState } from "react";
import { IProducto } from "@/interfaces/IProduct";
import { fetchingProducts } from "@/helpers/productHelper";
import ProductCard from "../ProductHomeCard/ProductHomeCard"; // Componente para mostrar productos

const FilteredProducts = () => {
  const [products, setProducts] = useState<IProducto[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProducto[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchingProducts();
      setProducts(fetchedProducts);

      // Obtener categorías únicas
      const uniqueCategories = [...new Set(fetchedProducts.map((p) => p.categoria))];
      setSelectedCategory(uniqueCategories[0] || ""); // Selecciona la primera categoría por defecto
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filtrar productos cuando cambia la categoría seleccionada
    if (selectedCategory) {
      setFilteredProducts(products.filter((p) => p.categoria === selectedCategory));
    }
  }, [selectedCategory, products]);

  return (
    <div className="w-full max-w-[1200px] mx-auto flex gap-6">
      {/* 📌 Barra lateral fija con el filtro */}
      <div className="w-[250px] h-auto bg-white p-4 shadow-md rounded-md">
        <h2 className="text-md font-bold text-black mb-4">Filtrar por categoría</h2>

        {/* Selector de Categoría */}
        <select
          className="w-full px-4 py-2 border border-gray-400 rounded-md text-black"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {[...new Set(products.map((p) => p.categoria))].map((categoria) => (
            <option key={categoria} value={categoria} className="text-black">
              {categoria}
            </option>
          ))}
        </select>
      </div>

      {/* 📌 Contenedor de productos (ocupa todo el espacio disponible) */}
      <div className="flex-grow flex flex-wrap gap-4 justify-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              productName={product.nombre}
              price={product.precio}
              image={product.imagenes[0]} // Solo pasamos la primera imagen
            />
          ))
        ) : (
          <p className="text-gray-500">No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
