import React, { useState } from "react";

import './App.css';
import Nav from "./Components/Nav";
import MainBody from "./Components/MainBody";

function App() {
  const [tab, setTab] = useState(1);
  const tabSelector = (value) => {
    setTab(value);
  };

  return (
    <div className="App">
      <Nav onChangeTab={tabSelector}></Nav>
      <MainBody tabnum={tab}></MainBody>
    </div>
  );
}

export default App;
