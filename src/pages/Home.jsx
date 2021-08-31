import React from 'react';
import NavBar from '../components/NavBar'
import CardItemList from '../components/CartItemList'
 
class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar basketIconActive={false}/>
                <main>                    
                    <div className="cardList">
                        <CardItemList/>
                        <CardItemList/>
                        <CardItemList/>
                        <CardItemList/>
                        <CardItemList/>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
export default Home;