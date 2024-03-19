import React from "react";

import "./About.css";
import Book from './CSSAnimation/Book';
import Phone from './CSSAnimation/Phone';

const About = (props) => {
  return (
    <div className="about">
      <div id="intro">
        <p id="hi">I'm David!</p>
        <p id="jobtitle">a Web Developer</p>
        <div className="introanimation">
          <Phone></Phone>
          <p className="hover">&#60;-Hover-&#62; <br></br> and Click</p>
          <Book></Book>
        </div>
        <div className="godownboxcenter">
          <div className="godownbox">
            <a href="#profile">
              <img
                className="godown"
                src="assets/Icons/downarrow.png"
                alt="this is a search"
              />
            </a>
          </div>
        </div>
      </div>
      <div id="profile">
        <div className="goupbox">
          <a href="#top">
            <img
              className="goup"
              src="./assets/Icons/downarrow.png"
              alt="this is an uparrow"
            />
          </a>
        </div>
        <div className="profilecontent">
          <div className="profileinfo">
            <img className="profilepic" src="./assets/Icons/profilepic.jpg" alt="this is a profile pic"></img>
            <p className="name">David Hyesung Lee</p>
            <div>
              <img className="profileicon" src="./assets/Icons/ageicon.png" alt="this is an age icon"></img>
              <span>26 Years</span>
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
        <div className="godownbox">
          <a href="#skills">
            <img
              className="godown"
              src="./assets/Icons/downarrow.png"
              alt="this is a downarrow"
            />
          </a>
        </div>
      </div>
      <div id="skills">
        <div className="goupbox">
          <a href="#profile">
            <img
              className="goup"
              src="./assets/Icons/downarrow.png"
              alt="this is an uparrow"
            />
          </a>
        </div>
        <div className="skillslist">
          <div className="skillscategory">
            <p className="categorytitle">Skills</p>
            <div className="skillscolumn">
                <img className="skillimg" src="./assets/Icons/skills.PNG" alt="this is skills list"></img>
            </div>
          </div>
          <div className="skillscategory">
            <p className="categorytitle">Software</p>
            <div className="skillscolumn">
                <img className="skillimg" src="./assets/Icons/software.PNG" alt="this is softwares list"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
