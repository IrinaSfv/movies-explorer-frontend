import React from 'react';
import './AuthForm.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function AuthForm({type, title, onSubmit, children, buttonTitle, linkText, link, linkTitle }) {
    return (
        <section className="auth">
            <div className={`auth__container auth__container_type_${type}`}>
                <img className="auth__logo" src={logo} alt="Логотип" />
                <h1 className="auth__title">{title}</h1>
                <form className="auth__form" onSubmit={onSubmit}>
                    {children}
                    <button type="submit" className="auth__button submit-button">{buttonTitle}</button>
                </form>
                <div className="auth__link-container">
                    <p className="auth__link-text">{linkText}</p>
                    <Link className="auth__link" to={link}>{linkTitle}</Link>
                </div>
            </div>
        </section>
    );
}

export default AuthForm;