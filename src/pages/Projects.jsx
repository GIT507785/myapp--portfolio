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



import Aos from "aos";
import "aos/dist/aos.css";
import { div } from "framer-motion/client";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const projects = [
    {
      image: thumImg,
      title: "Bloging Website",
      description:
        "It is fully responsive blogging website using modern web technologies. The platform allows users to create, edit, and share blog posts seamlessly. It features a clean user interface, dynamic content rendering, and a functional backend for managing blogs, comments, and user authentication..",
      tech: ["React js", "Tailwind Css", "Vite" , "Nodejs" , "expressjs", "mongodb", "figma", "javaScript"],
      demoLink: "https://blog-app-eight-ashy-81.vercel.app",
    },
    {
      image: thumImg2,
      title: "Resume Builder with AI features",
      description: "Create Professional Resumes in Minutes.Create Smart, Fast & Free Resume Builder for Job Seekers.Design Beautiful, Job-Winning Resumes with Ease.Professional Templates + Smart Editing = Perfect Resume.",

      tech: ["React js", "Tailwind Css", "Vite" , "Nodejs" , "expressjs", "mongodb", "figma", "javaScript"],      
      demoLink: "https://resume-builder-gules-three.vercel.app",
    },
    {
      image: thumImg3,
      title: "Hotel Booking website",
      description:
        "It is only for demo.",
      tech: ["React js", "Tailwind Css", "Vite" , "Nodejs" , "expressjs", "mongodb", "figma", "javaScript"],
      demoLink: "https://hotel-booking-haseeb3.vercel.app/",
    },
  ];

  return (
    <div className="mt-14 dark:bg-black">
      <section className="bg-slate-50 dark:bg-black   py-20 pb-32 px-6 md:px-16">
        <div data-aos="fade-down" className="max-w-6xl mx-auto transition-all duration-500 ">
          <h2 className="text-4xl md:text-5xl dark:text-teal-400 font-semibold text-center mb-12">
            My Projects
          </h2>

          <div className="flex gap-10  flex-col items-center justify-center px-3">
            {projects.map((project, index) => (
              <div>
              <div
                key={index}
                className="bg-gray-200 dark:bg-slate-950 dark:border-teal-500 dark:border  flex gap-y-10 h-225  md:max-h-80 w-100 md:w-250  
                 rounded-2xl p-6 shadow-md  hover:shadow-xl transition"
              >
               <div className="flex gap-5 flex-col  md:flex-row">
                
                <div>
                  <img src={project.image} className="rounded-xl w-80  md:w-120  h-full  " alt="" />
                </div>

                <div>
                       <h1 className="mt-3  font-extrabold dark:text-teal-400 text-2xl">{project.title}</h1>
                        
                        <p className="w-xs    md:w-xl mt-2 text-gray-500 dark:text-white"> {project.description}</p>
                             
                             <div className="cursor-pointer grid grid-cols-2 md:grid-cols-4">
                         {project.tech.map((techItem, i) => (
                           <span
                           key={i}
                           className="bg-blue-800 text-white dark:bg-teal-400  flex items-center justify-center mt-4 ml-2  md:ml-2 px-2   py-1  rounded-full"
                           >
                      {techItem}
                    </span>
                  ))} 
                  </div>
                    
                    <div className="mt-7 md:mt-3">
                  <a href={project.demoLink} className="bg-slate-900  dark:text-teal-400
                   hover:bg-slate-600 dark:border-teal-400 border dark:hover:bg-teal-900  text-white   px-4 py-1 rounded-full "> 
                    Live Preview
                  </a>
                    </div>
                         
                </div>
                </div>  
                                   
              </div>
                </div>
            ))}
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
            font-serif mb-10   font-semibold justify-center dark:text-teal-400">
            Experience  
          </h1>
                  <hr className="h-10 w-20 mt-1 font-extrabold  dark:text-teal-400  text-gray-500 "/> 
              </div>
          <div className="flex">
            <h1 className="text-xl dark:text-teal-400   py-2 md:text-4xl ">
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
       
       <hr className="text-gray-300 h-2 w-sm dark:text-teal-400 sm:w-xl  mt-4 "/>

        <div className="mt-8 px-3">
          <div className="flex">
            <h1 className="text-xl py-2  md:text-4xl dark:text-teal-400 ">
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
       <hr className="text-gray-300 h-2 w-sm dark:text-teal-400 sm:w-xl mt-4 "/>


        <div className="mt-5 px-3">
          <div className="flex">
            <h1 className="md:text-4xl mt-3 dark:text-teal-400  py-2  text-xl">
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
