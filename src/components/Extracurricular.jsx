import React from 'react'
import styles from '../styles/Extracurricular.module.css'

const activities = [
  {
    role: 'Deputy Head, Food Court',
    organization: 'Softec FAST Lahore',
    period: '2023 – 2024',
  },
  {
    role: 'Head, Logistics',
    organization: 'JobFair FAST Lahore',
    period: '2023 – 2024',
  },
  {
    role: 'Head, Logistics',
    organization: 'TEDx FAST Lahore',
    period: '2024',
  }
]

const Extracurricular = () => {
  return (
    <div className={styles.extracurricular}>
      <h2 className={styles.heading}>Extracurricular Activities</h2>
      <div className={styles.list}>
        {activities.map((activity, idx) => (
          <div className={styles.card} key={idx}>
            <h3 className={styles.role}>{activity.role}</h3>
            <h4 className={styles.organization}>{activity.organization}</h4>
            <p className={styles.period}>{activity.period}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Extracurricular
