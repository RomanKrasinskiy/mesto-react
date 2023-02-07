import React from "react";
import CloseIcon from "../images/CloseIcon.svg";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_zoom-img ${
        props.isOpen ? "popup_active" : ""
      }`}
    >
      <section className="popup__zoom-container popup__container-close">
        <button type="button" className="popup__close-button">
          <img
            className="popup__close-ico"
            onClick={props.onClose}
            src={CloseIcon}
            alt="Закрыть"
          />
        </button>
        <figure className="popup__zoom-container">
          <img
            className="popup__zoom-main-img"
            alt="Картинка карточки"
            src={props.card ? props.card.link : ""}
          />
          <figcaption className="popup__zoom-caption">
            {props.card ? props.card.name : ""}
          </figcaption>
        </figure>
      </section>
    </div>
  );
}

export default ImagePopup;
