import React from "react";
import styles from "./CSS/LoginSignup.module.css";
export default function LoginSignup() {
  return (
    <div className={styles.loginsignup}>
      <div className={styles.loginsignup_container}>
        <h1>Sign Up</h1>
        <div className={styles.loginsign_fields}>
          <input type="text" placeholder="Your Name" id="" />
          <input type="email" placeholder="Email Address" id="" />
          <input type="password" placeholder="password " id="" />
        </div>
        <button>Continue</button>
        <p className={styles.loginsignup_login}>
          Already have an account? <span>Login</span>{" "}
        </p>
        <div className={styles.loginsignup_agree}>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}
