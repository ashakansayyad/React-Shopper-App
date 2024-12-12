import React from "react";
import styles from "./Hero.module.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_img from "../../assets/hero_image.png";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_Left}>
        <h2>NEW ARRIVALS ONLY</h2>

        <div>
          <div className={styles.hero_hand_icon}>
            <p>new</p>
            <img src={hand_icon} alt="hand_icon" />
          </div>
          <p>collections</p>
          <p>for Everyone</p>
        </div>
        <div className={styles.hero_latest_btn}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className={styles.hero_Right}>
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
}

export default Hero;
