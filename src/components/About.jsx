import React, { useEffect } from "react";
import myImage from '../assets/haseeb.jpg'
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'


export default function AboutMe()  { 
  useEffect(()=>{
 Aos.init({duration : 2000})
  }, [])
  return (
    <section className="bg-gray-100 text-gray-900 py-20 px-6 md:px-16">
      <div data-aos = 'fade-up' className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Profile Image */}
        <div className="w-40 h-40 border-7 border-red-500  md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg">
          <img
            src={myImage}
            alt="Your Name"
            className="w-full h-full "
          />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-6">
            Hello! I’m <span className="font-semibold text-blue-600">HASEEB</span>, a passionate Web Developer focused on building modern and responsive websites using technologies like React, Tailwind CSS, and Next.js. I love clean design, scalable code, and solving real-world problems.
          </p>

          <h3 className="text-xl font-semibold mb-2">Skills:</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 mb-6">
            <li>✅ HTML5 / CSS3</li>
            <li>✅ JavaScript (ES6+)</li>
            <li>✅ React.js</li>
            <li>✅ Tailwind CSS</li>
            <li>✅ Git & GitHub</li>
            <li>✅ Responsive Design</li>
          </ul>

          {/* <Link  
             to='/resume'            
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Download Resume
          </Link>  */}
        </div>
      </div>
    </section>
  );
}
