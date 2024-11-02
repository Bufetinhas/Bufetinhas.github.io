// src/components/Header.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
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
    <motion.header
      className="Header"
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
        fontSize: '1.5em',
        fontWeight: 'bold',
      }}
    >
      <h1 style={{ margin: 0 }}>React + Framer motion</h1>
    </motion.header>
  );
}

export default Header;
