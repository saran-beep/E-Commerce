import React from "react";
import "../styles/ToysRight.css";

/* Banner */
import banner from "../assets/toys/banner.png";

/* Toys */

import infants from "../assets/toys/infants.png";
import toddlers from "../assets/toys/toddlers.png";
import indoor from "../assets/toys/indoor.png";
import outdoor from "../assets/toys/outdoor.png";
import educational from "../assets/toys/educational.png";
import tricycles from "../assets/toys/tricycles.png";

/* Baby Care */
import baby0 from "../assets/toys/0-12.png";
import baby2 from "../assets/toys/upto2.png";
import baby3 from "../assets/toys/2plus.png";
import diaper from "../assets/toys/diaper.png";
import lotion from "../assets/toys/lotion.png";
import travel from "../assets/toys/travel.png";
import bedding from "../assets/toys/bedding.png";

/* Stationery */
import supplies from "../assets/toys/school-supplies.png";
import pens from "../assets/toys/pens.png";
import diaries from "../assets/toys/diaries.png";
import arts from "../assets/toys/art.png";
import calc from "../assets/toys/calculator.png";
import organizer from "../assets/toys/drawer.png";

/* Fiction */
import crime from "../assets/toys/crime.png";
import selfhelp from "../assets/toys/selfhelp.png";
import fiction from "../assets/toys/fiction.png";
import bio from "../assets/toys/biography.png";

/* Children Books */
import adventure from "../assets/toys/adventure.png";
import fantasy from "../assets/toys/fantasy.png";
import general from "../assets/toys/general.png";

export default function ToysRight() {
  return (
    <div className="toys-right-container">
      
      {/* Banner */}
      <div className="toys-banner">
        <img src={banner} alt="banner" className="toys-banner-img" />
      </div>

      {/* Toys */}
      <div className="section-block">
        <h3 className="section-title">Toys</h3>

        <div className="circle-grid">
          <div className="circle-item">
            <img src={infants} alt="" /><p>Infants</p>
          </div>
          <div className="circle-item">
            <img src={toddlers} alt="" /><p>Toddlers</p>
          </div>
          <div className="circle-item">
            <img src={indoor} alt="" /><p>Indoor Toys</p>
          </div>
          <div className="circle-item">
            <img src={outdoor} alt="" /><p>Outdoor toys</p>
          </div>
          <div className="circle-item">
            <img src={educational} alt="" /><p>Educational Toys</p>
          </div>
          <div className="circle-item">
            <img src={tricycles} alt="" /><p>Tricycles</p>
          </div>
        </div>
      </div>

      {/* Baby Care */}
      <div className="section-block">
        <h3 className="section-title">Baby Care</h3>

        <div className="circle-grid">
          <div className="circle-item">
            <img src={baby0} alt="" /><p>0-12 Months</p>
          </div>
          <div className="circle-item">
            <img src={baby2} alt="" /><p>Up to 2 Years</p>
          </div>
          <div className="circle-item">
            <img src={baby3} alt="" /><p>2 Years & Above</p>
          </div>
          <div className="circle-item">
            <img src={diaper} alt="" /><p>Diaper</p>
          </div>
          <div className="circle-item">
            <img src={lotion} alt="" /><p>Lotion & Cream</p>
          </div>
          <div className="circle-item">
            <img src={travel} alt="" /><p>Baby Travel</p>
          </div>
          <div className="circle-item">
            <img src={bedding} alt="" /><p>Bedding</p>
          </div>
        </div>
      </div>

      {/* Stationery */}
      <div className="section-block">
        <h3 className="section-title">Stationery & School Supplies</h3>

        <div className="circle-grid">
          <div className="circle-item">
            <img src={supplies} alt="" /><p>School Supplies</p>
          </div>
          <div className="circle-item">
            <img src={pens} alt="" /><p>Pens</p>
          </div>
          <div className="circle-item">
            <img src={diaries} alt="" /><p>Diaries</p>
          </div>
          <div className="circle-item">
            <img src={arts} alt="" /><p>Art Supplies</p>
          </div>
          <div className="circle-item">
            <img src={calc} alt="" /><p>Calculator</p>
          </div>
          <div className="circle-item">
            <img src={organizer} alt="" /><p>Desk Organizer</p>
          </div>
        </div>
      </div>

      {/* Fiction */}
      <div className="section-block">
        <h3 className="section-title">Fiction & Non Fiction</h3>

        <div className="circle-grid">
          <div className="circle-item">
            <img src={crime} alt="" /><p>Crime & Thriller</p>
          </div>
          <div className="circle-item">
            <img src={selfhelp} alt="" /><p>Self Help</p>
          </div>
          <div className="circle-item">
            <img src={fiction} alt="" /><p>Fiction</p>
          </div>
          <div className="circle-item">
            <img src={bio} alt="" /><p>Auto Biography</p>
          </div>
        </div>
      </div>

      {/* Children Books */}
      <div className="section-block">
        <h3 className="section-title">Children Books</h3>

        <div className="circle-grid">
          <div className="circle-item">
            <img src={adventure} alt="" /><p>Adventure</p>
          </div>
          <div className="circle-item">
            <img src={fantasy} alt="" /><p>Fantasy</p>
          </div>
          <div className="circle-item">
            <img src={general} alt="" /><p>General Fiction</p>
          </div>
        </div>
      </div>

    </div>
  );
}
