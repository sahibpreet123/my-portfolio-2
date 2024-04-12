import React from 'react';
import './basicInformation.css';

const BasicInformation = () => (
  <div className="basic-information">
    <h1>Your Name</h1>
    <p>Bio goes here...</p>
    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
  </div>
);

export default BasicInformation;
