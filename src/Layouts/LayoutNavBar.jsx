import React from 'react'
import NavBar from '../components/NavBar'

const LayoutNavBar = (props) => {
    const { basketIconActive, amountBasket, onBasketIconActive } = props
    return (
        <React.Fragment>
                <NavBar basketIconActive={basketIconActive} amountBasket={amountBasket} onBasketIconActive={onBasketIconActive}/>
                <main className="container">
                    {props.children}
                </main>
        </React.Fragment>
    )
}
export default LayoutNavBar;