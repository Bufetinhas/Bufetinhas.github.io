import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css'; // Corrigindo o caminho para a pasta styles

function About() {
  return (
    <motion.section
      className="about"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 60 }}
    >
      <h2>Sobre mim</h2>
      <p>Oi! Sou Douglas Tirloni Pereira, desenvolvedor full stack em formação, estudando tanto backend quanto frontend. Sou apaixonado por tecnologia e adoro criar experiências digitais dinâmicas.

Curto cultura geek, animações como Bojack Horseman e Rick and Morty, e sou fã de jogos desafiadores como Hollow Knight e Hades. Também gosto muito de rap/trap, especialmente Djonga e Racionais MC's.

Meu objetivo é transformar ideias em soluções reais e eficientes, sempre evoluindo como desenvolvedor.</p>
    </motion.section>
  );
}

export default About;
