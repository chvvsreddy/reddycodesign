import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const About = () => {
  return (
    <div id="about" className={styles.about}>
          <div  className={styles.container}>
        
        <div className={styles.my_img}>
        <Image src="/img/my-photo.webp"  alt="Ch v v s Reddy" layout='responsive'  width={500}  height={570} />
        </div>
        <div className={styles.aboutme}>
          <h4>ABOUT</h4>
          <h2>A passionate Front-End Developer with design background.</h2>
          <p>I design and code beautifully simple things</p>
          <p>I have a passion for technology and visual aspects of digital products. User experience and writing clean accessible code is my first priority. Every detail matters for me. </p>
          {/* <p>I have a BA in Multimedia Design from Curtin University 🇦🇺, a Certificate of Web Development Immersive from Juno College (Formerly HackerYou) 🇨🇦, (and an Advanced Scuba Diving License from PADI 🇵🇭!)</p> */}
          <p> I enjoy building dynamic, creative products from start to finish. Focused on developing intuitive experiences that constantly grow and improve.</p>
        </div>
      </div>
    </div>
  )
}

export default About