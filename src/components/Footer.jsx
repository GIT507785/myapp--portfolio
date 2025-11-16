import React from "react"
import logo from "../assets/Logo.svg"
import whatsapp_icon from '../assets/whatsapp.png'
import fasebook_icon from '../assets/facebook.png'
import linkdin_icon from '../assets/linkedin.png'


const Footer = () => {
    return (
        <footer className="px-6 pt-8 md:px-16 lg:px-36 bg-black dark:border-t dark:border-teal-200  w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    <img className="w-36 h-auto" src={logo} alt="logo" />
                    <p className="mt-6 text-sm">
                       Hello! I’m HASEEB, a passionate Web Developer focused on building modern and responsive websites using technologies like React, Tailwind CSS, and Next.js. I love clean design, scalable code, and solving real-world problems.
                    </p>
                    <div className="flex items-center gap-2 mt-4 rounded-full">
                       <a href=" https://wa.me/+923423135480"> <img src={whatsapp_icon} alt="" /> </a>    
                       <a href=""> <img src={fasebook_icon} alt="" /> </a>    
                       <a href=""> <img src={linkdin_icon} alt="" /> </a>    
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5 dark:text-teal-400 ">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 dark:text-teal-400">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+92-3423135480</p>
                            <p>hafizhaseeb4480@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © Starshine. All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer