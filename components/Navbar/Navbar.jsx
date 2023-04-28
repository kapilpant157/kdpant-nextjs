import React from 'react'
import Link from 'next/link'
import {AiFillDribbbleCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {GiClockwork} from 'react-icons/gi'
import {GiPhotoCamera} from 'react-icons/gi'
import {CiRead} from 'react-icons/ci'



import styles from '../Navbar/Navbar.module.css';


const Navbar = () => {
  return (
    <nav>
      <div className="atrapezoid">
      <a href="#"><h1>Kapil.</h1></a>
      </div>
<div className={styles.links}>
    <div className={styles.leftFloat}>
      <Link href="https://dribbble.com/kapilpant157" target="_blank" >
       <a> <AiFillDribbbleCircle/></a>
      </Link>
      <Link href="https://www.linkedin.com/in/kapilpant157/" target="_blank">
      <a> <AiFillLinkedin/></a>
      </Link>
      <Link href="https://www.instagram.com/kapildpant/" target="_blank"> 
      <a><AiFillInstagram/></a>
      </Link>
      </div>
      
      <div className={styles.rightFloat}>
      <Link href="/Blogs">
      <a><CiRead/></a>
        {/* <a>.B.</a> */}
      </Link>
      <Link href="/Gallery">
        <a><GiPhotoCamera/></a>
      </Link>
      <Link href="/Projects">
      <a><GiClockwork/></a>
      </Link>
      </div>
      </div>
    </nav>
  )
}

export default Navbar