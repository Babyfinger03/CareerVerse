import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-center">
      <h1><center>ROADMAP</center></h1> <br></br><br></br><br></br><br></br>
      <center><img src={about_img} alt="" className='about-img'/></center>

      </div>

    </div>
  )
}

export default About
