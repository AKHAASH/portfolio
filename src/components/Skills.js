import React from 'react';
import '../css/Skills.css';

const skills = [
  { name: 'React', img: 'logo192.png' },
  { name: 'HTML', img: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png' },
  { name: 'CSS', img: 'https://img.icons8.com/fluent/512/css3.png' },
  { name: 'JavaScript', img: 'https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' },
  { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
  { name: 'Git & GitHub', img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
  { name: 'Figma', img: 'https://www.pngmart.com/files/23/Figma-Logo-PNG-Isolated-HD.png' },
  { name: 'SQL', img: 'https://clipart-library.com/2023/RcdgAAE9i.png' },
  { name: 'Java', img: 'https://static-00.iconduck.com/assets.00/java-original-icon-1510x2048-qvtt7tr9.png' },
  { name: 'C', img: 'https://img.icons8.com/?size=512&id=40670&format=png' }
];

function Skills() {
  return (
    <div className='skills-container-background'>
      <div className='skills-container'>
        <div className='skills-header'>
          <h2 className='skills-title'>My Tech Stack</h2>
          <p className='skills-description'>
            These are the technologies and tools I work with to build powerful applications.
          </p>
        </div>
        <div className='skills-grid'>
          {skills.map((skill, index) => (
            <div key={index} className='skill-card'>
              <img src={skill.img} alt={skill.name} className='skill-icon' />
              <p className='skill-name'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
