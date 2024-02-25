import "./App.css";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/HomePage"
import Edit from "./pages/EditProductPage"
import Create from "./pages/CreateProductPage"
import View from "./pages/ViewProductPage"

function App() {
  return( 
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/view/:id" element={<View/>}/>
        <Route path="/product/create" element={<Create/>}/>
        <Route path="/product/edit/:id" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
