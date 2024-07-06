import React from "react";
import styles from "../../styles/Resume.module.css";
import Image from "next/image";
const Workexp = () => {
  const data = [
    {
      id: "1",
      sn: "1",
      date: "March 2022 - September 2022",
      name: "Blaze Technology",
      image: '/ca.jpg',
      alt: "asd", 
      position: "Webdeveloper",
      li1: "•	Direct coordination and verification of the project with clients",
      li2: "•	Designed and developed 20+ logos and UI graphics for assigned projects.",
      li3: "•	Made 10+ websites using HTML/CSS, React.js, NeXt.js/Tailwind CSS.",
      li4: "•	Boosted teamsU+2019 performance and progress by tracking & testing milestones.",

      Description: "asddasdasdasd asd asd asd asd asd as asadass .",
    },
    {
      id: "2",
      sn: "2",
      date: "March 2021 - December 2021",
      name: "Blaze Technology",
      image: '/ca.jpg',
      alt: "asd", 
      position: "Webdeveloper",
      li1: "•	Constructed 50+ graphics using Photoshop, illustrator, and Adobe XD.",
      li2: "•	Designed and made multiple logos for various sites.",
      li3: "•	Created multiple sites using HTML/CSS, JavaScript, and Bootstrap.",
      li4: "•	Designed and developed clientsU+2019 websites using WordPress.",
      Description: "asddasdasdasd asd asd asd asd asd as asadass.",
    },
    {
      id: "3",
      sn: "3",
      date: "February 2019 U+2013 June 2020",
      name: "R. Pandey & Associates",
      image: '/ca.jpg',
      alt: "asd", 
      position: "Data Com IT Assistant",
      li1: "•	Registered, edited, and closed more than 10 companies.",
      li2: "•	Troubleshooted technical problems and solved them.",
      li3: "•	Assisted supervisor in recording files in a digital manner.",
      li4: "•	Accumulated data for making Annual reports along with the Director.",
      Description: "asddasdasdasd asd asd asd asd asd as asadass.",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <h2>Collaborated as</h2>
      {data.map((x) => {
        const isOdd = x.sn % 2 !== 0;
        const leftPosition = isOdd ? "0%" : "50%";
        const rightPosition = isOdd ? "-100%" : " 6%%";

        return (
          <article key={x.id}>
            <div className={styles.timline} style={{ left: leftPosition }} >
              <div className={styles.boxcontainer}>
                <div className={styles.imgcontainer}  style={{ position: "relative", right: rightPosition }} >
              <Image src={x.image}  height={500} width={500} alt={x.alt} />
                </div>
                <div className={styles.textbox}>
                  <ul>
                    <li>
                      {x.sn}. {x.position} at {x.name}
                    </li>
                    <li>{x.date}</li>
                  </ul>
                  <strong>Achievements:</strong>
                  <ol>
                    <li>{x.li1}</li>
                    <li>{x.li2}</li>
                    <li>{x.li3}</li>
                    <li>{x.li4}</li>
                  </ol>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Workexp;