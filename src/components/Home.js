import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css'; // Corrigindo o caminho para a pasta styles

function Home() {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Bem-vindo!</h1>
      <p>Sou Douglas, desenvolvedor full stack. Criando soluções digitais dinâmicas e eficientes!</p>
    </motion.section>
  );
}

export default Home;
