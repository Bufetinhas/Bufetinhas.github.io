import React from 'react';
import './Projects.css';
import Duck from './Duck';
import Moedas from './Moedas';
import Estrela from './Estrela';

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projetinhos Básicos</h2>
      <div className="grid-container">
        <div className="grid-item"><Duck /></div>
        <div className="grid-item"><Moedas /></div>
        <div className="grid-item"><Estrela /></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
      </div>
    </div>
  );
}

export default Projects;
