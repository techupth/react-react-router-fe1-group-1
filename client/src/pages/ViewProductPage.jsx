import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

function ViewProductPage() {

  const navigate=useNavigate();
  const params=useParams();
  const [name,setName]=useState([""]);
  const [price,setPrice]=useState([""]);
  const [description,setDescription]=useState([""]);

  const getProductprofile = async ()=>{
    const response = await axios.get(`http://localhost:4001/products/${params.id}`);
    const productData=response.data.data;
    setName(productData.name);
    setDescription(productData.description);
    setPrice(productData.price);
  }

  useEffect(()=>{
    getProductprofile()
  },[]);

  const navigateTohomePage=()=>{
    navigate("/")
  };
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Name: {name}</h2>
        <p>{price} THB</p>
        <p>{description}</p>
      </div>
      <button onClick={navigateTohomePage}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
