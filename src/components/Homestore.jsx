import React from "react";
import "../styles/homestore.css";

// image imports (replace with your real images)
import banner from "../assets/home/banner.png";

import gas from "../assets/home/gas.png";
import cookware from "../assets/home/cookware.png";
import dining from "../assets/home/dining.png";
import cleaning from "../assets/home/cleaning.png";
import tools from "../assets/home/tools.png";

import power from "../assets/home/power.png";
import handtools from "../assets/home/handtools.png";
import garden from "../assets/home/garden.png";
import solar from "../assets/home/solar.png";

export default function HomePage() {
  return (
    <div className="home-wrapper">

      <img src={banner} className="home-banner" />

      <h2 className="home-section-title">Kitchen Items</h2>

      <div className="home-circle-grid">
        <div className="home-circle-card">
          <img src={gas} />
          <p>Gas Stoves & Accessories</p>
        </div>

        <div className="home-circle-card">
          <img src={cookware} />
          <p>Cookware Essential</p>
        </div>

        <div className="home-circle-card">
          <img src={dining} />
          <p>Dining & Serveware</p>
        </div>

        <div className="home-circle-card">
          <img src={cleaning} />
          <p>Cleaning Essential</p>
        </div>

        <div className="home-circle-card">
          <img src={tools} />
          <p>Kitchen Tools</p>
        </div>
      </div>


      <h2 className="home-section-title">Home Improvement Tools</h2>

      <div className="home-circle-grid">
        <div className="home-circle-card">
          <img src={power} />
          <p>Power Tools</p>
        </div>

        <div className="home-circle-card">
          <img src={handtools} />
          <p>Hand Tools</p>
        </div>

        <div className="home-circle-card">
          <img src={garden} />
          <p>Gardening Essential</p>
        </div>

        <div className="home-circle-card">
          <img src={solar} />
          <p>Solar Range</p>
        </div>
      </div>

    </div>
  );
}
