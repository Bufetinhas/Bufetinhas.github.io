// src/components/Heart.js

import React from 'react';
import { motion } from 'framer-motion';

const Heart = ({ x, y }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        fontSize: '24px', // Tamanho do coração
        color: 'red',
      }}
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: 0,
        y: -50, // Animação para subir
      }}
      transition={{ duration: 0.5 }}
    >
      ❤️
    </motion.div>
  );
};

export default Heart;
