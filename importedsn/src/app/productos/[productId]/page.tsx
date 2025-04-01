import { fetchingProductByID } from "@/helpers/productHelper";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

interface ProductPageProps {
    params: Promise<{ productId: string }>; // Asegurar que params es una promesa
}

const ProductDetailPage = async ({ params }: ProductPageProps) => {
    const { productId } = await params; // Asegurar que params se resuelve correctamente
    // console.log("Params:", productId); // Verificar si el ID llega bien

    if (!productId) {
        return <p className="text-red-500">Error: ID del producto no encontrado.</p>;
    }

    try {
        const productByID = await fetchingProductByID(productId);

        return (
            <div className="bg-white min-h-[700px]">
                <div className="w-full max-w-[1200px] mx-auto  flex justify-items-start ">
                    <ProductDetail product={productByID} />
                </div>
            </div>

        );
    } catch (error) {
        console.log(error)
        return <p className="text-red-500">Error al cargar el producto.</p>;
    }
};

export default ProductDetailPage;

