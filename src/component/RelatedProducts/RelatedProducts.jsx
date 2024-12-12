import React, { useState,useEffect } from 'react'
import styles from './Relatedproducts.module.css'
import {useContext} from 'react';
import { ShopContext } from '../../context/ShopContext';
import Item from '../items/Item';


function RelatedProducts({category}) {
    const [relatedProducts,setRelatedPrducts] = useState([]);

    const {allProducts} = useContext(ShopContext);
 
 
    useEffect(()=>{
        if(allProducts && category){
            const  filteredproduct = allProducts.filter((item)=>(item.category === category));
            setRelatedPrducts(filteredproduct);
        }

    },[allProducts,category])

  return (
    <div className={styles.relatedproducts}>
        <h1>Related Products</h1>
        <hr />
        <div className={styles.relatedproducts_item}>
        {
            relatedProducts.length > 0 ? ( 
                relatedProducts.slice(0,4).map((item,index)=>{
                    return <Item key={index} category={item.category} name={item.title} id={item.id} image={item.images[0]} price={item.price} />
                  })
                          
            ) : (
                <p>No related products found.</p>
            )
         
                
        }

        </div>
      
    </div>
  )
}

export default RelatedProducts
