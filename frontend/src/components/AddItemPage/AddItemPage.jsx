import { useState } from "react";
import './AddItemPage.css'
export default function AddItemPage(){

    const [itemData, setItemData] = useState({name:"", price: "", image_url: ""})

    const handleInput = (e) =>{
        const {name, value } = e.target;
        setItemData({...itemData, [name]: value})
    }
    
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        
        //perform api call

        console.log(itemData);
    }
    return(

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
    )
}
