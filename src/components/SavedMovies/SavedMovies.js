import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies, filterDuration } from '../../utils/MoviesFilter';

function SavedMovies({ savedMovies, onDeleteMovie }) {
    const [filteredMovies, setFilteredMovies] = useState(savedMovies); //отфильтрованные по запросу и чекбоксу
    const [isShortMovies, setIsShortMovies] = useState(false); //включен ли чекбокс короткометражек
    const [isNotFound, setIsNotFound] = useState(false); //фильмы по запросу не найдены
    const [searchQuery, setSearchQuery] = useState('');

    //submit
    function onSearchMovies(query) {
        setSearchQuery(query);
    }

    function handleShortMovies() {
        setIsShortMovies(!isShortMovies);
    }

    useEffect(() => {
        const moviesList = filterMovies(savedMovies, searchQuery);
        setFilteredMovies(isShortMovies ? filterDuration(moviesList) : moviesList);
    }, [savedMovies, isShortMovies, searchQuery]);

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