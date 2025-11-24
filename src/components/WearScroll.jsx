import React from "react";
import "../styles/WearScroll.css";

import wear1 from "../assets/wear1.png";
import wear2 from "../assets/wear2.png";
import wear3 from "../assets/wear3.png";
import wear4 from "../assets/wear4.png";
import wear5 from "../assets/wear5.png";

const images = [wear1, wear2, wear3, wear4, wear5];

export default function WearScroll() {
  return (
    <section className="wear-scroll-container">
      <h2 className="wear-title">Trending Fashion Picks</h2>

      <div className="wear-track">
        {/* SET 1 */}
        {images.map((src, i) => (
          <img key={`a-${i}`} src={src} alt="" />
        ))}

        {/* SET 2 (duplicate) */}
        {images.map((src, i) => (
          <img key={`b-${i}`} src={src} alt="" />
        ))}
      </div>
    </section>
  );
}