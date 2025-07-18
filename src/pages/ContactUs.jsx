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
    <div className= 'px-3 md:px-32 font-serif'>
         <h1 className='flex justify-center text-3xl font-bold   md:text-5xl  lg:text-6xl mt-[120px]'> Contact  <span className='text-blue-800'> US</span> </h1>
      <div className=' mt-[100px] text-sm  md:text-xl '>
        <hr  className='px-32 mt-[-50px] text-gray-400'/>
        <p className='mt-8  '>
            Thank you for your interest in our  Developing servicies  services.
             We are glad to hear that you found our experience impressive and would like to work with us.     </p>
<br />
             <p> If you have any specific requirements or questions about our services, please don't hesitate to contact us. We are more than happy to help and provide you with a personalized solution that meets your needs.</p>
<br />
             <p>
                To get started, follow the contact email below and let us know what you are looking for. We will get back to you as soon as possible.
             </p>
<br />
             <p className='mb-5'> We look forward to hearing from you soon and working together to achieve your goals.</p>

      </div> 


 <div>

 <div className='md:flex  sm:flex-cols  sm:mb-14 text-sm  md:text-xl   mt-20 gap-10'>
          <div>
<h1 className='text-3xl md:text-5xl  lg:text-6xl  text-blue-800  font-semibold'> Thank You So Much</h1> 
<p className='mt-7 text-sm  md:text-xl '>  I would like to express my sincere gratitude for taking the time to review my portfolio.</p> 
<br /> 
<p> Your interest and attention to my work are highly appreciated, and I hope that it <br /> has provided you with valuable insights into my expertise and capabilities.</p>
<br />
<p> I am thrilled to learn that you found my portfolio informative and useful. It is my pleasure <br /> to offer my services to help you take your marketing efforts to the next level. With my <br /> experience and expertise, I am confident that I can  provide you <br /> with the necessary support and guidance to achieve your marketing goals.</p>
<br />
<p>
    Thank you once again for your time and consideration. I look forward to the opportunity to work with you and your team.
</p>
<br />
<p className='font-semibold text-2xl'> Best regards,</p> 
<br />
<p className='text-green-800 font-semibold text-2xl '>MUHAMMAD HASEEB</p>
          </div>  
 {/* Left */}
<div>
    <img src={contactimg} alt="" className='w-[400px] mt-14'   />
 </div>
</div>

  
 </div>

    <form onSubmit={onSubmit}  class="flex flex-col items-center text-sm">
    <p class="text-lg text-blue-600 font-medium pb-2 font-serif ">Contact Us</p>
    <h1 class="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
    <p class="text-sm text-gray-500 text-center pb-10"> I’m open to freelance opportunities, collaboration, and full-time roles. <br /> If you have an idea or project in mind, don’t hesitate to reach out!</p>
    
    <div class="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        <div class="w-full">
            <label class="text-black/70" for="name">Your Name</label>
            <input class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
        </div>
        <div class="w-full">
            <label class="text-black/70" for="name">Your Email</label>
            <input class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required/>
        </div>
    </div>

    <div class="mt-6 w-[350px] md:w-[700px]">
        <label class="text-black/70" for="name">Message</label>
        <textarea class="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
    </div>

    <button  type="submit" class="mt-5 mb-4 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Message</button>
</form>
<span>{result}</span>
    </div>
  )
}

export default ContactUs
