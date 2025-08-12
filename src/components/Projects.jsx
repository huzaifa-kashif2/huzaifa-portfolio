import React from "react";
import styles from "../styles/Projects.module.css";
import { FaReact, FaNodeJs, FaJava, FaDatabase } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiCss3,
  SiDotnet,
  SiCplusplus,
  SiExpress,
} from "react-icons/si";
import SQL from "../assets/sql.svg";

const techIconMap = {
  React: <FaReact color="#61DAFB" />,
  "Node.js": <FaNodeJs color="#339933" />,
  MongoDB: <SiMongodb color="#47A248" />,
  JavaScript: <SiJavascript color="#F7DF1E" />,
  "CSS Modules": <SiCss3 color="#1572B6" />,
  Java: <FaJava color="black" />,
  SQL: (
    <img src={SQL} alt="SQL" style={{ width: "1.2rem", height: "1.2rem" }} />
  ),
  "Java Swing": <FaJava color="black" />,
  "C++": <SiCplusplus color="#00599C" />,
  ".NET": <SiDotnet color="#512bd4" />,
  Express: <SiExpress color="#000000" />,
  Database: <FaDatabase color="#4DB33D" />, // generic DB icon fallback
};

const projects = [
  {
    title: "Softec Management System",
    description:
      "A full-stack MERN (MongoDB, Express, React, Node.js) management system.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "#",
  },
  {
    title: "NIMBUS - A Weather App",
    description:
      "A Java application with SQL database using Java Swing framework for the UI.",
    tech: ["Java", "SQL", "Java Swing"],
    link: "#",
  },
  {
    title: "LESCO Billing System",
    description:
      "A Java-based billing system with SQL backend and Java Swing for UI.",
    tech: ["Java", "SQL", "Java Swing"],
    link: "#",
  },
  {
    title: "Library Management System",
    description:
      "A C++ application integrated with SQL database and .NET framework for UI and services.",
    tech: ["C++", "SQL", ".NET"],
    link: "#",
  },
  {
    title: "Restaurant Management System",
    description:
      "C++ and .NET based system with SQL backend to manage restaurant operations.",
    tech: ["C++", "SQL", ".NET"],
    link: "#",
  },
  {
    title: "ImpactX Clone Website",
    description: "A clone website built using ReactJS and NodeJS.",
    tech: ["React", "Node.js"],
    link: "#",
  },
  {
    title: "PetLounge Clone Website",
    description:
      "Multi-page pet services website with booking and contact features built with ReactJS and NodeJS.",
    tech: ["React", "Node.js"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div className={styles.card} key={index}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.techList}>
              {project.tech.map((tech, i) => (
                <li key={i} className={styles.techItem}>
                  <span className={styles.icon}>{techIconMap[tech]}</span>
                  {tech}
                </li>
              ))}
            </ul>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
