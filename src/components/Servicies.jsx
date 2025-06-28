// import { Code, Monitor, Smartphone } from "lucide-react"; // Optional: Using lucide-react icons
import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css' 


export default function Services() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  return (
    <section className="bg-white text-gray-900 py-20 px-6 md:px-16">
      <div data-aos= 'fade-up-right' className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl   font-bold mb-6">My Services</h2>
        <p className="text-lg text-gray-600 mb-12">
          I offer a range of services to help you build, launch, and grow your digital presence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className=" bg-gradient-to-r from-pink-400 to-blue-700  p-8 rounded-2xl shadow hover:shadow-md transition">
            <div className="text-blue-600 mb-4">
              {/* <Monitor size={40} /> */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-700">
              Building fast, responsive, and modern websites using React, Tailwind CSS, and more.
            </p>
          </div>

          {/* Service 2 */}
          <div className=" bg-gradient-to-r from-pink-400 to-blue-700  p-8 rounded-2xl shadow hover:shadow-md transition">
            <div className="text-blue-600 mb-4">
              {/* <Smartphone size={40} /> */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile-Friendly Design</h3>
            <p className="text-gray-700">
              Creating responsive layouts that look great on any device or screen size.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gradient-to-r from-pink-400 to-blue-700  p-8 rounded-2xl shadow hover:shadow-md transition">
            <div className="text-blue-600 mb-4">
              {/* <Code size={40} /> */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
            <p className="text-gray-700">
              Tailored web apps and tools that meet specific business or personal needs.
            </p>
          </div>
        </div>
      </div> 

    </section>
  );
}
