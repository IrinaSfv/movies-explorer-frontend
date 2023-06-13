import React from 'react';
import './UserIcon.css';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profile_icon.svg';

function UserIcon() {
    return (
        <Link to="/profile" className="menu__user-icon user-icon">
            <p className="user-icon__text">Аккаунт</p>
            <div className="user-icon__image-container">
                <img src={profileIcon} alt="Иконка профиля" className="user-icon__image" />
            </div>
        </Link>
    );
}

export default UserIcon;