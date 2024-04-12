import React from 'react';
import './techList.css';

const TechList = ({ skills }) => (
  <div className="tech-list">
    <h2>Skills & Technologies</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default TechList;
