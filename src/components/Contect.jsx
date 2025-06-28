import React from "react";

export default function ContactSection() {
  
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "45488346-5245-4026-b121-8f206c005167");

    const response = await fetch("https://api.web3forms.com/submit ", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="bg-gray-100 text-gray-800 py-20 px-6 md:px-16">
        <h1 className="text-3xl md:text5xl lg:text-6xl bg-gradient-to-r from-pink-600 to-blue-900  text-transparent bg-clip-text   
         flex justify-center font-semibold  mt-4 pb-14">Get In Touch</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md w-full">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-purple-700 cursor-pointer 
              text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form> 
          <span>{result}</span>
        </div>

        {/* Right: Info / Message */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Let’s Work Together</h3>
          <p className="text-gray-600 mb-6">
            I’m open to freelance opportunities, collaboration, and full-time roles. If you have an idea or project in mind, don’t hesitate to reach out!
          </p>
          <ul className="text-gray-700 space-y-3">
            <li><strong>Email:</strong> hafizhaseeb4480.com</li>
            <li><strong>Location:</strong> Faislabad , Pakistan</li>
            <li><strong>Available for:</strong> Remote & Onsite</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
