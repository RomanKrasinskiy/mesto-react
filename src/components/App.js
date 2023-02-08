import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useEffect, useState } from "react";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import PopupConfirmDel from "./PopupConfirmDel";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isPopupConfirmDel, setIsPopupConfirmDel] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
  });

  useEffect(() => {
    api
      .getInfoProfile()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getAllCards()
      .then((cardsListData) => {
        setCards(cardsListData);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleImagePopupClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsPopupConfirmDel(false);
  }

  function handlePopupAskDel() {
    setIsPopupConfirmDel(true);
    // открываем попап подтверждения удаления карточки
  }
  function handleUpdateAvatar(ownerAvatar) {
    api
      .changeAvatar(ownerAvatar)
      .then((data) => setCurrentUser(data))
      .then(() => closeAllPopups())
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  function handleCardDelete(card) {
    api
      .delCard(card._id)
      .then(console.log("Delete"))
      .then(() => setCards(cards.filter((item) => item._id !== card._id)))
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  function handleUpdateUser(userInfo) {
    api
      .setUserInfo(userInfo)
      .then((info) => setCurrentUser(info))
      .then(() => closeAllPopups())
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  function handleAddPlaceSubmit(card) {
    api
      .addCard(card)
      .then(console.log(card))
      .then((data) => setCards([data, ...cards]))
      .then(() => closeAllPopups())

      .catch((err) => console.log(err));
  }
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App page">
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleImagePopupClick}
          onDeleteClick={handlePopupAskDel}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />
        <PopupConfirmDel isOpen={isPopupConfirmDel} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
