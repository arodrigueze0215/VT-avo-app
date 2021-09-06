import React from 'react'
import IconRemove from "../assets/icons-remove"
const BasketItem = () => {
    return (
        <article className="basket-item">
            <div className="item-image-container">
                <img className="item-img" src="https://produits.bienmanger.com/32677-0w470h470_Organic_Fresh_Avocados_From_Spain.jpg" alt="avo-img" />
            </div>
            <div className="item-content">
                <a className="item-name" href="/">Name of avocado</a>
                <span className="amount">1 X 1.25</span>
                <span className="item-description">Some more information goes here....</span>
                <button className="item-remove"><i className="item-remove-icon"><IconRemove/></i></button>
            </div>
        </article>
    )

}

export default BasketItem