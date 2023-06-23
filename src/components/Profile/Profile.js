import React, { useEffect, useContext, useState } from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useForm from '../FormValidator/FormValidator';
import { EMAIL_REGEX, USER_NAME_REGEX } from '../../config/config';

function Profile({ logOut, onUpdate, editSubmitTitle, isLoading }) {
    const [isDisabled, setIsDisabled] = useState(true);
    const currentUser = useContext(CurrentUserContext);
    const { enteredValues, errors, handleChange, isFormValid, resetForm } = useForm();
    const [isLastValues, setIsLastValues] = useState(false);

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser);
        }
    }, [currentUser, resetForm]);

    useEffect(() => {
        if (currentUser.name === enteredValues.name && currentUser.email === enteredValues.email) {
            setIsLastValues(true);
        } else {
            setIsLastValues(false);
        }
    }, [enteredValues]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdate({
            name: enteredValues.name,
            email: enteredValues.email,
        });
        setIsDisabled(true);
    }

    const profileLabelClassName = (
        `profile__text ${isDisabled ? "profile__text_disabled" : ""}`
    );

    const profileSubmitButtonClassName = (
        `profile__submit-button submit-button ${isDisabled ? "profile__submit-button_disabled" : ""} ${!isFormValid || isLoading || isLastValues ? "submit-button_inactive" : ""}`
    );

    function handleEditButtonClick() {
        setIsDisabled(!isDisabled);
    }

    return (
        <main className="content page__content">
            <section className="profile" id="profile" aria-label="Профиль пользователя">
                <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                <form name="profile-form" className="profile__form" onSubmit={handleSubmit} noValidate>
                    <div className="profile__content profile__content_type_name">
                        <label className={profileLabelClassName} htmlFor="name">Имя</label>
                        <input
                            onChange={handleChange}
                            pattern={USER_NAME_REGEX}
                            required
                            id="name"
                            name="name"
                            type="text"
                            // placeholder="Имя"
                            className={`profile__data ${isDisabled ? "profile__data_disabled" : ""} ${errors.name ? "profile__data_type_error" : ""}`}
                            value={enteredValues.name || ''}
                            minLength="2"
                            maxLength="30"
                        />
                        <span
                            id="name-error"
                            className={`profile__error ${errors.name ? "profile__error_active" : ""}`}
                        >{errors.name}</span>
                    </div>
                    <div className="profile__content profile__content_type_email">
                        <label className={profileLabelClassName} htmlFor="email">E-mail</label>
                        <input
                            onChange={handleChange}
                            pattern={EMAIL_REGEX}
                            required
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            className={`profile__data ${isDisabled ? "profile__data_disabled" : ""} ${errors.email ? "profile__data_type_error" : ""}`}
                            value={enteredValues.email || ''}
                            minLength="2"
                            maxLength="30"
                        />
                        <span id="email-error" className={`profile__error ${errors.email ? "profile__error_active" : ""}`}>{errors.email}</span>
                    </div>
                    <button
                        className={profileSubmitButtonClassName}
                        type="submit"
                        disabled={!isFormValid ? true : false}
                    >{editSubmitTitle}</button>
                </form>
                <button
                    className="profile__button profile__button_type_toggle"
                    type="button"
                    onClick={handleEditButtonClick}
                >{isDisabled ? "Редактировать" : "Отменить"}</button>
                <button
                    onClick={logOut}
                    className="profile__button profile__button_type_exit nav-button"
                    type="button"
                    aria-label="Кнопка выхода из аккаунта"
                >Выйти из аккаунта</button>
            </section>
        </main>
    );
}

export default Profile;