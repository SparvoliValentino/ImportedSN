'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchingProducts } from '@/helpers/productHelper';

const CategoryFilter = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const productos = await fetchingProducts();
  
      // ⚠️ Eliminar los undefined antes de construir el set
      const categorias = productos
        .map(p => p.category)
        .filter((c): c is string => typeof c === "string");
  
      const unique = [...new Set(categorias)];
      setCategories(unique);
    };
    fetchData();
  }, []);
  

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoria = e.target.value;
    if (categoria === 'Todo') {
      router.push('/productos');
    } else {
      router.push(`/productos/categoria/${encodeURIComponent(categoria)}`);
    }
  };
  

  return (
    <div className="w-[300px] h-[150px] md:w-[250px] md:h-[300px] bg-white p-4 shadow-md rounded-md">
      <h2 className="text-md font-bold text-black mb-4">Filtrar por categoría</h2>
      <select
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-400 rounded-md text-black"
      >
        <option value="Todo">Todo</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
