import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-container">
        <h2>Sobre Mim</h2>
        <p>
          Sou Douglas Tirloni Pereira, desenvolvedor full stack em formação, com foco em aprender e dominar tanto o backend quanto o frontend. Este site foi criado como parte do meu aprendizado, onde pude aplicar habilidades técnicas e explorar novas tecnologias.
        </p>
        <p>
          Sou apaixonado por tecnologia, cultura geek e hip hop. Estou constantemente em busca de novos desafios para transformar ideias em soluções digitais eficientes e inovadoras.
        </p>
        <p>
          Meu objetivo é crescer como desenvolvedor e contribuir para projetos que criem experiências impactantes para os usuários. Este site é um reflexo do meu progresso e dedicação ao aprendizado.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
