import CategoryFilter from "@/components/CategoryFilter/CategoryFilter"
import FilteredProducts from "@/components/FormFilter/FormFilter"

const Productos = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="w-full max-w-[1500px] mx-auto p-3 flex flex-col justify-center items-center">
                <div className="w-full mx-auto flex justify-center items-center border-b-2 border-gray-700 mb-5">
                    <h2 className="text-black font-bold text-4xl">Nuestros productos</h2>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-7 bg-red-100 w-full">
                    <div className="w-full md:w-1/5 flex justify-center">
                        <CategoryFilter />
                    </div>
                    <div className="w-full md:w-4/5">
                        <FilteredProducts categoria="all" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productos