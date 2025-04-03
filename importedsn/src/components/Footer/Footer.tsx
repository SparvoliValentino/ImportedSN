import Image from "next/image"
import MondLogo from "../../../public/mondSNLogo.jpg"
import Link from "next/link"
import { Poppins } from 'next/font/google';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const poppins = Poppins({ weight: '900', subsets: ['latin'], });

const WHATSAPP_NUMBER = "5493364018300";

const Footer = () => {


    const generateWhatsAppLink = () => {
        const encodedMessage = encodeURIComponent('Hola! Quisieras hacerles una consulta!');
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    };


    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href={'/'} className="flex items-center">
                            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                            <span className={`${poppins.className} text-outline text-2xl md:text-5xl font-semibold text-white whitespace-nowrap`}>MOND</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sobre nosotros</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Quienes somos?</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Donde estamos?</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Nuestras redes</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Productos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Todos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 created by <a href="https://www.linkedin.com/in/valentino-sparvoli-088846219/" className="hover:underline">Sparvoli Valentino™</a>
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a
                            href={generateWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-center py-3 px-6 rounded-lg border-2 border-white hover:bg-green-600"
                        >
                            Escribinos por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer