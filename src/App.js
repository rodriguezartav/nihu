import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header";
import Portafolio from "./components/portafolio";
import Splash from "./components/splash";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="header-space" />
      <Splash />

      <Portafolio />
    </div>
  );
}

export default App;
