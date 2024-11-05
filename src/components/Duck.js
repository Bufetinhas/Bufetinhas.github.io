import React, { useState } from 'react';
import './Duck.css';

function Duck() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500); // Animação temporária de movimento
  };

  return (
    <div className={`duck-container ${isClicked ? 'move' : ''}`} onClick={handleClick}>
      🦆
      <span className="eye left-eye">👁️</span>
      <span className="eye right-eye">👁️</span>
    </div>
  );
}

export default Duck;
