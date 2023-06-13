import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <nav className="promo__navigation">
            <a className="promo__link" href="#about-project"><button className="promo__button" type="button" aria-label="Кнопка перехода в раздел О проекте">О проекте</button></a>
            <a className="promo__link" href="#techs"><button className="promo__button" type="button" aria-label="Кнопка перехода в раздел Технологии">Технологии</button></a>
            <a className="promo__link" href="#about-me"><button className="promo__button" type="button" aria-label="Кнопка перехода в раздел Студент">Студент</button></a>
        </nav>
    );
}

export default NavTab;