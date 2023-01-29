import PopupWithForm from "./PopupWithForm";

function ConfirmationDeleteCardPopup({ isOpen, onClose, buttonText, onCardDelete, cardId }) {

  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(cardId)
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="popup_data_delete-card"
      isOpen={isOpen ? 'popup_opened' : ''}
      buttonText={buttonText ? 'Да' : 'Сохранение...'}
      onSubmit={handleSubmit}
      onClose={onClose}>
    </PopupWithForm>
  )
}

export default ConfirmationDeleteCardPopup;
