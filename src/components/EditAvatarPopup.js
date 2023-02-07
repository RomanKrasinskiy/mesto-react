import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="updateAvatar"
      title="Обновить&nbsp;аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        id="profileAvatar"
        className="popup__input popup__input_type_place-link"
        type="url"
        name="avatar"
        placeholder="Ссылка на фото"
        ref={avatarRef}
        required
      />
      <span className="popup__input-error profileAvatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
