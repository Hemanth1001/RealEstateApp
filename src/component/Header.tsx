import React from "react";
import styles from "./header.module.css";

const Header: React.FC<{}> = () => {
  return (
    <div className={styles["header-main-container"]}>
      <div className={styles["header-company-container"]}>
        <h1 className={styles["main-heading"]}>
          Sell or buy any product from ADZ Monster
        </h1>
        <a
          rel="google"
          href="https://www.google.com/"
          target="_self"
          className={styles["login-link-style"]}
        >
          Login or Register now
        </a>
      </div>
      <div className={styles["header-login-button-container"]}>
        <div>
          <button className={styles["login-button"]}>Login</button>
        </div>
        <h2>|</h2>
        <div>
          <button className={styles["login-button"]}>My Account</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
