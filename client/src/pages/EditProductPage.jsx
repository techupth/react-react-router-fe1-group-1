import EditProductForm from "../components/EditProductForm";
import { useNavigate } from "react-router-dom";

function EditProductPage() {

  const navigate=useNavigate();

  const navigateTohomePage=()=>{
    navigate("/")
  };

  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm />
      <button onClick={navigateTohomePage}>Back to Home</button>
    </div>
  );
}

export default EditProductPage;
