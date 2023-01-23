import React from "react";
import "../pages/index.css";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="updateAvatar"
      title="Обновить&nbsp;аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"

    >
      <input
        id="profileAvatar"
        className="popup__input popup__input_type_place-link"
        type="url"
        name="avatar"
        placeholder="Ссылка на фото"
        required
      />
      <span className="popup__input-error profileAvatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
