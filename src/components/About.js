// src/components/About.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: '50%', y: '50%' });

  // Função para atualizar a posição do cursor
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setCursorPos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <motion.section
      className="About"
      initial={{ background: '#ffffff' }} // Fundo branco inicial
      animate={{
        background: isHovered 
          ? `radial-gradient(circle at ${cursorPos.x} ${cursorPos.y}, rgba(79, 172, 254, 0.8), rgba(0, 242, 254, 0.6), transparent 60%)`
          : '#ffffff'
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: '#000000',
        padding: '20px',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      }}
    >
      <h2 style={{ fontSize: '1.8em', marginBottom: '10px' }}>Sobre Mim</h2>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>
        Sou um desenvolvedor especializado em back-end. Apaixonado por tecnologias de servidor e otimização de processos.
      </p>
    </motion.section>
  );
}

export default About;
