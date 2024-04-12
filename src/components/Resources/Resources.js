import React from 'react';
import './resources.css';

const Resources = ({ resources }) => (
  <div className="resources-section">
    {resources.map((resource, index) => (
      <div key={index} className="resource-item">
        <h3>{resource.title}</h3>
        <p>{resource.summary}</p>
        <a href={resource.link}>Learn More</a>
      </div>
    ))}
  </div>
);

export default Resources;
