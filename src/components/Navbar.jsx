import React, { useState } from "react";
import { href, Link } from "react-router-dom";
import logo from "../assets/Logo.svg"
import { link } from "framer-motion/client";
import ToggleTheme from "./ToggleTheme";




const Navbar = ({theme , setTheme}) => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'projects', path:'/projects' },
        { name: 'Contact', path: '/contactus' },
        { name: 'Testimonials', path : '/testimonials' },
    ];

const [menu , setMenu] = useState(link.name)
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

         React.useEffect(() => {
         const handleScroll = () => {
             setIsScrolled(window.scrollY > 50);
         };
         window.addEventListener("scroll", handleScroll);
         return () => window.removeEventListener("scroll", handleScroll);
     }, []); 

    return (
        <div > 
            {/* <p className="w-10 h-[500px]"></p> */}
            <nav className={`fixed top-0 left-0 dark:bg-black/100  w-full flex items-center
             justify-between  bg-slate-950 
                px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 border-b border-gray-700 
                ${isScrolled ? "bg-white/80  shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <a href="/"  className="flex items-center gap-2">
                    <img src={logo} width={132} height={120}
                         />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center  gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i}  to={link.path}  
                        onClick={()=>setMenu(link.name)} 

                        className={`group cursor-pointer flex ${menu===(link.name) ? 'border-b-3   border-red-800 ' : ''}  
                            flex-col gap-0.5 ${isScrolled ? "text-gray-700 dark:text-white"
                         : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700 dark:text-white" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}
                     <a  href=" https://wa.me/+923423135480"
                    className={`border px-4 py-1 hover:bg-slate-700  hover:scale-y  
                    duration-1   text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black dark:text-white' : 'text-white dark:text-white'} transition-all`}>
                        whatsapp 
                    </a> 
                    <ToggleTheme theme={theme} setTheme={setTheme}/>
                </div>

                {/* Desktop Right */}
                {/* <div className="hidden md:flex items-center gap-4">
                    <svg className={`h-6 w-6 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <button className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                        Login
                    </button> 
                </div>  */} 

                {/* Mobile Menu Button */}
                <div className="flex dark:text-white  text-white items-center gap-3 md:hidden">
                    <ToggleTheme theme={theme} setTheme={setTheme}/>
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)}
                     className={`h-6 w-6 cursor-pointer ${isScrolled ? "text-black dark:text-white" : "dark:text-white"}`} fill="none"
                      stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>

                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                     <a  href=" https://wa.me/+923423135480"
                    className={`border px-4 py-1 text-sm bg-red-400  font-light rounded-full cursor-pointer 
                     ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        whatsapp 
                    </a>  

                    
                 </div>
            </nav>
        </div>
    );
} 

export default Navbar