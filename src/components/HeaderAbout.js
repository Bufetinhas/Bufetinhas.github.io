// src/components/HeaderAbout.js
import React from 'react';

const HeaderAbout = () => {
    return (
        <header className="app-header">
            <h1 className="header-title">Desenvolvedor Full-Stack</h1>
            <p className="header-subtitle">.Douglas Tirloni Pereira</p>
            <section className="about-section">
                <h2 className="about-title">Sobre Mim</h2>
                <p className="about-description">
                    Sou um apaixonado por tecnologia e design, sempre buscando formas inovadoras de resolver problemas e criar experiências interativas. 
                    Com um background em desenvolvimento e um forte interesse em design de interfaces, estou aqui para compartilhar meus projetos e ideias.
                    Quando não estou codificando, você pode me encontrar explorando novos jogos ou aprendendo uma abertura nova de Xadrez. 
                    Estou sempre aberto a colaborações e novos desafios. Vamos nos conectar!
                </p>
            </section>
        </header>
    );
};

export default HeaderAbout;
