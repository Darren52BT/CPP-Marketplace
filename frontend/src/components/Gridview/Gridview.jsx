import "./Gridview.css";
import ItemCard from "../ItemCard/ItemCard";
import { useEffect, useState } from "react";
function Gridview() {
  //contains all products
  const [retrievedProducts, setRetrievedProducts] = useState([]);

  useEffect(() => {
    const grabProducts = async () => {
      let response = await fetch("http://localhost:3000/products");
      let { products } = await response.json();

      let bucketProds = [];
      let tempProdArr = [];
      for (let i = 0; i < products.length; i++) {
        if (tempProdArr.length === 4 || i === products.length - 1) {
          bucketProds.push(tempProdArr.slice());
          tempProdArr = [];
        } else {
          tempProdArr.push({ ...products[i] });
        }
      }
      setRetrievedProducts(bucketProds);
    };

    grabProducts();
  }, []);

  return (
    <>
      {retrievedProducts.length > 0 &&
        retrievedProducts.map((prodArr, index) => {
          return (
            <div className="container-grid" key={index}>
              {prodArr.map((prod) => (
                <ItemCard
                  key={prod.id}
                  itemSrc={prod.image_url}
                  itemName={prod.name}
                  itemPrice={prod.price}
                  id={prod.id}
                />
              ))}
            </div>
          );
        })}
  
    </>
  );
}

export default Gridview;
