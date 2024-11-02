// src/App.js

import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Teste from './components/Teste'; // Substitua Skills por Teste
import CoinCollector from './components/CoinCollector';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedButton from './components/AnimatedButton';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Teste /> {/* Altere Skills para Teste */}
        <CoinCollector />
      </div>
      <Projects />
      <Contact />
      <AnimatedButton text="" onClick={() => {}} /> {}
    </div>
  );
}

export default App;
