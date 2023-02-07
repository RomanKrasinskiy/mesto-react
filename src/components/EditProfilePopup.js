import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({ name, about: description });
  }

  return (
    <PopupWithForm
      name="edit-name"
      title="Редактировать&nbsp;профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleChangeName}
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
          value={description}
          onChange={handleChangeDescription}
        />
        <span className="popup__input-error user-job-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
