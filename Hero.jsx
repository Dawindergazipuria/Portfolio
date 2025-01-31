import './Hero.css'
import React from 'react'
import profilepic from'../assets/profilepic.jpg'

import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profilepic} alt="" className="src" />
      <h1> I am<span> Dawinder Singh</span>, front-end developer based in Patiala, Punjab.</h1>
      <p>change me hero.jsx</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume  </div>
      </div>
    
    </div>
  )
}

export default Hero
