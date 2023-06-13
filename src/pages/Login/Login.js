import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useState } from 'react';

function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // onLogin(emailValue, passwordValue);
    setEmailValue("");
    setPasswordValue("");
  }

  function changeEmail(e) {
    setEmailValue(e.target.value);
  }

  function changePassword(e) {
    setPasswordValue(e.target.value);
  }
  return (
    <AuthForm
      type="login"
      title="Рады видеть!"
      onSubmit={handleSubmit}
      buttonTitle="Войти"
      linkText="Ещё не зарегистрированы?"
      link="/signup"
      linkTitle="Регистрация"
    >
      <label className="auth__label" htmlFor="email">E-mail</label>
      <input
        onChange={changeEmail}
        className="auth__input auth__input_type_login"
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
        className="auth__input auth__input_type_login"
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

export default Login;