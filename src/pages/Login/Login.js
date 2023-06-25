import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import useForm from '../../components/FormValidator/FormValidator';

function Login({ onLogin, isLoading }) {
  const { enteredValues, errors, handleChange, isFormValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <main className="content page__content">
      <AuthForm
        type="login"
        title="Рады видеть!"
        formName="login-form"
        onSubmit={handleSubmit}
        buttonTitle="Войти"
        linkText="Ещё не зарегистрированы?"
        link="/signup"
        linkTitle="Регистрация"
        isDisabled={!isFormValid}
        isLoading={isLoading}
      >
        <div className="auth__form-block auth__form-block_type_login">
          <label className="auth__label" htmlFor="email">E-mail</label>
          <input
            onChange={handleChange}
            pattern="^\S+@\S+\.\S+$"
            className={`auth__input auth__input_type_login ${isLoading ? "auth__input_disabled" : ""} ${errors.email ? "auth__input_type_error" : ""}`}
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
        <div className="auth__form-block auth__form-block_type_login">
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input
            onChange={handleChange}
            className={`auth__input auth__input_type_login ${isLoading ? "auth__input_disabled" : ""} ${errors.password ? "auth__input_type_error" : ""}`}
            type="password"
            value={enteredValues.password || ''}
            name="password"
            id="password"
            // placeholder="Пароль"
            minLength="6"
            maxLength="30"
            required />
          <span id="password-error" className={`auth__error ${errors.password ? "auth__error_active" : ""}`}>{errors.password}</span>
        </div>
      </AuthForm>
    </main>
  );
}

export default Login;