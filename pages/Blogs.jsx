import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Bloglist from "../components/Bloglist";
import Navbartwo from "../components/Navbar/Navbartwo";
// import Sidebar from '../components/Sidebar';
import styles from "../styles/Blogs.module.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import Footer from "../components/Footer";

const Blogs = () => {
  const [items] = useState(Bloglist);

  return (
    <>
      <Navbartwo />
      <div className={styles.home}>
        <div className={styles.category}>
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
              <div className={styles.blogcard} key={elem.id}>
                <div className={styles.photo}>
                  <Image
                    src={image}
                    alt={alter}
                    height={310}
                    width={480}
                  ></Image>
                </div>

                <div className={styles.body}>
                  <div className={styles.row}>
                    <a>
                      {" "}
                      <AiTwotoneCalendar />
                    </a>
                    <small>{date}</small>
                    <div className={styles.tags}> {category}</div>
                  </div>
                  <div className={styles.heading}>
                    <h4>{Heading}</h4>
                  </div>
                  <div className={styles.description}>
                    <p>{description}</p>
                  </div>
                  <div className={styles.user}>
                    {/* <Image src={authorimage} alt={author_alter} height={40} width={40}></Image> */}
                    <div className={styles.author}>
                      <h5>{author}</h5>
                    </div>
                    <div className={styles.readmore}>
                      <Link href={`/blog/${slug}`}>
                        <a>Read More...</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
