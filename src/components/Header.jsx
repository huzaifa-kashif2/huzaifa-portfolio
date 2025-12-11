import React from 'react'
import { Link } from 'react-scroll'
import styles from '../styles/Header.module.css'
import profile from '../assets/logo.jpg'
import CV from "../assets/Muhammad Huzaifa Bin Kashif CV.pdf"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.name}>Muhammad Huzaifa Bin Kashif</h1>
          <h2 className={styles.role}>Junior Software Developer</h2>
          <p className={styles.intro}>
            Driven Software Engineering student seeking a part-time position to apply and expand my
            skills in Java and C++. Eager to contribute to real-world projects, collaborate in agile
            teams, and enhance my technical expertise through mentorship and hands-on experience in
            a hybrid or remote environment.
          </p>
          <div className={styles.buttons}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className={styles.cta}
            >
              Contact Me
            </Link>
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              View CV
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={profile} alt="Huzaifa" className={styles.profileImage} />
        </div>
      </div>
    </header>
  )
}

export default Header
