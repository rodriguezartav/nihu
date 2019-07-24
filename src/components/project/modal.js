import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, index, project, images }) => {
  const [currentIndex, setCurrentIndex] = React.useState("");

  React.useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  function onLast(e) {
    e.stopPropagation();
    e.preventDefault();
    var newIndex = currentIndex - 1;
    if (newIndex > -1) {
      setCurrentIndex(newIndex);
    }
  }

  function onNext(e) {
    e.stopPropagation();
    e.preventDefault();
    var newIndex = currentIndex + 1;
    if (newIndex < images.length - 1) {
      setCurrentIndex(newIndex);
    }
  }

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div onClick={hide} className="modali-overlay" />
          <div onClick={hide} className="modali-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <button
              type="button"
              className="modali-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
            <button
              onClick={onNext}
              type="button"
              className="modali-next-button"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">{">"}</span>
            </button>
            <button
              onClick={onLast}
              type="button"
              className="modali-last-button"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">{"<"}</span>
            </button>
            <div className="modali ">
              <img src={`/img/proyectos/${project.id}/${images[currentIndex]}`} alt="" />
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};
export default Modal;
