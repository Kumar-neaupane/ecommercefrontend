import React from "react";
import "../Style/Navbar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Person3Icon from "@mui/icons-material/Person3";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="social-icons">
          <FacebookIcon className="icons" />
          <YouTubeIcon className="icons" />
          <InstagramIcon className="icons" />
        </div>
        <p className="special-offer">
          <b>Special Offer:</b> Free Shipping on all the orders above $100
        </p>
        <ul className="top-menu">
          <li>Contact</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="logo">
          <img src="../images/main-logo.png" alt="Logo" />
        </div>
        <ul className="nav-menu">
          <li>
            <b>Home</b>
            <span>▼</span>
          </li>
          <li>
            <b>Men</b>
          </li>
          <li>
            <b>Women</b>
          </li>
          <li>
            <b>Page</b> <span>▼</span>
          </li>
          <li>
            <b>Shop</b>
          </li>
          <li>
            <b>Sale</b>
          </li>
        </ul>
        <div className="nav-icons">
          <Person3Icon className="nav-icons" />
          <ShoppingCartIcon className="nav-icons" />
          <SearchIcon className="nav-icons" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
