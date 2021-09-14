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
        console.log(data)
    }    
    render() {
        const { image, name, price, sku, attributes } =this.state;
        const { description, shape, hardiness, taste } = attributes
        return (
            <section className="content-detail">
                <LayoutActions>
                    <Image image={image}/>
                    <ContentDescription name={name} price={price} sku={sku}/>
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