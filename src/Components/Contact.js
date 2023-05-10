import React from "react";

import "./Contact.css";
import ContactUs from './ContactUs';

const Contact = (props) => {

  const clickedmail = () => {
    navigator.clipboard.writeText("dvdhyelee@gmail.com");
    alert("\"dvdhyelee@gmail.com\" copied to clipboard!");
  }

  return (
    <div className="contact">
      <div className="contactdiv">
        <ContactUs></ContactUs>
        <div className="iconlinks">
          <button className="mailbutton" onClick={clickedmail}>
            <img className="contactlinkimg" src="./assets/Icons/mail.png" alt="linkedin icon"></img>
          </button>
          <a className="contactlink" href="https://www.linkedin.com/in/dvdhyelee/" title="" target="_blank" rel="noreferrer noopener">
            <img className="contactlinkimg" src="./assets/Icons/linkedin.png" alt="linkedin icon"></img>
          </a>
          <a href="https://github.com/DvdHLee" title="" target="_blank" rel="noreferrer noopener">
            <img className="contactlinkimg" src="./assets/Icons/github.png" alt="linkedin icon"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
