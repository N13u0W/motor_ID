import { Navbar, NavbarLink } from "flowbite-react"
import Logo from "../assets/Motor-ID.png"

const Header = () => {
    return (
        <>
            <nav class="bg-black text-white">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-l p-4">
                    <a href="localhost:5173/#" class="flex items-center space-x-3 rtl:space-x-reverse">

                        <img 
                        alt="Logo"
                        height="120"
                        src={Logo}
                        width="120"
                        >
                        </img>

                    </a>
                    <div class="flex items-center space-x-4 rtl:space-x-reverse absolute right-0 p-4">
                        <a href="#" class="text-m font-semibold  text-white dark:text-white hover:underline"> Sign in</a>
                        <a href="#" class="text-m font-semibold  text-white dark:text-white hover:underline">Sign up</a>
                </div>
                </div>

                <div class="max-w-screen-l px-3 py-3 mx-auto">
                    <div class="flex items-center">
                        <ul class="flex flex-row font-medium mt-0 space-x-5 rtl:space-x-reverse text-l">
                            <li>
                                <a href="#" class="<div class="font-semibold flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 text-white aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="<div class="font-semibold flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 text-white aria-current>Search</a>
                            </li>
                            <li>
                                <a href="#" class="<div class="font-semibold flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 text-white aria-current>Explore</a>
                            </li>
                            <li>
                                <a href="#" class="<div class="font-semibold flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 text-white aria-current>Messages</a>
                            </li>
                            <li>
                                <a href="#" class="<div class="font-semibold flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 text-white aria-current>Profile</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>

            </nav>
            
        </>
    )
}

export default Header