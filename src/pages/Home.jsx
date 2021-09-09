import React from 'react';
import LayoutNavBar from '../components/LayoutNavBar';
import CardItemList from '../components/CartItemList'

class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            data : []
        }

    }
    async componentDidMount() {
        const response = await fetch('http://localhost:3001/api/avo')
        const dataFetch = await response.json()
        const { data } = dataFetch
        this.setState({ data })
    }
    render() {
        const { data } = this.state
        this.setState()

        const CardItems = data.map((item) => { 
            return <CardItemList name={item.name} price={item.price} image={item.image}/>
        })

        return (
            <LayoutNavBar>
                <div className="cardList">
                    {CardItems}
                </div>
            </LayoutNavBar>
        )
    }
}
export default Home;