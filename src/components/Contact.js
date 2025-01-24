import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

function Contact() {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Entre em Contato</h2>
      <p>Quer colaborar ou me contratar? Utilize os links abaixo:</p>

      <div className="contact-links">
        <motion.a
          href="https://github.com/Bufetinhas"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button github"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#333333", // Fundo GitHub no hover
            color: "#ffffff", // Texto branco no hover
            transition: { duration: 0.3 },
          }}
        >
          GitHub
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/douglas-tirloni-pereira/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button linkedin"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#0077b5", // Fundo LinkedIn no hover
            color: "#ffffff", // Texto branco no hover
            transition: { duration: 0.3 },
          }}
        >
          LinkedIn
        </motion.a>

        <motion.a
          href="mailto:douglastirlonip@gmail.com"
          className="contact-button email"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#d93025", // Vermelho típico de email
            color: "#ffffff", // Texto branco no hover
            transition: { duration: 0.3 },
          }}
        >
          Email
        </motion.a>

        <motion.a
          href="tel:+5548988192900"
          className="contact-button phone"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#34a853", // Verde típico de telefone
            color: "#ffffff", // Texto branco no hover
            transition: { duration: 0.3 },
          }}
        >
          Telefone
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Contact;
