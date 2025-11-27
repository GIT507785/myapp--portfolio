import React, { useEffect } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

import apple_icon from "../assets/apple-logo.png";
import meta from "../assets/meta.png";
import google from "../assets/google.png";

import thumImg  from '../assets/thubmnail_blog.jpg'
import thumImg2  from '../assets/thumbnail_resume.jpg'
import thumImg3  from '../assets/hotel.png'
import thumImg4  from '../assets/mos.jpg'



import java from '../assets/java.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg' 


import Aos from "aos";
import "aos/dist/aos.css";
import { div } from "framer-motion/client";
import { Code, Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const projects = [
    {
      image: thumImg,
      title: "Bloging Website",
      icons:[java, react, tailwind],
      description:
        "It is fully responsive blogging website with modern  technologies.The platform allows users to create, edit, and share blog posts seamlessly. ",
      tech: ["React js", "Tailwind Css", "Vite" , "Nodejs" , "expressjs", "mongodb", "figma", "javaScript"],
      demoLink: "https://blog-app-eight-ashy-81.vercel.app",
    },
    {
      image: thumImg2,
      title: "Resume Builder",
      description: "Create Professional Resumes in Minutes.Design Beautiful, Job-Winning Resumes with Ease.Professional Templates + Smart Editing.",
      icons:[java, react, tailwind],
      tech: ["React js", "Tailwind Css", "Vite" , "Nodejs" , "expressjs", "mongodb", "figma", "javaScript"],      
      demoLink: "https://resume-builder-gules-three.vercel.app",
    },
    {
      image: thumImg3,
      title: "Hotel Booking website",
      icons:[java, react, tailwind],
      description:
        "It is only for demo.",
      tech: ["React js", "Tailwind Css", "Vite" , "Nodejs" , "expressjs", "mongodb", "figma", "javaScript"],
      demoLink: "https://hotel-booking-haseeb3.vercel.app/",
    }, 
    {
      image: thumImg4,
      title: "Mosquito Controol",
      icons:[java, react, tailwind],
      description:
        "It is only for demo.",
      tech: ["React js", "Tailwind Css", "Vite" , "Nodejs" , "expressjs", "mongodb", "figma", "javaScript"],
      demoLink: "https://mos-control.vercel.app/",
    },  
  ];

  return (
    <div className="mt-14 dark:bg-black">
      <section className="bg-slate-50 dark:bg-black   py-20 pb-32 px-6 md:px-16">
        <div data-aos="fade-down" className="max-w-6xl mx-auto transition-all duration-500 ">
          <div className="flex items-center justify-center gap-5 
           
          ">
            <div className="border border-blue-400 size-15 bg-gray-700 rounded-2xl flex items-center justify-center">
          <Code className="text-blue-500 size-7"/>
            </div>
          <h2 className="text-4xl md:text-5xl mt-10 dark:bg-linear-to-r  from-white  to-blue-500 dark:text-transparent bg-clip-text font-semibold text-center mb-12">
            Featured Projects
          </h2>
          </div> 
           <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" style={{width:"100%"}}></div>


          <div className=" gap-10 mt-10  sm:px-30  grid grid-cols-1  sm:grid-cols-2 items-center justify-center px-3">
           {projects.map((item, index)=>{
           return(
            <div className="max-w-100 flex-col  flex border bg-gray-100  dark:bg-black border-gray-300 dark:border-blue-400 rounded-2xl ">
             <div>
              <img src={item.image} alt="" className="rounded-t-2xl  border-b border-gray-100  h-60 w-full"/>
             </div>
             <div className="mt-4 px-4"> 
              <div className="flex justify-between">
              <div className=" dark:text-white font-semibold font-serif text-xl"> {item.title} </div>
              <div className="flex gap-4">
                <img src={java} className="w-8 h-8 rounded-lg" alt=""/>
                <img src={react} className="w-8 h-8 rounded-lg" alt=""/>
                <img src={tailwind} className="w-8 h-8 rounded-lg" alt=""/>
                 
              </div>
              </div>
              <div className="mt-3">
                <p className="dark:text-gray-300 font-sans">{item.description}</p>
              </div>
              <Link to={item.demoLink} className="text-blue-400 flex gap-3 pb-6 mt-2">
               <ExternalLink /> Live Demo
              </Link>
             </div>
            </div>
           )
           })}
        </div>
        </div>
      </section>

      {/* <div
        data-aos="fade-up"
        className="mt-10   bg-gray-100  justify-center items-center"
      >
        <h1 className="text-3xl flex  justify-center md:text-5xl lg:text-6xl   font-bold  ">
          {" "}
          My latest work
        </h1>
        <div className=" flex  flex-col md:grid grid-cols-2 md:px-32  gap-8  mt-15">
          <img src={img1} alt="" className="w-[300px] " />
          <img src={img2} alt="" className="w-[300px]" />
          <img src={img3} alt="" className="w-[300px]" />
          <img src={img4} alt="" className="w-[300px] h-[200px]" />
          <img src={img5} alt="" className="w-[300px] h-[200px]" />
          <img src={img6} alt="" className="w-[300px] h-[200px] mb-5 " />
        </div> 
      </div> */}

      <div className="px-5 sm:px-30  sm:mt-10  mb-18  py-10  dark:bg-black">
        <div className="px-3">
           <div className="flex items-center justify-center">
          <h1 className="text-4xl flex  py-2 md:text-5xl lg:text-6xl
            font-serif mb-10   font-semibold justify-center dark:bg-linear-to-r dark:text-transparent bg-clip-text  from-white  to-blue-500 ">
            Experience  
          </h1>
                  <hr className="h-10 w-20 mt-1 font-extrabold  dark:bg-linear-to-r  from-white  to-blue-500  dark:text-transparent bg-clip-text  text-black"/> 
              </div>
          <div className="flex">
            <h1 className="text-xl dark:bg-linear-to-r  from-white  to-blue-500  dark:text-transparent bg-clip-text   py-2 md:text-4xl ">
              🧠 Professional Summary
            </h1>
          </div>
          <li className="mt-2  dark:text-white text-gray-500" > 
            Passionate and results-driven Full Stack Developer with 2 years of experience <br /> in  designing and building modern, responsive, and scalable web applications.
          </li>
          <li className="mt-2  text-gray-500 dark:text-white" >
            Proficient in both frontend and backend development using React.js, <br /> Tailwind CSS, Node.js, Express, and MongoDB.
          </li>
          <li className="mt-2  text-gray-500 dark:text-white" >
            Focused on writing clean, efficient code and creating intuitive user <br /> experiences while delivering high-quality software solutions on time.
          </li>
        </div>
        {/*  */}
       
       <hr className=" h-0.5 w-sm  dark:bg-linear-to-r from-blue-300  to-blue-500  sm:w-xl  mt-4 "/>

        <div className="mt-8 px-3">
          <div className="flex">
            <h1 className="text-xl py-2  md:text-4xl 
            dark:bg-linear-to-r dark:text-transparent bg-clip-text from-white  to-blue-500  ">
              ⚙️ Core Skills
            </h1>
          </div>
          <div className="mt-2  mb-4  text-gray-500 dark:text-white">
            <li className="mt-1"> Frontend: React.js, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3 </li>
            <li className="mt-1">Backend: Node.js, Express.js, RESTful APIs  </li>
            <li className="mt-1"> Database: MongoDB, Mongoose </li>
            <li className="mt-1"> Tools & Platforms: Git, GitHub, Vercel, Render, Postman </li>
             <li className="mt-1"> Other: JWT Authentication, Responsive Design, Debugging, Performance Optimization </li>
          </div>
        </div>
       <hr className=" h-0.5 w-sm  dark:bg-linear-to-r from-blue-300  to-blue-500  sm:w-xl  mt-4 "/>


        <div className="mt-5 px-3">
          <div className="flex">
            <h1 className="md:text-4xl mt-3 dark:bg-linear-to-r dark:text-transparent bg-clip-text  from-white  to-blue-500   py-2  text-xl">
              🚀 Key Responsibilities & Achievements
            </h1>
          </div>
          <div className="mt-5 text-gray-500 dark:text-white">
           <li className="mt-1  "> Developed and deployed multiple full-stack web applications, including a Blogging Platform and Task Manager. </li>
           <li className="mt-1"> Designed and implemented RESTful APIs for smooth data flow between frontend and backend. </li>
           <li className="mt-1"> Integrated secure authentication and authorization using JWT and middleware validation. </li>
           <li className="mt-1"> Built modern, responsive UIs with React and Tailwind CSS to enhance user engagement. </li>
            <li className="mt-1"> Collaborated with teams and clients to deliver scalable, high-performance, and maintainable solutions </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
