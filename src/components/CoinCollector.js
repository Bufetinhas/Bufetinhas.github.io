import React, { useState, useEffect } from 'react';
import './CoinCollector.css'; // Crie um arquivo CSS para o estilo do jogo

function CoinCollector() {
  const [cookies, setCookies] = useState(0);
  const [cookiePositions, setCookiePositions] = useState([]);
  const [score, setScore] = useState(0);
  const cookieCount = 5; // Número de cookies a serem gerados

  useEffect(() => {
    const generateCookies = () => {
      const positions = [];
      for (let i = 0; i < cookieCount; i++) {
        const x = Math.random() * (window.innerWidth - 50); // Largura da tela menos o tamanho do cookie
        const y = Math.random() * (window.innerHeight - 50); // Altura da tela menos o tamanho do cookie
        positions.push({ x, y });
      }
      setCookiePositions(positions);
    };

    generateCookies();
  }, []);

  const collectCookie = (index) => {
    const newPositions = cookiePositions.filter((_, i) => i !== index);
    setCookiePositions(newPositions);
    setScore(score + 1); // Incrementa a pontuação
    if (newPositions.length === 0) {
      alert('Você coletou todos os cookies!'); // Mensagem quando todos os cookies são coletados
      setScore(0); // Reseta a pontuação
      generateCookies(); // Regenera os cookies
    }
  };

  return (
    <div className="coin-collector">
      <h2>Coletor de Cookies</h2>
      <p>Cookies coletados: {score}</p>
      <div className="cookie-container">
        {cookiePositions.map((pos, index) => (
          <div
            key={index}
            className="cookie"
            style={{
              left: pos.x,
              top: pos.y,
              position: 'absolute',
              cursor: 'pointer',
            }}
            onClick={() => collectCookie(index)}
          >
            🍪
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoinCollector;
