import Cart from "@/components/Cart/Cart";

const carrito = ()=>{

    return(
        <div className="w-full max-w-[1500px] mx-auto flex flex-col items-center justify-start min-h-screen">
            <div className="w-full border-b-2 border-white text-center">
                <h2 className="text-white text-[50px] font-bold ">Tu carrito</h2>
            </div>
            <Cart/>
        </div>
    )
}

export default carrito;