import React, { useState } from 'react';
import './Moedas.css';

function Moedas() {
  const [notes, setNotes] = useState([]);

  const handleClick = () => {
    const newNotes = Array.from({ length: 10 }, () => ({
      id: Math.random(),
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
    setNotes([...notes, ...newNotes]);

    setTimeout(() => {
      setNotes([]);
    }, 2000);
  };

  return (
    <div className="moedas-container" onClick={handleClick}>
      💵
      {notes.map((note) => (
        <span
          key={note.id}
          className="moedas-note"
          style={{ transform: `translate(${note.x}px, ${note.y}px)` }}
        >
          💵
        </span>
      ))}
    </div>
  );
}

export default Moedas;
