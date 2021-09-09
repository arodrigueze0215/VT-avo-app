import React, { Component } from 'react'
import { 
    LayoutActions, 
    LayoutDetails, 
    ContentDescription, 
    Image, 
    Details, 
    TableInformation
} from '../components/ItemDetailsComponents'
import LayoutNavBar from '../components/LayoutNavBar'
export default class ItemDetail extends Component {
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
        const id = 'fpr72m9k'
        const response = await fetch(`http://localhost:3001/api/avo/${id}`)
        const data = await response.json()
        console.group(data)
        this.setState(data)
    }    
    render() {
        const { image, name, price, sku, attributes } =this.state;
        const { description, shape, hardiness, taste } = attributes
        return (
            <LayoutNavBar>
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
            </LayoutNavBar>
        )
    }
}