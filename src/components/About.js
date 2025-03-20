import React from 'react';
import '../css/About.css';
import ScrollNavigator from "./ScrollNavigator";

function About() {
  return (
    <div className='about-container-background'>
      <div className='about-container'>
        {/* <ScrollNavigator upPath="/" downPath="/projects" /> */}
        <h1 className="about-title">About Me</h1>

        <div className="about-content">
          <p className="about-description">
            I am <strong>Akhaash S</strong>, a **third-year B.Tech AI & DS student** passionate about 
            **building interactive and scalable web applications**. I specialize in **React, Flask, and APIs**, 
            with strong skills in **Python, Git, and Figma**.
          </p>

          <h2 className="about-subtitle">Education</h2>
          <ul className="about-list">
            <li><strong>B.Tech - Artificial Intelligence & Data Science</strong><br/>K Ramakrishnan College of Technology (2026) - CGPA: 8.36</li>
            <li><strong>HSC (2022)</strong> - Campion Anglo Indian Higher Secondary School (86.2%)</li>
            <li><strong>SSLC (2020)</strong> - Campion Anglo Indian Higher Secondary School (77.2%)</li>
          </ul>

          <h2 className="about-subtitle">Certifications & Achievements</h2>
          <ul className="about-list">
            <li>AWS Certified Cloud Practitioner</li>
            <li>NPTEL Elite - Competitive Programming</li>
            <li>NPTEL Certifications in Soft Skills & Cloud Computing</li>
            <li>Participated in "Ethical Hacking" Workshop</li>
          </ul>

          <h2 className="about-subtitle">Hobbies & Interests</h2>
          <ul className="about-list">
            <li>Speedcubing (3x3 Cube)</li>
            <li>Swimming</li>
            <li>Cricket</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
