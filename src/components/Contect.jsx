import React, { useState } from "react";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";

export default function ContactSection() {

   const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "262718e2-52ef-4d18-ae13-91ed6de1e69c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-black  text-gray-800 py-20 px-6 md:px-16">
        <h1 className="text-3xl md:text5xl lg:text-6xl bg-gradient-to-r from-pink-600 to-blue-900  text-transparent bg-clip-text   
         flex justify-center font-semibold  mt-4 dark:bg-linear-to-r dark:text-transparent dark:bg-clip-text dark:from-white  dark:to-blue-500  pb-14">Get In Touch</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md w-full dark:bg-black
         dark:text-white  dark:border  dark:border-blue-400 ">
          <h2 className="text-3xl font-bold mb-6 dark:bg-linear-to-r dark:text-transparent bg-clip-text from-white  to-blue-500 ">Contact Me</h2>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 dark:bg-linear-to-r dark:text-transparent bg-clip-text from-white  to-blue-500 ">Name</label>
              <input
               
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 dark:border-blue-400  rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 dark:bg-linear-to-r dark:text-transparent bg-clip-text from-white  to-blue-500 ">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 dark:border-blue-400  rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 dark:bg-linear-to-r dark:text-transparent bg-clip-text from-white  to-blue-500">Message</label>
              <textarea
                id="message"
                rows="5"
                name="message"
                className="w-full border dark:border-blue-400  border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-purple-700 cursor-pointer dark:bg-blue-400 dark:hover:bg-blue-600 
               dark:text-teal-50 
              text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Send Message
            </button>
            <span>{result}</span>
          </form> 
        </div>

        {/* Right: Info / Message */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4 dark:bg-linear-to-r dark:text-transparent bg-clip-text from-white  to-blue-500 ">Let’s Work Together</h3>
          <p className="text-gray-600 mb-6 dark:text-white">
            I'm open to freelance opportunities, collaboration, and full-time roles. If you have an idea or project in mind, don’t hesitate to reach out!
          </p> 
          <ul className="text-gray-700 space-y-3 dark:text-white ">
            <li><strong className="dark:bg-linear-to-r dark:text-transparent bg-clip-text from-white  to-blue-500 ">Email:</strong> hafizhaseeb4480@gmail.com</li>
            <li><strong className="dark:bg-linear-to-r dark:text-transparent bg-clip-text from-white  to-blue-500 ">Location:</strong> Faislabad , Pakistan</li>
            <li><strong className="dark:bg-linear-to-r dark:text-transparent bg-clip-text from-white  to-blue-500 ">Available for:</strong> Remote & Onsite</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
