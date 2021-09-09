import React from 'react'
export const LayoutActions = (props) => <section className="actions"> {props.children} </section>
export const LayoutDetails = (props) => <section className="details"> {props.children} </section>
export const Image = (props) => {
    return (
        <article className="image">
            <img className="cardItem__img" src={props.image} alt="avo-img" />
        </article>
    )
}

export const ContentDescription = () => {
    return (
        <article className="content">
                <h1>Gwen Hass Avocado</h1>
                <div className="description">
                    <p>1.25</p>
                    <div className="label">SKU: HYA78F6J</div>
                    <div className="add-basket">
                        <input type="number" value="1" min="1" step="1" />
                        <button>Add to car</button>
                    </div>
                </div>
            </article>
    )
}

export const Details = (props) => {
    return (
        <React.Fragment>
            <h3>About this avocado</h3>
            <p>
                {props.description}
            </p>
        </React.Fragment>
    )
}

export const TableInformation = (props) => {
    return (
        <table className="table-information">
                <thead>
                    <tr>
                        <th colSpan="2">Attribures</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Shape</td>
                        <td>{props.shape}</td>
                    </tr>
                    <tr>
                        <td>Hardiness</td>
                        <td>{props.hardiness}</td>
                    </tr>
                    <tr>
                        <td>Taste</td>
                        <td>{props.taste}</td>
                    </tr>
                </tbody>
            </table>
    )
}