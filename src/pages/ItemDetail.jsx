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
            name: "Gwen Hass Avocado",
            id: "7bcr49em",
            sku: "HYA78F6J",
            price: 1.25,
            image: "/images/gwen.jpg",
            attributes: {
                description: "A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)",
                shape: "Plump",
                hardiness: "−1 °C",
                taste: "Superb, is an avocado"
            }
        }
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