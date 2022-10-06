import React from "react";
import Link from "next/link";
import styles from "../Navbar/Navbar.module.css"


const Navbartwo = () => {
  return (
    <nav className={styles.navbartwo}>
      <div className={styles.trapezoid}>
        <Link href="/Projects">
          <a>Projects</a>
        </Link>
        <Link href="/Gallery">
          <a>Gallery</a>
        </Link>
        <Link href="/Blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/">
          <a>Kapil</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbartwo;
