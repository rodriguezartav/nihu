import React from "react";
import Item from "./item";
import Proyects from "../../assets/proyects.json";

export default function FormDialog(props) {
  const [ajuste, setAjuste] = React.useState(false);
  const [razon, setRazon] = React.useState(false);

  return (
    <div className="portfolio-area portfolio-one white-bg section-padding clearfix">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="portfolio-menu hover-1 text-center">
              <ul className="clearfix mb-40">
                <li data-filter="*" className="active">
                  Proyectos
                </li>
                {
                  //<li data-filter=".web">Web</li>
                  //<li data-filter=".design">Design</li>
                  //<li data-filter=".new">new</li>
                  //<li data-filter=".print">Print</li>
                  //<li data-filter=".work3d">3d work</li>
                }
              </ul>
            </div>

            <div className=" masonry-grid hover-1">
              <div className="masonry row ">
                {Proyects.map(item => (
                  <Item item={item} />
                ))}
              </div>
              <div className="view-all text-center">
                <a className="btn mt-60" id="load-more-btn">
                  Load More <i className="zmdi zmdi-refresh-sync" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
