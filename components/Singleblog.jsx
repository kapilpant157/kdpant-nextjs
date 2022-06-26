import React from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router';
import Bloglist from "./Bloglist";
import { useState } from "react";

const Singleblog = () => {
    const [items] = useState(Bloglist);
    const router = useRouter();
    const slug = router.query.slug;
    const elem = Bloglist.find(function (a) {
      return a.slug == slug;
    });
    if(!elem){
      return "No blog found";
    }
  return (

    <div className="singlePost" >
          {/* {items.map((elem) => {
          const {
            category,
            Heading,
            image,
            // author_image,
            alter,
            author,
            // author_alter,
            date,
            description,
            // slug,
          } = elem;
          return ( */}
    <div className="singlePostWrapper" key={elem.id}>
    <Image src={elem.image} alt={elem.alter} height={550} width={920}/>
      <h1 className="singlePostTitle">
        {elem.Heading}
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span>
          Author:
          <b className="singlePostAuthor">
            {elem.author}
        </b>
        </span>
        <span>{elem.category}</span>
        <span>{elem.date}</span>
      </div>
      <p className="singlePostDesc">
        {elem.description}
        </p>
    </div>
          {/* )
          })} */}
  </div>
 
  )
}

export default Singleblog

