import FilteredProducts from "@/components/FormFilter/FormFilter";


interface Props {
    params: {
        category: string;
    };
}

const CategoriaPage = ({ params }: Props) => {
    const { category } = params;
    console.log(category)
    return (
        <div className="min-h-screen bg-white">
            <div className="w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center">
                <h2 className="text-black font-bold text-4xl mb-6 capitalize">
                    Productos: {category}
                </h2>

                <div className="flex w-full gap-6 px-4">
                    {/* Productos filtrados */}
                    <FilteredProducts categoria={category} />
                </div>
            </div>
        </div>
    );
};

export default CategoriaPage;
