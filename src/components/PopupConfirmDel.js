import PopupWithForm from "./PopupWithForm";

function PopupConfirmDel(props) {
  return (
    <PopupWithForm
      name="askDel"
      title="Вы уверены?"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Да"
    ></PopupWithForm>
  );
}

export default PopupConfirmDel;
