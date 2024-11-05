// src/components/JogoPlataforma.js
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const JogoPlataforma = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [isJumping, setIsJumping] = useState(false);
  const gameRef = useRef(null);

  // Função para entrar em tela cheia
  const toggleFullScreen = () => {
    if (gameRef.current) {
      if (!document.fullscreenElement) {
        gameRef.current.requestFullscreen().catch((err) => {
          alert(`Erro ao tentar entrar em tela cheia: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  // Lógica de movimento do personagem
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') setPlayerPosition((pos) => ({ ...pos, x: pos.x + 10 }));
    if (e.key === 'ArrowLeft') setPlayerPosition((pos) => ({ ...pos, x: pos.x - 10 }));
    if (e.key === 'ArrowUp' && !isJumping) {
      setIsJumping(true);
      setPlayerPosition((pos) => ({ ...pos, y: pos.y + 100 })); // Aumenta a altura do pulo
      setTimeout(() => {
        setPlayerPosition((pos) => ({ ...pos, y: pos.y - 100 }));
        setIsJumping(false);
      }, 500); // Tempo do pulo
    }
  };

  useEffect(() => {
    // Adiciona e remove o evento de teclado
    if (gameRef.current) {
      gameRef.current.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (gameRef.current) {
        gameRef.current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isJumping]);

  return (
    <div
      ref={gameRef}
      tabIndex="0" // Permite que o div receba foco para capturar teclas
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        backgroundColor: '#87CEEB',
        outline: 'none' // Remove o contorno quando o div está focado
      }}
    >
      {/* Botão para tela cheia */}
      <button
        onClick={toggleFullScreen}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '10px',
          fontSize: '16px',
          zIndex: 1,
        }}
      >
        Tela Cheia
      </button>

      {/* Tutorial de Controles */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '14px',
          zIndex: 1,
        }}
      >
        <p><strong>Controles:</strong></p>
        <p>⬅️ Seta Esquerda: Mover para a esquerda</p>
        <p>➡️ Seta Direita: Mover para a direita</p>
        <p>⬆️ Seta Cima: Pular</p>
      </div>

      {/* Área do Jogo */}
      <div style={{ width: '100%', height: '100%' }}>
        <motion.div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#ff6347',
            position: 'absolute',
            bottom: playerPosition.y,
            left: playerPosition.x,
          }}
          animate={{ x: playerPosition.x, y: playerPosition.y }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
      </div>
    </div>
  );
};

export default JogoPlataforma;
