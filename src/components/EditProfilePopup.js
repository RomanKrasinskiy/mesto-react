import React from "react";
import "../pages/index.css";
import PopupWithForm from "./PopupWithForm";


function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="edit-name"
      title="Редактировать&nbsp;профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"

    >
      <div className="popup__input-form-item">
              <input
                id="user-name-input"
                className="popup__input popup__input_type_username"
                type="text"
                name="name"
                minLength="2"
                maxLength="40"
                required
                placeholder="Ваше имя"
              />
              <span className="popup__input-error user-name-input-error"></span>
            </div>
            <div className="popup__input-form-item">
              <input
                id="user-job-input"
                className="popup__input popup__input_type_about-user"
                type="text"
                name="about"
                minLength="2"
                maxLength="200"
                required
                placeholder="Ваше хобби"
              />
              <span className="popup__input-error user-job-input-error"></span>
            </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
;