import React from "react";
import Link from "next/link";

const Navbartwo = () => {
  return (
    <nav className="navbartwo">
      <div className="trapezoid">
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
          <a>Kapil.</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbartwo;
