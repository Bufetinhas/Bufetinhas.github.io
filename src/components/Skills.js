// src/components/Skills.js
import React from 'react';
import JogoPlataforma from './JogoPlataforma'; // Importando o componente do jogo
import '../styles/Skills.css'; // Caminho atualizado para importar o arquivo CSS

const Skills = () => {
  const skills = [
    { name: 'HTML', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'JavaScript', category: 'backend' },
    { name: 'React', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Python', category: 'backend' },
    { name: 'SQL', category: 'database' },
    { name: 'Git', category: 'tools' },
    { name: 'Docker', category: 'tools' },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'frontend':
        return '#00bfff'; // Azul para frontend
      case 'backend':
        return '#ff6347'; // Vermelho para backend
      case 'database':
        return '#32cd32'; // Verde para banco de dados
      case 'tools':
        return '#ffa500'; // Laranja para ferramentas
      default:
        return '#ccc';
    }
  };

  const renderSkills = (category) => {
    return skills
      .filter((skill) => skill.category === category)
      .map((skill) => (
        <button
          key={skill.name}
          className="skill-button"
          style={{ '--hover-color': getCategoryColor(skill.category) }}
        >
          <span className="skill-name">{skill.name}</span>
        </button>
      ));
  };

  return (
    <div className="skills-page">
      <div className="skills-section">
        <h2>Frontend</h2>
        <div className="skills-container">{renderSkills('frontend')}</div>
      </div>
      <div className="skills-section">
        <h2>Backend</h2>
        <div className="skills-container">{renderSkills('backend')}</div>
      </div>
      <div className="skills-section">
        <h2>Database</h2>
        <div className="skills-container">{renderSkills('database')}</div>
      </div>
      <div className="skills-section">
        <h2>Tools</h2>
        <div className="skills-container">{renderSkills('tools')}</div>
      </div>

      <div className="game-demo-section">
        <h2>Game Demonstration</h2>
        <p>O objetivo é com o tempo integrar mais ações ao personagem, e criar uma personalidade junto com alguma mecânica especifica --projeto em andamento--:</p>
        <div className="game-demo">
          <JogoPlataforma /> {/* Integração do componente JogoPlataforma */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
