import React from 'react'
import styles from '../styles/Home.module.css'

const Banner = () => {
  return (
    <main className={styles.banner} id="home">
    <div className={styles.banner_content}>
    <h1>Hi, I am Ch v v s Reddy!</h1>
    <h1 className={styles.title}>I&#39;m a <span>Designer</span> turned <span>Developer</span></h1>
    </div>        
  </main>
  )
}

export default Banner