import React from "react";
import { useState, createContext, useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  console.log(cartItems);

  // function to initialize the cart after products are fetched
  const getDefaultCart = (products) => {
    let cart = {};
    for (let index = 0; index < products.length; index++) {
      cart[products[index].id] = 0; //initialize with product id
    }
    return cart;
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [womenBags, mensShirts, mensShoes, womenDresses] =
          await Promise.all([
            fetch("https://dummyjson.com/products/category/mens-shirts").then(
              (res) => res.json()
            ),
            fetch("https://dummyjson.com/products/category/mens-shoes").then(
              (res) => res.json()
            ),
            fetch(
              "https://dummyjson.com/products/category/womens-dresses"
            ).then((res) => res.json()),
            fetch("https://dummyjson.com/products/category/womens-bags").then(
              (res) => res.json()
            ),
          ]);

        const combinedProducts = [
          ...womenBags.products,
          ...mensShirts.products,
          ...mensShoes.products,
          ...womenDresses.products,
        ];

        setAllProducts(combinedProducts);
        setCartItems(getDefaultCart(combinedProducts)); //initialize cart items after fetching products
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = ()=>{
    let totalItem = 0;
    for (const item in cartItems){
      if(cartItems[item]>0){
        totalItem += cartItems[item]
      }
    }
    return totalItem;
  }

  return (
    <ShopContext.Provider
      value={{
        allProducts,
        setAllProducts,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
