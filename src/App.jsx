import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  


  return (
<div>   
  <ScrollToTop/> 
<Navbar/>     
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
