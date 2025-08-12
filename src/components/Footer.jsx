import React from 'react'
import styles from '../styles/Footer.module.css'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© {new Date().getFullYear()} Muhammad Huzaifa Bin Kashif</p>
        <div className={styles.socials}>
          <a
            href="https://linkedin.com/in/huzaifa-kashif2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/huzaifa-kashif2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/923068748112"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            style={{ color: 'white' }}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
