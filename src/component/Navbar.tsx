import React from "react";
//import {Container,Nav, Navbar as NavbarBS } from 'react-bootstrap';
//import { NavLink  } from 'react-router-dom';
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

import { FcExpand } from "react-icons/fc";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>
          Category
          <i className="fa fa-caret-down"></i>
        </button>
        <div className={styles["dropdown-content"]}>
          <Link to="/category">HouseForRent</Link>
          <Link to="/category">HouseForSale</Link>
        </div>
      </div>
      <Link to="/sell">Sell</Link>
      <Link to="/buy">Buy</Link>
      <Link to="/return">Return</Link>
      <Link to="/language">Language</Link>
      <Link to="/help">Help</Link>
      <Link to="/addProduct">Add Product</Link>
      <Link to="/customerCare">Customer Care</Link>
      <Link to="/setMyLocation">Set My Location</Link>
    </div>
  );
}

export default Navbar;
