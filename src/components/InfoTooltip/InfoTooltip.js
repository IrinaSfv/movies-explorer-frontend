import React from 'react';
import './InfoTooltip.css';

function InfoTooltip({ isOpen, onClose, infoTitle, infoImg, onEscClick, onOverlayClick }) {
    return (
        <div className={isOpen ? "info-tooltip_opened info-tooltip" : "info-tooltip"} onKeyDown={onEscClick} onClick={onOverlayClick}>
            <div className="info-tooltip__container">
                <button className="info-tooltip__close-button" type="button" aria-label="Кнопка закрытия данного попапа" onClick={onClose}></button>
                <img
                    className="info-tooltip__image"
                    src={infoImg}
                    alt={infoTitle}
                />
                <h2 className="info-tooltip__title">
                    {infoTitle}
                </h2>
            </div>
        </div>
    );
}

export default InfoTooltip;