// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion'; // Importa o motion

function About() {
  // Define a animação
  const fadeIn = {
    hidden: { opacity: 0 }, // Estado inicial invisível
    visible: { opacity: 1 }, // Estado final visível
  };

  return (
    <motion.section
      className="About"
      initial="hidden" // Começa como escondido
      animate="visible" // Anima para o estado visível
      variants={fadeIn} // Usa as variantes definidas
      transition={{ duration: 0.5 }} // Duração da animação
      whileHover={{ backgroundColor: '#0056b3', color: '#ffffff' }} // Altera a cor para azul no hover
      style={{ backgroundColor: '#ffffff', color: '#000000', padding: '20px', borderRadius: '8px' }} // Estilo inicial com fundo branco
    >
      <h2>Sobre Mim</h2>
      <p>
        Sou um desenvolvedor especializado em back-end. Apaixonado por tecnologias de servidor e otimização de processos.
      </p>
    </motion.section>
  );
}

export default About;
