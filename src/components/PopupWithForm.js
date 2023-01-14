function PopupWithForm(props) {
  return (
    <div className={`popup popup_data_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container popup__container_data_${props.name}`}>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`popup__form popup__form_data_${props.name}`}
          onSubmit={props.onSubmit}
          name={props.name}
          method="post"
          noValidate >
          {props.children}
          <button
            className="popup__button-save"
            type="submit"
            value={props.buttonText}>
            {props.buttonText}
          </button>
        </form>
        <button
          className="popup__button-close"
          name="popupProfileButtonClose"
          type="button"
          onClick={props.onClose}
          aria-label="Закрыть" />
      </div>
    </div>
  )
}

export default PopupWithForm;
