import React from 'react'
import styles from '../styles/Experience.module.css'

const experiences = [
  {
    role: 'Internship/Trainee',
    company: 'Techverx, Lahore',
    period: 'June 2025 - August 2025',
    description:
      'Completed a three-month internship as part of the development team for Project Friday, working with Next.js and .NET frameworks. Collaborated with senior developers to fix bugs, develop APIs, and enhance application performance. Gained valuable experience in professional software development, teamwork, and deadline-driven delivery.'
  }
]

const Experience = () => {
  return (
    <div className={styles.experience}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <div className={styles.card} key={idx}>
            <h3 className={styles.role}>{exp.role}</h3>
            <h4 className={styles.company}>{exp.company}</h4>
            <p className={styles.period}>{exp.period}</p>
            <p className={styles.description}>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
