import React from 'react';
import LayoutNavBar from '../components/LayoutNavBar';
import CardItemList from '../components/CartItemList'
 
class Home extends React.Component {
    render() {
        return (
            <LayoutNavBar>
                <div className="cardList">
                    <CardItemList/>
                    <CardItemList/>
                    <CardItemList/>
                    <CardItemList/>
                    <CardItemList/>
                </div>
            </LayoutNavBar>
        )
    }
}
export default Home;