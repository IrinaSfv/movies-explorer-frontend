import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }

  return (
    <main className="content page__content">
      <section className="not-found">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__descriprion">Страница не найдена</p>
        <button
          type="button"
          className="not-found__button"
          onClick={handleBackClick}
        >
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFound;