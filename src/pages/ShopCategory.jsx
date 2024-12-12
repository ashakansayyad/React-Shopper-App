import React, { useState } from 'react'
import {useContext} from 'react';
import dropdown_icon from '../assets/dropdown_icon.png';
import styles from './CSS/ShopCategory.module.css';
import { ShopContext } from '../context/ShopContext';
import Item from '../component/items/Item';

export default function ShopCategory(props) {
  const [productLength,setProductLength] = useState(null);
  const {allProducts} = useContext(ShopContext);
 console.log("allp",allProducts);

  return (
    <div className={styles.shop_category}>
      <img  className={styles.shopcategory_banner} src={props.banner}  alt={props.banner ? 'banner' : ''} />
      <div className={styles.shopcategory_indexsort}>
        <p>
          <span>Showing 1-5</span> out of 36 products
        </p>
        <div className={styles.shopcategory_sort}>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={styles.shopcategory_products}>
        {
          allProducts.map((item,index)=>{
            
            if(props.category === item.category){
          
              return <Item key={index} name={item.title} category={item.category} id={item.id} image={item.images[0]} price={item.price} />
            }
            else{
              return null;
            }
          })
        }
      </div>
      <div className={styles.shopcategory_loadmore}>
        Explore More
      </div>
    </div>
  )
}
