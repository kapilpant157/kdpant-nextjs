import React from 'react'
import styles from '../styles/Home.module.css'
const Header = () => {
  
  return (
    <>
    <div className={styles.header}>
      
      <div className={styles.bg}>
          
        </div>
      <div className={styles.container}>
        
        <h5>Hello, I am </h5>
        <h1>KAPIL DEV PANT</h1>
        <h6>Graphic Designer, Web(Designer, Developer), UX/UI Designer, Sportsman (Basketball, Table Tennis, Football, Cricket) drawing enthusiastic and counting </h6>
        
        <div className={styles.cta}>
        <a href="./cv.pdf" download className={styles.btn}>Download CV</a>
        <a href="#contact" className={styles.btn}>Message me </a>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default Header
