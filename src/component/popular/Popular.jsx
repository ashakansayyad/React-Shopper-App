import React from 'react'
import styles from './Popular.module.css'
import {useState,useEffect} from 'react';
import Item from '../items/Item';

function Popular() {
  const [womenp,setWomenp] = useState([]);

    useEffect(()=>{
    async function womenProduct(){

        try{
            const res = await fetch("https://dummyjson.com/products/category/womens-dresses");
            const data = await  res.json();
            // console.log(data.products)
            setWomenp(data.products);
        }catch(error){
            console.log(error);
        }

    } 
    womenProduct();

    },[])




  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className={styles.popular_item}>
        {
            womenp.slice(0,4).map((item,index)=>{
                return <Item key={index} id={item.id} category={item.category}  name={item.title} price={item.price} image={item.images[0]}/>
            })
        }
      </div>
    </div>
  )
}

export default Popular
