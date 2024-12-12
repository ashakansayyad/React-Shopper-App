import React, { useState } from "react";
import styles from "./DescriptionBox.module.css";

function DescriptionBox({product}) {
    // const [dis,setDis]=useState(true);
    // const [rev,setRev]=useState('');
    const [disSelected,setDisSelected]=useState('dis');

    if(!product){
        return null;
    }
  return (
    <div className={styles.descriptionbox}>
      <div className={styles.descriptionbox_navigator}>
        <div onClick={()=>setDisSelected("dis")}
        style={ disSelected === "dis" ? {background:"#ff4141" , color:"white"}  : {} }
        className={styles.descriptionbox_nav_box}>Description</div>
        <div
         style={ disSelected === "rev" ? {background:"#ff4141" , color:"white"}  : {}}
        onClick={()=>setDisSelected("rev")} className={styles.descriptionbox_nav_box_fade}>Reviews ({product.reviews.length})</div>
      </div>
    <div className={styles.descriptionbox_description}>
        {
            disSelected === "dis" ? (
                <>
                <p>
              {product.description}
            </p>
            <p>
                <p><span> Stock:</span> {product.stock}</p>
                <p><span> Shipping:</span> {product.shippingInformation}</p>
                <p><span> Return:</span> {product.returnPolicy}</p>
                <p><span>Warrenty: </span>{product.warrantyInformation}</p>
            </p>
                </>
            ) : (
              <>
              {
                product.reviews.map((review)=>(
                  <p>
                   <p><span>Name :</span> {review.reviewerName}</p>
                   <p><span>Comment :</span> {review.comment}</p>
                   <p><span>Rating (0-5) :</span> {review.rating}</p>
                   <p><span>Date :</span> {new Date(review.date).toLocaleDateString()}</p>
                   <p><span>Email :</span> {review.reviewerEmail}</p>

                  </p>
                 

                ))
              }
              {/* <p><span> :</span> {product.reviews.reviewerName}</p> */}
              </>
            )
        }
            
    </div>



    </div>
  );
}

export default DescriptionBox;
