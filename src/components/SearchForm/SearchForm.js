import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm() {

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("Кликнули на кнопку Поиск");
    }
    
    return (
        <section className="search">
            <form
                name="search-form"
                className="search__form"
                noValidate
                onSubmit={handleSubmit}
            >
                <input
                    className="search__input"
                    id="search-input"
                    name="search-input"
                    type="text"
                    placeholder="Фильм"
                    required
                />
                <button className="search__button" type="submit">Поиск</button>
            </form>
            <FilterCheckbox />
        </section>
    );
}

export default SearchForm;