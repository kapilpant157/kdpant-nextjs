// import Gallerylist from "../components/gallerylist";
// import React from "react";
// import Head from "next/head";
// import Image from "next/image";
// import Navbartwo from "../components/Navbar/Navbartwo";




// const gallery = () => {
//   const [items] = Gallerylist;
//   return (
//     <section id="gallery">
//         <Head>
//         <title>Kapil Dev Pant</title>
//         <meta name="laksdja" content="This website is replica of older site i.e kapilpant157.com.np, generated by create next app" />
//         <link rel="icon" href="/sign.ico" />
//       </Head>
//          <h1>Photoes you would like to see</h1>
     
// <div className="tags">
//   <button className='btn btn-primary' > editing</button>
//   <button className='btn btn-primary' > random</button>
//   <button className='btn btn-primary' > brataband</button>
//   <button className='btn btn-primary' > Photography</button>

// </div>
//       <div className="list_container">
//         <div className="row">
//           {items.map((elem) => {
//             const { name, image} = elem;
//             return (
//               <div className="portfolio-box"key={elem.id}>
//                 <div className="list">
//                   <div className="image">
//                   <Image src={image}  height={533} width={800} alt={image} />
//                   </div>
//                 <div className="title">
//                   <h2>{name}</h2>
                  
//                 </div>
              
//               </div>
//              </div>
//             );
//           })}
//         </div>
//       </div>
//    <Navbartwo/>
//     </section>
//   )
// }

// export default gallery


import React from 'react'
import Navbartwo from '../components/Navbar/Navbartwo'

const Gallery = () => {
  return (
    <>
    <Navbartwo/>
    </>
  )
}

export default Gallery