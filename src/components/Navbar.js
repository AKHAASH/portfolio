import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {
  const location = useLocation();
  return (
    <div>
        <nav className="navbar">
        <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "current-component" : ""}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "current-component" : ""}>About</Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === "/projects" ? "current-component" : ""}>Projects</Link>
        </li>
        <li>
          <Link to="/skills" className={location.pathname === "/skills" ? "current-component" : ""}>Skills</Link>
        </li>
        <li>
          <Link to="/resume" className={location.pathname === "/resume" ? "current-component" : ""}>Resume</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "current-component" : ""}>Contact</Link>
        </li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
