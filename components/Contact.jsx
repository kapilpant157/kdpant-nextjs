import React from "react";
import Image from "next/image";
import styles from '../styles/Contact.module.css'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { BsSnapchat } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

function Contact(props) {
  return (
    <section className={styles.contct}>
      <div className="topic">
        <h3>Share your </h3>
        <h2>Awesome Idea !!</h2>
      </div>
      <div className={styles.contact}>
        <div className="contact-left">
          <Image
            src="/contact.png"
            alt="contact-kapildevpant"
            height={450}
            width={450}
          ></Image>
          <div className={styles.info}>
            <p>Don&apos;t let </p>
            <p>Idea stuck</p>
            <p>In mind</p>
            <h5>We are just a message away</h5>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <h2>Your Idea</h2>
            <div className={styles.container}>
              <div className={styles.icon}>
              <Image src="/blue.png"  height={80} width={80} alt="jkh" />
              <div className={styles.span}><FaTwitter/></div>
              </div>
              <div className={styles.icon}>
              <Image src="/red.png"  height={80} width={80} alt="jkh" />
              <div className={styles.span}><FaYoutube/></div>
                           
              <Image src="/bluee.png"  height={80} width={80} alt="jkh" />
              <div className={styles.span}><FaFacebook/></div>
                            
              <Image src="/pink.png"  height={80} width={80} alt="jkh" />
              <div className={styles.span}><FaInstagram/></div>
              </div>
              <div className={styles.icon}>
              <Image src="/yellow.png"  height={80} width={80} alt="jkh" />
              <div className={styles.span}><BsSnapchat/></div>
              
              <Image src="/black.png"  height={80} width={80} alt="jkh" />
              <div className={styles.span}><FaTiktok/></div></div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
