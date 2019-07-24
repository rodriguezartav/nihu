import React from "react";
import logo from "../assets/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function FormDialog(props) {
  const [showMenuToggle, setShowMenuToggle] = React.useState(false);

  function showMenu() {
    setShowMenuToggle(!showMenuToggle);
  }

  function renderMenu() {
    if (!showMenuToggle) return null;
    return (
      <div style={{ marginTop: 100 }} className="">
        <ul className="">
          <li onClick={showMenu} style={{ marginTop: 20, marginLeft: 20 }} className="dropdown">
            <Link to="/index.html">Inicio</Link>
          </li>

          <li onClick={showMenu} style={{ marginTop: 20, marginLeft: 20 }}>
            <Link to="/about-us.html">Sobre Nosotros</Link>
          </li>

          <li onClick={showMenu} style={{ marginTop: 20, marginLeft: 20 }}>
            <Link to="/team.html">Nuestro Equipo</Link>
          </li>

          <li onClick={showMenu} style={{ marginTop: 20, marginLeft: 20 }}>
            <Link to="/contact-us.html">Contactenos</Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <header className="header-style-1">
        <div className="header-top active-sticky">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="logo-and-menu text-center">
                  <div className="logo">
                    <img src={logo} alt="Nihu Arquitectos" />
                  </div>
                  <nav className="mainmenu menu-hover-1">
                    <div className="navbar-header">
                      <button
                        onClick={showMenu}
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    <div className="navbar-collapse collapse clearfix">
                      <ul className="navigation clearfix">
                        <li className="dropdown">
                          <Link to="/index.html">Inicio</Link>
                        </li>

                        <li>
                          <Link to="/about-us.html">Sobre Nosotros</Link>
                        </li>

                        <li className="dropdown">
                          <a href="javascript:void(0)">Información</a>
                          <ul>
                            <li>
                              <Link to="/team.html">Nuestro Equipo</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact-us.html">Contactenos</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {renderMenu()}
    </div>
  );
}
