import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './compos/navigation_bar.js'
import { Shop } from './pages/shop/shop.js';
import { Cart } from './pages/cart/cart.jsx';
import { ShopCategory } from './pages/ShopCategory.jsx';
import { Product } from './pages/shop/product.js';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Shop />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/equipment" element={<ShopCategory category="equipment"/>}/>
                <Route path="/clothes" element={<ShopCategory category="cloth"/>}/>

                <Route path="/product" element={<Product />} >
                    <Route path=':productId' element={<Product />} />
                </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
