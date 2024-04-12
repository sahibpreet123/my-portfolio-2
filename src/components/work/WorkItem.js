import React from 'react';

const WorkItem = ({ title, description, imageUrl, link }) => (
  <div className="work-item">
    <h3>{title}</h3>
    <p>{description}</p>
    {imageUrl && <img src={imageUrl} alt={title} />}
    <a href={link}>View Project</a>
  </div>
);

export default WorkItem;
