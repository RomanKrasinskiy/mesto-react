import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupPicture } from "../components/PopupPicture.js";
import { PopupConfirmDel } from "../components/PopupConfirmDel.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import {
  formConfigSelector,
  cardSelector,
  popupSelector,
  userDataSelector,
  formElementAddCard,
  formElementEditName,
  formElementChangeAvatar,
  cardList,
  addButton,
  buttonEditProfile,
  avatarPhoto,
} from "../utils/constants.js";

const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-55",
  headers: {
    authorization: "bd61842b-8e5a-461e-8e0d-4a18541609f7",
    "Content-Type": "application/json",
  },
};

const api = new Api(apiConfig);

function getDataAllpage() {
  Promise.all([api.getInfoProfile(), api.getAllCards()])
    .then(([userData, cardsListData]) => {
      newUserInfo.setUserInfo(userData); // тут установка данных пользователя
      cardsList.rendererAll(cardsListData.reverse()); // и тут отрисовка карточек
    })
    .catch((err) => console.log(`Ошибка: ${err}`)); // тут ловим ошибку
}
getDataAllpage();

const addCardFormValidation = new FormValidator(
  formConfigSelector,
  formElementAddCard
);
addCardFormValidation.enableValidation();
const editNameFormValidation = new FormValidator(
  formConfigSelector,
  formElementEditName
);
editNameFormValidation.enableValidation();
const editAvatarFormValidation = new FormValidator(
  formConfigSelector,
  formElementChangeAvatar
);
editAvatarFormValidation.enableValidation();

const popupImg = new PopupPicture(
  popupSelector.popupZoomImgContainer,
  popupSelector
);
popupImg.setEventListeners();
const popupAddCard = new PopupWithForm(
  popupSelector.popupAddCard,
  popupSelector,
  handleCardSubmit
);
popupAddCard.setEventListeners();
const popupEditProfile = new PopupWithForm(
  popupSelector.popupEditName,
  popupSelector,
  handleEditProfileSubmit
);
popupEditProfile.setEventListeners();
const popupUserAvatar = new PopupWithForm(
  popupSelector.popupAvatar,
  popupSelector,
  handleAvatarSubmit
);
popupUserAvatar.setEventListeners();
const newUserInfo = new UserInfo(userDataSelector);
const popupConfirmDel = new PopupConfirmDel(
  popupSelector.popupConfirm,
  popupSelector,
  handleDeleteCard
);
popupConfirmDel.setEventListeners();
const cardsList = new Section(
  {
    dataBase: [],
    renderer: (item) => {
      cardsList.addItem(createNewCard(item));
    },
  },
  cardList
);
// Создаем карточку по шаблону и наполняем данными
function createNewCard(item) {
  const newCard = new Card(
    cardSelector,
    item,
    handleCardClick,
    popupConfirmDel,
    handleLikeClick,
    newUserInfo.getUserInfo()
  );
  return newCard.generateCard();
}

function handleDeleteCard(cardId, cardElement) {
  api
    .delCard(cardId, cardElement)
    .then(() => cardElement.remove())
    .then(() => popupConfirmDel.close())
    .catch((err) => console.log(err));
}

function handleLikeClick(
  likedBefore,
  likesArray,
  cardId,
  likeButton,
  buttonActiveSelector,
  likesCounter
) {
  const currentUser = newUserInfo.getUserInfo();
  if (!likedBefore) {
    api
      .addLike(cardId, currentUser)
      .then((card) => {
        likeButton.classList.add(buttonActiveSelector);
        likesCounter.textContent = card.likes.length;
        likesArray.push(currentUser);
      })
      .catch((err) => console.log(err));
  } else {
    api
      .delLike(cardId, currentUser)
      .then((card) => {
        likeButton.classList.remove(buttonActiveSelector);
        likesCounter.textContent = card.likes.length;
        likesArray.pop(currentUser);
      })
      .catch((err) => console.log(err));
  }
}

function handleCardSubmit(inputValues) {
  popupAddCard.activateLoader(true, "Создание...");
  api
    .addCard(inputValues)
    .then((data) => cardsList.addItem(createNewCard(data)))
    .then(() => popupAddCard.close())
    .catch((err) => console.log(err))
    .finally(() => popupAddCard.activateLoader(false));
}

function handleEditProfileSubmit(inputValues) {
  popupEditProfile.activateLoader(true, "Сохранение...");
  api
    .editProfile(inputValues)
    .then((data) => newUserInfo.setUserInfo(data))
    .then(() => popupEditProfile.close())
    .catch((err) => console.log(err))
    .finally(() => popupEditProfile.activateLoader(false));
}
function handleAvatarSubmit() {
  popupUserAvatar.activateLoader(true, "Сохранение...");
  api
    .changeAvatar(popupUserAvatar.getInputValues())
    .then((data) => newUserInfo.setUserInfo(data))
    .then(() => popupUserAvatar.close())
    .catch((err) => console.log(err))
    .finally(() => popupUserAvatar.activateLoader(false));
}
// Подгрузка маленькой img, и наименований в попапZoom
function handleCardClick(name, link) {
  popupImg.open(name, link);
}
// Событие нажания на кнопку добавлеиня новой карточки
addButton.addEventListener("click", () => {
  addCardFormValidation.resetValid();
  popupAddCard.open();
});

avatarPhoto.addEventListener("click", () => {
  editAvatarFormValidation.resetValid();
  popupUserAvatar.open();
});

// Событие нажания на кнопку редактирования профиля
buttonEditProfile.addEventListener("click", () => {
  popupEditProfile.open();
  editNameFormValidation.resetValid();
  popupEditProfile.setInputValues(newUserInfo.getUserInfo());
});
