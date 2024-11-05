import React, { useState } from 'react';
import './Estrela.css';

function Estrela() {
  const [stars, setStars] = useState([]);

  const handleClick = () => {
    const newStars = Array.from({ length: 8 }, () => ({
      id: Math.random(),
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
    setStars([...stars, ...newStars]);

    setTimeout(() => setStars([]), 2000);
  };

  return (
    <div className="estrela-container" onClick={handleClick}>
      ⭐
      {stars.map((star) => (
        <span
          key={star.id}
          className="estrela-sparkle"
          style={{ transform: `translate(${star.x}px, ${star.y}px)` }}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}

export default Estrela;
