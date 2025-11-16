import { Code, Monitor, Smartphone } from "lucide-react";
import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css' 
import img from '../assets/service1.svg'
import img2 from '../assets/mobile.svg'
import img3 from '../assets/service3.svg'



export default function Services() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  return (
    <section className="bg-white dark:bg-black  text-gray-900 py-20 px-6 md:px-16">
      <div data-aos= 'fade-up-right' className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl  dark:text-teal-500 font-bold mb-6">My Services</h2>
        <p className="text-lg text-gray-600 mb-12 dark:text-white">
          I offer a range of services to help you build, launch, and grow your digital presence.
        </p>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className=" p-8 rounded-2xl shadow-2xl border dark:shadow-md  dark:shadow-teal-700
            border-teal-400 light:shadow-gray-400  hover:shadow-md transition">
          
            <div className="flex mb-4 gap-4">
              <img src={img} alt="" className="w-15 h-15" />
            <h3 className="text-xl font-semibold mt-4 dark:text-teal-500">Web Development</h3>
            </div>
            <div>

            <p className="text-gray-700 dark:text-white">
              Building fast, responsive, and modern websites using React, Tailwind CSS, and more.
            </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="  p-8 rounded-2xl shadow-2xl border light:shadow-gray-400 dark:shadow-md  dark:shadow-teal-700
            border-teal-400 hover:shadow-md transition">
           <div className="flex mb-4 gap-4">
              <img src={img2} alt="" className="w-15 h-15" />
            <h3 className="text-xl font-semibold mt-4 dark:text-teal-500">Mobile-Friendly Design</h3>
            </div>

            <div>
            <p className="text-gray-700 dark:text-white">
              Creating responsive layouts that look great on any device or screen size.
            </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className=" p-8 rounded-2xl shadow-2xl border border-teal-400 light:shadow-gray-400 
          dark:shadow-md  dark:shadow-teal-700  hover:shadow-md transition">
            <div className="flex mb-4 gap-4">
              <img src={img3} alt="" className="w-20 h-20" />
            <h3 className="text-xl font-semibold mt-4 dark:text-teal-500">Custom Solutions</h3>
            </div>

            <div>

            <p className="dark:text-white text-gray-700">
              Tailored web apps and tools that meet specific business or personal needs.
            </p>
            </div>
          </div>
        </div>
      </div> 

    </section>
  );
}
