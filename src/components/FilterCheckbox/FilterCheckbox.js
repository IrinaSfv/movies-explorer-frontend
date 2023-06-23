import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onFilter, isActive }) {
    return (
        <div className="search__filter filter">
            <label className="filter__label" htmlFor="filter-checkbox">
                <input
                    className="filter__checkbox"
                    value="true"
                    id="filter-checkbox"
                    name="filter-checkbox"
                    type="checkbox"
                    onChange={onFilter}
                    checked={isActive}
                />
                <span className="filter__slider">Короткометражки</span>
            </label>
        </div>
    );
}

export default FilterCheckbox;