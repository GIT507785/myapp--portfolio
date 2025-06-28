import React, { useEffect } from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'

import Aos from "aos";
import 'aos/dist/aos.css' 


const Projects = () => {

  useEffect(()=>{
    Aos.init({duration: 2000}) 
  })

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my skills and projects using React and Tailwind CSS.",
      tech: ["React", "Tailwind", "Vite"],
      demoLink: "https://your-portfolio.com",
      codeLink: "https://github.com/yourname/portfolio",
    },
    {
      title: "Task Manager App",
      description: "A full-featured task management app with drag-and-drop, dark mode, and more.",
      tech: ["React", "Redux", "Firebase"],
      demoLink: "https://your-task-app.com",
      codeLink: "https://github.com/yourname/task-manager",
    },
    {
      title: "Blog Platform",
      description: "A Markdown blog system with user authentication and real-time comments.",
      tech: ["Next.js", "Tailwind", "MongoDB"],
      demoLink: "https://your-blog.com",
      codeLink: "https://github.com/yourname/blog-platform",
    },
  ];

  return ( 
<div className='mt-14'>
  <section className="bg-gray-900 text-white py-20 pb-32 px-6 md:px-16">
      <div  data-aos = 'fade-up-left'    className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-blue-400 mb-4">
                {project.tech.map((techItem, i) => (
                  <span key={i} className="bg-blue-800 px-2 py-1 rounded-full">{techItem}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  

    
    <div  data-aos = 'fade-up'   className='mt-10   justify-center items-center' >
      <h1 className='text-3xl flex  justify-center md:text-5xl lg:text-6xl   font-bold  '> My latest work</h1>
           <div className='mt-5 flex  flex-col md:grid grid-cols-2 px-32 gap-8  mt-15'>
            <img src={img1} alt=""  className='w-[300px]'  /> 
            <img src={img2} alt="" className='w-[300px]' /> 
            <img src={img3} alt="" className='w-[300px]' /> 
            <img src={img4} alt=""   className='w-[300px]'/>  
            <img src={img5} alt=""  className='w-[300px]'/> 
            <img src={img6} alt=""  className='w-[300px]'/> 

           </div>


    </div>
</div>
  )
}

export default Projects
