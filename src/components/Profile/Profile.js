import React from 'react';
import { useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import CurrentUser from '../../utils/CurrentUser';

function Profile({ onUpdate }) {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [isActive, setIsActive] = useState(true); // false, чтобы проверить верстку неактивной кнопки
    const [nameValue, setNameValue] = useState(CurrentUser.name);
    const [emailValue, setEmailValue] = useState(CurrentUser.email);

    const profileLabelClassName = (
        `profile__text ${isDisabled ? "profile__text_disabled" : ""}`
    );

    const profileInputClassName = (
        `profile__data ${isDisabled ? "profile__data_disabled" : ""}`
    );

    const profileSubmitButtonClassName = (
        `profile__submit-button submit-button ${isDisabled ? "profile__submit-button_disabled" : ""} ${!isActive ? "submit-button_inactive" : ""}`
    );

    function handleExitButtonClick() {
        navigate('/', { replace: true });
    }

    function handleEditButtonClick() {
        setIsDisabled(!isDisabled);
    }

    function changeName(evt) {
        setNameValue(evt.target.value);
    }

    function changeEmail(evt) {
        setEmailValue(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setIsDisabled(true);
        onUpdate();
    }

    return (
        <main className="content page__content">
            <section className="profile" id="profile" aria-label="Профиль пользователя">
                <h1 className="profile__title">Привет, {CurrentUser.name}!</h1>
                <form name="profile-form" className="profile__form" onSubmit={handleSubmit}>
                    <div className="profile__content profile__content_type_name">
                        <label className={profileLabelClassName} htmlFor="name">Имя</label>
                        <input
                            onChange={changeName}
                            required
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Имя"
                            // чтобы проверить верстку при неправильно введенных данных, добавить класс profile__data_type_error
                            className={profileInputClassName}
                            value={nameValue || ""}
                            minLength="2"
                            maxLength="30"
                        />
                        <span
                            id="name-error"
                            // чтобы проверить верстку при неправильно введенных данных, добавить класс profile__error_active
                            className="profile__error"
                        >Что-то пошло не так...</span>
                    </div>
                    <div className="profile__content profile__content_type_email">
                        <label className={profileLabelClassName} htmlFor="email">E-mail</label>
                        <input
                            onChange={changeEmail}
                            required
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            className={profileInputClassName}
                            value={emailValue || ""}
                            minLength="2"
                            maxLength="30"
                        />
                        <span id="email-error" className="profile__error">Что-то пошло не так...</span>
                    </div>
                    <button
                        className={profileSubmitButtonClassName}
                        type="submit"
                    >Сохранить</button>
                </form>
                <button
                    className="profile__button profile__button_type_toggle"
                    type="button"
                    onClick={handleEditButtonClick}
                >{isDisabled ? "Редактировать" : "Отменить"}</button>
                <button
                    onClick={handleExitButtonClick}
                    className="profile__button profile__button_type_exit nav-button"
                    type="button"
                    aria-label="Кнопка выхода из аккаунта"
                >Выйти из аккаунта</button>
            </section>
        </main>
    );
}

export default Profile;