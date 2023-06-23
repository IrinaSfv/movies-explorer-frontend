import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import Menu from '../../components/Menu/Menu'
import logo from '../../images/logo.svg';

function Header({ loggedIn }) {
    const navigate = useNavigate();

    function handleRegButton() {
        navigate('/signup', { replace: true });
    }

    function handleAuthButton() {
        navigate('/signin', { replace: true });
    }

    return (
        <header className="header">
            <Link to="/" className="header__logo-link">
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            {!loggedIn ? (
                <div className="header__buttons">
                    <button
                        onClick={handleRegButton}
                        className="header__button header__button_type_reg nav-button"
                        type="button"
                        aria-label="Кнопка регистрации"
                    >Регистрация</button>
                    <button
                        onClick={handleAuthButton}
                        className="header__button header__button_type_auth"
                        type="button"
                        aria-label="Кнопка авторизации"
                    >Войти</button>
                </div>
            ) : (
                <Menu />
            )
            }
        </header>
    );
}

export default Header;