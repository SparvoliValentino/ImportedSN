import { IProducto } from "@/interfaces/IProduct";

// const convertirEnlaceGoogleDrive = (url: string): string => {
//     if (!url) return "/placeholder.png";

//     const match = url.match(/\/d\/(.*?)\//);
//     return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : "/placeholder.png";
// };

const API_URL = "https://docs.google.com/spreadsheets/d/1E1nTrr3iZGiQH-7FNzJA-7ypaKvYBp5hsk1UTbZnu4M/gviz/tq?tqx=out:json"

export const convertirEnlaceGoogleDrive = (url: string): string => {
    if (!url) return "/placeholder.png";

    const match = url.match(/\/d\/(.*?)\//);
    return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : "/placeholder.png";
};

export const fetchingProducts = async (): Promise<IProducto[]> => {
    try {
        const response = await fetch(API_URL);
        const text = await response.text();
        const jsonData = JSON.parse(text.substring(47, text.length - 2));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const productosData: IProducto[] = jsonData.table.rows.map((row: any) => {
            const id = row.c[0]?.v?.toString() || "ID Desconocido";
            const productName = row.c[1]?.v?.toString() || "Sin nombre"; // ✅ Ahora coincide con IProducto
            const price = row.c[3]?.v || 0;

            // 🔹 **Corrección en la conversión de imágenes**
            const imagesRaw = row.c[4]?.v ? String(row.c[4].v) : "";
            const images = imagesRaw
                ? imagesRaw.split(", ").map((img) => convertirEnlaceGoogleDrive(img))
                : ["/placeholder.png"]; // ✅ Ahora coincide con IProducto

            const category = row.c[5]?.v?.toString() || "Sin categoría"; // ✅ Se adapta a IProducto
            const descripcion = row.c[6]?.v?.toString() || "Sin descripción"; 

            return { id, productName, price, images, category, descripcion };
        });

        console.log("Productos obtenidos:", productosData); // Debugging
        return productosData;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return [];
    }
};




export const fetchingProductByID = async (id: string): Promise<IProducto> => {
    try {
        const productos = await fetchingProducts();
        const findedProduct = productos.find((producto) => producto.id === id);

        if (!findedProduct) {
            throw new Error(`Producto con ID ${id} no encontrado`);
        }

        return findedProduct;
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        throw error; // Lanza el error para que el componente que llame la función lo maneje
    }
};
