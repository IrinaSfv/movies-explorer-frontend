import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="search__filter filter">
            <label className="filter__label" htmlFor="filter-checkbox">
                <input
                    className="filter__checkbox"
                    value="true"
                    id="filter-checkbox"
                    name="filter-checkbox"
                    type="checkbox"
                />
                <span className="filter__slider">Короткометражки</span>
            </label>
        </div>
    );
}

export default FilterCheckbox;