import Head from 'next/head'

import About from '../components/About'
import Banner from '../components/Banner'
import Skills from '../components/Skills'
import ImageSlider from '../components/workSlider/ImageSlider'
import { SliderData } from '../components/workSlider/SliderData'
import styles from '../styles/Home.module.css'
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;700&display=swap" rel="stylesheet" />


export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Ch v v Reddy - Codesign</title>
        <meta name="description" content="Designer turned Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />      
      <About/>  
      <Skills />     
      <ImageSlider slides={SliderData} />        
      
    </div>

  )
}

