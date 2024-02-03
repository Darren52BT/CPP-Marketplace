import './ItemPage.css';
function ItemPage() {
    return (
        <div className="container">
            <img className = "itemImg" src= "https://upload.wikimedia.org/wikipedia/commons/2/22/Twice_-_Dickies_Arena%2C_2022_%28cropped%29.jpg"></img>
            <div className= "text">
                <h1>This is an Item</h1>
            </div>
        </div>
    );
}

export default ItemPage;