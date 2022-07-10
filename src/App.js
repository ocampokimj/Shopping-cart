import { useState } from "react";
import Homepage from "./Homepage";
import Shop from "./Shop";
import Nav from "./Nav.js";
import Cart from "./Cart";
import Item from "./ItemDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [carts, setCarts] = useState([]);

  const handleCartItem = (item) => {
    setCarts([...carts, item]);
  }; // adds pushes the selected item into cart array

  const removeItem = (item) => {
    setCarts(carts.filter((cart) => cart !== item));
  }; // removes selected items

  return (
    <BrowserRouter>
      <div className="app">
        <Nav carts={carts} handleCartItem={handleCartItem} />
        <Routes>
          <Route
            path="/cart"
            element={<Cart carts={carts} removeItem={removeItem} />}
          />
          <Route
            path="/shop"
            element={<Shop handleCartItem={handleCartItem} />}
          />
          <Route path="/" element={<Homepage />} />
          <Route
            path="/shop/:id"
            element={<Item carts={carts} handleCartItem={handleCartItem} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
