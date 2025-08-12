import React from 'react'
import styles from '../styles/Footer.module.css'
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© {new Date().getFullYear()} Muhammad Huzaifa Bin Kashif</p>
        <div className={styles.socials}>
          <a href="https://linkedin.com/in/huzaifa-kashif2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/huzaifa-kashif2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <button onClick={scrollToTop} className={styles.topButton} aria-label="Back to Top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
