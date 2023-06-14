import React from 'react';
import './Portfolio.css';
import portfolioSign from '../../images/portfolio_link.svg';

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio" aria-label="Портфолио">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/IrinaSfv/how-to-learn" target="_blank" rel="noreferrer">
                        <p className="portfolio__text">Статичный сайт</p>
                        <img className="portfolio__sign" src={portfolioSign} alt="Значок перехода по ссылке" />
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/IrinaSfv/russian-travel" target="_blank" rel="noreferrer">
                        <p className="portfolio__text">Адаптивный сайт</p>
                        <img className="portfolio__sign" src={portfolioSign} alt="Значок перехода по ссылке" />
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/IrinaSfv/mesto" target="_blank" rel="noreferrer">
                        <p className="portfolio__text">Одностраничное приложение</p>
                        <img className="portfolio__sign" src={portfolioSign} alt="Значок перехода по ссылке" />
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;