import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="team-area team-one white-bg ptb-110">
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12 col-sm-8 col-md-6 col-text-center">
              <div className="section-title pb-80">
                <h2>Nuestro Equipo</h2>
                <p />
                <div className="horizontal-line">
                  <div />
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center pb-80">
            <div className="col-xs-12 col-sm-6 col-md-3 mobile-mb-30 tablet-mb-50">
              <div className="single-member">
                <div className="thumb shine">
                  <img src="img/team/1.jpg" alt="Member Image" />
                </div>
                <h3 className="mb-5">Roberto Hurtado</h3>
                <h4 className="no-margin">Arquitecto</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mobile-mb-30 tablet-mb-50">
              <div className="single-member">
                <div className="thumb shine">
                  <img src="img/team/2.jpg" alt="Member Image" />
                </div>
                <h3 className="mb-5">Rodolfo Nieto</h3>
                <h4 className="no-margin">Arquitecto</h4>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="single-member">
                <div className="thumb shine">
                  <img src="img/team/4.jpg" alt="Member Image" />
                </div>
                <h3 className="mb-5">Helena </h3>
                <h4 className="no-margin">Arquitecta</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mobile-mb-30">
              <div className="single-member">
                <div className="thumb shine">
                  <img src="img/team/3.jpg" alt="Member Image" />
                </div>
                <h3 className="mb-5">Samia Nieto</h3>
                <h4 className="no-margin">Diseñadora</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
