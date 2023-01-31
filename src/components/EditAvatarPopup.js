import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormAndValidation } from "../utils/useFormAndValidation";


function EditAvatarPopup({ isOpen, onClose, isLoading, onUpdateUser }) {

  const avatarLink = useRef('')
  const { values, error, isValid, setValues, handleChange, resetForm } = useFormAndValidation()

  useEffect(() => {
    setValues({
      avatar: avatarLink.current.value
    });
  }, [avatarLink]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      avatar: values.avatar,
    });
    resetForm();
  }

  function closePopupAndResetForm() {
    onClose();
    resetForm();
    avatarLink.current.value = '';
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatarForm"
      isOpen={isOpen ? 'popup_opened' : ''}
      buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}
      onClose={closePopupAndResetForm}>
      <>
        <input
          type="url"
          name='avatar'
          id="popup__error_data_avatar"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_data_avatar"
          minLength="2"
          required
          ref={avatarLink}
          onChange={handleChange} />
        <span className={`popup__error  ${!isValid ? 'popup__error_data_avatar-error' : ''} `} >{error.avatar}</span>
      </>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;