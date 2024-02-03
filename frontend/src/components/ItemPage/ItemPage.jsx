import './ItemPage.css';
import ItemCard from "../ItemCard/ItemCard";
import ItemCarousel from "../ItemCarousel/ItemCarousel";
import Gridview from "../Gridview/Gridview"

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
              <h1 className='titlepage-item'>ITEM NAME</h1>
              <h3 className='titlepage-itemPrice'>$49.99</h3>
              <p className='titlepage-itemDescription'>ipsum dolor</p>
            </div>
            <button className='purchase'>Purchase</button>
            <div className='more-items'>
              <h2>More Items</h2> 
            </div>
            <div class="item-row-itempage">
              <ItemCard></ItemCard>
              <ItemCard></ItemCard>
              <ItemCard></ItemCard>
              <ItemCard></ItemCard>
            </div>
        </div>
    )
}

export default ItemPage;