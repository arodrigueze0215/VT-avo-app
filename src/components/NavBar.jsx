import React from 'react';
import AvocadoIcon from '../assets/avo-icon'
import BasketIcon from '../assets/basket-icon'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { basketIconActive } = props;
    return (
        <header className="navbar">
            <div className="action-container">
                <Link to="/" className={basketIconActive || basketIconActive === undefined ? '' : 'active'}>
                    <AvocadoIcon />
                    Home
                </Link>
                <Link to="/basket" className={ basketIconActive ? 'active' : ''}>
                    <BasketIcon />
                    Basket(0)
                </Link>
            </div>
        </header>
    )
}
export default NavBar;