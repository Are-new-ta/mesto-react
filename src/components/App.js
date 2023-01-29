import React, { useEffect, useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from "./ImagePopup";
import api from '../utils/api';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmationDeleteCardPopup from "./ConfirmationDeleteCardPopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmationDeleteCardPopup, setConfirmationDeleteCardPopup] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardId, setCardId] = useState('');
  const [selectedCard, setSelectedCard] = useState({ bool: false, alt: '', src: '' });
  const [currentUser, setCurrentUser] = useState('');
  const [renderLoading, setRenderLoading] = useState(false)

  //получаем данные пользователя и карточек
  useEffect(() => {
    Promise.all([api.getUserProfile(), api.getInitialCards()])
      .then(([userData, arrCards]) => {
        setCurrentUser(userData);//заменила на setCurrentUser
        setCards(arrCards);
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

  //popup подтверждения удаления карточки
  function handeleConfurmationDeleteCardPopup() {
    setConfirmationDeleteCardPopup(!isConfirmationDeleteCardPopup);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setConfirmationDeleteCardPopup(false);
    setSelectedCard({ bool: false, alt: '', src: '' });
  }

  function handleCardClick(card) {
    setSelectedCard({ bool: true, alt: card.name, src: card.link });
  }

  //добавляем лайки/дизлайки
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  //удаление карточки
  function handleCardDelete(card) {
    setRenderLoading(true);
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id === card._id ? null : c));
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        setRenderLoading(false);
      })
  }

  //обновляем данные юзера
  function handleUpdateUser({ name, about }) {
    setRenderLoading(true);
    api.changeUserProfile({ newUserName: name, newUserJob: about })
      .then((userData) => {
        setCurrentUser(userData);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        setRenderLoading(false);
      })
  }

  //обновляем аватарку юзера
  function handleUpdateUserAvatar({ avatarLink }) {
    setRenderLoading(true);
    api.changeAvatar({ newAvatar: avatarLink })
      .then((userData) => {
        setCurrentUser(userData);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        setRenderLoading(false);
      })
  }

  //добавляем новую карточку
  function handleAddPlace({ name, link }) {
    setRenderLoading(true);
    api.addNewCard({ name: name, link: link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        setRenderLoading(false);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />

        <Main
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onConfurmationDeleteCardPopup={handeleConfurmationDeleteCardPopup}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          setCardId={setCardId} //?
          onClose={closeAllPopups} />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonText={renderLoading} />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText={renderLoading}
          onUpdateUser={handleUpdateUserAvatar} />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText={renderLoading}
          onAddPlace={handleAddPlace}
        />

        <ConfirmationDeleteCardPopup
          isOpen={isConfirmationDeleteCardPopup}
          onClose={closeAllPopups}
          buttonText={renderLoading}
          cardId={cardId}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div >

    </CurrentUserContext.Provider>
  )
}

export default App;
