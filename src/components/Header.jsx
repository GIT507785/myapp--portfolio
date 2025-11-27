import React, { useEffect } from "react";
import myimage from '../assets/haseeb.jpg'
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import backgroundImage from '../assets/gr_bg.png'


export default function HeroSection() {

  useEffect(()=> {
Aos.init({duration: 1000})
  }, [] ) 
  return (
    <section  
      className=" dark:bg-black   
        dark:text-white py-20 mt-[60px]  px-6 md:px-16">
      <div data-aos = 'fade-down'    className="max-w-6xl mx-auto flex flex-col-reverse
       md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
          
                <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 
                    sm:size-96 xl:size-120 2xl:size-132 bg-cyan-800    blur-[100px] opacity-30"></div>

        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl  bg-gradient-to-l  from-orange-500 to-pink-600
            dark:bg-linear-to-r dark:text-transparent dark:bg-clip-text dark:from-white  dark:to-blue-500  text-transparent   
          bg-clip-text  font-extrabold leading-tight mb-6">
            Hi, I’m <span className="dark:bg-linear-to-r dark:text-transparent bg-clip-text from-white  to-blue-500 text-blue-500">HASEEB</span><br />
            A Web Developer Who Builds Beautiful Interfaces
          </h1>
          <p className="text-lg text-gray-500 dark:text-white mb-8">
            I specialize in creating fast, responsive, and accessible websites using React, Tailwind CSS, and modern tools.
          </p>
          <div className="flex gap-4"> 
            <Link to='/projects'>
            <button className="dark:bg-linear-to-r border dark:border-blue-300 dark:text-transparent
             bg-clip-text from-white  to-blue-500 bg-blue-700  text-black dark:hover:bg-blue-700
            hover:bg-blue-300 px-6 cursor-pointer 
             py-3 rounded-xl font-medium transition  shadow-md hover:shadow-blue-500   ">
              View Projects
            </button>
                 </Link>  

              
            <Link  to='/contactus'   
             className="border dark:border-blue-500 px-6 py-3  shadow-md hover:shadow-blue-500 
             cursor-pointer animate-bounce  rounded-xl  dark:bg-linear-to-r dark:text-transparent bg-clip-text from-white  to-blue-500 dark:hover:bg-blue-200 transition">
              Contact Me
            </Link>
              
                
          </div>
        </div>

        {/* Image or Illustration */}
        <div className="md:w-1/2  flex justify-center">
          <img
            src={myimage}
            alt="Developer"
            className="rounded-full shadow-2xl  w-72 h-72 object-cover 
            dark:border-blue-400
             border-pink-800  border-8  "
          />
        </div>
      </div>
    </section>
  );
}
