import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useState } from 'react';
import CurrentUser from '../../utils/CurrentUser';

function Register({ onRegister }) {
  const [nameValue, setNameValue] = useState(CurrentUser.name);
  const [emailValue, setEmailValue] = useState(CurrentUser.email);
  const [passwordValue, setPasswordValue] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister();
    setNameValue("");
    setEmailValue("");
    setPasswordValue("");
  }

  function changeName(evt) {
    setNameValue(evt.target.value);
  }

  function changeEmail(evt) {
    setEmailValue(evt.target.value);
  }

  function changePassword(evt) {
    setPasswordValue(evt.target.value);
  }
  return (
    <main className="content page__content">
      <AuthForm
        type="register"
        title="Добро пожаловать!"
        formName="register-form"
        onSubmit={handleSubmit}
        buttonTitle="Зарегистрироваться"
        linkText="Уже зарегистрированы?"
        link="/signin"
        linkTitle="Войти"
      >
        <div className="auth__form-block auth__form-block_type_register">
          <label className="auth__label" htmlFor="name">Имя</label>
          <input
            onChange={changeName}
            className="auth__input auth__input_type_register"
            type="text"
            value={nameValue || ""}
            name="name"
            id="name"
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="name-error" className="auth__error">Что-то пошло не так...</span>
        </div>
        <div className="auth__form-block auth__form-block_type_register">
          <label className="auth__label" htmlFor="email">E-mail</label>
          <input
            onChange={changeEmail}
            className="auth__input auth__input_type_register"
            type="email"
            value={emailValue || ""}
            name="email"
            id="email"
            placeholder="E-mail"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="email-error" className="auth__error">Что-то пошло не так...</span>
        </div>
        <div className="auth__form-block auth__form-block_type_register">
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input
            onChange={changePassword}
            // чтобы проверить верстку при неправильно введенных данных, добавить класс auth__input_type_error
            className="auth__input auth__input_type_register"
            type="password"
            value={passwordValue || ""}
            name="password"
            id="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="30"
            required />
          <span
            id="password-error"
            // чтобы проверить верстку при неправильно введенных данных, добавить класс auth__error_active
            className="auth__error"
          >Что-то пошло не так...</span>
        </div>
      </AuthForm>
    </main>
  );
}

export default Register;