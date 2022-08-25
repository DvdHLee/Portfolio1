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
            <p className="categorytitle">Web Development</p>
            <div className="skillscolumn">
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/react.png" alt="react icon"></img>
                <p className="skilltitle">React</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/redux.png" alt="redux icon"></img>
                <p className="skilltitle">Redux</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/javascript.png" alt="js icon"></img>
                <p className="skilltitle">JavaScript</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/html.png" alt="html icon"></img>
                <p className="skilltitle">HTML5</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/css.png" alt="css icon"></img>
                <p className="skilltitle">CSS5</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/tailwind.png" alt="tailwind icon"></img>
                <p className="skilltitle">Tailwind</p>
              </div>
            </div>
            <div className="skillscolumn">
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/java.png" alt="java icon"></img>
                <p className="skilltitle">Java</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/sql.png" alt="sql icon"></img>
                <p className="skilltitle">SQL</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/rest.png" alt="rest icon"></img>
                <p className="skilltitle">REST API</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/springboot.png" alt="spring boot icon"></img>
                <p className="skilltitle">Spring Boot</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/postgres.png" alt="postgres icon"></img>
                <p className="skilltitle">PostgreSQL</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/node.png" alt="node icon"></img>
                <p className="skilltitle">NodeJS</p>
              </div>
            </div>
          </div>
          <div className="skillscategory">
            <p className="categorytitle">Software</p>
            <div className="skillscolumn">
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/github.png" alt="git icon"></img>
                <p className="skilltitle">Github</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/eclipse.png" alt="eclipse"></img>
                <p className="skilltitle">Eclipse</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/vscode.png" alt="vs code icon"></img>
                <p className="skilltitle">VS Code</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/intellij.png" alt="intellij icon"></img>
                <p className="skilltitle">IntelliJ</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/pgadmin.png" alt="pgadmin icon"></img>
                <p className="skilltitle">PGAdmin</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/figma.png" alt="figma icon"></img>
                <p className="skilltitle">Figma</p>
              </div>
            </div>
            <div className="skillscolumn">
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/matlab.png" alt="matlab icon"></img>
                <p className="skilltitle">MATLAB</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/mathematica.png" alt="mathematica icon"></img>
                <p className="skilltitle">Mathematica</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/solidworks.png" alt="solidworks icon"></img>
                <p className="skilltitle">SolidWorks</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/openvsp.png" alt="openvsp icon"></img>
                <p className="skilltitle">OpenVSP</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/tos.png" alt="tos icon"></img>
                <p className="skilltitle">ThinkorSwim</p>
              </div>
              <div className="skillentry">
                <img className="skillimg" src="./assets/Icons/sse.png" alt="sse icon"></img>
                <p className="skilltitle">StreetSmart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
