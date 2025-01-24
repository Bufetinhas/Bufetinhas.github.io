// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <h1>Bem-vindo!</h1>
        <p>
          Sou Douglas, desenvolvedor full stack. Criando soluções digitais dinâmicas e eficientes!
        </p>
        <div className="features">
          <div className="feature">
            <h2>Skills</h2>
            <p>Confira minhas habilidades e meu nível de experiência em cada uma delas.</p>
          </div>
          <div className="feature">
            <h2>Projects</h2>
            <p>Explore meus projetos e veja o que já desenvolvi.</p>
          </div>
          <div className="feature">
            <h2>GameDev</h2>
            <p>Experimente meu jogo da cobrinha e veja o que criei para diversão.</p>
          </div>
          <div className="feature">
            <h2>Contact</h2>
            <p>Entre em contato e veja como podemos colaborar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
