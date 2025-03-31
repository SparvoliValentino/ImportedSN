"use client"
import Image from "next/image"
import logo from '../../../public/ImportedSNLogo.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useCart } from "@/context/CartContext"

const Header = () =>{
    const { cartCount } = useCart();
    return(
        <div className="w-full max-w-[1000px] mx-auto flex flex-col md:flex-row justify-evenly items-center gap-2 my-4">
            <div className="w-full justify-center items-center flex md:block">
                <Link href="/">
                    <Image src={logo} alt="" className="rounded-full w-[100px] h-[100px]"></Image>
                </Link>
            </div>
            <div className="w-full">
                <nav className="w-full">
                    <ul className="w-full flex justify-evenly items-center">
                        <li className="text-white hover:font-bold hover:text-[20px] hover:shadow-2xl hover:shadow-blue-600"><Link href="/productos">Quienes somos</Link></li>
                        <li className="text-white hover:font-bold hover:text-[20px] hover:shadow-2xl hover:shadow-blue-600"><Link href="/productos">Productos</Link></li>
                        <Link href={'/carrito'}>
                            <FontAwesomeIcon icon={faCartShopping} bounce={cartCount > 0} className="w-[20px] h-[20px] text-white"/>
                            {cartCount > 0 && <span className="ml-2 text-sm font-semibold text-white">{cartCount}</span>}
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;