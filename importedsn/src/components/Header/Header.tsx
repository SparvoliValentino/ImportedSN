import Image from "next/image"
import logo from '../../../public/ImportedSNLogo.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

const Header = () =>{
    return(
        <div className="w-full max-w-[1000px] mx-auto flex flex-col justify-center items-center gap-2 my-4">
            <div>
                <Image src={logo} alt="" className="rounded-full w-[100px] h-[100px]"></Image>
            </div>
            <div className="w-full">
                <nav className="w-full">
                    <ul className="w-full flex justify-evenly items-center">
                        <li className="text-white"><a href="/">Home</a></li>
                        <li className="text-white"><a href="/productos">Productos</a></li>
                        <a href="/carrito"><FontAwesomeIcon className="w-[20px] h-[20px] text-white" icon={faCartShopping} /></a>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;