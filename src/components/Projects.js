import React from 'react';
import '../css/Projects.css';
import ScrollNavigator from "./ScrollNavigator";

const projects = [
  {
    title: "CGPA Calculator",
    description: "A web-based tool to calculate CGPA using HTML, CSS, and JavaScript.",
    image: "https://play-lh.googleusercontent.com/L3JAZ8GHzKLhFSD-4L3rzcsi9ome094WwTtvAeUTahxmB6tY8Urpj6N4zfRPsa2awZw", // Replace with actual image from assets
    link: "https://github.com/AKHAASH/cgpa-calci", // Replace with actual GitHub or live link
  },
  {
    title: "Music Filtration Enhancement",
    description: "A project that filters songs based on their mood using AI.",
    image: "https://styles.redditmedia.com/t5_2qh1u/styles/communityIcon_21ykcg22rm6c1.png", // Replace with actual image from assets
    link: "https://github.com/AKHAASH/Music-classifier-Machine-Learning", // Replace with your project link
  },
  {
    title: "Portfolio Website",
    description: "A responsive and dynamic portfolio built using React.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-z_3W0r7uUTIJdOcw89DKAOa7PXuCczoeA&s",
    link: "https://github.com/AKHAASH/portfolio",
  },
  {
    title: "Career Navigation",
    description: "A platform to help users explore and plan their career paths.",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20221108/pngtree-the-way-to-success-or-career-guidance-goal-business-least-photo-image_28573284.jpg", // Replace with actual image from assets
    link: "https://github.com/AKHAASH/Career-Navigator-using-AI", // Replace with actual GitHub or live link
  },
];

function Projects() {
  return (
    <div className='projects-container-background'>
      <ScrollNavigator upPath="/about" downPath="/skills" />
      <div className='projects-container'>
        <h2 className='projects-title'>My Projects</h2>
        <p className='projects-description'>
          Here are some of the projects I've worked on.
        </p>
        <div className='projects-grid'>
          {projects.map((project, index) => (
            <div key={index} className='project-card'>
              <img src={project.image} alt={project.title} className='project-image' />
              <div className='project-content'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>
                <a href={project.link} target='_blank' rel='noopener noreferrer' className='project-link'>
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
