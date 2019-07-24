import React from "react";
import Projects from "../../assets/proyects.json";
import Portafolio from "../../components/portafolio";
import Modal from "./modal";
import useModal from "./useModal";
var mobile = require("is-mobile");

const block = {
  height: "70vh",
  overflow: "hidden"
};

export default function Proyect(props) {
  const [url, setUrl] = React.useState("");
  const [index, setIndex] = React.useState("");
  const [isShowing, setIsShowing] = React.useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  var project = Projects.filter(project => {
    return project.id === props.id;
  })[0];

  var details = Object.keys(project.detalles).map(key => {
    return { key: key, value: project.detalles[key] };
  });

  function showImage(url, index) {
    return () => {
      if (mobile()) return;
      setUrl(url);
      setIndex(index);
      toggle();
    };
  }

  return (
    <div style={isShowing ? block : {}}>
      <div>
        <div className="pages-header bg-color-2">
          <div className="container">
            <div className="row text-center">
              <div className="col-xs-12">
                <div className="page-title ptb-110">
                  <h1 className="mb-15">Nihu Arquitectos</h1>
                  <h4 className="mb-5">Detalles del Proyecto</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-details light-bg section-padding">
          <div className="container">
            <div className="row pb-80">
              <div className="col-xs-12 col-sm-8 mobile-mb-30">
                <div className="portfolio-info pr-35">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="portfolio-info">
                  <ul style={{ marginTop: 40 }} className="work-info">
                    {details.map(detail => (
                      <li>
                        <span>{detail.key} :</span> <p>{detail.value}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row text-center">
              {project.images.map((image, index) => {
                return (
                  <div style={{ marginBottom: 30 }} className="col-xs-12 col-sm-6">
                    <div className="portfolio-image mobile-mb-30">
                      <div
                        className="venobox"
                        data-gall="gall-img"
                        onClick={showImage(`/img/proyectos/${props.id}/${image}`, index)}>
                        <img src={`/img/proyectos/${props.id}/${image}`} alt="MiniPo" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Portafolio />
      <Modal project={project} images={project.images} index={index} isShowing={isShowing} hide={toggle} />
    </div>
  );
}
