import React, { useState,useContext } from "react";
import styles from "./ProductDisplay.module.css";
import start_icon from "../../assets/star_icon.png";
import start_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

function ProductDisplay({ product }) {
  const {addToCart} = useContext(ShopContext);
  const [selectedImage,setSelectedImage] = useState(null);
  const [isModalOpen,setIsModalOpen] =useState(false);
  const [selectedSize,setSelectedSize]=useState('');
  const handleImgClick = (img)=>{
    setSelectedImage(img);
    setIsModalOpen(true);
  }

  const handleCloseModal = ()=>{
    setIsModalOpen(false);
    setSelectedImage(null);
  }
  if(!product || !product.images){
    return null;
  }
  // console.log("pd", product);

  
  return (
    <div className={styles.productdisplay}>
      <div className={styles.productdisplay_left}>
        <div className={styles.productdisplay_img_list}>

          {
            product.images.map((img,index)=>(
              <img onClick={()=>handleImgClick(img)} key={index} src={img} alt="" />
            ))
          }
         
        </div>
        <div className={styles.productdisplay_img}>
          <img
            className={styles.productdisplay_main_img}
            src={product.images[0]}
            alt=""
          />
        </div>
      </div>
      <div className={styles.productdisplay_right}>
        <h1>{product.title}</h1>
        <div className={styles.productdisplay_right_stars}>
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>{product.rating}</p>
        </div>
        <div className={styles.productdisplay_right_prices}>
          <div className={styles.productdisplay_right_price}>
            ${product.price}
          </div>

          <div className={styles.productdisplay_right_discount}>
            Discount : {product.discountPercentage}%
          </div>
        </div>
        <div className={styles.productdisplay_right_description}>
          {product.description}
        </div>
        <div className={styles.productdisplay_right_size}>
          <h1>Select Size</h1>
          <div className={styles.productdisplay_right_sizes}>
            {
              ["S","M","L","XL","XXL"].map((size)=>(
                <div
                 key={size}
                  onClick={()=>setSelectedSize(size)}
                  style={{border:selectedSize === size ? "2px solid red" : ""}}
                >{size}</div>
              ))
            }
          
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className={styles.productdisplay_right_category}><span>Categoty:</span> {product.category}</p>
        <p className={styles.productdisplay_right_category}><span>Tags:</span> {product.tags.toString()}</p>
      </div>
      {isModalOpen && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modal_content}>
            <img src={selectedImage} alt="Full View" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDisplay;
