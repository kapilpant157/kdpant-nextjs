import React from "react";
// import styles from'./Aboutme.module.css'
import Image from "next/image";

const Aboutme = () => {
  return (
    <section className='aboutme'>
    
      <div className="topic">
        <h3>Get to know </h3>
        <h2>About Me !</h2>
      </div>
      <div className="contact-container">
        <div className="left">
          <div className="contact-form">
            <h2> Know me better</h2>
          </div>
        </div>
        <div className="rightSide">
          <Image
            src="/kapill.png"
            alt="Kapil Dev Pant"
            height={500}
            width={400}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
