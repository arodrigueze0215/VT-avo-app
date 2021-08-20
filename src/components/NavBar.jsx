import React from 'react';
import AvocadoIcon from '../assets/avo-icon'
import BasketIcon from '../assets/basket-icon'

const NavBar = () => {
    return (
        <header className="navbar">
            <div className="action-container">
                <a href="/" className="">
                    <AvocadoIcon/>
                    Home
                    </a>
                <a href="/" className="active">
                    <BasketIcon/>
                    Basket(0)
                </a>
            </div>
        </header>
    )
}
export default NavBar;