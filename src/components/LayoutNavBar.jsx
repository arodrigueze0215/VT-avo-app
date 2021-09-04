import React from 'react'
import NavBar from '../components/NavBar'

const LayoutNavBar = (props) => {
    return (
        <React.Fragment>
                <NavBar />
                <main className="container">
                    {props.children}
                </main>
        </React.Fragment>
    )
}
export default LayoutNavBar;