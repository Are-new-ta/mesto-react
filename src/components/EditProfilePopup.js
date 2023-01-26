import React, { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useFormAndValidation } from "../utils/useFormAndValidation";


function EditProfilePopup({ isOpen, onClose, buttonText, onUpdateUser }) {

  const currentUser = useContext(CurrentUserContext);
  const { values, error, isValid, setValues, handleChange, resetForm } = useFormAndValidation({ userName: '', userDescription: '' });

  useEffect(() => {
    setValues({
      userName: currentUser.name || '',
      userDescription: currentUser.about || ''
    });
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.userName,
      about: values.userDescription
    })
  }

  function closePopupAndResetForm() {
    onClose();
    resetForm();
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen ? 'popup_opened' : ''}
      buttonText={buttonText ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}
      onClose={closePopupAndResetForm}>
      <>
        <input
          type="text"
          // name="popupProfileName"
          name="userName"
          id="popup__error_data_name"
          className="popup__input popup__input_data_name"
          minLength='2'
          maxLength='40'
          placeholder="Имя"
          required
          value={values.userName || ''}
          onChange={handleChange} />
        <span className={`popup__error  ${!isValid ? 'popup__error_data_name-error' : ''} `} >{error.userName}</span>
        <input
          type="text"
          // name="popupJob"
          name="userDescription"
          id="popup__error_data_job"
          placeholder="О себе"
          className="popup__input popup__input_data_job"
          minLength='2'
          maxLength='200'
          required
          value={values.userDescription || ''}
          onChange={handleChange} />
        <span className={` popup__error ${!isValid ? 'popup__error_data_job-error' : ''} `} >{error.userDescription}</span>
      </>
    </PopupWithForm>
  )
}

export default EditProfilePopup;


