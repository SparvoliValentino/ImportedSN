import Cart from "@/components/Cart/Cart";

const carrito = ()=>{

    return(
        <div className="w-full max-w-[1500px] mx-auto flex flex-col items-center justify-start min-h-[500px]">
            <div className="w-full border-b-2 border-white text-center mb-4">
                <h2 className="text-white text-[50px] font-bold ">Tu carrito</h2>
            </div>
            <Cart/>
        </div>
    )
}

export default carrito;