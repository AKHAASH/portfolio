import React from "react";
import "../css/Home.css";
import ScrollNavigator from "./ScrollNavigator";
import { Link } from "react-router-dom";
import photo from "../assets/AKHAASH-S.png"

function Home() {
  return (
    <div className="home-container-background">
      {/* <ScrollNavigator upPath="/" downPath="/about" /> */}
      
      <div className="home-container">
        {/* Left Section - Text */}
        <div className="home-text">
          <h1>Hi, I'm <span className="highlight">Akhaash S</span></h1>
          <h2 className="home-title">A Passionate <span className="developer">Full Stack Developer and Data Scientist</span></h2>
          <p className="home-description">
            I specialize in developing scalable full-stack applications using React, Flask, and MongoDB, while leveraging data science techniques to derive insights and optimize performance.
          </p>

          {/* Buttons */}
          <div className="home-buttons">
            <Link to="projects" className="btn primary-btn">View Projects</Link>
            <Link to="contact" className="btn secondary-btn">Contact Me</Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="home-image">
          <img src={photo} alt="Profile" className="profile-pic"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
