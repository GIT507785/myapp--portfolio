import { div } from "framer-motion/client";
import React from "react";

const Testimonials = () => {
  return (
    <div className="dark:text-white dark:bg-black ">
      <h1 className="pt-[130px]   flex justify-center text-4xl font-bold  md:text-5xl lg:text-6xl  
      bg-gradient-to-r   from-green-400  to-sky-500 text-transparent bg-clip-text   ">
        {" "}
        Testimonials
      </h1>
      <div className="mt-[50px] ">
        <div class="flex flex-wrap items-center  pb-[50px]   justify-center gap-6 pt-14">
          <div class="text-sm w-80 border dark:border-teal-400 border-gray-500/30 pb-6 rounded-lg dark:bg-black bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
            <div class="flex flex-col items-center px-5 py-4 relative">
              <img
                class="h-24 w-24 absolute -top-14 rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="userImage1"
              />
              <div class="pt-8  text-center">
                <h1 class="text-lg font-medium text-gray-800 dark:text-teal-400">
                  Donald Jackman
                </h1>
                <p class="text-gray-800/80 dark:text-teal-400">Content Creator</p>
              </div>
            </div>
            <p class="text-gray-500  px-6 text-center  dark:text-white">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
            <div class="flex justify-center pt-4">
              <div class="flex gap-0.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
              </div>
            </div>
          </div>

          <br />
          <div class="text-sm w-80 border dark:border-teal-400 dark:bg-black  border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
            <div class="flex flex-col items-center px-5 py-4 relative">
              <img
                class="h-24 w-24 absolute -top-14 rounded-full"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="userImage2"
              />
              <div class="pt-8 text-center">
                <h1 class="text-lg font-medium text-gray-800 dark:text-teal-400">
                  Richard Nelson
                </h1>
                <p class="text-gray-800/80 dark:text-teal-400">Instagram Influencer</p>
              </div>
            </div>
            <p class="text-gray-500 px-6 text-center dark:text-white">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
            <div class="flex justify-center pt-4">
              <div class="flex gap-0.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
              </div>
            </div>
          </div>
          <br />
          <div class="text-sm w-80 border dark:border-teal-400 dark:bg-black border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
            <div class="flex flex-col items-center px-5 py-4 relative">
              <img
                class="h-24 w-24 absolute -top-14 rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="userImage3"
              />
              <div class="pt-8 text-center">
                <h1 class="text-lg font-medium dark:text-teal-400 text-gray-800">
                  James Washington
                </h1>
                <p class="text-gray-800/80 dark:text-teal-400">Marketing Manager</p>
              </div>
            </div>
            <p class="text-gray-500 px-6 text-center dark:text-white">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
            <div class="flex justify-center pt-4">
              <div class="flex gap-0.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                    fill="#FF532E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col  md:px-10 sm:px-4   py-10">
          <h1 className="text-2xl   md:text-5xl    font-bold mt-3  text-purple-900  
 font-serif   flex justify-center mb-10   dark:text-teal-400" > Why Choose Me  </h1>
          <div className="mt-5 px-5"
          >
            <h1 className="text-4xl md:text-4xl font-bold mt-3 dark:text-teal-400 text-slate-500  ">
              Proven Full-Stack Expertise  </h1>
            <p className="text-base text-gray-800 dark:text-white mt-4" >
              {/* <span className="font-bold  text-xl text-blue-800 dark:text-teal-400"></span>    */}
              <li>
                Skilled in React, Node.js, Express, and MongoDB
              </li>
              <li>
                Experience building real-world applications (blogs, auth systems, admin panels) </li>
              <li>
                Clean, optimized, and scalable code
              </li>

              <li>
                Strong understanding of APIs, JWT, and secure authentication
              </li>
              <li>
                Ability to build both front-end UI and complete backend logic
              </li>
            </p>


          </div>

          {/* */}
          <div className="mt-5 px-5 " >
            <h1 className="text-4xl md:text-4xl font-bold  text-slate-600 dark:text-teal-400  mt-4 " >  Reliable & Fast Problem Solver </h1>
            <p className="text-base text-gray-800 mt-5 dark:text-white " >
              <span className="font-bold text-blue-800  text-blactext-xl dark:text-teal-400"></span> 
                
                <li>Quickly identifies bugs and provides efficient solutions</li>
                <li>Strong debugging & error-handling skills</li>
                <li>Can work under deadlines with consistent results</li>
                <li>Always writes maintainable and clean code</li>
                <li>Provides clear communication and regular updates</li>
            </p>
          </div>
          {/*  */}
          <div className="mt-5 px-5 " >
            <h1 className="text-4xl md:text-4xl font-bold mt-4 dark:text-teal-400  text-slate-600 " >Creative & User-Focused Development </h1>
            <p className="text-base dark:text-white text-gray-800 mt-5" >
              <span className="font-bold text-blactext-xl text-blue-800 dark:text-teal-400"></span> 
                <li>Modern UI/UX using Tailwind CSS & React</li>
                <li>Responsive and mobile-friendly designs</li>
                <li>Focus on performance and smooth user experience</li>
                <li>Custom features based on client needs</li>
                <li>Ability to turn ideas into polished, functional apps</li>
            </p>
          </div>
        </div>

      </div>

      <div className="flex justify-between  mb-20  px-4  text-white flex-col md:flex-row 
        py-4 md:px-7    sm:px-2 bg-gradient-to-r   from-slate-900  to-sky-800 ">
        <div className="  md:border-r-3 mt-5  pr-4 border-gray-500 ">
          <p className="text-2xl">4+</p>
          <p className="text-xl font-bold">Years of experiance</p>
        </div>

        <div className="  md:border-r-3  border-t-2  md:border-t-0  pr-4  mt-5 border-gray-300">
          <p className="text-2xl mt-2 ">20+</p>
          <p className="text-xl font-bold">Projects Completed</p>
        </div>

        <div className="mt-5 md:border-0   p-1  border-t-2 border-gray-300">
          <p className="text-2xl mt-2">19+</p>
          <p className="text-xl font-bold">Clients Happy</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
