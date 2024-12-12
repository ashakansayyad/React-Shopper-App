import React, { useContext } from "react";
import Styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
export default function Navbar() {
  const {getTotalCartItems}=useContext(ShopContext);
  const [menu, setMenu] = useState("shop");

  return (
    <div className={Styles.navbar}>
      <div className={Styles.logoConatiner}>
        <img className={Styles.logo} src={logo} alt="logo" />
        <h2 className={Styles.title}>SHOPPER</h2>
      </div>
      <ul className={Styles.categContainer}>
        <li onClick={() => setMenu("shop")}>
          <Link
          style={{textDecoration:"none", color:"#626262"}}
          to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link 
          style={{textDecoration:"none", color:"#626262"}}
          to="/men">Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          
          <Link
          style={{textDecoration:"none", color:"#626262"}}
          to="/women">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("shoes")}>
          <Link 
          style={{textDecoration:"none", color:"#626262"}}
          to="/shoes">Shoes</Link> {menu === "shoes" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("bags")}>
          <Link
          style={{textDecoration:"none", color:"#626262"}}
          to="/bags">Bags</Link>
          {menu === "bags" ? <hr /> : <></>}
        </li>
      </ul>
      <div className={Styles.cartConatiner}>
       <Link  to='/login' ><button className={Styles.loginBtn}>Login</button></Link>
       <Link
       to='/cart'><img className={Styles.cartIcon} src={cart_icon} alt="cart_icon" /></Link> 
        <div className={Styles.cartCount}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
