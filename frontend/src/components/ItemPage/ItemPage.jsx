// import './ItemPage.css';
// function ItemPage() {
//     return (
//         <div className="container">
//             <img className = "itemImg" src= "https://upload.wikimedia.org/wikipedia/commons/2/22/Twice_-_Dickies_Arena%2C_2022_%28cropped%29.jpg"></img>
//             <div className= "text">
//                 <h1>This is an Item</h1>
//             </div>
//         </div>
//     );
// }

// export default ItemPage;

import ItemCarousel from "../ItemCarousel/ItemCarousel";

function ItemPage() {


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
        </div>
    )
}

export default ItemPage;