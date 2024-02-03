import { useNavigate } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ itemSrc, itemName, itemPrice, id }) {
    const navigate = useNavigate();
    return(
        <a className="container-card" href={`/product/${id}`}>
            <img className="itemPictureCard" src= {itemSrc} alt="" />
            <h3 className="itemNameCard">{itemName}</h3>
            
            <p className="itemPriceCard">{itemPrice}</p>
        </a>
    );
}

export default ItemCard;
