// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  // Define a animação
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      className="contact"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      style={{ padding: '20px', borderRadius: '8px' }}
    >
      <h2>Contato</h2>
      <p>Conecte-se comigo em:</p>
      <div className="contact-buttons">
        <motion.a
          href="https://github.com/Bufetinhas"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ backgroundColor: '#3a8efc', scale: 1.05 }} // Efeito ao passar o mouse
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            margin: '10px',
            color: '#fff',
            backgroundColor: '#4a90e2',
            borderRadius: '5px',
            textDecoration: 'none',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
        >
          GitHub
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/douglas-tirloni-pereira-111329268"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ backgroundColor: '#3a8efc', scale: 1.05 }} // Efeito ao passar o mouse
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            margin: '10px',
            color: '#fff',
            backgroundColor: '#4a90e2',
            borderRadius: '5px',
            textDecoration: 'none',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
        >
          LinkedIn
        </motion.a>
      </div>
      <div className="contact-info">
        <p>Email: <a href="mailto:seuemail@example.com">douglastirlonip@gmail.com</a></p>
        <p>Telefone: (48) 98819-2900</p>
      </div>
    </motion.section>
  );
}

export default Contact;
