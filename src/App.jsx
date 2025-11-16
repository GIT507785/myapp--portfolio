import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
  import { ToastContainer, toast } from 'react-toastify'

function App() {
  
const [theme , setTheme] = useState(localStorage.getItem('theme') ? 
localStorage.getItem('theme') : 'light')

  return (
<div className="dark:bg-black">   
  <ToastContainer/>
  <ScrollToTop/> 
<Navbar setTheme={setTheme} theme={theme}/>     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/testimonials" element={<Testimonials/>} /> 
        <Route path="/contactus" element={<ContactUs/>} /> 
      </Routes>
      <Footer />
</div>    
  );
}

export default App;
