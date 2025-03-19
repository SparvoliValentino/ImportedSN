import FilteredProducts from "@/components/FormFilter/FormFilter"
import ProductosShow from "@/components/ProductsShow/ProductsShow"

const Productos = ()=>{
    return(
        <div className="min-h-screen bg-white">
            <div className="w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center">
                <h2 className="text-black font-bold text-4xl">Nuestros productos</h2>

                <div className="flex">
                    {/* <div className="w-[100px] bg-red-800 flex justify-start items-center flex-col">
                        <h2>Categorias</h2>
                        <div className="flex flex-col">
                        </div>
                    </div> */}

                    <div className="w-[1200px] max-w-[1200px] flex justify-center items-center flex-nowrap gap-4">
                        {/* <ProductosShow/> */}
                        <FilteredProducts/> 

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Productos