import React from 'react'
import BasketItem from '../components/BasketItem'
import LayoutNavBar from '../components/LayoutNavBar'

export default class Basket extends React.Component {
    render() {
        return(
            <section className="basket-container">
                <div className="basket-item-list">
                    <BasketItem/>
                    <BasketItem/>
                    <BasketItem/>
                    <BasketItem/>
                    <BasketItem/>                        
                </div>
            </section>
        ) 
    }
}