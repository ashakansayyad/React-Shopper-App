import React, { useContext } from "react";
import styles from "./CartItems.module.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

function CartItems() {
  const { allProducts, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className={styles.cartitems}>
      <div className={styles.cartitems_format_main}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className={styles.cartitems_format}>
                <img
                  src={e.images[0]}
                  alt=""
                  className={styles.carticon_product_icon}
                />
                <p>{e.title}</p>
                <p>${e.price}</p>
                <button className={styles.cartitems_quantity}>
                  {cartItems[e.id]}
                </button>
                <p>${e.price * cartItems[e.id]}</p>
                <img
                  className={styles.cartitems_remove_icon}
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={styles.cartitems_down}>
        <div className={styles.cartitems_total}>
          <h1>Cart Totals</h1>
          <div>
            <div className={styles.cartitems_total_item}>
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.cartitems_total_item}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.cartitems_total_item}>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={styles.cartitems_promocode}>
          <p>If you have a promo code , enter here</p>
          <div className={styles.cartitems_promobox}>
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
