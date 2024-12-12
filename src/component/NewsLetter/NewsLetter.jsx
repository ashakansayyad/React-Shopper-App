import React from 'react'
import styles from './NewsLetter.module.css'
function NewsLetter() {
  return (
    <div className={styles.newsletter}>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
