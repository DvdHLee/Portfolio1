import React from "react";

import "./About.css";

const About = (props) => {
  return (
    <div className="about">
      <div id="intro">
        <p id="hi">I'm David!</p>
        <p id="jobtitle">a Web Developer</p>
      </div>
      <div className="introanimation">Some Animation</div>
      <div className="downarrowbox">
        <a href="#profile">
          <img
            className="downarrow"
            src="./assets/Icons/downarrow.png"
            alt="this is a downarrow"
          />
        </a>
      </div>
      <div id="profile">
        <div className="profilecontent">
          <div className="profileinfo">
            <img className="profilepic" src="./assets/Icons/profilepic.jpg" alt="this is a profile pic"></img>
            <p className="name">David Hyesung Lee</p>
            <div>
              <img className="profileicon" src="./assets/Icons/ageicon.png" alt="this is an age icon"></img>
              <span>25 Years</span>
            </div>
            <div>
              <img className="profileicon" src="./assets/Icons/locationicon.png" alt="this is a location icon"></img>
              <span>Phoenix, Arizona</span>
            </div>
          </div>
          <div className="profilesummary">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unlike most people, I've
              never had a singular focus on the direction my career was heading.
              I have a seemingly arbitrary life path, ranging from a degree in aerospace engineering to short-term
              investment trading, and many things in between. But now, having discovered web development, I'm ready
              to take the next step in my professional career. I won't lie and say I love everything about it, but
              the creative liberties and systematic solutions are truly a joy.

              Though my time in this field is not extensive, I have been able to learn and apply both frontend and backend
              technologies in awesome personal projects. I hope you have as much fun using them as I did building them!</p>
          </div>
        </div>
      </div>
      <div id="skills">
        <p className="skillstitle">Skills</p>
        <div className="skillscontent">
          <div className="skillcategory">
            <p className="skillcategorytitle">Web Development</p>
            <div className="skillslist">
              <div className="halflist">
                <p>React</p>
                <p>JavaScript</p>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Tailwind</p>
                <p>NPM</p>
              </div>
              <div className="halflist">
                <p>Java</p>
                <p>SQL</p>
                <p>REST API</p>
                <p>Spring Boot</p>
                <p>Node</p>
                <p>Redux</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="skillcategory">
            <p className="skillcategorytitle">Software</p>
            <div className="skillslist">
              <div className="halflist">
                <p>MATLAB</p>
                <p>Mathematica</p>
                <p>Mission Planner</p>
                <p>SolidWorks</p>
                <p>OpenVSP</p>
                <p>Figma</p>
              </div>
              <div className="halflist">
                <p>Eclipse</p>
                <p>VS Code</p>
                <p>Git</p>
                <p>PGAdmin</p>
                <p>PostgreSQL</p>
                <p>IntelliJ</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="skillcategory">
            <p className="skillcategorytitle">Other</p>
            <div className="skillslist">
              <div className="halflist">
                <p>Technical Analysis</p>
                <p>Trading Scalps</p>
                <p>Think Or Swim</p>
                <p>StreetSmart Edge</p>
              </div>
              <div className="halflist">
                <p>Piano</p>
                <p>Guitar</p>
                <p>Trumpet</p>
                <p>Synchronous Tutor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
