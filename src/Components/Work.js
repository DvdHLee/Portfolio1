import React, { useState } from "react";

import "./Work.css";

const Work = (props) => {
  const [page, setPage] = useState(0);

  const page0 = e => {
    setPage(0);
  }

  const page1 = e => {
    setPage(1);
  }

  const page2 = e => {
    setPage(2);
  }

  const page3 = e => {
    setPage(3);
  }

  if (page === 0) {
    return (
      <div className="work">
        <div className="workcontent">
          <div className="workcategory">
            <p className="workcategorytitle">Education</p>
            <button className="workbutton" onClick={page1}>
              <img className="workicon" src="/assets/Icons/education.png" alt="this is an education icon"></img>
            </button>
          </div>
          <div className="workcategory">
            <p className="workcategorytitle">Experience</p>
            <button className="workbutton" onClick={page2}>
              <img className="workicon" src="/assets/Icons/experience.png" alt="this is an education icon"></img>
            </button>
          </div>
          <div className="workcategory">
            <p className="workcategorytitle">Projects</p>
            <button className="workbutton" onClick={page3}>
              <img className="workicon" src="/assets/Icons/project.png" alt="this is an education icon"></img>
            </button>
          </div>
        </div>
      </div>
    );
  } else if (page === 1) {
    return (
      <div className="work">
        <button className="backbutton" onClick={page0}>
          <img className="backarrow" src="/assets/Icons/backarrow.png" alt="this is a back arrow"></img>
        </button>
        <p className="categorytitle">Education</p>
        <div className="educationbody">
          <div className="educationentry">
            <p id="edtitle">FastTrack Developer</p>
            <p id="edentity">Cook Systems</p>
            <p id="eddetails"> - Full Stack Developer Training Program</p>
            <p id="eddate">07/2022 - Present</p>
            <p id="edlocation">Online</p>
          </div>
          <div className="educationentry">
            <p id="edtitle">Bachelor of Science in Aerospace Engineering</p>
            <p id="edentity">Virginia Polytechnic Institute and State University</p>
            <p id="eddetails"> - Minor in Mathematics</p>
            <p id="eddate">08/2015 - 05/2019</p>
            <p id="edlocation">Blacksburg, VA</p>
          </div>
          <div className="educationentry">
            <p id="edtitle">React - The Complete Guide</p>
            <p id="edentity">Udemy</p>
            <p id="eddetails"> - Comprehensive online course on React and Redux</p>
            <p id="eddate">01/2022 - 03/2022</p>
            <p id="edlocation">Online</p>
          </div>
        </div>
      </div>
    )
  } else if (page === 2) {
    return (
      <div className="work">
        <button className="backbutton" onClick={page0}>
          <img className="backarrow" src="/assets/Icons/backarrow.png" alt="this is a back arrow"></img>
        </button>
        <p className="categorytitle">Experience</p>
        <div className="experiencebody">
          <div className="experienceentry">
            <p id="experienceemployer">Cignition, Inc</p>
            <p id="experienceposition">Mathematics Tutor</p>
            <p id="experiencedate">01/2022 - 05/2022</p>
            <p id="experiencedetails">
              - Instructed multiple K-12 groups in math topics in an online synchronous setting <br></br>
              - Facilitated online learning through use of virtual communication and teaching tools such as Desmos, Jamboard,
              &nbsp;&nbsp;&nbsp;Google Meet, and Zoom
            </p>
          </div>
          <div className="experienceentry">
            <p id="experienceemployer">Self-Employed </p>
            <p id="experienceposition">Day Trader</p>
            <p id="experiencedate">03/20 - 01/22</p>
            <p id="experiencedetails">
              - Examined technical and fundamental identifiers to scalp blue-chip stocks <br></br>
              - Utilized various brokerages and their platforms to perform short term and swing trades (TD Ameritrade -
              &nbsp;&nbsp;&nbsp;ThinkOrSwim, Charles Schwab - StreetSmart Edge, Robinhood - Options, Fidelity, Cryptocurrency)

            </p>
          </div>
          <div className="experienceentry">
            <p id="experienceemployer">Virginia Tech Corporate Research Center</p>
            <p id="experienceposition">Undergraduate Research Assistant</p>
            <p id="experiencedate">08/17 - 12/17</p>
            <p id="experiencedetails">
              - Collected data for prebuilt and custom multirotors (primarily quad and hexacopters) for the purposes of System
              &nbsp;&nbsp;&nbsp;Identification <br></br>
              - Processed automated test runs utilizing Mission Planner (Ground control station software)

            </p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="work">
        <button className="backbutton" onClick={page0}>
          <img className="backarrow" src="/assets/Icons/backarrow.png" alt="this is a back arrow"></img>
        </button>
        <p className="categorytitle">Projects</p>
        <div className="projects">
          <div className="projectrow">
            <a className="projectitem" href="https://arizonacoderz.github.io/meal-chewser/" title="" target="_blank" rel="noreferrer noopener">
              <img
                id="mcicon"
                src="/assets/Icons/mealchewser.png"
                alt="this is a mealchewser icon"
              />
            </a>
            <a className="projectitem" href="https://github.com/DvdHLee/Portfolio" title="" target="_blank" rel="noreferrer noopener">
              <img
                id="portfolioicon"
                src="/assets/Icons/portfolio.svg"
                alt="this is a portfolio icon"
              />
            </a>
            <a className="projectitem" href="https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2022-team-2" title="" target="_blank" rel="noreferrer noopener">
              <img
                id="twittericon"
                src="/assets/Icons/twittermockup.png"
                alt="this is a twitter icon"
              />
            </a>
          </div>
          <div className="projectrow">
            <a className="projectitem" href="https://drive.google.com/file/d/16ws097UPsKGsoiWp0mY3CRUhREOfvSxP/view?usp=sharing" title="" target="_blank" rel="noreferrer noopener">
              <img
                id="africairicon"
                src="/assets/Icons/africair.png"
                alt="this is a a4a icon"
              />
            </a>
            <a className="projectitem" href="https://github.com/Totus-Alias" title="" target="_blank" rel="noreferrer noopener">
              <img
                id="TA"
                src="/assets/Icons/TA.png"
                alt="this is a TA placeholder"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }

};

export default Work;
