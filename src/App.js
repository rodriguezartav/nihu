import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./assets/proyects.json";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import Team from "./views/team";
import Project from "./views/project";
import ScrollToTop from "./helpers/scrollTo";
function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const nihu = urlParams.get("nihu");
  if (!nihu)
    return (
      <div>
        <h1>Agregue ?nihu=true a la dirección para accesar el sitio.</h1>
        <p>Porque se hace esto? Para que no aparezca en Google Search.</p>
      </div>
    );
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
          <Route path="/proyectos/:id/:image" component={Project} />
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
