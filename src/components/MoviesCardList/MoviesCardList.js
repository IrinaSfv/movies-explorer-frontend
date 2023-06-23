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
    // текущая страница
    const currentLocation = useLocation().pathname;
    // количество показываемых карточек
    const [shownMoviesQuantity, setShownMoviesQuantity] = useState(0);

    // устанавливем видимое количество карточек на странице в зависимости от разрешения экрана
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

    // колличество карточек устанавливается при открытии страницы
    useEffect(() => {
        setShownQuantity();
    }, []);

    // откладываем работу функции в случае изменения ширины экрана в отладчике
    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', setShownQuantity);
        }, 500);
    });

    // функция подгрузки карточек в зависимости от разрешения экрана
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

    // получение сохраненной карточки
    function getSavedMovieCard(savedMovies, card) {
        return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
    }

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