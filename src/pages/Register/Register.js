import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import useForm from '../../components/FormValidator/FormValidator';
import { USER_NAME_REGEX } from '../../config/config';

function Register({ onRegister, isLoading }) {
  const { enteredValues, errors, handleChange, isFormValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
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
        isDisabled={!isFormValid}
        isLoading={isLoading}
      >
        <div className="auth__form-block auth__form-block_type_register">
          <label className="auth__label" htmlFor="name">Имя</label>
          <input
            onChange={handleChange}
            pattern={USER_NAME_REGEX}
            className={`auth__input auth__input_type_register ${isLoading ? "auth__input_disabled" : ""} ${errors.name ? "auth__input_type_error" : ""}`}
            type="text"
            value={enteredValues.name || ''}
            name="name"
            id="name"
            // placeholder="Имя"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="name-error" className={`auth__error ${errors.name ? "auth__error_active" : ""}`}>{errors.name}</span>
        </div>
        <div className="auth__form-block auth__form-block_type_register">
          <label className="auth__label" htmlFor="email">E-mail</label>
          <input
            onChange={handleChange}
            pattern="^\S+@\S+\.\S+$"
            className={`auth__input auth__input_type_register ${isLoading ? "auth__input_disabled" : ""} ${errors.email ? "auth__input_type_error" : ""}`}
            type="email"
            value={enteredValues.email || ''}
            name="email"
            id="email"
            // placeholder="E-mail"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="email-error" className={`auth__error ${errors.email ? "auth__error_active" : ""}`}>{errors.email}</span>
        </div>
        <div className="auth__form-block auth__form-block_type_register">
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input
            onChange={handleChange}
            className={`auth__input auth__input_type_register ${isLoading ? "auth__input_disabled" : ""} ${errors.password ? "auth__input_type_error" : ""}`}
            type="password"
            value={enteredValues.password || ''}
            name="password"
            id="password"
            // placeholder="Пароль"
            minLength="6"
            maxLength="30"
            required />
          <span
            id="password-error"
            className={`auth__error ${errors.password ? "auth__error_active" : ""}`}
          >{errors.password}</span>
        </div>
      </AuthForm>
    </main>
  );
}

export default Register;