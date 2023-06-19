import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about-project" id="about-project" aria-label="О проекте">
            <h2 className="about-project__title title">О проекте</h2>
            <div className="about-project__container">
                <ul className="about-project__list">
                    <li className="about-project__item">
                        <h3 className="about-project__name">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li className="about-project__item">
                        <h3 className="about-project__name">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
                <div className="about-project__duration duration">
                    <div className="duration__element duration__element_type_backend">
                        <div className="duration__time-box duration__time-box_type_backend">
                            <p className="duration__text">1 неделя</p>
                        </div>
                        <p className="duration__caption">Back-end</p>
                    </div>
                    <div className="duration__element duration__element_type_frontend">
                        <div className="duration__time-box duration__time-box_type_frontend">
                            <p className="duration__text">4 недели</p>
                        </div>
                        <p className="duration__caption">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;