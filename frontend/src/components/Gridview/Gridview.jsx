import "./Gridview.css";
import ItemCard from "../ItemCard/ItemCard";

function Gridview() {
    return(
        <>
            <div className="container-grid">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
            <div className="container-grid">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
            <div className="container-grid">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </>
    );
}

export default Gridview;