import React from 'react'
import styles from '../styles/Education.module.css'

const educationList = [
  {
    degree: 'BS Software Engineering',
    institution: 'FAST University Lahore',
    period: '2022 - Present',
    details: 'Completed 6 out of 8 semesters, gaining skills and enhancing learning.'
  },
  {
    degree: 'Intermediate (FSC Pre-Engineering)',
    institution: 'Unique College Lahore',
    period: '2020 - 2022',
    details: 'Secured 989/1100 marks.'
  },
    {
    degree: 'Matric (Computer Science)',
    institution: 'Unique High School Lahore',
    period: '2018 - 2020',
    details: 'Secured 1030/1100 marks.'
  }

]

const Education = () => {
  return (
    <div className={styles.education}>
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.list}>
        {educationList.map((edu, idx) => (
          <div className={styles.card} key={idx}>
            <h3 className={styles.degree}>{edu.degree}</h3>
            <h4 className={styles.institution}>{edu.institution}</h4>
            <p className={styles.period}>{edu.period}</p>
            <p className={styles.details}>{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
