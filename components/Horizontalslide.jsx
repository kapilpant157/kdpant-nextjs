import React, { useState } from "react";
import Bloglist from "./Bloglist";
import Image from "next/image";
import Link from 'next/link';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'


const Horizontalslide = () => {
  const [items] = useState(Bloglist);
  return (
    <>
      {/* <div className="blogtops-container">
        <a><BsArrowLeftCircle /></a>
        {items.map((elem) => {
          return (
            <div className="blogtops-card" >


              <div className="blogtops-card-body">
                <h4>{elem.Heading}</h4>


              </div>
            </div>
          );
        })}

      </div> */}
       
      <div className="blogtops-container">
     <a><BsArrowLeftCircle/></a>
      {items.map((elem) => {
          return ( 
              <div className="blogtops-card" key={elem.id}>
                <div className="slider">
              <div className="blogtops-card-header">
                <Image  src={elem.image} alt={elem.alter} height={310} width={480}></Image>
              </div>
              <div className="blogtops-card-body">
                <span className="blogs-tag">{elem.category}</span>
                <h4>{elem.Heading}</h4>
                <p>{elem.meta}</p>
                  <div className="blogs-post">
                   <Link href={`/blog/${elem.slug}`} >
                   <a> Read More...</a></Link>
                  </div>
              </div>
              </div>
            </div>
          );
        })}
             <a><BsArrowRightCircle/> </a> 

      </div>


















    </>
  )
}





export default Horizontalslide