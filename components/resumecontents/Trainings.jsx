import React from "react";

const Trainings = () => {
  const data = [
    {
      id: "1",
      sn: "1",
      name: "“Time Management & Productivity Training”",
      by: "Nonprofitready.org",
      date: "June 2021",
      Description:
        "Be trained to make time for meaningful work, Increase Productivity in Daily Tasks and learned Guidelines of effective timing.",
    },
    {
      id: "2",
      sn: "2",
      name: "“Public Speaking & Presentation Strategies Training”",
      by: "Positive Vibration Nepal Pvt. Ltd",
      date: "12 Dec 2020",
      Description:
        "To speak in confidence in public & to be storyteller in all speaking.",
    },
    {
      id: "3",
      sn: "3",
      name: "“Strategic Leadership training” ",
      by: "Positive Vibration Nepal Pvt. Ltd",
      date: "3 Dec 2020",
      Description:
        "Speak with confidence while leading others & Inspire people with your words",
    },
    {
      id: "4",
      sn: "4",
      name: "“Meet The Leader” ",
      by: "Nepal Management Council (NMC)",
      date: "10th January 2020",
      Description:
        "Understood different approaches of leadership skills, and how to implement those skills for overall development",
    },
    {
      id: "5",
      sn: "5",
      name: "“Basic Computer Training”",
      by: "National Institute of Technology (CTEVT), Biratnagar, Nepal.",
      date: "10th January 2020",
      Description: "Basic computer skills",
    },
    {
      id: "6",
      sn: "6",
      name: "“Facing management challenges of difficult behavior and diverse teams”",
      by: " NonProfitready.org",
      date: "April 2024",
      Description:
        "Learned useful techniques and processes for conflict resolution & dealing with conflicts at workplace.",
    },
    {
      id: "7",
      sn: "7",
      name: "	“Qualitative Data Analysis”",
      by: "NonProfitready.org",
      date: "April 2024 ",
      Description:
        " Understood various types of data & steps to analyze those data.",
    },
    {
      id: "8",
      sn: "8",
      name: "	“Azile Project Management Course”",
      by: " Udemy academy ",
      date: "Jan 2023 ",
      Description:
        " Cultured how system development works, how to Increase productivity and reduce costs during project development, how to do faster delivery of project by selecting best development approach.",
    },
    {
      id: "9",
      sn: "9",
      name: "	“Mega IT Quiz U+2019Tech Wizard 2.0U+2019” ",
      by: " Graphic Era Hill University ",
      date: "Jan 2023",
      Description: " Coding experience in various online platform.",
    },
    {
      id: "10",
      sn: "10",
      name: "“Game Development using Unity engine”",
      by: "Udemy",
      date: ",June 2022 ",
      Description:
        " Used pre-designed artefacts in game module & compiled various movements in game.",
    },
    {
      id: "11",
      sn: "11",
      name: "	“React.js/NeXt.Js”",
      by: "Udemy ",
      date: "May 2022",
      Description:
        " Build website using React.Js made use of Component based architecture.",
    },
    {
      id: "12",
      sn: "12",
      name: "	“Communication, Conflicts & Resolutions Training”",
      by: "Nonprofitready.org ",
      date: "June 2021",
      Description:
        " To turn conflicts into Collaboration, Conflict mediation in the workspace & Conflict De-Escalation Tech",
    },
    {
      id: "13",
      sn: "13",
      name: "	“Information Management & Technology Training”",
      by: " Nonprofitready.org ",
      date: "June 2021",
      Description:
        " Protect Your Computer, Mobile devices from attack, Password habits to protect you & Digital Etiquette Fundamentals",
    },
    {
      id: "14",
      sn: "14",
      name: "	“Data Visualization- An Introduction Training”",
      by: "by Global Health Learning Centre ",
      date: "June 2021",
      Description:
        " Cultured to use different strategies for focusing attention on the key data in visualization, Customize data visualization for different audience, Current data visualization resources & software in health development communities.",
    },
    {
      id: "15",
      sn: "15",
      name: "	“Social media for Health and Development Training”",
      by: "by Global Health Learning Centre ",
      date: "June 2021",
      Description:
        " Introductions about Social medias, know how social media helps in promoting health benefits.",
    },
    {
      id: "16",
      sn: "16",
      name: "	“The Beginners' Illustration master class”",
      by: "by Udemy, Edu Evolution Online",
      Description:
        " basis of Illustration tools and technique, Designing of logo and vector images.",
    },
    {
      id: "17",
      sn: "17",
      name: "	“Cyber Security Training”",
      by: "Udemy",
      Description:
        " brief knowledge about internetsU+2019 dangers, Introductions about Viruses, Malicious activities.",
    },
    {
      id: "18",
      sn: "18",
      name: "	“Adobe XD cc 2020 Training”",
      by: " Udemy, Learn Tech Plus, online ",
      date: "May 2020",
      Description:
        " designing and Developing Website, Mobile UI, Designing Pamphlets etc.",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <h2>Trainings</h2>
      {data.map((x) => {
        return (
          <>
            <article key={x.id}></article>

            <div>
              {x.sn}. <strong>{x.name}</strong> - Organized by {x.by} on{" "}
              {x.date}
              <p>{x.Description}</p>
            </div>
          </>
        );
      })}
      ;
    </section>
  );
};

export default Trainings;
