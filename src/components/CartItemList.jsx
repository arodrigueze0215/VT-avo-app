const CardItemList = (props) => {
    return <div className="cardItem">
        <img className="cardItem__img" src="https://produits.bienmanger.com/32677-0w470h470_Organic_Fresh_Avocados_From_Spain.jpg" alt="avo-img"/>
        <div className="cardItem__info">
            <span className="cardItem__info__name">Name of avocado</span>
            <span className="cardItem__info__price">$2.44</span>
        </div>
    </div>
}
export default CardItemList;