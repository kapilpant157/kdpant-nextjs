import React from 'react'
import Image from 'next/image';
import Bloglist from "./Bloglist";
import { useState } from "react";

const Singleblog = () => {
    const [items] = useState(Bloglist);
    // const router = useRouter();
    // const slug = router.query.slug;
    // const blog = Bloglist.find(function (a) {
    //   return a.slug == slug;
    // });
  return (

    <div className="singlePost" >
          {items.map((elem) => {
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
          return (
    <div className="singlePostWrapper" key={elem.id}>
    <Image src={image} alt={alter} height={550} width={920}/>
      <h1 className="singlePostTitle">
        {Heading}
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span>
          Author:
          <b className="singlePostAuthor">
            {author}
        </b>
        </span>
        <span>{category}</span>
        <span>{date}</span>
      </div>
      <p className="singlePostDesc">
        {description}
        </p>
    </div>
          )
          })}
  </div>
 
  )
}

export default Singleblog

