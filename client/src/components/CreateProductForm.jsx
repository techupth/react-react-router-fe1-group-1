import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const [name,setName]=useState([""]);
  const [image,setImage]=useState([""]);
  const [price,setPrice]=useState([""]);
  const [description,setDescription]=useState([""]);

  const navigate = useNavigate();

  const submitData = async (event)=>{
    event.preventDefault();
    try{
      await axios.post("http://localhost:4001/products",{ name, image, price, description });
      navigate("/")
    }catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <form className="product-form" onSubmit={submitData}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(event) => {setName(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(event) => {setImage(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(event) => {setPrice(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(event) => {setDescription(event.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
