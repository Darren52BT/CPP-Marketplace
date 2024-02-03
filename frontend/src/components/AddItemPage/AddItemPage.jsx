import { useState } from "react";
import "./AddItemPage.css";
export default function AddItemPage() {
  const [itemData, setItemData] = useState({
    name: "",
    price: "",
    image_url: "",
    description: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    if (name === "price") {
      value = parseInt(value);
    }
    setItemData({ ...itemData, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    //perform api call
    const url = "http://localhost:3000/products/create";

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });

    window.location="http://localhost:5173/"
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="wrapper-outer">
        <div className="container-addItemPage">
          <h1 className="user-login-title">Item Creation</h1>
          <div className="input-box-login">
            <input
              type="text"
              placeholder="Item Name"
              name="name"
              onChange={handleInput}
            />
          </div>
          <div className="input-box-login">
            <input
              type="text"
              placeholder="Item Price"
              name="price"
              onChange={handleInput}
            />
          </div>
          <div className="input-box-login">
            <input
              type="text"
              placeholder="Item Description"
              name="description"
              onChange={handleInput}
            />
          </div>
          <div className="input-box-login">
            <input
              type="text"
              placeholder="Item Image Url"
              name="image_url"
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="login-button">
            Create Item
          </button>
        </div>
      </div>
    </form>
  );
}
