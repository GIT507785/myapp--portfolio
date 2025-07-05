import React from 'react'
import About from '../components/About'
import Services from '../components/Servicies'
import Contect from '../components/Contect'
import Header from '../components/Header'

const Home = () => {
  return (
    <div> 
      <Header /> 
      <About /> 
      <Services/> 
      <Contect />
    </div>
  )
}

export default Home
