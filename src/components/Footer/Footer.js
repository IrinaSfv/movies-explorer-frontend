import React from 'react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__copyright">&copy; {currentYear}</p>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="https://github.com/IrinaSfv">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;