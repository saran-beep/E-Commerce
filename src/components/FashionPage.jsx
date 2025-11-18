import React from "react";
import "../styles/fashion.css";

import banner from "../assets/fashion/banner.jpg";

import formal from "../assets/fashion/formal.png";
import budget from "../assets/fashion/budget.png";
import inner from "../assets/fashion/inner.png";
import blazers from "../assets/fashion/blazers.png";
import ethnic from "../assets/fashion/ethnic.png";

import sports from "../assets/fashion/sports.png";
import sneakers from "../assets/fashion/sneakers.png";
import sandals from "../assets/fashion/sandals.png";
import casual from "../assets/fashion/casual.png";

export default function FashionPage() {
  return (
    <div className="fashion-wrapper">

      <img src={banner} className="fashion-banner" />

      <h2 className="fashion-title">Men's Clothing</h2>

      <div className="fashion-grid">
        <div className="fashion-card">
          <div className="fashion-img-box"><img src={formal} /></div>
          <p>Formal Wear</p>
        </div>

        <div className="fashion-card">
          <div className="fashion-img-box"><img src={budget} /></div>
          <p>Budget Buys</p>
        </div>

        <div className="fashion-card">
          <div className="fashion-img-box"><img src={inner} /></div>
          <p>Inner wear</p>
        </div>

        <div className="fashion-card">
          <div className="fashion-img-box"><img src={blazers} /></div>
          <p>Blazers & Suits</p>
        </div>

        <div className="fashion-card">
          <div className="fashion-img-box"><img src={ethnic} /></div>
          <p>Ethnic Wear</p>
        </div>
      </div>

      <h2 className="fashion-title">Men's Footwear & Accessories</h2>

      <div className="fashion-grid">
        <div className="fashion-card">
          <div className="fashion-img-box"><img src={sports} /></div>
          <p>Sports Shoes</p>
        </div>

        <div className="fashion-card">
          <div className="fashion-img-box"><img src={sneakers} /></div>
          <p>Sneakers</p>
        </div>

        <div className="fashion-card">
          <div className="fashion-img-box"><img src={sandals} /></div>
          <p>Sandals</p>
        </div>

        <div className="fashion-card">
          <div className="fashion-img-box"><img src={casual} /></div>
          <p>Casual Shoes</p>
        </div>
      </div>

    </div>
  );
}
