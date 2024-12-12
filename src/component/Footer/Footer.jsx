import React from "react";
import styles from "./Footer.module.css";
import footer_logo from "../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";
import pintesteer_icon from "../../assets/pintester_icon.png";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
    <ul className={styles.footer_links}>
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>Contact</li>
    </ul>

    <div className={styles.footer_social_icon}>
        <div className={styles.footer_icons_container}>
            <img src={instagram_icon} alt="img" />
        </div>
        <div className={styles.footer_icons_container}>
            <img src={pintesteer_icon} alt="img" />
        </div>
        <div className={styles.footer_icons_container}>
            <img src={whatsapp_icon} alt="img" />
        </div>
    </div>
        <div className={styles.footer_copyright}>
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>



    </div>
  );
}

export default Footer;
