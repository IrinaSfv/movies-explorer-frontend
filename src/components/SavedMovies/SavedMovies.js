import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies, filterDuration } from '../../utils/MoviesFilter';

function SavedMovies({ savedMovies, onDeleteMovie }) {
    // массив фильмов, отфильтрованный по запросу и длительности
    const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    // статус состояния чекбокса короткометражек
    const [isCheckboxActive, setIsCheckboxActive] = useState(false);
    // ошибка при отсутствии найденных фильмов
    const [isNotFound, setIsNotFound] = useState(false); 
    // запрос пользователя
    const [searchQuery, setSearchQuery] = useState('');

    // меняем запрос в поисковой строке
    function onSearchMovies(query) {
        setSearchQuery(query);
    }

    // переключаем состояние чекбокса
    function handleShortMovies() {
        setIsCheckboxActive(!isCheckboxActive);
    }

    // получаем отфильтрованные фильмы
    useEffect(() => {
        const moviesList = filterMovies(savedMovies, searchQuery);
        setFilteredMovies(isCheckboxActive ? filterDuration(moviesList) : moviesList);
    }, [savedMovies, isCheckboxActive, searchQuery]);

    useEffect(() => {
        if (filteredMovies.length === 0) {
            setIsNotFound(true);
        } else {
            setIsNotFound(false);
        }
    }, [filteredMovies]);

    return (
        <main className="content page__content">
            <SearchForm onSearch={onSearchMovies} onFilter={handleShortMovies} />
            <MoviesCardList 
            savedMovies={savedMovies} 
            isNotFound={isNotFound}
            isSavedFilms={true} 
            filteredMovies={filteredMovies} 
            onDeleteMovie={onDeleteMovie}  
            />
        </main>
    );
}

export default SavedMovies;