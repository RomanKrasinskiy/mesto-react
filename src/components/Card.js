import del from "../images/del.png";

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      } 

    return(
      <div className="card">
        <div className="element">
            <button className="element__delete" type="button" aria-label="Удалить">
                <img className="element__delete-ico" src={del} />
            </button>
            <img className="element__photo" src={props.card.link} onClick={handleClick} />
            <div className="element__place">
                <h2 className="element__name">{props.card.name}</h2>
                <div className="element__placeLike">
                    <button className="element__like" type="button" ></button>
                    <span className="element__numLike">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card;


