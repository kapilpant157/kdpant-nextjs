import React from "react";

import Navbartwo from "../../components/Navbar/Navbartwo";
import Sidebar from "../../components/Sidebar";
import Singleblog from "../../components/Singleblog";
import styles from '../../styles/Blogs.module.css'
import Footer from "../../components/Footer";


const Blogdetail = () => {

  return (
    <>
      <Navbartwo />
      <div className={styles.page}>
        <div className={styles.post}>
          <Singleblog />
        </div>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      </div>
      <div className={styles.footer}> 
        <Footer/>
      </div>
    </>
  );
};

export default Blogdetail;
