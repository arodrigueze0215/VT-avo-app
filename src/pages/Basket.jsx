import React from 'react'
import BasketItem from '../components/BasketItem'
import LayoutBasketItems from '../Layouts/LayoutBasketItems'

export default class Basket extends React.Component {
    componentDidMount() {
        this.props.getDataFromStorage()
    }
    render() {
        const { basketItems } = this.props
        const basketItemsComp = []
        if (basketItems && basketItems.size > 0 ) {
            for (let [key, value] of basketItems) {
                basketItemsComp.push(<BasketItem  key={key} id={value.id} onRemoveItem={this.props.onRemoveItem} image={value.image} name={value.name} price={value.price} description={value.attributes.description} amount={value.amount}/>)
                
            }
            return(
                <LayoutBasketItems>
                    { basketItemsComp }
                </LayoutBasketItems>
                
            )            
        }
        return(
            <LayoutBasketItems>
                Empty Basket
            </LayoutBasketItems>
        )

    }
}