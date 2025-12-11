import React, { useState } from 'react'
import { Link } from 'react-scroll'
import styles from '../styles/Navbar.module.css'

const navLinks = [
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Education', to: 'education' },
  { name: 'Extracurricular', to: 'extracurricular' },
  { name: 'Contact', to: 'contact' }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Huzaifa Kashif</div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={menuOpen ? styles.barActive : ''}></span>
        <span className={menuOpen ? styles.barActive : ''}></span>
        <span className={menuOpen ? styles.barActive : ''}></span>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              activeClass={styles.active}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
