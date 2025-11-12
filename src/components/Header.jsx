import React, { useEffect } from "react";
import myimage from '../assets/haseeb.jpg'
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'


export default function HeroSection() {

  useEffect(()=> {
Aos.init({duration: 1000})
  }, [] ) 
  return (
    <section  
      className="bg-black   text-white py-20 mt-[60px]  px-6 md:px-16">
      <div data-aos = 'fade-down'    className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl  bg-gradient-to-l  from-orange-500 to-pink-600   text-transparent   
          bg-clip-text  font-extrabold leading-tight mb-6">
            Hi, I’m <span className="text-blue-500">HASEEB</span><br />
            A Web Developer Who Builds Beautiful Interfaces
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            I specialize in creating fast, responsive, and accessible websites using React, Tailwind CSS, and modern tools.
          </p>
          <div className="flex gap-4"> 
            <Link to='/projects'>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 cursor-pointer 
             py-3 rounded-xl font-medium transition">
              View Projects
            </button>
                 </Link>  

              
            <Link  to='/contactus'   
             className="border border-gray-500 px-6 py-3 cursor-pointer animate-bounce  rounded-xl hover:bg-gray-800 transition">
              Contact Me
            </Link>
              
                
          </div>
        </div>

        {/* Image or Illustration */}
        <div className="md:w-1/2  flex justify-center">
          <img
            src={myimage}
            alt="Developer"
            className="rounded-full w-72 h-72 object-cover border-pink-800  border-8  shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
