import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
     <h3  className={styles.title}>About agency</h3>



     <h1 className={styles.heading}>We create digital ideas that 
      are bigger,bolder,braverz and better</h1>

      <p>We create digital ideas that 
      are bigger,bolder,braverz and better.
      We believe in creativity and innovation.We want to become the first 
      world's creativity agency</p>
      
      <div className={styles.boxes}>
            <div className={styles.box} >
                <h1 className={styles.number}>10 K+</h1>
                <p>Years of experience</p>
            </div>
            <div className={styles.box}>
                <h1 className={styles.number}>234 K+</h1>
                <p>People reached</p>
            </div>
            <div className={styles.box} >
                <h1 className={styles.number}>5 K+</h1>
                <p>Services and plugins</p>
            </div>
      </div>

      </div>
      <div className={styles.imgContainer}>

      <Image src="/about.png"  fill className={styles.img}/>
      </div>
    </div>
  )
}

export default AboutPage
