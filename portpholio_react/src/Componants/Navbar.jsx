import { RiCloseLine, RiEyeCloseLine, RiMenu2Line } from "@remixicon/react";
import { useState } from "react"

const Navbar =()=>{
    const [menu,openMenu]=useState(false);
    const [showMenu ,setShowMenu]=useState(true);
    return( 
        <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
            <span className="text-xl font-bold tracking-wide">Portfolio</span>
            <ul className={` ${menu ? "block":"hidden"} right-0 mx-20 py-5 px-10 mt-8 font-semibold md:mt-5 bg-black rounded-xl bg-opacity-30 md:border-none text-center items-center
            md:bg-transparent md:static md:mx-0 md:flex gap-6 absolute `}>
                <a href="#About">
                <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-2xl cursor-pointer">About</li>
                </a>
                <a href="#Experience">
                <li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li>
                </a>
                <a href="#Project">
                <li className="text-md transition-all duration-300 p-1 md:p-0">Project</li>
                </a>
                <a href="#Contact">
                <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
                </a>
            </ul>
           {showMenu? (<RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" 
           onClick={()=>{
                  openMenu(!menu)
                  setShowMenu(!showMenu)
               }} />):
           (<RiCloseLine size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" 
            onClick={()=>{
                openMenu(!menu)
                setShowMenu(!showMenu)
            }} />)
            }
        </nav>
    )
}

export default Navbar