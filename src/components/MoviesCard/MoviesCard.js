import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ card }) {
    const currentLocation = useLocation().pathname;
    const [isSavedMovie, setSavedMovie] = useState(false);
    const cardSaveButtonClassName = (
        `element__save-button element-button ${isSavedMovie ? "element__save-button_active" : ""}`
    );

    function handleSaveClick() {
        setSavedMovie(!isSavedMovie);
    }

    return (
        <li className="cards__element">
            <article className="element" id={card._id}>
                <div className="element__info">
                    <div className="element__description">
                        <h2 className="element__title">{card.nameRU}</h2>
                        <p className="element__duration">{card.duration}</p>
                    </div>
                    {currentLocation === '/saved-movies' ? (
                        <button className="element__delete-button element-button" type="button" aria-label="Кнопка для удаления фильма"></button>
                    ) : (
                        <button 
                        className={cardSaveButtonClassName} 
                        type="button" 
                        aria-label="Кнопка для сохранения фильма"
                        onClick={handleSaveClick}
                        ></button>
                    )}
                </div>
                <a className="element__link" href={card.trailerLink} target="_blank" rel="noreferrer">
                    <img className="element__photo" src={card.image} alt={card.nameRU} />
                </a>
            </article>
        </li>
    );
}

export default MoviesCard;