// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
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
      style={{ padding: '20px', borderRadius: '8px', background: 'linear-gradient(135deg, #282a36, #44475a)' }}
    >
      <h2 style={{ color: '#fff' }}>Contato</h2>
      <p style={{ color: '#fff' }}>Conecte-se comigo em:</p>
      <div className="contact-buttons">
        <motion.a
          href="https://github.com/Bufetinhas"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ backgroundColor: '#4a4a4a', scale: 1.05 }}
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            margin: '10px',
            color: '#fff',
            backgroundColor: '#6f9fd6',
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
          whileHover={{ backgroundColor: '#4a4a4a', scale: 1.05 }}
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            margin: '10px',
            color: '#fff',
            backgroundColor: '#6f9fd6',
            borderRadius: '5px',
            textDecoration: 'none',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
        >
          LinkedIn
        </motion.a>
      </div>
      <div className="contact-info" style={{ backgroundColor: '#4a4a4a', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
        <p style={{ color: '#fff' }}>
          Email: <a href="mailto:douglastirlonip@gmail.com" style={{ color: '#6f9fd6' }}>douglastirlonip@gmail.com</a>
        </p>
        <p style={{ color: '#fff' }}>Telefone: (48) 98819-2900</p>
      </div>
    </motion.section>
  );
}

export default Contact;
