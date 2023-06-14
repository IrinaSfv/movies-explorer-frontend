import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Menu from '../../components/Menu/Menu'
import logo from '../../images/logo.svg';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);

    return (
        <header className="header">
            <Link to="/" className="header__logo-link">
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            {!isLoggedIn ? (
                <div className="header__links">
                    <Link to="/signup" className="header__reg">Регистрация</Link>
                    <Link to="/signin" className="header__auth">
                        <button className="header__button" type="button" aria-label="Кнопка авторизации">Войти</button>
                    </Link>
                </div>
            ) : (
                <Menu />
            )
            }
        </header>
    );
}

export default Header;