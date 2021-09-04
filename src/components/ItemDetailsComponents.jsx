import React from 'react'
export const LayoutActions = (props) => <section className="actions"> {props.children} </section>
export const LayoutDetails = (props) => <section className="details"> {props.children} </section>
export const Image = () => {
    return (
        <article className="image">
            <img className="cardItem__img" src="https://produits.bienmanger.com/32677-0w470h470_Organic_Fresh_Avocados_From_Spain.jpg" alt="avo-img" />
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

export const Details = () => {
    return (
        <React.Fragment>
            <h3>About this avocado</h3>
            <p>
                A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert.
                Maluma Babyy.
                It is a chance seedling of unknown parentage
            </p>
        </React.Fragment>
    )
}

export const TableInformation = () => {
    return (
        <table className="table-information">
                <thead>
                    <tr>
                        <th colSpan="2">Title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Shape</td>
                        <td>Plump</td>
                    </tr>
                    <tr>
                        <td>Hardiness</td>
                        <td>-1 C</td>
                    </tr>
                    <tr>
                        <td>Taste</td>
                        <td>Superb, is an avocado</td>
                    </tr>
                </tbody>
            </table>
    )
}