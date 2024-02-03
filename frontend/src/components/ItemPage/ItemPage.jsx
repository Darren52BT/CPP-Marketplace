import "./ItemPage.css";
import ItemCard from "../ItemCard/ItemCard";
import ItemCarousel from "../ItemCarousel/ItemCarousel";
import Gridview from "../Gridview/Gridview";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemPage() {
  // this will be dummy pictures
  let images = [
    {
      image: "https://i.ebayimg.com/images/g/Nb8AAOSwR3tlsXLe/s-l1600.jpg",
    },
    {
      image: "https://i.ebayimg.com/images/g/Nb8AAOSwR3tlsXLe/s-l1600.jpg",
    },
    {
      image: "https://i.ebayimg.com/images/g/Nb8AAOSwR3tlsXLe/s-l1600.jpg",
    },
    {
      image: "https://i.ebayimg.com/images/g/Nb8AAOSwR3tlsXLe/s-l1600.jpg",
    },
    {
      image: "https://i.ebayimg.com/images/g/Nb8AAOSwR3tlsXLe/s-l1600.jpg",
    },
  ];

  //grab params
  const { productId } = useParams();

  //contains all products
  const [retrievedProducts, setRetrievedProducts] = useState([]);

  //contains current product
  const [currProduct, setCurrProduct] = useState(null);
  useEffect(() => {
    const grabProducts = async () => {
      let response = await fetch("http://localhost:3000/products");
      let { products } = await response.json();
      setRetrievedProducts(products);
    };

    const grabCurrentProduct = async () => {
      let response = await fetch(`http://localhost:3000/products/${productId}`);
      let { product } = await response.json();
      setCurrProduct(product);
    };

    grabProducts();
    grabCurrentProduct();
  }, []);

  return (
    <div className="ItemPage">
      {currProduct && (
        <>
          <ItemCarousel images={[{ image: currProduct.image_url }]} />

          <div className="item-details">
            <div className="itembox">
              <h1 className="titlepage-item">{currProduct.name}</h1>
              <h3 className="titlepage-itemPrice">${currProduct.price}</h3>
              <p className="titlepage-itemDescription">
                {currProduct.description}
              </p>
            </div>
            <div className="purchase-button-container">
              <button className="purchase">Purchase</button>
            </div>
          </div>
        </>
      )}

      <div className="more-items">
        <h2>More Items</h2>
      </div>
      <div className="item-row-itempage">
        {retrievedProducts.map((prod) => (
          <ItemCard
            key={prod.id}
            itemSrc={prod.image_url}
            itemName={prod.name}
            itemPrice={prod.price}
            id={prod.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemPage;
