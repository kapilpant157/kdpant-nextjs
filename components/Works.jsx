import React from "react";
import Image from "next/image";
import styles from '../styles/Works.module.css';


const Works = () => {
  return (
    <section className={styles.works}   >
     <div className="topic">
      <h3>.Lets be collaborative.</h3>
      </div>
      <div className={styles.work_container}>
        <div className={styles.work}>
          <h2>Design</h2>
          <Image src="/samir.png" alt="samir" height={400} width={400}></Image>
          <p>
            Design is one of the important factor before designing.
          </p>
          <div>
            <a href="asda">Read more...</a>
          </div>
        </div>
        <div className={styles.work}>
          <h2>Development</h2>
          <Image src="/samir.png" alt="samir" height={400} width={400}></Image>
          <p>
            Development is one of the important factor after designing.
          </p>
          <div>
            <a href="asdas">Read more...</a>
          </div>
        </div>
        <div className={styles.work}>
          <h2>Marketing</h2>
          <Image src="/samir.png" alt="samir" height={400} width={400}></Image>
          <p>
            Marketing is one of the important factor after development.
          </p>
          <div>
            <a href="asdas">Read more...</a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Works;
