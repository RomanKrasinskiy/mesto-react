// export const formConfigSelector = {
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__save-button",
//   inactiveButtonClass: "popup__save-button_inactive",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__input-error_active",
//   popupContainer: "popup__container",
// };
// export const cardSelector = {
//   template: ".card",
//   card: ".element",
//   name: ".element__name",
//   likeButton: ".element__like",
//   buttonDeleteCard: ".element__delete-ico",
//   cardImg: ".element__photo",
//   likeActive: "element__like_active",
//   numLike: ".element__numLike",
// };
// export const popupSelector = {
//   active: "popup_active",
//   containerClose: ".popup__container-close",
//   container: ".popup__container",
//   closeButton: "popup__close-ico",
//   zoomMainImg: ".popup__zoom-main-img",
//   zoomCaption: ".popup__zoom-caption",
//   popupAddCard: ".popup_type_add-card",
//   form: ".popup__form",
//   input: ".popup__input",
//   popupZoomImgContainer: ".popup_type_zoom-img",
//   popupEditName: ".popup_type_edit-name",
//   nameInput: ".popup__input_value_username",
//   jobInput: ".popup__input_value_about-user",
//   popupConfirm: ".popup_type_askDel",
//   popupSaveButton: ".popup__save-button",
//   popupSaveButtonInactive: ".popup__save-button_inactive",
//   popupAvatar: ".popup_type_updateAvatar",
// };
// export const userDataSelector = {
//   name: ".profile__user-name",
//   about: ".profile__about-user",
//   avatar: ".profile__photo",
// };

// export const cardList = '.elements';
// export const buttonEditProfile = document.querySelector('.edit-button');
// export const addButton = document.querySelector('.add-button');
// const popupUpdateAvatar = document.querySelector('.popup_type_updateAvatar');
// export const formElementChangeAvatar = popupUpdateAvatar.querySelector('.popup__form_type_updateAvatar');
// const popupEditName = document.querySelector('.popup_type_edit-name');
// export const formElementEditName = popupEditName.querySelector('.popup__form_type_edit-name');
// export const formElementAddCard = document.querySelector('.popup__form_type_add-card');
// export const placeName = formElementAddCard.querySelector('.popup__input_value_place-name');
// export const placeLink = formElementAddCard.querySelector('.popup__input_value_place-link');
// const profile = document.querySelector('.profile');
// export const avatarPhoto = profile.querySelector('.profile__photo');

export const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-55",
  headers: {
    authorization: "bd61842b-8e5a-461e-8e0d-4a18541609f7",
    "Content-Type": "application/json",
  },
};
