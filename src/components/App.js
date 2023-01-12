import { useEffect, useState } from "react";
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import api from '../utils/api';
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [userDataProfile, setUserDataProfile] = useState({})
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({ bool: false, alt: '', src: '' });

  useEffect(() => {
    api.getUserProfile()
      .then((data) => {
        setUserDataProfile(data);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }, [])

  //данные карточек
  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }, [])


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ bool: false, alt: '', src: '' });
  }

  function handleSubmit(event) {
    event.preventDefault();
    closeAllPopups();
  }

  function handleCardClick(card) {
    setSelectedCard({ bool: true, alt: card.name, src: card.link });
  }



  return (
    <div className="App">
      <Header />
      <Main
        userName={userDataProfile.name}
        userDescription={userDataProfile.about}
        userAvatar={userDataProfile.avatar}
        cards={cards}
        onCardClick={handleCardClick}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onClose={closeAllPopups} />
      <Footer />

      {/* popup_data_profile */}
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        buttonText="Сохранить"
        onSubmit={handleSubmit}
        onClose={closeAllPopups}
        children={
          <>
            <input
              type="text"
              name="popupProfileName"
              id="popup__error_data_name"
              placeholder="Имя"
              className="popup__input popup__input_data_name"
              minLength='2'
              maxLength='40'
              required />
            <span className={`popup__error popup__error_data_name-error`} />
            <input
              type="text"
              name="popupJob"
              id="popup__error_data_job"
              placeholder="О себе"
              className="popup__input popup__input_data_job"
              minLength='2'
              maxLength='200'
              required />
            <span className="popup__error popup__error_data_job-error" />
          </>}
      />

      {/* popup_data_avatar */}
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        buttonText="Сохранить"
        onSubmit={handleSubmit}
        onClose={closeAllPopups}
        children={
          <>
            <input
              type="url"
              name="input_data_avatar"
              id="popup__error_data_avatar"
              defaultValue=""
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_data_avatar"
              minLength="2"
              required />
            <span className="popup__error popup__error_server popup__error_data_avatar-error" />
          </>}
      />

      {/* popup_data_card*/}
      <PopupWithForm
        title="Новое место"
        name="card"
        isOpen={isAddPlacePopupOpen}
        buttonText="Сохранить"
        onSubmit={handleSubmit}
        onClose={closeAllPopups}
        children={
          <>
            <input
              type="text"
              name="popupNameCard"
              id="popup__error_data_name-card"
              placeholder="Название"
              defaultValue=""
              className="popup__input popup__input_data_name-card"
              minLength="2"
              maxLength="30"
              required />
            <span className="popup__error popup__error_data_name-card-error" />
            <input
              type="url"
              name="popupLink"
              id="popup__error_data_link"
              placeholder="Ссылка на картинку"
              defaultValue=""
              className="popup__input popup__input_data_link"
              required />
            <span className="popup__error popup__error_data_link-error" />
          </>}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />


      {/* <!--popup delete-card--> */}
      <div className="popup popup_data_delete-card">
        <div className="popup__container popup__container_data_delete-card">
          <button
            className="popup__button-close popup__button-close_data_delete-card"
            type="button" />
          <h2 className="popup__title popup__title_data_delete-card">Вы уверены?</h2>
          <form
            className="popup__form popup__form_data_delete-card"
            name="input_data_delete-card"
            noValidate>
            <button
              className="popup__button-save popup__button-save_data_delete-card"
              type="submit">Да</button>
          </form>
        </div>
      </div>


    </div >
  );
}

export default App;



