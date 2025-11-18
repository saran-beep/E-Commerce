import "../styles/Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Cate from "./components/Cate";


import logo from "../assets/stacklylogo.jpeg";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleProfileClick = () => {
    navigate("/address");
  };
  const handleloginpageClick = () => {
    navigate("/signup");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="top-bar">
        {/* Left Section */}
        <div className="left-section">
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className="logo" onClick={handleLogoClick}>
          <img className="logoimg" src={logo} alt="logo" />
          </div>
        </div>

        {/* Location */}
        <div className="location">
          <FaMapMarkerAlt />
          <span>Update Location</span>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button>
            <FaSearch />
          </button>
        </div>

        {/* Navigation Icons */}
        <div className="nav-icons">
          <div className="cart">
            <FaShoppingCart /> <span>Cart</span>
          </div>

          <div className="profile" onClick={handleProfileClick}>
            <FaUser />
            <span>
              Profile
              <br />
              Account
            </span>
          </div>
<div    className="loginpage" onClick={handleloginpageClick}>


          <button className="login-btn">Login</button>

          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className={`bottom-nav ${menuOpen ? "open" : ""}`}>
        {/* <Cate/> */}
      <Link to="/Cate">All Products</Link>

        <a href="#">Today's Deal</a>
        <a href="#">Mobiles</a>
        <a href="#">Electronics</a>
        <a href="#">Home & Kitchen</a>
        <a href="#">Fashion</a>
        <a href="#">Books</a>
      </nav>
    </header>
  );
}
