import React from 'react'
import '../css/About.css'
import ScrollNavigator from "./ScrollNavigator";

function About() {
  return (
    <div className='about-container'>
      <ScrollNavigator upPath="/" downPath="/projects" />
      About
    </div>
  )
}

export default About
