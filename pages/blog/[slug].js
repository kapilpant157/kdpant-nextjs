import React from 'react';
import Image from 'next/image';
import Bloglist from '../../components/Bloglist';
import {useRouter} from 'next/router';
import Navbartwo from '../../components/Navbar/Navbartwo';
import Sidebar from '../../components/Sidebar'

const Blogdetail = () => {

//   console.log("working");  
  const router = useRouter();
    const slug = router.query.slug;    //website url
    const blog = Bloglist.find(function(a){
    
        return a.slug == slug
      
    }
    ); 

    return (
    <>
    <Navbartwo/>
    <div className='home'>
    <div className="singlePost" key={blog.id}>
    <div className="singlePostWrapper">
    <Image src={blog.images} alt={blog.alter} height={550} width={920}/>
    {blog.heading}
      <h1 className="singlePostTitle">
        {blog.Heading}
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span>
          Author:
          <b className="singlePostAuthor">
            {blog.author}
        </b>
        </span>
        <span>{blog.date}</span>
      </div>
      <p className="singlePostDesc">
        {blog.description}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
        quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
        Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
        eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
        error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
        impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
        odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos!
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
        quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
        Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
        eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
        error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
        impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
        odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
      </p>
    </div>
  </div>
    <Sidebar/>
  </div>
    </>
  )
}

export default Blogdetail




