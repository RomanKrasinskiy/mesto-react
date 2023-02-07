import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [placeName, setPlaceName] = useState("");
  const [placeLink, setPlaceLink] = useState("");

  function handlePlaceNameChange(e) {
    setPlaceName(e.target.value);
  }
  function handlePlaceLinkChange(e) {
    setPlaceLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: placeName,
      link: placeLink,
    });
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое&nbsp;место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          onChange={handlePlaceNameChange}
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
          onChange={handlePlaceLinkChange}
          required
        />
        <span className="popup__input-error place-link-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
