import React from "react";

export default function FormDialog(props) {
  const [ajuste, setAjuste] = React.useState(false);
  const [razon, setRazon] = React.useState(false);

  return (
    <div className="col-xs-3 item item work3d print ">
      <div className="single-portfolio overlay">
        <img
          style={{ height: 190 }}
          src={`img/proyectos/${props.item.id}/${props.item.images[0]}`}
          alt="MiniPo"
        />
        <div className="zoom-icon">
          <a
            className="venobox"
            data-gall="gall-img"
            href={`img/proyectos/${props.item.id}${props.item.images[0]}`}>
            <i className="zmdi zmdi-fullscreen" />
          </a>
          <a href="portfolio-details.html">
            <i className="zmdi zmdi-link" />
          </a>
        </div>
      </div>
      <div className="project-title pl-30 ptb-30">
        <a href="portfolio-details.html">
          <h4 className="mb-5">{props.item.title}</h4>
        </a>
        <p>{props.item.tags.join(", ")}</p>
        <hr className="line" />
      </div>
    </div>
  );
}
