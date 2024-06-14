import React from 'react'

import Header from '../components/core/Home/Header'
import Brand from '../components/core/Home/Brand'
import WhatGPT3 from '../components/core/Home/WhatGpt'
import Possiblity from '../components/core/Home/Possiblity'
import Blog from '../components/core/Home/Blog'
import Footer from '../components/core/Home/Footer'
import Feature from '../components/core/Home/Feature'
// import Navbar from '../components/common/Navbar'
const Home = () => {
  return (
    <div className="">
        <div className="gradient__bg">
        
        <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Feature></Feature>
        <Possiblity/>
        <Blog/>
        <Footer/>
        
  </div>
  )
}

export default Home