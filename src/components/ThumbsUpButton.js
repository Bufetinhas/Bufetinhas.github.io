// src/components/ThumbsUpButton.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ThumbsUpButton = () => {
  const [clicked, setClicked] = useState(false);

  // Definindo a animação para o botão
  const buttonVariants = {
    initial: { scale: 1 },
    clicked: { scale: 1.1, transition: { duration: 0.5 } }, // Aumentando a duração da animação
    heart: { scale: 0, transition: { duration: 0.5 } },
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 800); // Tempo para reverter o estado após a animação
  };

  return (
    <motion.button
      onClick={handleClick}
      variants={buttonVariants}
      initial="initial"
      animate={clicked ? 'clicked' : 'initial'}
      style={{
        padding: '20px', // Aumente o padding para manter o botão redondo
        fontSize: '16px',
        margin: '10px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '50%', // Botão redondo
        backgroundColor: '#ffcc00', // Cor amarelo
        color: '#fff', // Cor do texto
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {clicked ? '👍' : '👍'} {/* Mostra o ícone de joinha */}
    </motion.button>
  );
};

export default ThumbsUpButton;
