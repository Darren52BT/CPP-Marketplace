import './ItemPage.css';
import ItemCard from "../ItemCard/ItemCard";
import ItemCarousel from "../ItemCarousel/ItemCarousel";

function ItemPage() {

    // this will be dummy pictures
    let images = [
        {
          image:
            "https://i.ebayimg.com/images/g/Nb8AAOSwR3tlsXLe/s-l1600.jpg"
        },
        {
            image:
              "https://i.ebayimg.com/images/g/Nb8AAOSwR3tlsXLe/s-l1600.jpg"
          }
          ,
          {
            image:
              "https://i.ebayimg.com/images/g/Nb8AAOSwR3tlsXLe/s-l1600.jpg"
          },
          {
            image:
              "https://i.ebayimg.com/images/g/Nb8AAOSwR3tlsXLe/s-l1600.jpg"
          }
          ,
          {
            image:
              "https://i.ebayimg.com/images/g/Nb8AAOSwR3tlsXLe/s-l1600.jpg"
          }
    ];

    return (
        <div className="ItemPage">
            <ItemCarousel images={images}/>
            <div className="itembox">
            <ItemCard/>
            <div className= "text">
              <h1>Wassup</h1>
            </div>
            </div>
        </div>
    )
}

export default ItemPage;