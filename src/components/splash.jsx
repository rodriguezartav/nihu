import React from "react";

export default function FormDialog(props) {
  const [ajuste, setAjuste] = React.useState(false);
  const [razon, setRazon] = React.useState(false);

  return (
    <div className="slider-area slider-six white-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-text-center">
            <div className="slider-text ptb-100 plr-60">
              <h1 className="font-50">Estudio de arquitectura</h1>
              <p>
                Usamos el diseño de detalles constructivos para que se convierten en protagonistas de nuestra
                arquitectura y que reinvindican el valor del trabajo artesanal por encima de soluciones
                genéricas del mercado.
                <br />
                <br />
                Arq. Rodolfo Nieto Sarquis y Arq. Roberto Hurtado Quirce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
