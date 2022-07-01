import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import Bloglist from "../components/Bloglist";
import Navbartwo from "../components/Navbar/Navbartwo";
import Sidebar from '../components/Sidebar'
import Horizontalslide from "../components/Horizontalslide";

const Blogs = () => {
  const [items] = useState(Bloglist);

  return (
    <>
      <Horizontalslide/>
    <div className="home">
      
      <div className="blogs-container">
        {items.map((elem) => {
          const {
            category,
            Heading,
            image,
            author_image,
            alter,
            author,
            author_alter,
            date,
            description,
            slug,
          } = elem;
          return (



            
            <div className="blogs-card" key={elem.id}>
              <div className="blogs-card-header">
                <Image  src={image} alt={alter} height={310} width={480}></Image>
              </div>
              <div className="blogs-card-body">
                <span className="blogs-tag">{category}</span>
                <h4>{Heading}</h4>
                <p>{description}</p>
                <div className="blogs-user">
                  <Image
                    src={author_image}
                    alt={author_alter}
                    height={40}
                    width={40}
                  ></Image>
                  <div className="blogs-user-info">
                    <h5>{author}</h5>
                    <small>{date}</small>
                  </div>
                  <div className="blogs-post">
                   <Link href={`/blog/${slug}`} >
                   <a>
                      Read More...
                    </a></Link>
               
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Sidebar/>
      </div>

      <Navbartwo />
    </>
  );
};

export default Blogs;
