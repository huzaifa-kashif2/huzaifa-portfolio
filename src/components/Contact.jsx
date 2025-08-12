import React from 'react'
import styles from '../styles/Contact.module.css'
import Particles from 'react-tsparticles'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

const contactInfo = {
  phone: '+923068748112',
  whatsapp: '923068748112',
  email: 'huzaifa.kashif2@gmail.com',
  linkedin: 'https://linkedin.com/in/huzaifa-kashif2',
  github: 'https://github.com/huzaifa-kashif2'
}

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Particles
        className={styles.particles}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } }
          },
          particles: {
            color: { value: "#ff6f3c" },
            links: { color: "#ff6f3c", distance: 150, enable: true, opacity: 0.3, width: 1 },
            collisions: { enable: false },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } }
          },
          detectRetina: true
        }}
      />
      <h2 className={styles.heading}>Contact Me</h2>
      <div className={styles.details}>
        <div className={styles.item}>
          <FaPhoneAlt className={styles.icon} />
          <a href={`tel:${contactInfo.phone}`} className={styles.link}>{contactInfo.phone}</a>
        </div>
        <div className={styles.item}>
          <FaWhatsapp className={styles.icon} />
          <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Reach Me on WhatsApp
          </a>
        </div>
        <div className={styles.item}>
          <FaEnvelope className={styles.icon} />
          <a href={`mailto:${contactInfo.email}`} className={styles.link}>{contactInfo.email}</a>
        </div>
        <div className={styles.item}>
          <FaLinkedin className={styles.icon} />
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
        </div>
        <div className={styles.item}>
          <FaGithub className={styles.icon} />
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
