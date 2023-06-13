import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    const [currentUser, setCurrentUser] = React.useState({ name: "Виталий", email: "pochta@yandex.ru" });
    const [isDisabled, setIsDisabled] = React.useState(true);

    const profileLabelClassName = (
        `profile__text ${isDisabled && 'profile__text_disabled'}`
    );

    const profileInputClassName = (
        `profile__data ${isDisabled && 'profile__data_disabled'}`
    );

    const profileButtonClassName = (
        `profile__button ${!isDisabled && 'profile__button_type_cancel'}`
    );

    function handleEditClick() {
        setIsDisabled(!isDisabled);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setIsDisabled(true);
    }

    return (
        <section className="profile" id="profile" aria-label="Профиль пользователя">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__content profile__content_type_name">
                    <label className={profileLabelClassName} htmlFor="name">Имя</label>
                    <input
                        required
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Имя"
                        className={profileInputClassName}
                        value={currentUser.name}
                    />
                </div>
                <div className="profile__content profile__content_type_email">
                    <label className={profileLabelClassName} htmlFor="email">E-mail</label>
                    <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        className={profileInputClassName}
                        value={currentUser.email}
                    />
                </div>
                {!isDisabled && (
                    <button
                        className="profile__submit-button submit-button"
                        type="submit"
                    >Сохранить</button>
                )}
            </form>
            <button
                className={profileButtonClassName}
                onClick={handleEditClick}
                aria-label="Кнопка для активации редактирования профиля"
            >{isDisabled ? "Редактировать" : "Отменить"}</button>
            <Link to="/signin" className="profile__link">Выйти из аккаунта</Link>
        </section>
    );
}

export default Profile;