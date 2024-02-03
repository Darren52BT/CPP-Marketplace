import "./ItemCard.css";

function ItemCard() {
    return(
        <div className="itemcard">
            <a href="#">
                <img className="itemPicture" src="src/photos/megu.jpg" alt="" />
                <h3>itemName</h3>
                <p>price</p>
            </a>
        </div>
    );
}

export default ItemCard;