import React from 'react';
import Card from "./Card";


function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick, userAvatar, userName, userDescription, cards }) {

  return (

    <main className="content root__main">

      {/* <!--Profile--> */}
      <section className="profile">
        <div className="profile__container">
          <div className="profile__image-box">
            <img
              src={userAvatar}
              alt="Аватар"
              className="profile__image"
              id="avatar"
              onClick={onEditAvatar} />
          </div>
          <div className="profile__info-box">
            <div className="profile__box-button">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                name="profileEditButton"
                aria-label="Редактировать"
                onClick={onEditProfile} />
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          name="profileAddButton"
          aria-label="Добавить"
          onClick={onAddPlace} />
      </section>

      {/* <!--cards --> */}
      <section className="cards" >
        {cards.map((card) => (
          <Card
            card={card}
            onCardClick={onCardClick}
            key={card._id} />
        ))}
      </section>
    </main>
  )
}

export default Main;







