import React from 'react';

function Card({ card, onCardClick }) {

  const handleCardClick = () => {
    onCardClick(card)
  }

  return (
    <article className="card">
      <button
        className="card__delete card__delete_hidden"
        aria-label="Удалить"
        type="button" />
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="card__card-container">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like"
            aria-label="Нравится"
            type="button"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
