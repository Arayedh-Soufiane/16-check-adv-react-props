import React from "react";
import "./App.css";
import "./index";
import ProductTable from "./ProductType";

const Product = [
  { category: "Electronics", price: 500, name: "monbile" },
  { category: "Electronics", price: 100, name: "nokia" },
  { category: "Clothes", price: 17, name: "T shirt" },
  { category: "Clothes", price: 12, name: "TTshirt" },
];

function App() {
  return (
    <div className="App">
      <h1 className="cltit">THE PRODUCTS ARRAY OF OBJECT</h1>
      <hr />
      <div className="COL">
        <h1>Category</h1>
        <h1>Price</h1>
        <h1>Name</h1>
      </div>
      <div>
        <ProductTable x={Product} />
      </div>
    </div>
  );
}

export default App;
