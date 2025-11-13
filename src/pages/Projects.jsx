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
import thumImg3  from '../assets/thumbnail_resume.jpg'



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
        "I is fully responsive blogging website using modern web technologies. The platform allows users to create, edit, and share blog posts seamlessly. It features a clean user interface, dynamic content rendering, and a functional backend for managing blogs, comments, and user authentication..",
      tech: ["React js", "Tailwind Css", "Vite" , "Nodejs" , "expressjs", "mongodb", "figma", "javaScript"],
      demoLink: "https://blog-app-eight-ashy-81.vercel.app",
    },
    {
      image: thumImg2,
      title: "Resume Builder with AI features",
      description: " Designed and developed a dynamic blogging website featuring post creation, editing, and comment functionality.Integrated secure user authentication and content management using Node.js and MongoD Utilized React and Tailwind CSS for an interactive, fully responsive frontend experience.",

      tech: ["React js", "Tailwind Css", "Vite" , "Nodejs" , "expressjs", "mongodb", "figma", "javaScript"],      
      demoLink: "https://resume-builder-gules-three.vercel.app",
    },
    {
      image: thumImg2,
      title: "Task Manager",
      description:
        "Built a full-stack task management system that enables users to create, update, and categorize tasks with deadlines and status tracking.Implemented authentication, real-time updates, and a responsive UI using React, Tailwind CSS, Node.js, and MongoDB.",
      tech: ["React js", "Tailwind Css", "Vite" , "Nodejs" , "expressjs", "mongodb", "figma", "javaScript"],
      demoLink: "https://your-blog.com",
    },
  ];

  return (
    <div className="mt-14">
      <section className="bg-slate-50  py-20 pb-32 px-6 md:px-16">
        <div data-aos="fade-down" className="max-w-6xl mx-auto transition-all duration-500 ">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
            My Projects
          </h2>

          <div className="flex gap-10  flex-col items-center justify-center px-3">
            {projects.map((project, index) => (
              <div>
              <div
                key={index}
                className="bg-gray-200  flex gap-y-10 h-225  md:max-h-80 w-100 md:w-250  
                 rounded-2xl p-6 shadow-md  hover:shadow-xl transition"
              >
               <div className="flex gap-5 flex-col  md:flex-row">
                
                <div>
                  <img src={project.image} className="rounded-xl w-80  md:w-120  h-full  " alt="" />
                </div>

                <div>
                       <h1 className="mt-3  font-extrabold text-2xl">{project.title}</h1>
                        
                        <p className="w-xs    md:w-xl mt-2 text-gray-500"> {project.description}</p>
                             
                             <div className="cursor-pointer grid grid-cols-2 md:grid-cols-4">
                         {project.tech.map((techItem, i) => (
                           <span
                           key={i}
                           className="bg-blue-800 text-white  flex items-center justify-center mt-4 ml-2  md:ml-2 px-2   py-1  rounded-full"
                           >
                      {techItem}
                    </span>
                  ))} 
                  </div>
                    
                    <div className="mt-7 md:mt-3">
                  <a href={project.demoLink} className="bg-slate-900 hover:bg-slate-600 text-white   px-4 py-1 rounded-full "> 
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

      <div
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
      </div>

      <div className="px-5  mt-10  mb-18 bg-gray-100 py-10  ">
        <div> 
          <h1 className="text-4xl   py-2 md:text-5xl lg:text-6xl
           text-blue-800 font-serif mb-10   font-semibold justify-center flex">
            {" "}
            Experiance
          </h1>
          <div className="flex">
            <img src={google} alt="" className="w-8 h-8 mt-4 mr-4" />
            <h1 className="text-xl    py-2 md:text-4xl ">
              {" "}
              Lead Software Engineer at Google{" "}
            </h1>
          </div>
          <p className="mt-2 text-gray-500" >
            As a Lead Software Engineer at Google, I specialize in building scalable, high-performance systems that power products used by billions. With a deep focus on architecture, cross-functional collaboration, and engineering excellence, I lead teams that transform complex challenges into elegant, efficient solutions.

My work spans backend infrastructure, distributed systems, and AI-driven platforms — always with a focus on innovation, reliability, and user impact. At Google, I mentor engineers, shape product direction, and contribute to the technical vision that drives the next generation of technology.
          </p>
        </div>
        {/*  */}

        <div className="mt-8">
          <div className="flex">
            <img src={apple_icon} alt="" className="w-8 h-8  mt-4 mr-4" />
            <h1 className="text-xl py-2  md:text-4xl ">
              {" "}
              Junior Software Engineer at Apple{" "}
            </h1>
          </div>
          <p className="mt-2 text-gray-500">
            {" "}
            As a Junior Software Engineer at Apple, I’m passionate about crafting intuitive, high-quality software experiences that reflect Apple’s commitment to innovation and user-centric design. Working alongside some of the industry’s best engineers, I contribute to projects that touch millions of users around the world. <br /> 

My focus areas include clean code practices, feature development, and cross-platform integration — always guided by performance, security, and seamless user experience. I take pride in learning quickly, adapting to new technologies, and contributing meaningfully to team goals.
<br />
Driven by curiosity and a love for elegant design, I’m excited to grow within a culture that values precision, creativity, and pushing the boundaries of what’s possible through code.
          </p>
        </div>

        <div className="mt-5">
          <div className="flex">
            <img src={meta} alt="" className="w-7 h-8  mt-4 mr-4" />
            <h1 className="md:text-4xl  py-2  text-xl">
              {" "}
              Software Engineer at Meta
            </h1>
          </div>
          <p className="mt-2 text-gray-500">
            As an AI Engineer at Meta, I work at the forefront of intelligent systems, building the technologies that power next-generation experiences across Meta’s platforms. From recommendation engines to natural language processing and computer vision, I design and deploy AI models that scale across billions of users.
<br />
My role blends research and engineering — translating cutting-edge machine learning into real-world impact. I collaborate with cross-functional teams to build data-driven products that are personalized, efficient, and ethical by design.
<br /> 
With a passion for solving complex problems through intelligent automation, I’m focused on advancing AI that enhances connection, creativity, and human potential — all while pushing the boundaries of what’s possible in the metaverse and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
