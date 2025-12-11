import React from 'react'
import styles from '../styles/Skills.module.css'
import { FaReact, FaNodeJs, FaJava, FaDatabase } from 'react-icons/fa'
import { 
  SiMongodb, 
  SiJavascript, 
  SiCss3, 
  SiDotnet, 
  SiCplusplus, 
  SiExpress, 
  SiTypescript, 
  SiHtml5, 
  SiNextdotjs 
} from 'react-icons/si'

const skills = [
  { name: 'Java', icon: <FaJava color="#f89820" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs color="black" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'Express.js', icon: <SiExpress color="#000000" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'SQL', icon: <FaDatabase color="#4DB33D" /> },
  { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
  { name: '.NET', icon: <SiDotnet color="#512bd4" /> },
  { name: 'CSS', icon: <SiCss3 color="#1572B6" /> },
  { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
]

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.grid}>
        {skills.map((skill, idx) => (
          <div className={styles.skillCard} key={idx}>
            <div className={styles.icon}>{skill.icon}</div>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
