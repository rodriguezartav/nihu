import React from "react";
import Projects from "../../assets/proyects.json";
import Portafolio from "../../components/portafolio";
import Modal from "./modal";
import useModal from "./useModal";

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

  function showImage(url, index) {
    return () => {
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
                  <h1 className="mb-15">{project.title}</h1>
                  <h4 className="mb-5">We are branding & digital studio from London.</h4>
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
                  <h2>Portfolio Item Title</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have
                    fered altation in some form, by injmour, or randomised words which don't look even
                    slightlievable. Iyoare going use a passage of Lorem Ipsum, you need to be surthere isn't
                    anything embarrassing hidden.There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some form, by injected humour, or
                    randomised words{" "}
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="portfolio-info">
                  <ul className="work-info">
                    <li>
                      <span>Client :</span> <p>Regal Theme</p>
                    </li>
                    <li>
                      <span>Created By :</span> <p>Héctor Nieto</p>
                    </li>
                    <li>
                      <span>Completed :</span> <p>20 Jun 2017</p>
                    </li>
                    <li>
                      <span>Skill :</span> <p>Photoshop, Indesign</p>
                    </li>
                    <li>
                      <span>Services :</span>{" "}
                      <p>
                        Sells, Marketing, PSD <br /> Envato, All, Charlila
                      </p>
                    </li>
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
