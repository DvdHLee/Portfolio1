import React, { useState, useEffect } from "react";

import './App.css';
import Nav from "./Components/Nav";
import MainBody from "./Components/MainBody";
import axios from "axios";

function App() {
  const [tab, setTab] = useState(1);
  const [ghData, setGhData] = useState({});
  const tabSelector = (value) => {
    setTab(value);
  };

  useEffect(() => {
    axios.get('https://api.github.com/users/dvdhlee', {
      mode: "no-cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((response) => {
      let tempobject = {
        "avatar_url": response.data.avatar_url,
        "is_hireable": "Hireable",
        "bio": response.data.bio
      };
      setGhData(tempobject)
    }
    );
  }, []);

  console.log(ghData);

  return (
    <div className="App">
      <Nav onChangeTab={tabSelector}></Nav>
      <MainBody tabnum={tab}></MainBody>
    </div>
  );
}

export default App;
