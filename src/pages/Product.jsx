import React, { useEffect, useState } from 'react'

import {ShopContext} from '../context/ShopContext';
import {useContext} from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../component/Breadcrum/Breadcrum';
import ProductDisplay from '../component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../component/DescriptionBox/DescriptionBox';
import RelatedProducts from '../component/RelatedProducts/RelatedProducts';

export default function Product() {
    const {allProducts} = useContext(ShopContext);
   
    const {category,productId} = useParams();
    console.log("cat: ",category, " id: ",productId)
     // Find the product by productId and ensure it's parsed correctly.
    const product = allProducts?.find((item)=>(item.id===parseInt(productId)  && item.category === category));
    console.log("product",product)
    if(!product){
      return <div>Loading product details...</div>
    }

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox product={product}   />
      <RelatedProducts category={category} />
    </div>
  )
}
