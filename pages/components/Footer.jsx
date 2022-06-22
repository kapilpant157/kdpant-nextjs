import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
     
      <div>
        &copy; <Image src="/footer.png" layout="fixed" height={20} width={150} alt="all rights reserved 2022"></Image>
      </div>
    </footer>
  );
};

export default Footer;
