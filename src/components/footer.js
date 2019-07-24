import React from "react";

export default function Footer() {
  return (
    <footer className="footer white-bg ptb-20 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="left pull-left">
              <p>
                Copyright &copy; 2017{" "}
                <a href="https://themeforest.net/user/regaltheme/portfolio" target="_blank">
                  Nihu Arquitectos S.A.
                </a>
                .
              </p>
            </div>
            <div className="social-icon simple pull-right">
              <ul className="clearfix">
                <li>
                  <a href="http://www.facebook.com" target="_blank">
                    <i className="zmdi zmdi-facebook" />
                  </a>
                </li>
                <li>
                  <a href="http://www.twitter.com" target="_blank">
                    <i className="zmdi zmdi-twitter" />
                  </a>
                </li>
                <li>
                  <a href="http://www.pinterest.com" target="_blank">
                    <i className="zmdi zmdi-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="http://www.linkedin.com" target="_blank">
                    <i className="zmdi zmdi-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="http://www.instagram.com" target="_blank">
                    <i className="zmdi zmdi-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
