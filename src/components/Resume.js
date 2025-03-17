import React from 'react'
import '../css/Resume.css'
import resumePDF from '../assets/Resume_Akhaash.pdf';

function Resume() {
  return (
    <div className='resume-container'>
      <h3>My Resume</h3>
      <iframe
        src={resumePDF}
        className="resume-viewer"
        title="Resume"
      ></iframe><br/>
      <a href={resumePDF}
        download="Akhaash_Resum.pdf" className="download-btn">
        Download Resume
      </a>
    </div>
  )
}

export default Resume
