import FilteredProducts from "@/components/FormFilter/FormFilter";
type Props = {
    params: Promise<{
      category: string;
    }>;
    searchParams?: Promise<{
      [key: string]: string | string[] | undefined;
    }>;
  };
  
  const CategoriaPage = async ({ params }: Props) => {
    const { category } = await params;
  
    return (
      <div className="min-h-screen bg-white">
        <div className="w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center">
          <h2 className="text-black font-bold text-4xl mb-6 capitalize">
            Productos: {category}
          </h2>
  
          <div className="flex w-full gap-6 px-4">
            <FilteredProducts categoria={category} />
          </div>
        </div>
      </div>
    );
  };
  
  export default CategoriaPage;
  