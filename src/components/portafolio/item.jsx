import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function FormDialog(props) {
  const [ajuste, setAjuste] = React.useState(false);
  const [razon, setRazon] = React.useState(false);

  return (
    <Link to={`/proyectos/${props.item.id}`}>
      <div className="col-xs-12 col-md-3 item item work3d print ">
        <div className="single-portfolio overlay">
          <img
            style={{ height: 170 }}
            src={`/img/proyectos/${props.item.id}/item.jpg`}
            alt="Nihu Foto del Proyecto"
          />
        </div>
        <div className="project-title pl-30 ptb-30">
          <a href="portfolio-details.html">
            <h4 className="mb-5">{props.item.title}</h4>
          </a>
          <p>{props.item.tags.join(", ")}</p>
          <hr className="line" />
        </div>
      </div>
    </Link>
  );
}
