import React from "react";
import Image from "next/image";

const Works = () => {
  return (
    <section    >
     <div className="topic">
      <h3>How do I serve </h3>
      <h2>You?</h2>
      </div>
      <div className="work_container">
        <div className="work">
          <h2>Design</h2>
          <Image src="/samir.png" alt="samir" height={400} width={400}></Image>
          <p>
            Design is one of the important factor before designing.
          </p>
          <div>
            <a href="asda">Read more...</a>
          </div>
        </div>
        <div className="work">
          <h2>Development</h2>
          <Image src="/samir.png" alt="samir" height={400} width={400}></Image>
          <p>
            Development is one of the important factor after designing.
          </p>
          <div>
            <a href="asdas">Read more...</a>
          </div>
        </div>
        <div className="work">
          <h2>Marketing</h2>
          <Image src="/samir.png" alt="samir" height={400} width={400}></Image>
          <p>
            Marketing is one of the important factor after development.
          </p>
          <div>
            <a href="asdas">Read more...</a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Works;
