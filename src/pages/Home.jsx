import React from 'react';
import CardItemList from '../components/CartItemList'

class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            data : []
        }

    }
    async componentDidMount() {
        const response = await fetch('https://platzi-avo.vercel.app/api/avo')
        const dataFetch = await response.json()
        const { data } = dataFetch
        this.setState({ data })
    }
    render() {
        const { data } = this.state

        const CardItems = data.map((item) => { 
            return <CardItemList name={item.name} price={item.price} image={item.image} id={item.id}/>
        })

        return (
            <div className="cardList">
                {CardItems}
            </div>
        )
    }
}
export default Home;