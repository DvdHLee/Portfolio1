import React from "react";

import "./MainBody.css";
import About from "./About.js";
import Work from "./Work";
import Contact from "./Contact";

const MainBody = props => {
  const pagenum = props.tabnum;

  if (pagenum === 1) {
    return (
      <div className="main">
        <About></About>
      </div>
    );
  } else if (pagenum === 2) {
    return (
      <div className="main">
        <Work></Work>
      </div>
    );
  } else {
    return (
      <div className="main">
        <Contact></Contact>
      </div>
    );
  }
};

export default MainBody;
