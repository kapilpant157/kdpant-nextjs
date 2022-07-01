import React from 'react'
const Header = () => {
  
  return (
    <header>
    <section id='header'>
      
      <div className="bg-image">
          
        </div>
      <div className="header header_container">
        
        <h5>WELCOME ! </h5>
        <h1>KAPIL DEV PANT</h1>
        <h5>I&apos;m Graphic Designer, Web Designer, UX/UI Designer</h5>
        
        <div className="cta">
        <a href="./cv.pdf" download className='btn'>Download CV</a>
        <a href="#contact" className='btn'>Message me </a>
      </div>
      </div>
      
    </section>
    </header>
  )
}

export default Header
