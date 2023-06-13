import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useState } from 'react';

function Register() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // onRegister(emailValue, passwordValue);
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
    <AuthForm
      type="register"
      title="Добро пожаловать!"
      onSubmit={handleSubmit}
      buttonTitle="Зарегистрироваться"
      linkText="Уже зарегистрированы?"
      link="/signin"
      linkTitle="Войти"
    >
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
      <label className="auth__label" htmlFor="password">Пароль</label>
      <input
        onChange={changePassword}
        className="auth__input auth__input_type_register"
        type="password"
        value={passwordValue || ""}
        name="password"
        id="password"
        placeholder="Пароль"
        minLength="6"
        maxLength="30"
        required />
    </AuthForm>
  );
}

export default Register;