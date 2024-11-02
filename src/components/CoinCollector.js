// src/components/CoinCollector.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CoinCollector() {
  const [coins, setCoins] = useState(0);
  const [coinPos, setCoinPos] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    const interval = setInterval(() => {
      setCoinPos({
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      });
    }, 4000); // Aparece a cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  const handleClickCoin = () => {
    setCoins(coins + 1);
    setCoinPos({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    });
  };

  return (
    <motion.section
      className="coin-collector"
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
      <h2 style={{ fontSize: '1.8em', marginBottom: '10px' }}>Colete Bitcoins!</h2>
      <p>Bitcoins coletados: {coins}</p>
      <motion.div
        style={{
          fontSize: '3em',
          color: '#f7931a', // Cor laranja do ícone do Bitcoin
          position: 'absolute',
          top: coinPos.top,
          left: coinPos.left,
          transform: 'translate(-50%, -50%)',
        }}
        onClick={handleClickCoin}
        whileTap={{ scale: 0.8 }}
      >
        ₿
      </motion.div>
    </motion.section>
  );
}

export default CoinCollector;
