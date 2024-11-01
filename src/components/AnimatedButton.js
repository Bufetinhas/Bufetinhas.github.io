// src/components/AnimatedButton.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hearts from './Hearts';

const AnimatedButton = ({ text }) => {
  const [hearts, setHearts] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0); // Contador de cliques

  const handleClick = () => {
    const newHearts = Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      key: Math.random(),
    }));
    setHearts(newHearts);

    // Incrementa o contador de cliques
    setClickCount(clickCount + 1);

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}>
      <motion.button
        onClick={handleClick}
        initial={{ borderRadius: '50%', backgroundColor: '#ff6b6b', width: '100px', height: '100px' }}
        animate={{
          backgroundColor: '#ff6b6b',
          width: '100px',
          height: '100px',
          scale: isClicked ? 0.9 : 1,
        }}
        transition={{ duration: 0.1 }}
        style={{
          border: 'none',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginRight: '5px' }}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        {text}
      </motion.button>

      {hearts.map((heart) => (
        <Hearts key={heart.key} x={heart.x} y={heart.y} style={{ position: 'absolute', zIndex: 0 }} />
      ))}

      {/* Contador de cliques */}
      <p style={{ marginTop: '10px', fontSize: '18px', color: '#ff6b6b' }}>Clique: {clickCount}</p>
    </div>
  );
};

export default AnimatedButton;
