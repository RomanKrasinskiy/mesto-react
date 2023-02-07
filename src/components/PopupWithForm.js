import React from "react";
import CloseIcon from "../images/CloseIcon.svg";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_active" : ""
      }`}
    >
      <section className="popup__container popup__container-close">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        >
          <img
            className="popup__close-ico"
            src={CloseIcon}
            alt="Закрыть"
            onClick={props.onClose}
          />
        </button>
        <form
          name={`${props.name}`}
          className={`popup__form popup__form_type_${props.name}`}
          onSubmit={props.onSubmit}
          noValidate
        >
          <h3 className={`popup__title popup__title_${props.name}`}>
            {props.title}
          </h3>
          {props.children}
          <button
            className="popup__save-button"
            type="submit"
            value={props.buttonText}
          >
            {props.buttonText}
          </button>
        </form>
      </section>
    </div>
  );
}

export default PopupWithForm;
