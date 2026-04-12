import React from 'react'
import contactimg from '../assets/contactimage.jpg'


const ContactUs = () => {

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
   <div className="pt-16 sm:mt-20 mt-10">
  <div className="px-4 sm:px-6 lg:px-20 font-serif dark:bg-black dark:text-white">

    {/* Heading */}
    <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
    bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
      Contact <span>Us</span>
    </h1>

    {/* Intro */}
    <div className="mt-12 text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
      <hr className="border-gray-400 mb-6" />

      <p>
        Thank you for your interest in our developing services. We are glad to hear that you found our experience impressive and would like to work with us.
      </p>

      <p className="mt-4">
        If you have any specific requirements or questions about our services, please don't hesitate to contact us.
      </p>

      <p className="mt-4">
        To get started, follow the contact email below and let us know what you are looking for.
      </p>

      <p className="mt-4">
        We look forward to working with you.
      </p>
    </div>

    {/* Content Section */}
    <div className="mt-16 flex flex-col lg:flex-row items-center gap-10">

      {/* Left Text */}
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold 
        bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Thank You So Much
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg">
          I would like to express my sincere gratitude for reviewing my portfolio.
        </p>

        <p className="mt-4">
          Your interest is highly appreciated and I hope it gave you insight into my expertise.
        </p>

        <p className="mt-4">
          I’m confident I can help you achieve your marketing goals.
        </p>

        <p className="mt-4">
          Looking forward to working with you.
        </p>

        <p className="mt-6 text-xl font-semibold text-blue-500">Best regards,</p>
        <p className="text-xl font-bold text-green-600">MUHAMMAD HASEEB</p>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img 
          src={contactimg} 
          alt="contact" 
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>

    {/* Form */}
    <form onSubmit={onSubmit} className="mt-20 flex flex-col items-center text-sm">

      <p className="text-blue-600 font-medium font-serif dark:text-white">
        Contact Us
      </p>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center 
      bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
        Get in touch with us
      </h1>

      <p className="text-gray-500 text-center mt-2 mb-8 max-w-xl dark:text-white">
        I’m open to freelance opportunities and collaborations.
      </p>

      {/* Inputs */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">

        <div className="w-full">
          <label>Your Name</label>
          <input
            className="h-12 p-2 mt-2 w-full border rounded outline-none focus:border-indigo-400"
            type="text"
            required
          />
        </div>

        <div className="w-full">
          <label>Your Email</label>
          <input
            className="h-12 p-2 mt-2 w-full border rounded outline-none focus:border-indigo-400"
            type="email"
            required
          />
        </div>

      </div>

      {/* Textarea */}
      <div className="mt-6 w-full max-w-2xl">
        <label>Message</label>
        <textarea
          className="w-full mt-2 p-2 h-40 border rounded resize-none outline-none focus:border-indigo-400"
          required
        ></textarea>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-6 bg-indigo-600 text-white h-12 w-48 rounded active:scale-95 transition"
      >
        Send Message
      </button>

      <span className="mt-4">{result}</span>
    </form>

  </div>
</div>
  )
}

export default ContactUs
