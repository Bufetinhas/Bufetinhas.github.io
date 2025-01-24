import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/GameDev.css';

const GameDev = () => {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const foodPosition = useRef({ x: 0, y: 0 }); // Posição fixa da comida até ser consumida
  const scoreRef = useRef(0); // Gerencia a pontuação sem causar re-renderizações

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem('highScores')) || [];
    setHighScores(savedScores);
  }, []);

  const saveHighScore = useCallback(
    (newScore) => {
      const updatedScores = [...highScores, newScore]
        .sort((a, b) => b - a)
        .slice(0, 5); // Mantém apenas os 5 melhores scores
      setHighScores(updatedScores);
      localStorage.setItem('highScores', JSON.stringify(updatedScores));
    },
    [highScores]
  );

  useEffect(() => {
    if (!gameOver) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const box = 32;

      let snake = [];
      snake[0] = { x: 7 * box, y: 7 * box };

      // Inicializa a posição da comida
      foodPosition.current = {
        x: Math.floor(Math.random() * 14) * box,
        y: Math.floor(Math.random() * 14) * box,
      };

      let direction = null;

      const hasCollision = (head, array) => {
        for (let i = 0; i < array.length; i++) {
          if (head.x === array[i].x && head.y === array[i].y) return true;
        }
        return false;
      };

      const draw = () => {
        // Fundo do canvas
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Desenha a comida
        context.fillStyle = 'red';
        context.fillRect(foodPosition.current.x, foodPosition.current.y, box, box);

        // Desenha a cobra
        for (let i = 0; i < snake.length; i++) {
          context.fillStyle = i === 0 ? 'green' : 'white';
          context.fillRect(snake[i].x, snake[i].y, box, box);
          context.strokeStyle = 'red';
          context.strokeRect(snake[i].x, snake[i].y, box, box);
        }

        // Movimenta a cobra
        const snakeX = snake[0].x;
        const snakeY = snake[0].y;

        let newHead = { x: snakeX, y: snakeY };
        if (direction === 'LEFT') newHead = { x: snakeX - box, y: snakeY };
        if (direction === 'UP') newHead = { x: snakeX, y: snakeY - box };
        if (direction === 'RIGHT') newHead = { x: snakeX + box, y: snakeY };
        if (direction === 'DOWN') newHead = { x: snakeX, y: snakeY + box };

        // Verifica se a cobra comeu a comida
        if (
          newHead.x === foodPosition.current.x &&
          newHead.y === foodPosition.current.y
        ) {
          scoreRef.current += 100; // Atualiza a pontuação
          foodPosition.current = {
            x: Math.floor(Math.random() * 14) * box,
            y: Math.floor(Math.random() * 14) * box,
          };
        } else {
          snake.pop(); // Remove o último bloco
        }

        // Verifica colisões
        if (
          newHead.x < 0 ||
          newHead.x >= canvas.width ||
          newHead.y < 0 ||
          newHead.y >= canvas.height ||
          hasCollision(newHead, snake)
        ) {
          clearInterval(gameInterval);
          setGameOver(true);
          saveHighScore(scoreRef.current); // Salva a pontuação final
          return;
        }

        snake.unshift(newHead); // Adiciona a nova cabeça
      };

      const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
        if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
        if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
        if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
      };

      document.addEventListener('keydown', handleKeyDown);

      const gameInterval = setInterval(() => {
        requestAnimationFrame(draw); // Usando requestAnimationFrame para suavizar animações
      }, 100);

      return () => {
        clearInterval(gameInterval);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [gameOver, saveHighScore]);

  return (
    <div className="game-container">
      <canvas ref={canvasRef} id="gameCanvas" width="448" height="448"></canvas>
      <div className="game-info">
        <h2>Ranking</h2>
        <ul>
          {highScores.map((score, index) => (
            <li key={index}>
              {index + 1}. {score} pontos
            </li>
          ))}
        </ul>
        {gameOver && (
          <div className="game-over">
            <h3>Game Over</h3>
            <p>Sua pontuação: {scoreRef.current}</p>
            <button
              onClick={() => {
                scoreRef.current = 0;
                setGameOver(false);
              }}
            >
              Tente Outra Vez
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDev;
