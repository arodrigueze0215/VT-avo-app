import React from 'react'
import IconRemove from "../assets/icons-remove"
const BasketItem = (props) => {
    return (
        <article className="basket-item">
            <div className="item-image-container">
                <img className="item-img" src={props.image} alt="avo-img" />
            </div>
            <div className="item-content">
                <a className="item-name" href="/">{props.name}</a>
                <span className="amount">{props.amount} X {props.price}</span>
                <span className="item-description">{props.description}</span>
                <button className="item-remove" data-id={props.id} onClick={props.onRemoveItem}><i className="item-remove-icon"><IconRemove/></i></button>
            </div>
        </article>
    )

}

export default BasketItem