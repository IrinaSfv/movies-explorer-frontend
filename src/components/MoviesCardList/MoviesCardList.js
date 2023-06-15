import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader';
import MoviesCards from '../../utils/MoviesCards';
import SavedMovies from '../../utils/SavedMovies';

function MoviesCardList() {
    const currentLocation = useLocation().pathname;
    const [isLoading, setIsLoading] = useState(false);
    const [isMovies, setIsMovies] = useState(true);

    function setCards() {
        let cards = [];
        if (currentLocation === '/movies') {
            cards = MoviesCards;
        } else if (currentLocation === '/saved-movies') {
            cards = SavedMovies;
        }
        return cards;
    }

    return (
        <section className="cards" aria-label="Карточки фильмов">
            {isLoading ? (
                <Preloader />
            ) : ( isMovies ? (
                <>
                    <ul className="cards__list">
                        {setCards().map(item => {
                            return (
                                <MoviesCard card={item} key={item._id} />
                            )
                        }
                        )}
                    </ul>
                    <div className="cards__button-container">
                        {currentLocation === '/saved-movies' ? '' : <button type="button" className="cards__loading-button">Ещё</button>}
                    </div>
                </>
            ) : (
                <div className="cards__text-container">
                    <h2 className="cards__text">Фильмы не найдены</h2>
                </div>) 
            )}
        </section>
    );
}

export default MoviesCardList;