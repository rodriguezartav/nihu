import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="pages-header bg-color-2">
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12">
              <div className="page-title ptb-110">
                <h1 className="mb-15">Nihu Arquitectos</h1>
                <h4 className="mb-5">Estudio de Arquitectura y Diseño Artesanal</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="we-are white-bg ptb-100">
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12 col-sm-10 col-md-9 col-text-center">
              <div className="we-are-text">
                <h2>Quienes Somos</h2>
                <p>
                  Estudio de arquitectura fundado por Arq. Rodolfo Nieto Sarquis y Arq. Roberto Hurtado
                  Quirce. <br />
                  Dedicados al diseño y arquitectura desde su forma mas integral. Cada proyecto nace de la
                  lectura del usuario, de la memoria del lugar y de una busqueda continua por aportar a la
                  sociedad.
                  <br />
                  Usamos como medio de comunicacion y marca de empresa el diseño de detalles constructivos que
                  se convierten en protagonistas de nuestra arquitectura y que reinvindican el valor del
                  trabajo artesanal por encima de soluciones genéricas del mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-area service-two light-bg ptb-100">
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12 col-sm-4 mobile-mb-30">
              <div className="single-service">
                <i className="zmdi zmdi-devices" />
                <h5 className="text-uppercase">Diseño </h5>
                <hr className="line" />
                <p>
                  Contrary to popular belief, LoremIpsum isnot simply random text. It has roots in a piece of
                  classical Latin literature from.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 mobile-mb-30">
              <div className="single-service">
                <i className="zmdi zmdi-favoritcoe-outline" />
                <h5 className="text-uppercase">Construcción</h5>
                <hr className="line" />
                <p>
                  Contrary to popular belief, LoremIpsum isnot simply random text. It has roots in a piece of
                  classical Latin literature from.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="single-service">
                <i className="zmdi zmdi-filter-center-focus" />
                <h5 className="text-uppercase">Seguimiento</h5>
                <hr className="line" />
                <p>
                  Contrary to popular belief, LoremIpsum isnot simply random text. It has roots in a piece of
                  classical Latin literature from.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
