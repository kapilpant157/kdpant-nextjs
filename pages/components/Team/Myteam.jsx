import Teamlist from "./Teamlist";
import React, { useState } from "react";
import Image from "next/image";

const Myteam = () => {
  const [items] = useState(Teamlist);
  return (
    <section id="Myteam">
      <div className="topic">
      <h3>Who are in </h3>
      <h2>My Team ?</h2>
      </div>
      <div className="team_container">
        {items.map((elem) => {
          // const { name, image, description, link } = elem;
          return (
            <div className="team" key={elem.id}>
              <div className="team_image">
                <Image src={elem.image} alt="" height={200} width={200}></Image>
              </div>
              <div className="title">
                <h2>{elem.name}</h2>
                <p>{elem.description}</p>
              </div>
              <div>
                <a href={elem.link} target="_blank" rel="noopener noreferrer">
                  Read more...
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Myteam;
