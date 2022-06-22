import React from "react";
import Image from "next/image";

function Contact(props) {
  return (
    <section>
      <div className="topic">
        <h3>Share your </h3>
        <h2>Awesome Idea !!</h2>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <Image src="/contact.png" alt="contact-kapildevpant" height={450} width={450}></Image>
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
            <form className="form">
              <input type="text" id="contact-form-name" placeholder="Name" />
              <input type="phone" placeholder="Phone number" />
              <input type="email" placeholder="Email" />
              <textarea
                className="textfield"
                rows="5"
                cols="50"
                placeholder="Message"
              />
              <button className="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
