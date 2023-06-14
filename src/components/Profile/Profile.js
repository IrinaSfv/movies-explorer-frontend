import React from 'react';
import { useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import CurrentUser from '../../utils/CurrentUser';

function Profile({ onUpdate }) {
    const [nameValue, setNameValue] = useState(CurrentUser.name);
    const [emailValue, setEmailValue] = useState(CurrentUser.email);

    function changeName(evt) {
        setNameValue(evt.target.value);
    }

    function changeEmail(evt) {
        setEmailValue(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdate();
    }

    return (
        <section className="profile" id="profile" aria-label="Профиль пользователя">
            <h1 className="profile__title">Привет, {CurrentUser.name}!</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__content profile__content_type_name">
                    <label className="profile__text" htmlFor="name">Имя</label>
                    <input
                        onChange={changeName}
                        required
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Имя"
                        // чтобы проверить верстку при неправильно введенных данных, добавить класс profile__data_type_error
                        className="profile__data"
                        value={nameValue || ""}
                    />
                    <span
                        id="name-error"
                        // чтобы проверить верстку при неправильно введенных данных, добавить класс profile__error_active
                        className="profile__error"
                    >Что-то пошло не так...</span>
                </div>
                <div className="profile__content profile__content_type_email">
                    <label className="profile__text" htmlFor="email">E-mail</label>
                    <input
                        onChange={changeEmail}
                        required
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        className="profile__data"
                        value={emailValue || ""}
                    />
                    <span id="email-error" className="profile__error">Что-то пошло не так...</span>
                </div>
                <button
                    className="profile__button"
                    type="submit"
                >Редактировать</button>
            </form>
            <Link to="/" className="profile__link">Выйти из аккаунта</Link>
        </section>
    );
}

export default Profile;