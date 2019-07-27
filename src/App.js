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
  const [value, setValue] = React.useState(process.env.REACT_APP_ENV === "production" ? 2 : "");

  function onChange(e) {
    setValue(parseInt(e.currentTarget.value));
  }

  if (value === 2)
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
  else
    return (
      <div style={{ margin: 10 }}>
        <h1>Acceso restringido</h1>
        <input placeholder="Cuanto es 1+1?" onChange={onChange} value={value} />
        <p>Porque se hace esto? Para que no aparezca en Google Search.</p>
      </div>
    );
}

export default App;
