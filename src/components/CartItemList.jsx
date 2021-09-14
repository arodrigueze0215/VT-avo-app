import { Link } from "react-router-dom";

const CardItemList = (props) => {
    const { name, price, image } = props
    return <Link to={`/details/${props.id}`} className="cardItem">
            <img className="cardItem__img" src={image} alt="avo-img"/>
            <div className="cardItem__info">
                <span className="cardItem__info__name">{name}</span>
                <span className="cardItem__info__price">{price}</span>
            </div>
    </Link>
}
export default CardItemList;