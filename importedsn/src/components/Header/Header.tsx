"use client"
import Image from "next/image"
import logo from '../../../public/mondSNLogo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useCart } from "@/context/CartContext"


// import { Anton } from 'next/font/google';
import { Poppins } from 'next/font/google';

const anton = Poppins({ weight: '900', subsets: ['latin'], });

const Header = () => {
    const { cartCount } = useCart();
    return (
        <div className="w-full max-w-[1000px] mx-auto flex flex-col md:flex-row justify-evenly items-center gap-2 my-4">
            <div className="w-full justify-center items-center flex md:block">
                <Link href="/" className="block md:flex gap-4 items-center">
                    <Image src={logo} alt="" className="rounded-full w-[150px] h-[150px] border-white border-2 hidden md:block"></Image>
                    <h1 className={`${anton.className} text-outline text-5xl font-extralight text-white`}>MOND</h1>
                </Link>
            </div>
            <div className="w-full">
                <nav className="w-full">
                    <ul className="w-full flex justify-evenly items-center">
                        <Link href="/productos"><h2 className={`${anton.className} text-[20px] text-white hover:font-bold hover:text-[20px] hover:shadow-2xl hover:shadow-blue-600 tracking-widest`}>Nosotros</h2></Link>
                        <Link href="/productos"><li className={`${anton.className} text-[20px] text-white hover:font-bold hover:text-[20px] hover:shadow-2xl hover:shadow-blue-600 tracking-widest`}>Productos</li></Link>
                        <Link href={'/carrito'}>
                            <FontAwesomeIcon icon={faCartShopping} bounce={cartCount > 0} className="w-[30px] h-[30px] text-white" />
                            {cartCount > 0 && <span className="ml-2 text-sm font-semibold text-white">{cartCount}</span>}
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;