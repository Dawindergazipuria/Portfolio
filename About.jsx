import React from 'react'
import './About.css'
import profilepic from '../assets/profilepic.jpg'
import theme_pattern from '../assets/theme_pattern.svg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" className="src" />
      </div>  
       <div className="about-sections">
        <div className="about-left">
          <img src={profilepic} alt="" className="src" />
        </div>
      <div className="about-right">
        <div className="about-para">
          <p>I am a fronent End webdeveloper</p>
          <p>My passion for frontend is not only</p>
        </div>
        <div className="about-skills">
          <div className="about-skill"><p>HTML & CSS</p>
              <p><hr style={{width:"70%"}}/></p></div>
          <div className="about-skill"><p>React Js</p>
              <p><hr style={{width:"90%"}}/></p></div>
          <div className="about-skill"> <p>JavaScript</p>
              <p><hr style={{width:"50%"}}/></p></div>
          <div className="about-skill"> <p>Node Js</p>
              <p><hr style={{width:"80p%"}}/></p></div>
          <div className="about-skill"> <p>Jira</p>
              <p><hr style={{width:"90%"}}/></p></div>
          <div className="about-skill"> <p>Scrum</p>
              <p><hr style={{width:"85%"}}/></p></div>
          <div className="about-skill"> <p>SmartSheet</p>
              <p><hr style={{width:"95%"}}/></p></div>
          </div>  
     </div>
       </div>
     
    </div>
  )
}

export default About
