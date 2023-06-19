import React from 'react';
import './Menu.css';
import Navigation from '../../components/Navigation/Navigation'

function Menu() {
    const [isOpenedMenu, setIsOpenedMenu] = React.useState(false);

    function handleMenuClick() {
        setIsOpenedMenu(!isOpenedMenu);
    }

    return (
        <div className="header__menu menu">
            <Navigation isOpenedMenu={isOpenedMenu} />
            <div className={isOpenedMenu ? "menu__background_active menu__background" : "menu__background"}></div>
            <button type="button" onClick={handleMenuClick} className={`menu__button ${isOpenedMenu ? 'menu__button_type_close' : 'menu__button_type_open'}`}></button>
        </div>
    );
}

export default Menu;