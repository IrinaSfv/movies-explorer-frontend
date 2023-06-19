import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm() {
    const [searchValue, setSearchValue] = useState("");

    function changeSearch(e) {
        setSearchValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Кликнули на кнопку Поиск");
    }

    return (
        <section className="search">
            <form
                name="search-form"
                className="search__form"
                // noValidate
                onSubmit={handleSubmit}
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
            <FilterCheckbox />
        </section>
    );
}

export default SearchForm;