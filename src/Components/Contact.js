import React from "react";

import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="contact">
      <div className="contactblock">
        <div className="contactrow">
          <img
            className="icon"
            src="./assets/Icons/mail.png"
            alt="this is a mail icon"
          />
          <p className="contactinfo">dvdhyelee@gmail.com</p>
        </div>
        <div className="contactrow">
          <img
            className="icon"
            src="./assets/Icons/linkedin.png"
            alt="this is a linkedin icon"
          />
          <a className="contactinfo" href="https://www.linkedin.com/in/david-hyesung-lee/" title="" target="_blank" rel="noreferrer noopener">LinkedIn - DavidHyesungLee</a>
        </div>
        <div className="contactrow">
          <img
            className="icon"
            src="./assets/Icons/github.png"
            alt="this is a github icon"
          />
          <a className="contactinfo" href="https://github.com/DvdHLee" title="" target="_blank" rel="noreferrer noopener">https://github.com/DvdHLee</a>
        </div>
        <div className="contactrow">
          <img
            className="icon"
            src="./assets/Icons/resume.png"
            alt="this is a resume icon"
          />
          <a className="contactinfo" href="https://drive.google.com/file/d/1JBfBcH-nFSr1MUY4jOakQfIkx6GzTukU/view?usp=sharing" title="" target="_blank" rel="noreferrer noopener">Resume Download</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
