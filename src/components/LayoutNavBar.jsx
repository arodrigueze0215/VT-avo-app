import React from 'react'
import NavBar from '../components/NavBar'

const LayoutNavBar = (props) => {
    const { basketIconActive } = props;
    return (
        <React.Fragment>
                <NavBar basketIconActive={basketIconActive}/>
                <main className="container">
                    {props.children}
                </main>
        </React.Fragment>
    )
}
export default LayoutNavBar;