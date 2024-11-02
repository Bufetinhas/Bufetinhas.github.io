// src/components/Teste.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Teste() {
  const [stars, setStars] = useState(0);
  const [starPos, setStarPos] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    const interval = setInterval(() => {
      setStarPos({
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      });
    }, 4000); // Aparece a cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  const handleClickStar = () => {
    setStars(stars + 1);
    setStarPos({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    });
  };

  return (
    <motion.section
      className="teste"
      initial={{ background: '#ffffff' }}
      style={{
        color: '#000000',
        padding: '40px',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        flex: '1',
        minHeight: '300px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <h2 style={{ fontSize: '1.8em', marginBottom: '10px' }}>Colete Estrelas!</h2>
      <p>Estrelas coletadas: {stars}</p>
      <motion.div
        style={{
          fontSize: '2em',
          color: 'gold',
          position: 'absolute',
          top: starPos.top,
          left: starPos.left,
          transform: 'translate(-50%, -50%)',
        }}
        onClick={handleClickStar}
        whileTap={{ scale: 0.8 }}
      >
        ⭐
      </motion.div>
    </motion.section>
  );
}

export default Teste;
