import React from "react";

export default function FormDialog(props) {
  const [ajuste, setAjuste] = React.useState(false);
  const [razon, setRazon] = React.useState(false);

  return (
    <div>
      <div className="slider-area slider-six white-bg">
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12 col-sm-10 col-md-8 col-text-center">
              <div className="slider-text ptb-100 plr-60">
                <h1 className="font-50">Estudio de arquitectura</h1>
                <p style={{ fontSize: "1.7rem" }}>
                  Usamos el diseño de detalles constructivos para que se convierten en protagonistas de
                  nuestra arquitectura y que reinvindican el valor del trabajo artesanal por encima de
                  soluciones genéricas del mercado.
                  <br />
                  <br />
                  Arq. Rodolfo Nieto Sarquis y Arq. Roberto Hurtado Quirce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100vw", overflow: "hidden", marginTop: 50 }}>
        <div style={{ width: "200vw", overflow: "hidden" }}>
          <img style={{ width: 150, height: 150, padding: 5 }} src="/img/slider/1.png" />
          <img style={{ width: 150, height: 150, padding: 5 }} src="/img/slider/2.png" />
          <img style={{ width: 150, height: 150, padding: 5 }} src="/img/slider/3.png" />
          <img style={{ width: 150, height: 150, padding: 5 }} src="/img/slider/4.png" />
          <img style={{ width: 150, height: 150, padding: 5 }} src="/img/slider/5.png" />
          <img style={{ width: 150, height: 150, padding: 5 }} src="/img/slider/6.png" />
          <img style={{ width: 150, height: 150, padding: 5 }} src="/img/slider/7.png" />
          <img style={{ width: 150, height: 150, padding: 5 }} src="/img/slider/8.png" />
          <img style={{ width: 150, height: 150, padding: 5 }} src="/img/slider/9.png" />
        </div>
      </div>
    </div>
  );
}
