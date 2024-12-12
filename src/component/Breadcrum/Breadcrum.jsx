import React from 'react'
import styles from './Breadcrum.module.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';
import { useNavigate } from 'react-router-dom';


function Breadcrum({product}) {
const navigate = useNavigate();

  if(!product){
    return null;
  }

  return (
    <div className={styles.breadcrum}>
     <p onClick={()=>navigate('/')}>HOME</p>  <img src={arrow_icon} alt="" />  <p onClick={()=>navigate('/')}>SHOP</p><img src={arrow_icon} alt="" />  {product.category} <img src={arrow_icon} alt="" /> {product.title}
    </div>
  )
}

export default Breadcrum
