import Cart from "@/components/Cart/Cart";

const carrito = ()=>{

    return(
        <div className="w-full max-w-[1500px] mx-auto flex flex-col items-center justify-start min-h-screen">
            <h2 className="text-white text-[50px] font-bold">Tu carrito</h2>
            <Cart/>
        </div>
    )
}

export default carrito;