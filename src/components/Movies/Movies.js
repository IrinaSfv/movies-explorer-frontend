import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { SHORT_FILMS_DURATION } from "../../config/config";
import * as moviesApi from '../../utils/MoviesApi';
import { filterMovies, filterDuration } from '../../utils/MoviesFilter';

function Movies({ savedMovies, onSaveMovie, onDeleteMovie }) {
    const currentToken = localStorage.getItem('token');
    const [isLoading, setIsLoading] = useState(false); //статус загрузки карточек
    // const [searchQuery, setSearchQuery] = useState(''); //запрос пользователя
    // const [allMovies, setAllMovies] = useState([]);
    const [initialMovies, setInitialMovies] = useState([]); //отфильтрованные по запросу
    const [filteredMovies, setFilteredMovies] = useState([]); //отфильтрованные по запросу и чекбоксу
    const [isShortMovies, setIsShortMovies] = useState(false); //включен ли чекбокс короткометражек

    const [isRequestError, setIsRequestError] = useState(false); //ошибка запроса к серверу
    const [isNotFound, setIsNotFound] = useState(false); //фильмы по запросу не найдены

    //метод фильрации, который отдает массив с фильмами на рендеринг
    function handleFilterMovies(movies, query, short) {
        console.log(movies);
        const moviesList = filterMovies(movies, query, short); //фильтруем полученный массив по запросу
        console.log(moviesList);
        setInitialMovies(moviesList); //записываем в стейт
        setFilteredMovies(short ? filterDuration(moviesList) : moviesList); //если чекбокс тру, то фильруем по длине и записываем в стейт
        console.log(filteredMovies);
        localStorage.setItem('movies', JSON.stringify(moviesList));
        localStorage.setItem('allMovies', JSON.stringify(movies));
        // setIsNotFound(moviesList.length === 0 ? true : false);
    }

    function handleShortMovies() {
        setIsShortMovies(!isShortMovies);
        if (!isShortMovies) {
            if (filterDuration(initialMovies).length === 0) {
                setFilteredMovies(filterDuration(initialMovies));
                // setIsNotFound(true);
            } else {
                setFilteredMovies(filterDuration(initialMovies));
                // setIsNotFound(false);
            }
        } else {
            setFilteredMovies(initialMovies);
            // setIsNotFound(initialMovies.length === 0 ? true : false);
        }
        localStorage.setItem('shortMovies', !isShortMovies);
    }

    //submit
    function onSearchMovies(query) {
        console.log(query);
        localStorage.setItem('movieSearch', query);
        console.log(localStorage.getItem('movieSearch'));
        localStorage.setItem('shortMovies', isShortMovies);
        console.log(localStorage.getItem('shortMovies'));

        if (localStorage.getItem('allMovies')) {
            console.log(localStorage.getItem('allMovies'));
            const movies = JSON.parse(localStorage.getItem('allMovies'));
            console.log('lo');
            handleFilterMovies(movies, query, isShortMovies);
        } else {
            console.log('nolo');
            setIsLoading(true);
            console.log(currentToken);
            moviesApi
                .getMovies(currentToken)
                .then((cardsData) => {
                    handleFilterMovies(cardsData, query, isShortMovies);
                    setIsRequestError(false);
                    // setAllMovies(cardsData);
                })
                .catch((err) => {
                    setIsRequestError(true);
                    console.log(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }

        // if (allMovies.length === 0) {

        // } else {
        //   console.log('lo');
        //   handleFilterMovies(allMovies, query, isShortMovies);
        // }
    }

    useEffect(() => {
        if (localStorage.getItem('shortMovies') === 'true') {
            setIsShortMovies(true);
        } else {
            setIsShortMovies(false);
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('movies')) {
            const movies = JSON.parse(localStorage.getItem('movies'));
            setInitialMovies(movies);
            if (localStorage.getItem('shortMovies') === 'true') {
                setFilteredMovies(filterDuration(movies));
            } else {
                setFilteredMovies(movies);
            }
        } else {
            // setIsNotFound(true);
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('movieSearch')) {
            if (filteredMovies.length === 0) {
                setIsNotFound(true);
            } else {
                setIsNotFound(false);
            }
        } else {
            setIsNotFound(false);
        }
    }, [filteredMovies]);

    return (
        <main className="content page__content">
            <SearchForm
                onSearch={onSearchMovies}
                onFilter={handleShortMovies}
                isCheckboxActive={isShortMovies} 
                />
            <MoviesCardList
                savedMovies={savedMovies}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
                filteredMovies={filteredMovies}
                isSavedFilms={false}
                isRequestError={isRequestError}
                isNotFound={isNotFound}
                isLoading={isLoading}
            />
        </main>
    );
}

export default Movies;