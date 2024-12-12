import React from "react";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./component/Footer/Footer";
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
function App() {
  return (
    <div>
      
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/men" element={<ShopCategory category="mens-shirts" banner={men_banner} />} />
            <Route path="/women" element={<ShopCategory category="womens-dresses" banner={women_banner} />} />
            <Route path="/shoes" element={<ShopCategory category="mens-shoes"/>} />
            <Route path="/bags" element={<ShopCategory category="womens-bags"/>} />
            <Route path="/product/:category/:productId" element={<Product />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
