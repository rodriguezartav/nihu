import React from "react";
import logo from "../assets/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function FormDialog(props) {
  const [ajuste, setAjuste] = React.useState(false);
  const [razon, setRazon] = React.useState(false);

  return (
    <header className="header-style-1">
      <div className="header-top active-sticky">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="logo-and-menu text-center">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="Nihu Arquitectos" />
                  </a>
                </div>
                <nav className="mainmenu menu-hover-1">
                  <div className="navbar-header">
                    <button
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
                            <a href="team.html">Nuestro Equipo</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact-us.html">Contactenos</a>
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
  );
}
