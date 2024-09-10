import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Explore Your Career Universe</h1>
        <p>Discover millions of career possibilities through personalized mind maps.</p>
        <br></br><button className='btn'>Start Your Journery <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
