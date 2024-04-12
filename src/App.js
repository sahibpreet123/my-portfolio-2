import React from 'react';
import './App.css';
import BasicInformation from './components/BasicInformation/BasicInformation';
import Work from './components/Work/Work';
import TechList from './components/TechList/TechList';
import Resources from './components/Resources/Resources';
import DeveloperSetup from './components/DeveloperSetup/DeveloperSetup';

// Sample data for demonstration. Replace with your actual data.
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a brief description of Project 1.",
    imageUrl: "path/to/image1.png",
    link: "http://example.com/project1"
  },
  // Add more projects as needed
];

const skills = [
  "HTML", "CSS", "JavaScript", "React"
  // Add more skills as needed
];

const resources = [
  {
    id: 1,
    title: "Resource 1",
    summary: "This is a brief summary of Resource 1.",
    link: "http://example.com/resource1"
  },
  // Add more resources as needed
];

function App() {
  return (
    <div className="App">
      <BasicInformation />
      <Work projects={projects} />
      <TechList skills={skills} />
      <Resources resources={resources} />
      <DeveloperSetup />
    </div>
  );
}

export default App;
