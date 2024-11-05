// src/components/FullScreenEffect.js
import React, { useEffect, useState, useRef } from 'react';
import './FullScreenEffect.css';

const FullScreenEffect = () => {
    const [visible, setVisible] = useState(true);
    const overlayRef = useRef(null);

    const handleClickOutside = (event) => {
        // Verifica se o clique foi fora da caixa de mensagem
        if (overlayRef.current && !overlayRef.current.contains(event.target)) {
            setVisible(false);
        }
    };

    useEffect(() => {
        // Adiciona um event listener para cliques fora da caixa
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Limpa o event listener ao desmontar
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!visible) {
        return null; // Não renderiza nada se não estiver visível
    }

    return (
        <div className="fullscreen-overlay">
            <div className="welcome-box" ref={overlayRef}>
                <h1>Bem-vindo ao meu portfólio</h1>
                <p>Clique fora desta box para conferir</p>
            </div>
        </div>
    );
};

export default FullScreenEffect;
