// src/components/AnimatedButton.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hearts from './Hearts';

const AnimatedButton = ({ text }) => {
  const [hearts, setHearts] = useState([]);
  const [isClicked, setIsClicked] = useState(false); // Para controlar a animação de clique

  const handleClick = () => {
    const newHearts = Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100 + '%', // Posição horizontal aleatória
      y: Math.random() * 100 + '%', // Posição vertical aleatória
      key: Math.random(), // A chave é importante para o React
    }));
    setHearts(newHearts);
    
    // Ativa a animação de clique
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Dura 200ms
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <motion.button
        onClick={handleClick}
        initial={{ borderRadius: '50%', backgroundColor: '#ff6b6b', width: '100px', height: '100px' }} // Botão maior
        animate={{ 
          backgroundColor: '#ff6b6b', 
          width: '100px', 
          height: '100px', 
          scale: isClicked ? 0.9 : 1 // Animação de clique
        }}
        transition={{ duration: 0.1 }} // Duração rápida para a animação de clique
        style={{
          border: 'none',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
          display: 'flex', // Para alinhar o conteúdo
          alignItems: 'center', // Para centralizar verticalmente
          justifyContent: 'center', // Para centralizar horizontalmente
          position: 'relative', // Para garantir que o botão seja o contexto de posicionamento
          zIndex: 1, // Garante que o botão esteja acima dos corações
        }}
      >
        {/* Ícone de coração SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginRight: '5px' }}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        {text}
      </motion.button>

      {hearts.map((heart) => (
        <Hearts key={heart.key} x={heart.x} y={heart.y} style={{ position: 'absolute', zIndex: 0 }} />
      ))}
    </div>
  );
};

export default AnimatedButton;
