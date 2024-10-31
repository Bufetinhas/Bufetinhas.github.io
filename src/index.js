// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Se você tiver um arquivo CSS global
import App from './App'; // Certifique-se de que o caminho e nome estão corretos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você não estiver usando reportWebVitals, comente ou remova as linhas abaixo
//reportWebVitals();
