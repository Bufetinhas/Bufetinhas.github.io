import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Chatbot',
    description: 'Um chatbot inteligente desenvolvido para automatizar interações com usuários. Utiliza técnicas de processamento de linguagem natural e aprendizado de máquina.',
    link: 'https://github.com/Bufetinhas/Chatbot'
  },
  {
    title: 'Visão Computacional',
    description: 'Projeto que aplica técnicas de visão computacional para reconhecimento de imagens. Explorando o OpenCV e aprendizado profundo para detecção e classificação de objetos.',
    link: 'https://github.com/Bufetinhas/Visao_computacional'
  },
  {
    title: 'CRUD com Python e MySQL',
    description: 'Sistema CRUD desenvolvido em Python com integração ao MySQL, permitindo operações completas de gerenciamento de dados. Ideal para aprender sobre banco de dados e automação.',
    link: 'https://github.com/Bufetinhas/CRUD-Py-MySQL'
  }
];

function Projects() {
  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <button className="view-project-button">View Project</button>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
