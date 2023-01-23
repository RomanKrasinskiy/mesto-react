import React from "react";
import "../pages/index.css";
import CloseIcon from "../images/CloseIcon.svg";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name="add-card"
      title="Новое&nbsp;место"
      isOpen={props.isOpen}
      onClose={props.onClose}

      buttonText="Создать"
    >
      <div className="popup__input-form-item">
        <input
          id="place-name-input"
          className="popup__input popup__input_type_place-name"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error place-name-input-error"></span>
      </div>
      <div className="popup__input-form-item">
        <input
          id="place-link-input"
          className="popup__input popup__input_type_place-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error place-link-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
