import React, { Component } from 'react'
import { 
    LayoutActions, 
    LayoutDetails, 
    ContentDescription, 
    Image, 
    Details, 
    TableInformation
} from '../components/ItemDetailsComponents'

import { withRouter } from 'react-router-dom';
class ItemDetail extends Component {
    constructor() {
        super()
        this.state = {
            amount: 1,
            name: "",
            id: "",
            sku: "",
            price: 0,
            image: "",
            attributes: {
                description: "",
                shape: "",
                hardiness: "",
                taste: ""
            }
        }
    }

    async componentDidMount() {
        const id = this.props.match.params.id
        const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${id}`)
        const data = await response.json()
        this.setState(data)
    }

    handleAmountChange = ({ target }) => {
        this.setState(Object.assign(this.state, {amount: Number(target.value)}))

    }
    
    handleAddToBasket = () => {
        if (this.state.id !== '') {
            let avocado = localStorage.getItem(this.state.id)
            if (avocado && avocado !== '{}' && avocado !== null) {
                avocado = JSON.parse(avocado)
                const { amount } = avocado
                avocado.amount = Number(amount) + Number(this.state.amount)
                localStorage.setItem(this.state.id, JSON.stringify(avocado))
            } else {
                localStorage.setItem(this.state.id, JSON.stringify(this.state))
            }
        }
    }
    render() {
        const { image, name, price, sku, attributes } =this.state;
        const { description, shape, hardiness, taste } = attributes
        return (
            <section className="content-detail">
                <LayoutActions>
                    <Image image={image}/>
                    <ContentDescription 
                        name={name} 
                        price={price} 
                        sku={sku} 
                        onAddBasket={this.handleAddToBasket} 
                        onAmountChange={this.handleAmountChange}
                        amount={this.state.amount}
                    />
                </LayoutActions>
                <LayoutDetails>
                    <Details description={description}/>
                    <TableInformation shape={shape} hardiness={hardiness} taste={taste}/>
                </LayoutDetails>
            </section>
        )
    }
}

export default withRouter(ItemDetail)