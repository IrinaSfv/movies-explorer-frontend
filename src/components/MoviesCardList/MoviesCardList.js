import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader';
import EmptyResults from '../EmptyResults/EmptyResults'
import {
    CARDS_QUANTITY_DECKTOP,
    CARDS_QUANTITY_TABLET,
    CARDS_QUANTITY_MOBILE,
    CARDS_MORE_DECKTOP,
    CARDS_MORE_MOBILE,
    NOTHING_FOUND,
    MOVIES_SERVER_ERROR
} from "../../config/config";

function MoviesCardList({ filteredMovies, savedMovies, onSaveMovie, onDeleteMovie, isSavedFilms, isRequestError, isNotFound, isLoading }) {
    const currentLocation = useLocation().pathname;
    const [shownMoviesQuantity, setShownMoviesQuantity] = useState(0);
    // const [isMovies, setIsMovies] = useState(true);

    console.log(filteredMovies);
    
    function setShownQuantity() {
        const display = window.innerWidth;
        if (display > 1279) {
            setShownMoviesQuantity(CARDS_QUANTITY_DECKTOP);
        } else if (display > 767 && display < 1280) {
            setShownMoviesQuantity(CARDS_QUANTITY_TABLET);
        } else if (display < 768) {
            setShownMoviesQuantity(CARDS_QUANTITY_MOBILE);
        }
    }

    useEffect(() => {
        setShownQuantity();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', setShownQuantity);
        }, 500);
    });

    function loadMoreMovies() {
        const display = window.innerWidth;
        if (display > 1279) {
            setShownMoviesQuantity(shownMoviesQuantity + CARDS_MORE_DECKTOP);
        } else if (display > 767 && display < 1280) {
            setShownMoviesQuantity(shownMoviesQuantity + CARDS_MORE_MOBILE);
        } else if (display < 768) {
            setShownMoviesQuantity(shownMoviesQuantity + CARDS_MORE_MOBILE);
        }
    }

    function getSavedMovieCard(savedMovies, card) {
        return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
    }

    // function setCards() {
    //     let cards = [];
    //     if (currentLocation === '/movies') {
    //         cards = filteredMovies.slice(0, shownMoviesQuantity);
    //         console.log(cards);
    //     } else if (currentLocation === '/saved-movies') {
    //         cards = filteredMovies;
    //         console.log(cards);
    //     }
    //     return cards;
    // }

    return (
        <section className="cards" aria-label="Карточки фильмов">
            {isLoading && <Preloader />}
            {!isLoading && !isRequestError && !isNotFound && (
                <>
                    {currentLocation === '/saved-movies' ? (
                        <>
                            <ul className="cards__list">
                                {filteredMovies.map(item => {
                                    return (
                                        <MoviesCard
                                            card={item}
                                            key={isSavedFilms ? item._id : item.id}
                                            savedCard={getSavedMovieCard(savedMovies, item)}
                                            onSaveMovie={onSaveMovie}
                                            onDeleteMovie={onDeleteMovie}
                                            isSavedFilms={isSavedFilms}
                                            savedMovies={savedMovies}
                                        />
                                    )
                                }
                                )}
                            </ul>
                            <div className="cards__button-container"></div>
                        </>
                    ) : (
                        <>
                            <ul className="cards__list">
                                {filteredMovies.slice(0, shownMoviesQuantity).map(item => {
                                    return (
                                        <MoviesCard
                                            card={item}
                                            key={isSavedFilms ? item._id : item.id}
                                            savedCard={getSavedMovieCard(savedMovies, item)}
                                            onSaveMovie={onSaveMovie}
                                            onDeleteMovie={onDeleteMovie}
                                            isSavedFilms={isSavedFilms}
                                            savedMovies={savedMovies}
                                        />
                                    )
                                }
                                )}
                            </ul>
                            <div className="cards__button-container">
                                {filteredMovies.length > shownMoviesQuantity ? (
                                    <button onClick={loadMoreMovies} type="button" className="cards__loading-button">Ещё</button>
                                ) : ''}

                            </div>
                        </>
                    )}
                </>
            )}
            {isNotFound && !isLoading && <EmptyResults title={NOTHING_FOUND} />}
            {isRequestError && !isLoading && <EmptyResults title={MOVIES_SERVER_ERROR} />}
        </section>
    );
}

export default MoviesCardList;