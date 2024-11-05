// App.js
import React from 'react';
import './App.css';
import HeaderAbout from './components/HeaderAbout';
import CoinCollector from './components/CoinCollector';
import Moedas from './components/Moedas';
import Hearts from './components/Hearts';
import Contact from './components/Contact';
import Projects from './components/Projects';
import FullScreenEffect from './components/FullScreenEffect';
import Duck from './components/Duck';
import Estrela from './components/Estrela';

// Definindo a lista projects como exemplo
const projects = [
  {
    id: 1,
    title: 'Project 1',
    component: () => <Projects />,
  },
  {
    id: 2,
    title: 'Project 2',
    component: () => <Projects />,
  },
  // Adicione mais projetos conforme necessário
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderAbout />
        <nav>
          <ul className="nav-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#collect">Coin Collector</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="projects">
          <Projects />
        </section>

        <section id="collect">
          <CoinCollector />
          <Moedas />
        </section>

        <section id="hearts">
          <Hearts />
        </section>

        <section id="basic-projects" className="basic-projects">
          <h2>Projetinhos Básicos</h2>
          <div className="grid">
            {projects.map(project => (
              <div key={project.id} className="project">
                <h3>{project.title}</h3>
                {project.component()}
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <Contact />
        </section>

        <FullScreenEffect />
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 My Modern Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
