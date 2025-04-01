import FilteredProducts from "@/components/FormFilter/FormFilter";
import { Poppins } from 'next/font/google';
type Props = {
  params: Promise<{
    category: string;
  }>;
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

// import { Anton } from 'next/font/google';


const poppins = Poppins({ weight: '900', subsets: ['latin'], });

const CategoriaPage = async ({ params }: Props) => {
  const { category: encodedCategory } = await params;
  const category = decodeURIComponent(encodedCategory);


  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center">
        {/* <h2 className="text-black font-bold text-4xl capitalize my-6 border-b-2 border-gray-600">
          {category}
        </h2> */}
        <h2 className={`${poppins.className} text-black text-6xl my-6 text-outline-black`}>
          {category}
        </h2>

        <div className="flex w-full gap-6 px-4">
          <FilteredProducts categoria={category} />
        </div>
      </div>
    </div>
  );
};

export default CategoriaPage;
