import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import products from "./products.json";
import Product from "./Redux-Toolkit/components/Product";
import Cart from "./Redux-Toolkit/components/Cart";
import TodoList from "./Redux-Toolkit/components/TodoList";
const App = () => {
  return (
    <div className="container">
      <h1 className="text-center">This is a Product Page</h1>
      <Cart />
      <div className="products">
        {products &&
          products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
      </div>
      <TodoList />
    </div>
  );
};

export default App;
