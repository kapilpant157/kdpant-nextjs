import React, { useState } from "react";
// import Image from "next/image";
// import Resdata from "../components/resumedata";
import Navbartwo from "../components/Navbar/Navbartwo";

import Footer from "../components/Footer";
import styles from "../styles/Resume.module.css";
import Links from "../components/resumecontents/Links";
import Objectives from "../components/resumecontents/Objectives";
import Education from "../components/resumecontents/Education";
import Workexp from "../components/resumecontents/Workexp";
import Trainings from "../components/resumecontents/Trainings";
import Skills from "../components/resumecontents/Skills";

const Resume = () => {
  return (
    <>
      <Navbartwo />
      <div className={styles.container}>
      <h3>KAPIL DEV PANT</h3>
      <div className={styles.layout}>
        <div className={styles.row}>
        <div className={styles.links}>
          <Links />
        </div>
        <div className={styles.objective}>
          <Objectives />
        </div>
        </div>
        
        <div className={styles.education}>
          <Education></Education>
        </div>
        <div className={styles.workexp}>
          {/* <Links /> */}
          <Workexp></Workexp>
        </div>
        <div className="Colzproj">
        </div>
        <div className={styles.trainings}>
          <Trainings></Trainings>
        </div>
        <div className={styles.skills}>
          <Skills></Skills>
        </div>
        <div className="Others">
          {/* <Links /> */}
        </div>
      </div>

      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Resume;
