import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Aboutme from '../components/AboutMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
// import Header from '../components/Header'
import Navbar from '../components/Navbar/Navbar'
import Works from '../components/Works'
import Timeline from '../components/Timeline'
// import Myteam from '../components/Myteam'


// import Myteam from '../components/Myteam'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Kapil Dev Pant</title>
          <meta name='viewport' content="width-device-width, initial-scale=1.0" />
          <meta name="kapildevpant" content="Kapil Dev Pant" />
          <link rel="icon" href="/sign.ico" />
        </Head>
        {/* <Header/> */}
        {/* <Aboutme/> */}
        {/* <Myteam/> */}
       
        <Timeline />
        <Works/>
        <Contact/>
        <Navbar />
        <Footer/>
      </div>

    </>
  )
}
