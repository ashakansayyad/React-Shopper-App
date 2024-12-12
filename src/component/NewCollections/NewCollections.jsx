import React, { useEffect } from "react";
import styles from "./NewCollections.module.css";
import Item from '../items/Item'
import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function NewCollections() {
  const {allProducts}=useContext(ShopContext);
  const [newCollection, setNewCollection] = useState(null);
  

useEffect(()=>{
  setNewCollection(allProducts);
 
},[allProducts]);
 

  return (
    <div className={styles.new_collections}>
      <h1>NEW COLLECTION</h1>
      <hr id={styles.hr}/>
      <div className={styles.collections}>
       
      {
          newCollection ? (
            newCollection.map((item, index) => (
              <Item key={index} name={item.title}  category={item.category}  id={item.id} image={item.images[0]} price={item.price} />
            ))
          ) : (
            <p>Loading...</p> // Show Loading message while newCollection is null
          )
        }
       
      </div>
    </div>
  );
}

export default NewCollections;
