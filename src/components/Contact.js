// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

function Contact() {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Acelerando a transição inicial para 0.5 segundos
    >
      <h2>Contato</h2>
      <p>Quer colaborar ou me contratar? links abaixo:</p>
      
      <div className="contact-links">
        <motion.a
          href="https://github.com/Bufetinhas"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
          whileHover={{ backgroundColor: "#000000", color: "#ffffff", transition: { duration: 0.3 } }} // Acelerando o hover para 0.3 segundos
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }} // Acelerando a transição inicial
        >
          GitHub
        </motion.a>
        
        <motion.a
          href="https://www.linkedin.com/in/douglas-tirloni-pereira/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
          whileHover={{ backgroundColor: "#000000", color: "#ffffff", transition: { duration: 0.3 } }} // Acelerando o hover para 0.3 segundos
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }} // Acelerando a transição inicial
        >
          LinkedIn
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Contact;
