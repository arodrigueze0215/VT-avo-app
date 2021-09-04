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
    render() {
        return (
        <LayoutNavBar>
            <section className="content-detail">
                <LayoutActions>
                    <Image />
                    <ContentDescription />
                </LayoutActions>
                <LayoutDetails>
                    <Details />
                    <TableInformation />
                </LayoutDetails>
            </section>
        </LayoutNavBar>
        )
    }
}