import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <nav className="promo__navigation">
            <ul className="promo__list">
                <li className="promo__item">
                    <a className="promo__link" href="#about-project"><button className="promo__button" type="button" aria-label="Кнопка перехода в раздел О проекте">О проекте</button></a>
                </li>
                <li className="promo__item">
                    <a className="promo__link" href="#techs"><button className="promo__button" type="button" aria-label="Кнопка перехода в раздел Технологии">Технологии</button></a>
                </li>
                <li className="promo__item">
                    <a className="promo__link" href="#about-me"><button className="promo__button" type="button" aria-label="Кнопка перехода в раздел Студент">Студент</button></a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;