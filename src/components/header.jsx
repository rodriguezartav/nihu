import React from "react";
import logo from "../assets/logo.png";

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
                        <a href="index.html">Home</a>
                        <ul>
                          <li>
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Two</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Three</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home Four</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home Five</a>
                          </li>
                          <li>
                            <a href="index-6.html">Home Six</a>
                          </li>
                          <li>
                            <a href="index-7.html">Home Seven</a>
                          </li>
                          <li>
                            <a href="index-8.html">Home Eight</a>
                          </li>
                          <li>
                            <a href="index-9.html">Home Nine</a>
                          </li>
                          <li>
                            <a href="index-10.html">Home Ten</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>

                      <li className="dropdown">
                        <a href="javascript:void(0)">Portfolio</a>
                        <ul>
                          <li className="sub-dropdown">
                            <a href="javascript:void(0)">
                              2 Columns <i className="zmdi zmdi-caret-right" />
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="portfolio-2-style-1.html">Style 1</a>
                              </li>
                              <li>
                                <a href="portfolio-2-style-2.html">Style 2</a>
                              </li>
                              <li>
                                <a href="portfolio-2-style-3.html">Style 3</a>
                              </li>
                              <li>
                                <a href="portfolio-2-style-4.html">Style 4</a>
                              </li>
                              <li>
                                <a href="portfolio-2-style-5.html">Style 5</a>
                              </li>
                              <li>
                                <a href="portfolio-2-style-6.html">Style 6</a>
                              </li>
                              <li>
                                <a href="portfolio-2-style-7.html">Style 7</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-dropdown">
                            <a href="javascript:void(0)">
                              3 Columns <i className="zmdi zmdi-caret-right" />
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="portfolio-3-style-1.html">Style 1</a>
                              </li>
                              <li>
                                <a href="portfolio-3-style-2.html">Style 2</a>
                              </li>
                              <li>
                                <a href="portfolio-3-style-3.html">Style 3</a>
                              </li>
                              <li>
                                <a href="portfolio-3-style-4.html">Style 4</a>
                              </li>
                              <li>
                                <a href="portfolio-3-style-5.html">Style 5</a>
                              </li>
                              <li>
                                <a href="portfolio-3-style-6.html">Style 6</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-dropdown">
                            <a href="javascript:void(0)">
                              4 Columns <i className="zmdi zmdi-caret-right" />
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="portfolio-4-style-1.html">Style 1</a>
                              </li>
                              <li>
                                <a href="portfolio-4-style-2.html">Style 2</a>
                              </li>
                              <li>
                                <a href="portfolio-4-style-3.html">Style 3</a>
                              </li>
                              <li>
                                <a href="portfolio-4-style-4.html">Style 4</a>
                              </li>
                              <li>
                                <a href="portfolio-4-style-5.html">Style 5</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-dropdown">
                            <a href="javascript:void(0)">
                              Details <i className="zmdi zmdi-caret-right" />
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="portfolio-details.html">Style 1</a>
                              </li>
                              <li>
                                <a href="portfolio-details-2.html">Style 2</a>
                              </li>
                              <li>
                                <a href="portfolio-details-3.html">Style 3</a>
                              </li>
                              <li>
                                <a href="portfolio-details-4.html">Style 4</a>
                              </li>
                              <li>
                                <a href="portfolio-details-5.html">Style 5</a>
                              </li>
                              <li>
                                <a href="portfolio-details-6.html">Style 6</a>
                              </li>
                              <li>
                                <a href="portfolio-details-7.html">Style 7</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a href="blog-one.html">Blog</a>
                        <ul>
                          <li>
                            <a href="blog-one.html">Style 1</a>
                          </li>
                          <li>
                            <a href="blog-two.html">Style 2</a>
                          </li>
                          <li>
                            <a href="blog-three.html">Style 3</a>
                          </li>
                          <li>
                            <a href="blog-four.html">Style 4</a>
                          </li>
                          <li>
                            <a href="blog-five.html">Style 5</a>
                          </li>
                          <li>
                            <a href="blog-six.html">Style 6</a>
                          </li>
                          <li>
                            <a href="blog-seven.html">Style 7</a>
                          </li>

                          <li className="sub-dropdown">
                            <a href="javascript:void(0)">
                              Details <i className="zmdi zmdi-caret-right" />
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="blog-details.html">Style 1</a>
                              </li>
                              <li>
                                <a href="blog-details-2.html">Style 2</a>
                              </li>
                              <li>
                                <a href="blog-details-3.html">Style 3</a>
                              </li>
                              <li>
                                <a href="blog-details-4.html">Style 4</a>
                              </li>
                              <li>
                                <a href="blog-details-5.html">Style 5</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a href="javascript:void(0)">Pages</a>
                        <ul>
                          <li>
                            <a href="services.html">Services One</a>
                          </li>
                          <li>
                            <a href="services-2.html">Services Two</a>
                          </li>
                          <li>
                            <a href="team.html">Our Team</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                          <li>
                            <a href="error-404.html">404 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
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
