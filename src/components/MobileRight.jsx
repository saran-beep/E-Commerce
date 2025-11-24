import React from "react";
import "../styles/MobileRight.css";

/* ===== IMPORT IMAGES ===== */
import banner from "../assets/mobiles/banner.png";
import vivo from "../assets/mobiles/vivo.png";
import oppo from "../assets/mobiles/oppo.png";
import mi from "../assets/mobiles/mi.png";
import apple from "../assets/mobiles/apple.png";
import motorola from "../assets/mobiles/moto.png";
import oneplus from "../assets/mobiles/oneplus.png";

/* Reusable Card */
function BrandCard({ img, label }) {
  return (
    <div className="mob-item">
      <img src={img} className="mob-icon" alt={label} />
      <span>{label}</span>
    </div>
  );
}

export default function MobilesRight() {
  return (
    <div className="mob-wrapper">

      {/* Banner */}
      <img src={banner} className="mob-banner" alt="Smartphones Banner" />

      {/* Title */}
      {/* <h2 className="mob-title">All Smart Phones</h2> */}

      {/* Brands Section */}
      <h3 className="mob-sub">Shop by Brands</h3>

      <div className="mob-grid">
        <BrandCard img={vivo} label="Shop Now" />
        <BrandCard img={oppo} label="Shop Now" />
        <BrandCard img={mi} label="Shop Now" />
        <BrandCard img={apple} label="Shop Now" />
        <BrandCard img={motorola} label="Shop Now" />
        <BrandCard img={oneplus} label="Shop Now" />
      </div>
    </div>
  );
}
