import React, { useEffect } from "react";
import myImage from '../assets/haseeb.jpg'
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { DiReact } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiGit,
  // SiScss,
  SiMongodb,
  SiPostman,
  SiCloudflare,
  SiSupabase,
  SiReact,
  SiSanity,
  SiFramer,
  SiVercel,
  SiCsswizardry,
} from "react-icons/si";
import { TbBrandReactNative, TbFileTypeCss } from "react-icons/tb";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";



export default function AboutMe()  { 

  const images = [
     { name: "Html", icon: <FaHtml5  className="text-red-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Css", icon:  <TbFileTypeCss className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "Express", icon: <SiExpress className= "text-shadow-slate-700 dark:text-gray-300" /> },
  // { name: "SCSS", icon: <SiScss className="text-pink-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Framer", icon: <SiFramer className="text-pink-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-300" /> },
  { name: "Cloudflare", icon: <SiCloudflare className="text-orange-400" /> },
  { name: "Github", icon: <AiFillGithub className="text-green-400" /> },
  { name: "React Native", icon: <TbBrandReactNative className="text-green-400" /> },


  ]

  useEffect(()=>{
 Aos.init({duration : 2000})
  }, [])
  return (
    <section className="bg-gray-100 dark:bg-black text-gray-900 py-20 px-6 md:px-10">
      <div data-aos = 'fade-up' className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Profile Image */}
        <div className="w-50 h-50 border-7 -mt-2  sm:-mt-135 dark:border-b-blue-600 dark:border-t-blue-300 dark:border-r-blue-300 dark:border-l-blue-600
          border-red-500  md:w-60 md:h-60 
        rounded-full overflow-hidden shadow-lg ">
          <img
            src={myImage}
            alt="Your Name"
            className="w-full h-full "
          />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 dark:text-white">
          <h2 className="text-4xl md:text-5xl font-bold  dark:bg-linear-to-r dark:text-transparent bg-clip-text from-blue-200  to-blue-800
            -mt-10 mb-4 ">About Me</h2>
          <p className="text-lg mb-6 mt-5">
            Hello! I’m <span className="font-semibold dark:text-blue-400 text-blue-600">HASEEB</span>, a passionate Web Developer focused on building modern and responsive websites using technologies like React, Tailwind CSS, and Next.js. I love clean design, scalable code, and solving real-world problems.
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
               {/* <p className="text-gray-500 mt-1 dark:text-white">The skills , tools and technologies I am really good at.</p> */}
               <div>

             <div className="flex gap-5 mt-20 ">
                   <div className="flex items-center justify-center size-15 rounded-xl border-blue-400 border">
                    <DiReact className="text-blue-500 size-10"/>
                   </div>
                   <p className="bg-gray-400  text-4xl text-gray-800 rounded-2xl  items-center font-semibold
                    justify-center dark:bg-linear-to-r dark:text-transparent  bg-clip-text from-blue-200
                    to-blue-800  flex  py-1">My Skills</p>
                    </div>
                    <div className="h-px mt-4 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" style={{width:"100%"}}></div>
                    
                   <div className="grid mt-10  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 px-4">
        {images.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center dark:text-teal-50  bg-gray-200 dark:bg-[#0f0f0f] border border-gray-700 rounded-xl p-5 hover:bg-gray-200  dark:hover:bg-[#1a1a1a] transition duration-200"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <p className="text-sm font-medium">{item.name}</p>
          </div>
        ))}
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
