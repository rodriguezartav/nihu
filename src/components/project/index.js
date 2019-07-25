import React from "react";

import Portafolio from "../../components/portafolio";
import Modal from "./modal";
var mobile = require("is-mobile");

const block = {
  height: "70vh",
  overflow: "hidden"
};

export default function Proyect(props) {
  const [url, setUrl] = React.useState("");
  const [index, setIndex] = React.useState("");
  const [isShowing, setIsShowing] = React.useState(false);

  const [images, setImages] = React.useState([]);
  const [mainImage, setMainImage] = React.useState("");

  function toggle() {
    setIsShowing(!isShowing);
  }
  var project = props.project;
  React.useEffect(() => {
    setMainImage(project.images[0]);
    setImages([]);
    setTimeout(() => {
      setImages(project.images);
    }, 2000);
  }, [props.project]);

  var details = Object.keys(project.detalles).map(key => {
    return { key: key, value: project.detalles[key] };
  });

  function showImage(url, index) {
    return () => {
      if (mobile()) return;
      //setUrl(url);
      //setIndex(index);
      //toggle();
      setMainImage(project.images[index]);
      window.scroll(0, 200);
    };
  }

  return (
    <div style={isShowing ? block : {}}>
      <div>
        <div className="pages-header bg-color-2">
          <div className="">
            <div className=" text-center">
              <div className="">
                <div className="page-title ptb-50">
                  <div className="portfolio-info pr-35">
                    <h2 style={{ paddingTop: 20, marginTop: 10, marginBottom: 30 }}>{project.title}</h2>
                  </div>
                  <img
                    style={{ width: "100vw", marginBottom: 30 }}
                    src={`/img/proyectos/${props.project.id}/${mainImage}`}
                    alt="MiniPo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ marginTop: 20, marginBottom: 20 }}>
          <div
            className=""
            style={{
              maxWidth: "90vw",
              margin: "auto",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center"
            }}>
            {images.map((image, index) => {
              return (
                <div
                  style={{
                    width: "30vw",
                    alignSelf: "center",
                    alignItems: "center"
                  }}>
                  <div style={{ margin: 2 }} className="portfolio-image mobile-mb-30">
                    <div
                      className="venobox"
                      data-gall="gall-img"
                      onClick={showImage(`/img/proyectos/${project.id}/${image}`, index)}>
                      <img src={`/img/proyectos/${project.id}/${image}`} alt="MiniPo" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="portfolio-details light-bg section-padding-small">
          <div className="container">
            <div className="row pb-80">
              <div className="col-xs-12 col-sm-8 mobile-mb-30">
                <div className="portfolio-info pr-35">
                  <p>
                    {(project.description || "").split("..").map(line => {
                      return (
                        <div style={{ marginTop: 10 }} dangerouslySetInnerHTML={{ __html: line + "." }} />
                      );
                    })}
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="portfolio-info">
                  <ul style={{ marginTop: 10 }} className="work-info">
                    {details.map(detail => (
                      <li>
                        <span>{detail.key} :</span>{" "}
                        <p dangerouslySetInnerHTML={{ __html: detail.value.replace(",", "<br/>") }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="portfolio-details light-bg pb-80">
              <div className="portfolio-info pr-35">
                {(project.details || "").split("..").map(line => {
                  return (
                    <div
                      style={{
                        paddingRight: "10%",
                        color: "#818181",
                        fontSize: "16px",
                        lineHeight: "28px",
                        paddingLeft: "10%",
                        marginTop: 10,
                        marginLeft: "auto",
                        marginRight: "auto"
                      }}
                      dangerouslySetInnerHTML={{ __html: line + "." }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Portafolio />
      <Modal project={project} images={project.images} index={index} isShowing={isShowing} hide={toggle} />
    </div>
  );
}
