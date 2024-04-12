import React from 'react';
import WorkItem from './WorkItem';
import './work.css';

const Work = ({ projects }) => (
  <div className="work-section">
    {projects.map(project => <WorkItem key={project.id} {...project} />)}
  </div>
);

export default Work;
