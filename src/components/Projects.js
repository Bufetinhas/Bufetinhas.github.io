import React from 'react';

const Project = ({ title, description }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Project;