import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { KEY_WORD_ERROR } from '../../config/config'

function SearchForm({ onSearch, onFilter, isCheckboxActive }) {
    const currentLocation = useLocation().pathname;
    const [searchValue, setSearchValue] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (currentLocation === '/movies' && localStorage.getItem('movieSearch')) {
            setSearchValue(localStorage.getItem('movieSearch'));
        }
    }, [currentLocation]);


    function changeSearch(e) {
        setSearchValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (searchValue.trim().length === 0) {
            setIsError(true);
        } else {
            setIsError(false);
            onSearch(searchValue);
        }
    }

    return (
        <section className="search">
            <form
                name="search-form"
                className="search__form"
                onSubmit={handleSubmit}
                noValidate
            >
                <input
                    onChange={changeSearch}
                    value={searchValue || ""}
                    className="search__input"
                    id="search-input"
                    name="search-input"
                    type="text"
                    placeholder="Фильм"
                    required
                    minLength="1"
                    maxLength="500"
                />
                <button className="search__button" type="submit">Поиск</button>
            </form>
            <FilterCheckbox onFilter={onFilter} isActive={isCheckboxActive} />
            <span className={`search__error ${isError ? "search__error_active" : ""}`}>{KEY_WORD_ERROR}</span>
        </section>
    );
}

export default SearchForm;