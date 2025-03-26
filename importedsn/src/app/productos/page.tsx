import CategoryFilter from "@/components/CategoryFilter/CategoryFilter"
import FilteredProducts from "@/components/FormFilter/FormFilter"

const Productos = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center">
                <h2 className="text-black font-bold text-4xl">Nuestros productos</h2>

                <div className="flex">
                    <CategoryFilter />
                    <div className="w-[1000px] max-w-[1000px] flex justify-center items-center flex-nowrap gap-4">
                        <FilteredProducts
                            categoria="all"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productos