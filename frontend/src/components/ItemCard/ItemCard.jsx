import "./ItemCard.css";

function ItemCard({ itemSrc, itemName, itemPrice }) {
    return(
        <a className="container-card" href="#">
            <img className="itemPictureCard" src= {itemSrc} alt="" />
            <h3 className="itemNameCard">{itemName}</h3>
            
            <p className="itemPriceCard">{itemPrice}</p>
        </a>
    );
}

export default ItemCard;