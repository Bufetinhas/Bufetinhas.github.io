import React, { useEffect, useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 70 },
    { name: 'Node.js', level: 60 },
    { name: 'Python', level: 65 },
    { name: 'SQL', level: 50 },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500); // Delay para animação
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{
                  width: loaded ? `${skill.level}%` : '0%',
                  transition: 'width 2s ease',
                }}
              ></div>
            </div>
            <span className="skill-percent">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
