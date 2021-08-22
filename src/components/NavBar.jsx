import React from 'react';
import AvocadoIcon from '../assets/avo-icon'
import BasketIcon from '../assets/basket-icon'

const NavBar = (props) => {
    const { basketIconActive } = props;
    return (
        <header className="navbar">
            <div className="action-container">
                <a href="/" className={basketIconActive ? '': 'active'}>
                    <AvocadoIcon/>
                    Home
                    </a>
                <a href="/" className={basketIconActive ? 'active': ''}>
                    <BasketIcon/>
                    Basket(0)
                </a>
            </div>
        </header>
    )
}
export default NavBar;