import React from 'react'
import Link from 'next/link'
import {AiFillDribbbleCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
// import styles from '../styles/Home.module.css'


const Navbar = () => {
  return (
    <nav>
      <a href="#"><h1>Kapil.</h1>
</a>
<div className='links'>
    <div className="leftFloat">
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
      
      <div className="rightFloat">
      <Link href="/Blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/gallery">
        <a>Photo</a>
      </Link>
      <Link href="/Projects">
        <a>Works</a>
      </Link>
      </div>
      </div>
    </nav>
  )
}

export default Navbar