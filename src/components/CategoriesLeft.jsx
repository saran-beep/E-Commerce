import React from "react";

/* LEFT Category Images */
import foryou from "../assets/left/shop.png";
import homeImg from "../assets/left/home.png";
import fashionImg from "../assets/left/fashion.png";
import smart from "../assets/left/tech.png";
import beauty from "../assets/left/bp.png";
import toys from "../assets/left/toy.png";
import electronics from "../assets/left/smart.png";
import mobiles from "../assets/left/mobile.png";
import giftcards from "../assets/left/gift.png";

const items = [
  { key: "For You", img: foryou },
  { key: "Home", img: homeImg },
  { key: "Fashion", img: fashionImg },
  { key: "Smart Gadgets", img: smart },
  { key: "Beauty & Personal care", img: beauty },
  { key: "Toys & Books", img: toys },
  { key: "Electronics", img: electronics },
  { key: "Mobiles", img: mobiles },
  { key: "Gift cards", img: giftcards },
];

export default function CategoriesLeft({ active, onChange }) {
  return (
    <div className="left-container">
      <div className="left-scroll">
        {items.map((it) => (
          <div
            key={it.key}
            className={`left-card ${active === it.key ? "active" : ""}`}
            onClick={() => onChange(it.key)}
          >
            <div className="left-img-wrap">
              <img src={it.img} className="left-img" alt={it.key} />
            </div>

            <div className="left-title">{it.key}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
