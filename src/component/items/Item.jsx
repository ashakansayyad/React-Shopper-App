import React from "react";
import styles from "./Item.module.css";
import {Link} from 'react-router-dom';

function Item({ name, image, price ,id,category}) {
  return (

    <div className={styles.item}>
     <Link to={`/product/${category}/${id}`} > <img onClick={window.scrollTo(0,0)} src={image} alt="" /></Link>
      <p>{name}</p>

      <div className={styles.item_price}>${price}</div>
    </div>
  );
}

export default Item;
