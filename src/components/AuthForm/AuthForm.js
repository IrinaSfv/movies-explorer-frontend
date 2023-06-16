import React, { useState } from 'react';
import './AuthForm.css';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

function AuthForm({ type, title, formName, onSubmit, children, buttonTitle, linkText, link, linkTitle }) {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(true); // false, чтобы проверить верстку неактивной кнопки

    function handleNavButtonClick() {
        navigate(link, { replace: true });
    }

    return (
        <section className="auth">
            <div className={`auth__container auth__container_type_${type}`}>
                <Link to="/" className="auth__logo-link">
                    <img className="auth__logo" src={logo} alt="Логотип" />
                </Link>
                <h1 className="auth__title">{title}</h1>
                <form name={formName} className="auth__form" onSubmit={onSubmit}>
                    {children}
                    <button type="submit" className={`auth__button submit-button ${!isActive ? "submit-button_inactive" : ""}`}>{buttonTitle}</button>
                </form>
                <div className="auth__link-container">
                    <p className="auth__link-text">{linkText}</p>
                    <button
                        onClick={handleNavButtonClick}
                        className="auth__nav-button nav-button"
                        type="button"
                        aria-label="Кнопка регистрации и авторизации"
                    >{linkTitle}</button>
                </div>
            </div>
        </section>
    );
}

export default AuthForm;