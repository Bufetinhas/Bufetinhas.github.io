// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion'; // Importa o motion

function Header() {
  // Define a animação
  const fadeIn = {
    hidden: { opacity: 0, scale: 0.9 }, // Estado inicial invisível e um pouco menor
    visible: { opacity: 1, scale: 1 }, // Estado final visível e no tamanho normal
  };

  return (
    <motion.header
      className="header"
      initial="hidden" // Começa como escondido
      animate="visible" // Anima para o estado visível
      variants={fadeIn} // Usa as variantes definidas
      transition={{ duration: 0.5 }} // Duração da animação
      whileHover={{ backgroundColor: '#4CAF50', color: '#ffffff', scale: 1.05 }} // Altera a cor e aumenta a escala no hover
      style={{ backgroundColor: '#ffffff', color: '#000000', padding: '20px', borderRadius: '8px', textAlign: 'center' }} // Estilo inicial com fundo branco
    >
      <h1>Bem-vindo ao Meu Portfólio</h1>
      <p>Desenvolvedor full-stack, com foco em backend.</p>
    </motion.header>
  );
}

export default Header;
