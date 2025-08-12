import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import styles from '../styles/GoToTop.module.css'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    isVisible && (
      <button className={styles.goToTop} onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  )
}

export default GoToTop
