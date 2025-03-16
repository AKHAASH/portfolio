import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {
  return (
    <div>
        <nav className="navbar">
        <div className="logo">Portfolio: Akhaash S</div>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
