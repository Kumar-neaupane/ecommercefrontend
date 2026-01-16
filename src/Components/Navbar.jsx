import React from "react";
import "../Style/Navbar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Person3Icon from "@mui/icons-material/Person3";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import Login from "./Login";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open,setOpen]=useState(false);
  const [menuopen, setMenuOpen] = useState(false);
  const [pageopen,setPageOpen]=useState(false);
  const [search, showSearch] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <>
      {/* Search Bar */}
      {search && (
        <div className="searchbar">
          <div className="search-container">
            <input className="searchinputtop" placeholder="Search..." autoFocus />
            <SearchIcon className="search-icon-input" />
            <CloseSharpIcon className="search-close-btn" onClick={() => showSearch(false)} />
          </div>
        </div>
      )}
      {/* Top Bar */}
      <div className="top-bar">
        <div className="social-icons">
          <FacebookIcon className="icons" />
          <YouTubeIcon className="icons" />
          <InstagramIcon className="icons" />
        </div>
        <p className="special-offer">
          <span className="specialoffer">Special Offer</span>: Free Shipping on all the orders above $100
        </p>
        <ul className="top-menu">
          <li>Contact</li>
          <li>Cart</li>
          <li  onClick={()=>{setLogin(true)}}>Login</li>
        </ul>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="logo">
          <img src="../images/main-logo.png" alt="Logo" />
        </div>
        <ul className={`nav-menu ${menuopen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <img src="../images/main-logo.png" alt="Logo" />
            </div>
            <div className="menu-close" onClick={() => setMenuOpen(false)}>
              <CloseSharpIcon />
            </div>
          </div>
          <li onClick={() => setOpen(!open)} className="dropdown">
            <b>Home</b>
            <span>▼</span>
            {open && (
        <ul className="dropdown-menu">
          <li className="text-red-500">About Us</li>
          <li>Shop</li>
          <li>Blog</li>
         
        </ul>
      )}
          </li>
          
          <li>
          <Link to="/men">
            <b>Men</b>
            </Link>
          </li>
          <li>
          <Link to="/women">
            <b>Women</b>
            </Link>
          </li>
          <li onClick={() => setPageOpen(!pageopen)} className="dropdown">
            <b>Page</b> <span>▼</span>
            {pageopen && (
        <ul className="dropdown-menu">
          <li>About Us</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Blog</li>
          <li>Blog</li>
          <li>Blog</li>
         
        </ul>
      )}
          </li>
          <li>
            <b>Shop</b>
          </li>
          <li>
            <b>Sale</b>
          </li>
        
       
        </ul>
         <div className="nav-icons">
        
          <Person3Icon onClick={() => setLogin(true)} className="nav-icons"  />
          <ShoppingCartIcon className="nav-icons" />
          <SearchIcon onClick={() => showSearch(true)} className="nav-icons showsearch" /> 
        </div>
        <div className="hamburger" onClick={()=>setMenuOpen(!menuopen)} aria-label="Toggle navigation" aria-expanded={menuopen}>
          <MenuSharpIcon />
        </div>
      </div>
      {/*Login close logic*/}
      {login && <Login close={() => setLogin(false)} />}
    </>
  );
};

export default Navbar;
