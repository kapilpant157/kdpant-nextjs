import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import Bloglist from "../components/Bloglist";
import Navbartwo from "../components/Navbar/Navbartwo";
// import Sidebar from '../components/Sidebar';
import styles from '../styles/Blogs.module.css'
import { AiTwotoneCalendar } from 'react-icons/ai'

const Blogs = () => {
  const [items] = useState(Bloglist);

  return (
    <>
      <Navbartwo />
      <div className={styles.home}>

        <div className={styles.container}>
          {items.map((elem) => {
            const {
              category, Heading, image, author_image, alter, author, author_alter, date, description, slug,
            } = elem;
            return (

              <div className={styles.card} key={elem.id}>
                <div className={styles.header}>
                  <Image src={image} alt={alter} height={310} width={480}></Image>
                </div>
                <div className={styles.body}>
                  <div className={styles.row}><a> <AiTwotoneCalendar /></a>
                    <small>{date}</small>
                    <span className={styles.tag}> {category}</span></div>
                  <h4>{Heading}</h4>
                  <p>{description}</p>
                  <div className={styles.bar}></div>
                  <div className={styles.user}>
                    {/* <Image src={author_image} alt={author_alter} height={40} width={40}
                    ></Image> */}
                    <div className={styles.userinfo}>
                      <h5>{author}</h5>

                    </div>
                    <div className={styles.tag}>
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

        

      </div>
    </>
  );
};

export default Blogs;
