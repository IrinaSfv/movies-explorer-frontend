import React, { useEffect, useContext, useState } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../FormValidator/FormValidator';
import { USER_NAME_REGEX } from '../../config/config';

function Profile({ logOut, onUpdate, editSubmitTitle, isLoading }) {
    const [isDisabled, setIsDisabled] = useState(true);
    const currentUser = useContext(CurrentUserContext);

    const { enteredValues, errors, handleChange, isFormValid, resetForm } = useForm();

    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [isEqualValues, setEqualValues] = useState(true);

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser);
        }
    }, [currentUser, resetForm]);

    function handleSubmit(e) {
        e.preventDefault();

        let newUserName = "";
        let newUserEmail = "";

        enteredValues.name ? newUserName = enteredValues.name : newUserName = currentUser.name;
        enteredValues.email ? newUserEmail = enteredValues.email : newUserEmail = currentUser.email;

        if (!isEqualValues) {
            onUpdate({
                name: newUserName,
                email: newUserEmail,
            });
            resetForm();
        }

        setIsDisabled(true);
    }

    useEffect(() => {
        let name = true;
        let email = true;
        if (enteredValues.name) {
            name = enteredValues.name === currentUser.name;
        }
        if (enteredValues.email) {
            email = enteredValues.email === currentUser.email;
        }
        setEqualValues(name && email);
    }, [enteredValues.name, enteredValues.email]);

    useEffect(() => {
        if (!isLoading) {
            setName(currentUser.name);
            setEmail(currentUser.email);
        }
    }, [currentUser, isLoading]);

    useEffect(() => {
        if (enteredValues.name) {
            setName(enteredValues.name);
        }
        if (enteredValues.email) {
            setEmail(enteredValues.email);
        }
    }, [enteredValues.name, enteredValues.email]);


    const profileLabelClassName = (
        `profile__text ${isDisabled ? "profile__text_disabled" : ""}`
    );

    const profileSubmitButtonClassName = (
        `profile__submit-button submit-button ${isDisabled ? "profile__submit-button_disabled" : ""} ${!isFormValid || isLoading || isEqualValues ? "submit-button_inactive" : ""}`
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
                            className={`profile__data ${isDisabled || isLoading ? "profile__data_disabled" : ""} ${errors.name ? "profile__data_type_error" : ""}`}
                            value={`${enteredValues.name ? enteredValues.name : name}`}
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
                            pattern="^\S+@\S+\.\S+$"
                            required
                            id="email"
                            name="email"
                            type="email"
                            // placeholder="E-mail"
                            className={`profile__data ${isDisabled || isLoading ? "profile__data_disabled" : ""} ${errors.email ? "profile__data_type_error" : ""}`}
                            value={`${enteredValues.email ? enteredValues.email : email}`}
                            minLength="2"
                            maxLength="30"
                        />
                        <span id="email-error" className={`profile__error ${errors.email ? "profile__error_active" : ""}`}>{errors.email}</span>
                    </div>
                    <button
                        className={profileSubmitButtonClassName}
                        type="submit"
                        disabled={!isFormValid || isLoading || isEqualValues ? true : false}
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