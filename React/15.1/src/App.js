import logo from "./logo.svg";
import "./App.css";
import Products from "./jsx/Products";
// import Products from './jsx/Products';
import Homepage from "./jsx/Homepage";
import ProductsMain from "./jsx/ProductsMain";
import ProductDetail from "./jsx/ProductDetail";
import { Routes, Route, Link, useParams } from "react-router-dom";

function App() {
  function ERROR404() {
    return <h1>404</h1>;
  }
  return (
    <div className="App">
       {/* <Homepage /> */}
      {/* <ProductsMain/> */}
      <Routes>

        <Route path='/ProductsMain' element={<ProductsMain/>} /> 
        <Route path='/' element={<Homepage />} />
        <Route path='/Products' element={<Products/>} /> 
        <Route path='/ProductDetail/' element={<ProductDetail/>} /> 
        <Route path='*' element={<ERROR404/>} /> 
    
      </Routes>
    </div>
  );
}

export default App;
