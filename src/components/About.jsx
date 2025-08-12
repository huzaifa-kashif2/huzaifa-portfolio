import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.description}>
          I am Muhammad Huzaifa Bin Kashif, a passionate Software Engineering student with a strong
          foundation in Java, C++, and modern web technologies. My goal is to leverage my skills to
          build efficient, user-friendly applications while continuously learning and improving.
        </p>
        <p className={styles.description}>
          I enjoy tackling challenging problems, collaborating in agile teams, and contributing to
          impactful projects. With hands-on experience in both academic and professional
          environments, I am eager to grow as a developer and make a difference through technology.
        </p>
      </div>
    </section>
  )
}

export default About
