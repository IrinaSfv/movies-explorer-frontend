import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UserIcon from '../../components/UserIcon/UserIcon'

function Navigation({ isOpenedMenu }) {
    const currentLocation = useLocation().pathname;

    return (
        <nav className={`menu__navigation ${isOpenedMenu ? 'menu__navigation_active' : ''}`}>
            <ul className="menu__list">
                <li className="menu__item menu__item_type_visable">
                    <Link to="/" className={`menu__link ${currentLocation === '/' && 'menu__link_active'}`}>Главная</Link>
                </li>
                <li className="menu__item">
                    <Link to="/movies" className={`menu__link ${currentLocation === '/movies' && 'menu__link_active'}`}>Фильмы</Link>
                </li>
                <li className="menu__item">
                    <Link to="/saved-movies" className={`menu__link ${currentLocation === '/saved-movies' && 'menu__link_active'}`}>Сохранённые фильмы</Link>
                </li>
            </ul>
            <UserIcon />
        </nav>
    );
}

export default Navigation;