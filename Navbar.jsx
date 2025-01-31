import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import dlogo from '../assets/dlogo.jpg'
import nav_underline from '../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {

  const [menu, setMenu]= useState("");

  return (
    <>
    <div className='navbar'>
      <img src ={dlogo} alt=""/>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink> { menu==="home"?<img src={nav_underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{ menu==="about"?<img src={nav_underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{ menu==="services"?<img src={nav_underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{ menu==="work"?<img src={nav_underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{ menu==="contact"?<img src={nav_underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect">
      <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with Me</AnchorLink>
      </div>
    </div>
    </>
    )
}

export default Navbar
