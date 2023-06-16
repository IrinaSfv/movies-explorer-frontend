import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <nav className="promo__navigation">
            <ul className="promo__list">
                <li className="promo__item">
                    <a className="promo__link" href="#about-project">О проекте</a>
                </li>
                <li className="promo__item">
                    <a className="promo__link" href="#techs">Технологии</a>
                </li>
                <li className="promo__item">
                    <a className="promo__link" href="#about-me">Студент</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;