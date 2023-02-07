import del from "../images/del.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  return (
    <div className="card">
      <div className="element">
        {isOwn && (
          <button
            className="element__delete"
            onClick={handleDeleteClick}
            type="button"
            aria-label="Удалить"
          >
            <img className="element__delete-ico" src={del} />
          </button>
        )}

        <img
          className="element__photo"
          src={props.card.link}
          onClick={handleClick}
        />
        <div className="element__place">
          <h2 className="element__name">{props.card.name}</h2>
          <div className="element__placeLike">
            <button
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
              type="button"
            ></button>

            <span className="element__numLike">{props.card.likes.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
