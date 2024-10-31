// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion'; // Importa o motion

function Skills() {
  // Define a animação
  const fadeIn = {
    hidden: { opacity: 0 }, // Estado inicial invisível
    visible: { opacity: 1 }, // Estado final visível
  };

  return (
    <motion.section
      className="skills"
      initial="hidden" // Começa como escondido
      animate="visible" // Anima para o estado visível
      variants={fadeIn} // Usa as variantes definidas
      transition={{ duration: 0.5 }} // Duração da animação
      whileHover={{ backgroundColor: '#e0e0e0', scale: 1.02 }} // Altera a cor do fundo e aumenta a escala no hover
      style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }} // Estilo inicial com fundo claro
    >
      <h2>Habilidades</h2>
      <ul>
        <li>Back-end: Node.js, MySQL, Python</li>
        <li>Front-end: React, CSS, HTML, JavaScript</li>
        <li>Versionamento: Git, GitHub</li>
      </ul>
    </motion.section>
  );
}

export default Skills;
