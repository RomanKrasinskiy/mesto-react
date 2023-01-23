import { useState, useEffect } from "react";
import "../pages/index.css";

import change from "../images/del.png";
import addButton from "../images/add-button.png";
import Card from "./Card.js";
import { api } from "../utils/Api.js";

function Main(props) {
  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInfoProfile()
      .then((userData) => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      
  }, []);

  useEffect(() => {
    api.getAllCards()
      .then((cardsListData) => {
        setCards(cardsListData)
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  return (
    <>
      <section className="page__profile profile">
        <div className="profile__caption">
          <img
            className="profile__photo"
            alt="Фото"
            onClick={props.onEditAvatar}
            src={userAvatar}
          />
        </div>

        <h1 className="profile__user-name">{userName}</h1>
        <p className="profile__about-user">{userDescription}</p>
        <button
          className="profile__edit-button edit-button"
          type="button"
          onClick={props.onEditProfile}
        >
          <img className="edit-button__icon" src={change} alt="Редактировать" />
        </button>
        <button
          className="profile__add-button add-button"
          type="button"
          onClick={props.onAddPlace}
        >
          <img className="add-button__icon" src={addButton} alt="Добавить" />
        </button>
      </section>
      <section className="page__elements elements">
        {cards.map((card, i) => (
          <Card 
          card={card}
          key={card._id}
          onCardClick={props.onCardClick}
          />
        ))}
      </section>

      {/* Попап переспросит, точно ли пользователь готов удалить карточку */}
      {/* <div className="popup popup_type_askDel">
        <section className="popup__form popup__container popup__container-close">
          <button type="button" className="popup__close-button">
            <img className="popup__close-ico" src={CloseIcon} alt="Закрыть" />
          </button>
          <h3 className="popup__title popup__title_askDel">Вы уверены?</h3>
          <form
            name="add-card"
            className="popup__form popup__form_type_add-card"
            noValidate
          >
            <button type="submit" className="popup__save-button">
              Да
            </button>
          </form>
        </section>
      </div> */}
    </>
  );
}

export default Main;
