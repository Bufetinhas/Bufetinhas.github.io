// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  // Define a animação
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Lista de projetos (exemplo)
  const projectList = [
    { name: 'Projeto 1', url: 'https://github.com/Bufetinhas/Visao_computacional' },
    { name: 'Projeto 2', url: 'https://github.com/Bufetinhas/CRUD-Py-MySQL' },
    { name: 'Projeto 3', url: 'https://github.com/Bufetinhas/Chatbot' },
  ];

  return (
    <motion.section
      className="projects"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      style={{ padding: '20px', borderRadius: '8px' }}
    >
      <h2>Projetos</h2>
      <div className="project-buttons">
        {projectList.map((project, index) => (
          <motion.a
            key={index}
            href={project.url}
            target="_blank" // Abre em uma nova aba
            rel="noopener noreferrer" // Previne problemas de segurança
            whileHover={{ backgroundColor: '#3a8efc', scale: 1.05 }} // Efeito ao passar o mouse
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              margin: '10px',
              color: '#fff',
              backgroundColor: '#4a90e2',
              borderRadius: '5px',
              textDecoration: 'none',
              transition: 'background-color 0.3s, transform 0.3s',
            }}
          >
            {project.name}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
