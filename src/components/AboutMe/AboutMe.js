import React from 'react';
import './AboutMe.css';
import photo from '../../images/about-me_photo.png'

function AboutMe() {
    return (
        <section className="about-me" id="about-me" aria-label="Студент">
            <h2 className="about-me__title title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__content">
                    <div className="about-me__info">
                        <h3 className="about-me__name">Ирина</h3>
                        <p className="about-me__profession">Фронтенд-разработчица, 26 лет</p>
                        <p className="about-me__description">
                            Живу и работаю в Москве. Окончила магистратуру в сфере ИТ и 2 года работала UX-редактором.
                            Мне всегда хотелось не просто влиять на продукт, но и создавать его своими руками.
                            Поэтому начала изучать фронтенд, и сейчас вижу свое будущее именно в разработке.
                            В свободное время занимаюсь музыкой и изучением испанского.
                        </p>
                    </div>
                    <a className="about-me__link" href="https://github.com/IrinaSfv" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="about-me__photo" src={photo} alt="Ирина, фронтенд-разработчица" />
            </div>
        </section>
    );
}

export default AboutMe;