import React from "react";
import Image from "next/image";

function Contact(props) {
  return (
    <section className="contact">
      <div className="topic">
        <h3>Share your </h3>
        <h2>Awesome Idea !!</h2>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <Image
            src="/contact.png"
            alt="contact-kapildevpant"
            height={450}
            width={450}
          ></Image>
          <div className="contact-info">
            <p>Don&apos;t let </p>
            <p>Idea stuck</p>
            <p>In mind</p>
            <h5>We are just a message away</h5>
          </div>
        </div>
        <div className="right">
          <div className="contact-form">
            <h2>Your Idea</h2>
            <div className="con-container">
              <form>
                <div className="con-row">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                </div>
                <div className="con-row">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Your email.."
                  />
                </div>
                <div className="con-row">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                  />
                </div>
                <div className="con-row">
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                  ></textarea>
                </div>
                <div className="con-row">
                  <input className="submit" type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
