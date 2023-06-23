import React from "react";

import "./Work.css";

const Work = (props) => {
  return (
    <div className="work">
      <div className="workbody">
        <p className="worktitle">Work</p>
        <div className="workentry">
          <img className="workimg" src="./assets/Icons/molsnapshot.PNG" alt="more or less snapshot"></img>
          <div className="content">
            <p className="workentrytitle">More or Less</p>
            <div className="details">
              <p className="year">2023</p>
              <p className="summary">A Trivia Game</p>
            </div>
            <p className="description">
              More or Less is a simple trivia game where you guess "more" or "less" on a given numerical statement. You can play 5 rounds per day 
              and various statistics are logged automatically. Hard mode coming soon!
            </p>
            <a className="workleftlink" href="https://dvdhlee.github.io/Moreorless/" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/link.png" alt="link icon" width="40px" height="40px"></img>
            </a>
            <a className="workrightlink" href="https://github.com/DvdHLee/Moreorless" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/github.png" alt="github icon" width="33px" height="33px"></img>
            </a>
          </div>
        </div>
        <div className="divider" />
        <div className="workentry">
          <img className="workimg" src="./assets/Icons/ISBsnapshot.PNG" alt="ISB snapshot"></img>
          <div className="content">
            <p className="workentrytitle">Intraday Scalping Backtester</p>
            <div className="details">
              <p className="year">2023</p>
              <p className="summary">A Day Trading Strategy Tester</p>
            </div>
            <p className="description">
              ISB is a python program designed to back test intraday trading strategies based on user input conditions. It pulls data directly from
              Yahoo Finance to simulate trades and projected output. 
            </p>
            <a className="workrightlink" href="https://github.com/DvdHLee/ISB" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/github.png" alt="github icon" width="33px" height="33px"></img>
            </a>
          </div>
        </div>
        <div className="divider" />
        <div className="workentry">
          <img className="workimg" src="./assets/Icons/mcsnapshot.png" alt="mc snapshot"></img>
          <div className="content">
            <p className="workentrytitle">Meal Chewser</p>
            <div className="details">
              <p className="year">2022</p>
              <p className="summary">"Chews" where to eat</p>
            </div>
            <p className="description">
              Meal Chewser is a random restaurant generator designed to make deciding where to eat fun and stress free. All you have to do is simply
              type in a location and some optional filters, and it will automatically choose a restaurant for you! Mealchewser is a front end application
              built using React and Google APIs.
            </p>
            <a className="workleftlink" href="https://arizonacoderz.github.io/meal-chewser/" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/link.png" alt="link icon" width="40px" height="40px"></img>
            </a>
            <a className="workrightlink" href="https://github.com/arizonaCoderz/meal-chewser" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/github.png" alt="github icon" width="33px" height="33px"></img>
            </a>
          </div>
        </div>
        <div className="divider" />
        <div className="workentry">
          <img className="workimg" src="./assets/Icons/companyorgsnapshot.png" alt="company organizer snapshot"></img>
          <div className="content">
            <p className="workentrytitle">Company Organizer</p>
            <div className="details">
              <p className="year">2022</p>
              <p className="summary">A hub for your company</p>
            </div>
            <p className="description">
              Company Organizer is a full stack application built to act as a hub for a company. It has basic login and authentication as well as 
              two privilege levels: an admin and a regular user. Admins are capable of creating and editing new users, teams, projects, and announcements, while
              users can view their projects, teams, and company announcements. The front-end was built using React, and the back-end uses Postgres and Spring Boot.
            </p>
            <a className="workrightlink" href="https://github.com/DvdHLee/Company-Organizer" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/github.png" alt="github icon" width="33px" height="33px"></img>
            </a>
          </div>
        </div>
        <div className="divider" />
        <div className="workentry">
          <img className="workimg" src="./assets/Icons/whosnapshot.png" alt="whos who snapshot"></img>
          <div className="content">
            <p className="workentrytitle">Who's Who?</p>
            <div className="details">
              <p className="year">2022</p>
              <p className="summary">Spotify Artist Guessing Game</p>
            </div>
            <p className="description">
              Who's who is a simple game where you listen to songs and try to guess the artist! It has three difficulty levels and ten genres to choose from.
              It is a frontend application built with React and the Spotify API, and it is deployed in Vercel.
            </p>
            <a className="workleftlink" href="https://whos-who.vercel.app/" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/link.png" alt="link icon" width="40px" height="40px"></img>
            </a>
            <a className="workrightlink" href="https://github.com/DvdHLee/Who-s-who.git" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/github.png" alt="github icon" width="33px" height="33px"></img>
            </a>
          </div>
        </div>
        <div className="divider" />
        <div className="workentry">
          <img className="workimg" src="./assets/Icons/portfoliosnapshot.png" alt="portfolio snapshot"></img>
          <div className="content">
            <p className="workentrytitle">Porfolio</p>
            <div className="details">
              <p className="year">2022</p>
              <p className="summary">This very website</p>
            </div>
            <p className="description">
              This web portfolio is my online mark in this world. Here I showcase who I am and what I've done. This website was built using
              React and is constantly being updated.
            </p>
            <a className="workrightlink" href="https://github.com/DvdHLee/Portfolio" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/github.png" alt="github icon" width="33px" height="33px"></img>
            </a>
          </div>
        </div>
        <div className="divider" />
        <div className="workentry">
          <img className="workimg" src="./assets/Icons/a4asnapshot.png" alt="a4a snapshot"></img>
          <div className="content">
            <p className="workentrytitle">The Sparrow</p>
            <div className="details">
              <p className="year">2019</p>
              <p className="summary">An aircraft for Africa</p>
            </div>
            <p className="description">
              In response to the Aircraft for Africa Request for Proposal (RFP) from Loughborough University,
              a new aircraft combining the technology of today with the craftsmanship of yesteryear has been
              developed to meet the needs of a developing continent with incredible savings.
            </p>
            <a className="workrightlink" href="https://drive.google.com/file/d/16ws097UPsKGsoiWp0mY3CRUhREOfvSxP/view?usp=sharing" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/link.png" alt="github icon" width="40px" height="40px"></img>
            </a>
          </div>
        </div>
        <div className="divider" />
        <div className="workentry">
          <img className="workimg" src="./assets/Icons/twitterapisnapshot.png" alt="twitter api snapshot"></img>
          <div className="content">
            <p className="workentrytitle">Twitter API</p>
            <div className="details">
              <p className="year">2022</p>
              <p className="summary">RESTful Web Service</p>
            </div>
            <p className="description">
              This backend application consists of 30 endpoints designed to simulate the basic functionality of
              Twitter! The API includes database management for users, tweets, and hashtags, as well as a rudimentary
              validation system. This application was built using Java, SQL, Spring Boot, and Postgres.
            </p>
            <a className="workrightlink" href="https://github.com/DvdHLee/twitterAPI" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/github.png" alt="github icon" width="33px" height="33px"></img>
            </a>
          </div>
        </div>
        <div className="divider" />
        <div className="workentry">
          <img className="workimg" src="./assets/Icons/tasnapshot.png" alt="twitter api snapshot"></img>
          <div className="content">
            <p className="workentrytitle">Totus Alias</p>
            <div className="details">
              <p className="year">2022</p>
              <p className="summary">My newest Organization</p>
            </div>
            <p className="description">
              Totus Alias is a brand new web organization with a future unknown. We are planning for a large scope endeavor
              and are laying the appropriate scalable groundwork. Currently in the works is an Identity Provider System, an 
              online Chess Website, and a ToDo List web application.
            </p>
            <a className="workrightlink" href="https://github.com/Totus-Alias" title="" target="_blank" rel="noreferrer noopener">
              <img src="./assets/Icons/github.png" alt="github icon" width="33px" height="33px"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;
