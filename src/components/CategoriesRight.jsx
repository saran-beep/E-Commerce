import React from "react";

import Fashion from "../components/FashionPage";
import Homestore from "../components/Homestore";
import BpCategories from "../components/bpCategories";
import SmartGadgetsRight from "../components/SmartGadgetsRight";
import ElectronicsRight from "../components/ElectronicsRight";
import MobileRight from "../components/MobileRight";
import GiftCardsRight from "../components/GiftCardsRight";
import ToysRight from "../components/ToysRight";

/* Popular Images */
import winter from "../assets/popular/winter.png";
import wedding from "../assets/popular/wedding.png";

/* Recently Viewed Images */
import r1 from "../assets/recent/recent1.png";
import r2 from "../assets/recent/recent2.png";
import r3 from "../assets/recent/recent3.png";
import r4 from "../assets/recent/recent4.png";
import r5 from "../assets/recent/recent5.png";
import r6 from "../assets/recent/recent6.jpeg";
import r7 from "../assets/recent/recent7.jpeg";

/* Tried Images */
import t1 from "../assets/tried/liveshop.png";
import t2 from "../assets/tried/genz.png";
import t3 from "../assets/tried/seller.png";
import t4 from "../assets/tried/offers.png";

const recentImages = [r1, r2, r3, r4, r5, r6, r7];

const triedImages = [
  { img: t1, label: "Liveshop+" },
  { img: t2, label: "GenZ trends" },
  { img: t3, label: "Become seller" },
  { img: t4, label: "Offers" },
];

export default function CategoriesRight({ active }) {
  // MAP LEFT MENU KEYS TO RIGHT SIDE COMPONENTS
  const pageMap = {
    "Home": <Homestore />,
    "Fashion": <Fashion />,
    "Smart Gadgets": <SmartGadgetsRight />,
    "Beauty & Personal care": <BpCategories />,
    "Toys & Books": <ToysRight />,
    "Electronics" : <ElectronicsRight />,
    "Mobiles" : <MobileRight />,
    "Gift cards" : <GiftCardsRight />
  };

  // If key exists, load the right component
  if (pageMap[active]) return pageMap[active];

  // Default content (For You, Toys, Electronics, etc.)
  return (
    <div className="right-container">

      {/* Popular Store */}
      <div className="popular-section">
        <h3>Popular Store</h3>

        <div className="popular-grid">
          <div className="popular-card">
            <img src={winter} className="popular-img" alt="winter" />
            <p>Shop the winter collection</p>
          </div>

          <div className="popular-card">
            <img src={wedding} className="popular-img" alt="wedding" />
            <p>Wedding collection</p>
          </div>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="recent-section">
        <h3>Recently viewed stores</h3>

        <div className="recent-scroll">
          {recentImages.map((src, index) => (
            <div key={index} className="recent-card">
              <img src={src} className="recent-img" alt={`recent-${index}`} />
            </div>
          ))}

          <div className="see-all-card">
            <div className="see-all-circle">›</div>
            <p>See All</p>
          </div>
        </div>
      </div>

      {/* Have You Tried */}
      <div className="tried-section">
        <h3>Have you tried?</h3>

        <div className="tried-grid">
          {triedImages.map((item, i) => (
            <div className="tried-card" key={i}>
              <img src={item.img} className="tried-img" alt={item.label} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
