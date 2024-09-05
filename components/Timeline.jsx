import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Timeline.module.css";
const Timeline = () => {
  return (
    <>
      <div className={styles.container}>
        <Image
          src="/abcd.jpg"
          alt="Kapil Dev Pant"
          height={450}
          width={720}
        ></Image>
        {/* <img className="mb-10 object-cover object-center rounded"*/}
        <div className={styles.box}>
          <h1 className={styles.title}>Kapil</h1>
          <p className={styles.des}>
            Welcome to my portfolio. This-portolio is currently in development
            Wel come to my portfolio. This portolio is currently in development
            mode and most of the contents are not upto date.
          </p>
          <div className={styles.st}>
            <Link  href="#">
              <a className={styles.button}>Resumes&apos History</a>
            </Link>
            <a
              href="./kapil-dev-pant-cv.pdf"
              download
              className={styles.button}
            >
              Download Resume
            </a>
            {/* <a href="#contact" className={styles.button}>
              Message me{" "}
            </a>
            */}
            {" "} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
