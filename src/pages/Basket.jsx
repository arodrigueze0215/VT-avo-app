import React from 'react'
import BasketItem from '../components/BasketItem'
import LayoutBasketItems from '../Layouts/LayoutBasketItems'

export default class Basket extends React.Component {
    constructor() {
        super()
        this.state = {
            basketItems : new Map()
        }
    }
    handleRemoveItem = (e) => {        
        const idAvocado = e.currentTarget.getAttribute('data-id')
        const avocado = this.getAvocado(idAvocado)
        if (avocado.amount === 1) {
            const { basketItems } = this.state
            basketItems.delete(idAvocado)
            this.setState({ basketItems })
            localStorage.removeItem(idAvocado)
        }
        else this.degreaseAmount(idAvocado)
    }
    degreaseAmount(idAvocado) {
        const { basketItems } = this.state
        const avocado = basketItems.get(idAvocado)
        avocado.amount = avocado.amount - 1
        basketItems.set(idAvocado, avocado)
        this.setState({ basketItems })
        localStorage.setItem(avocado.id, JSON.stringify(avocado))
    }
    getAvocado(id) {
        const avocado = this.state.basketItems.get(id)
        if (avocado && avocado === undefined && avocado === null) return undefined
        return avocado
        
    }
    getDataFromStorage() {
        const basketItems = new Map()
        for (let i = 0; i < localStorage.length; i++) {
            const id = localStorage.key(i)
            let avocado = localStorage.getItem(id)
            avocado = JSON.parse(avocado)
            basketItems.set(id, avocado)
        }
        console.log(basketItems.size)
        if (basketItems.size > 0) this.setState({ basketItems })
    }
    componentDidMount() {
        this.getDataFromStorage()
    }
    render() {
        const { basketItems } = this.state
        const basketItemsComp = []
        for (let [key, value] of basketItems) {
            basketItemsComp.push(<BasketItem  key={key} id={value.id} onRemoveItem={this.handleRemoveItem} image={value.image} name={value.name} price={value.price} description={value.attributes.description} amount={value.amount}/>)
            
        }
        console.log(basketItemsComp)
        return(
            <LayoutBasketItems>
                { basketItemsComp }
            </LayoutBasketItems>
            
        ) 
    }
}