import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import Team from "./views/team";
import Project from "./views/project";
import ScrollToTop from "./helpers/scrollTo";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <Header />
          <div className="header-space" />
          <Route path="/" exact component={Home} />
          <Route path="/index.html" exact component={Home} />
          <Route path="/about-us.html/" component={About} />
          <Route path="/contact-us.html/" component={Contact} />
          <Route path="/team.html/" component={Team} />
          <Route path="/proyectos/:id" component={Project} />

          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
