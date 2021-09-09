const CardItemList = (props) => {
    const { name, price, image } = props
    return <div className="cardItem">
        <img className="cardItem__img" src={image} alt="avo-img"/>
        <div className="cardItem__info">
            <span className="cardItem__info__name">{name}</span>
            <span className="cardItem__info__price">{price}</span>
        </div>
    </div>
}
export default CardItemList;