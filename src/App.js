import React from 'react';
import { motion } from 'framer-motion';
import HeaderAbout from './HeaderAbout.js';
import Project from './Project';
import Hearts from './Hearts';
import './App.css';

const App = () => {
  const projects = [
    { id: 1, title: 'Projeto 1', description: 'Descrição do projeto 1' },
    { id: 2, title: 'Projeto 2', description: 'Descrição do projeto 2' },
    { id: 3, title: 'Projeto 3', description: 'Descrição do projeto 3' },
    { id: 4, title: 'Projeto 4', description: 'Descrição do projeto 4' },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className="app">
      <Header />
      <div className="project-container">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Project title={project.title} description={project.description} />
          </motion.div>
        ))}
      </div>
      <Hearts />
    </div>
  );
};

export default App;
