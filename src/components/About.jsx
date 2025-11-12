import React, { useEffect } from "react";
import myImage from '../assets/haseeb.jpg'
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

import img1 from '../assets/html.svg'
import img2 from '../assets/css.svg'
import img3 from '../assets/java.svg'
import img4 from '../assets/ty.svg'
import img5 from '../assets/react.svg'
import img6 from '../assets/nodejs-ar21.svg'
import img7 from '../assets/tailwind.svg'
import img8 from '../assets/git.svg'
import img9 from '../assets/postgres.svg'
import img10 from '../assets/native.svg'
import img11 from '../assets/mongo.svg'
import img12 from '../assets/github.svg'
import img13 from '../assets/figma.svg'








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

           <div>
            <h1 className="text-xl font-bold">Professional / Portfolio Style</h1>
            <ul className="mt-2">1.  Full Stack Developer — Building Web & Mobile Experiences. </ul>
            <ul>2. Creating Scalable Apps from Frontend to Backend.</ul>
            <ul>3. Full Stack Developer | React • Node • MongoDB. </ul>
            <ul>4. Code. Design. Deploy. </ul>
             <ul>5. Code. Design. Deploy.</ul>
            </div>                
             {/* skills */}
                   <p className="bg-gray-400 mt-10 text-gray-200 rounded-2xl w-20 items-center justify-center   flex  py-1">Skills</p>
                   <p className="text-gray-500 mt-1">The skills , tools and technologies I am really good at.</p>
              <div className="mt-2 grid grid-cols-2 sm:grid-cols-5 ">
               <div>
                <img src={img1} alt="" className="mt-3 w-20 h-20"/>
                <h1 className="text-gray-700 mt-1 ml-2">HTML</h1>
               </div>
               <div>
                <img src={img2} alt="" className="mt-3 w-20 h-20"/>
                <h1 className="text-gray-700 mt-1 ml-2">CSS</h1>                  
               </div>
                <div>
                <img src={img3} alt="" className="w-20 h-20"/>
                <h1 className="text-gray-700 mt-1 ml-2">JavaScript</h1>                 
                </div>
                <div>
                <img src={img4} alt="" className="w-20 h-20"/>
                <h1 className="text-gray-700 mt-1 ml-2">Typescript</h1>
                </div>
                <div>
                <img src={img5} alt="" className="w-20 h-20"/>
                <h1 className="text-gray-700 mt-1 ml-2">React</h1>
                </div>
                <div>
                <img src={img6} alt="" className="w-20 h-20"/>
                <h1 className="text-gray-700 mt-1 ml-2">Nodejs</h1>
                </div>
                <div>
                <img src={img7} alt="" className="w-20 h-20"/>
                <h1 className="text-gray-700 mt-1 ml-2">Tailwind Css</h1>
                </div>
                <div>
                <img src={img8} alt="" className="w-20 h-20 mt-2"/>
                <h1 className="text-gray-700 mt-1 ml-2">Git</h1>
                </div>
                <div>
                <img src={img9} alt="" className="w-20 h-20 mt-2"/>
                <h1 className="text-gray-700 mt-1 ml-2">Postgress SQL</h1>
                </div>
                  <div>
                <img src={img10} alt="" className="w-20 h-20"/>
                <h1 className="text-gray-700 mt-1 ml-2">React Native</h1>
                  </div>
                  <div>
                <img src={img11} alt="" className="w-20 h-20 mt-3"/>
                <h1 className="text-gray-700 mt-1 ml-2">MongoDB</h1>
                  </div>
                  <div>
                <img src={img12} alt="" className="w-20 h-20 mt-3"/>
                <h1 className="text-gray-700 mt-1 ml-2">Github</h1>
                  </div>
                  <div>
                <img src={img13} alt="" className="mt-4 w-20 h-20"/>
                <h1 className="text-gray-700 mt-1 ml-2">Figma</h1>

                  </div>
                 
                  
                      
                 
              </div>
             

           {/* <Link  
             to='/resume'            
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Download Resume
          </Link>   */}
        </div>
      </div>
    </section>
  );
}
