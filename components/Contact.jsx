import React from "react";
import Image from "next/image";
import styles from '../styles/Contact.module.css'
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa'
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
        <div className="contact-left borderr">
          <Image
            src="/kapill.png"
            alt="contact-kapildevpant"
            height={550}
            width={450}
          ></Image>
          {/* <div className={styles.info}>
            <p>Don&apos;t let </p>
            <p>Idea stuck</p>
            <p>In mind</p>
            <h5>We are just a message away</h5>
          </div> */}
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <h2>Share Idea via</h2>
            <div className={styles.container}>

              <div className={styles.row}>
                <div className={styles.icon}>
                  <Image src="/blue.png" height={80} width={80} alt="jkh" />
                  <div className={styles.span}><FaLinkedin /></div>
                </div>

                <div className={styles.icon}>
                  <Image src="/blue.png" height={81} width={80} alt="jkh" />
                  <div className={styles.span}><FaTwitter /></div>
                </div>
              </div>


              <div className={styles.row}>

                <div className={styles.icon}>
                  <Image src="/red.png" height={80} width={80} alt="jkh" />
                  <div className={styles.span}><FaYoutube /></div>
                </div>


                <div className={styles.icon}>
                  <Image src="/bluee.png" height={80} width={80} alt="jkh" />
                  <div className={styles.span}><FaFacebook /></div>
                </div>

                <div className={styles.icon}>
                  <Image src="/pink.png" height={80} width={80} alt="jkh" />
                  <div className={styles.span}><FaInstagram /></div>
                </div>

              </div>
              <div className={styles.row}>
              <div className={styles.icon}>
                <Image src="/yellow.png" height={80} width={80} alt="jkh" />
                <div className={styles.span}><BsSnapchat /></div>
              </div>
              <div className={styles.icon}>
                <Image src="/black.png" height={80} width={80} alt="jkh" />
                <div className={styles.span}><FaEnvelope /></div></div>
                </div>
            </div>

          </div>
        </div>
      </div>

    </section >
  );
}

export default Contact;