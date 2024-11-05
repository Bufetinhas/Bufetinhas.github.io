import React from 'react';
import './HeaderAbout.css';

const HeaderAbout = () => {
  return (
    <header className="header-about">
      <div className="header-content">
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Sou um desenvolvedor apaixonado, sempre aprendendo e buscando novos desafios. Explore meus projetos e entre em contato!</p>
        <nav>
          <ul className="nav-links">
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderAbout;
