import React , {useState}from 'react'
import Image from 'next/image'
import { SliderData } from './SliderData'
import styles from '../../styles/Home.module.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
    
      if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }

  return (
    <div id="mywork" className={styles.mywork}>  
    <div  className={styles.container}>
        <h4>My Work</h4>
            <h2>A Selection Of work I&#39;ve Built</h2>
        <div className={styles.allwork}></div>
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow'  onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

    {SliderData.map((slide, index) => {
        return(
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
              <Image src={slide.image} alt='travel image' className='image' layout='responsive' width={1000} height={500} />
            )}
            <div className='work-info'>
             {index === current && (<h3>{slide.title}</h3>)}
             {index === current && (<p>{slide.disc}</p>)}
             </div>
            </div>
        
        )
    })}
    </section>
    </div>
    </div> 
  )
}

export default ImageSlider