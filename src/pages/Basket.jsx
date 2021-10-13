import React from 'react'
import BasketItem from '../components/BasketItem'
import LayoutBasketItems from '../Layouts/LayoutBasketItems'

export default class Basket extends React.Component {
    render() {
        return(
            <LayoutBasketItems>
                <BasketItem/>
                <BasketItem/>
                <BasketItem/>
                <BasketItem/>
                <BasketItem/>
            </LayoutBasketItems>
            
        ) 
    }
}