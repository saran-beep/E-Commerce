import React, { useState } from "react";
import "../styles/WearScroll.css";

import wear1 from "../assets/wear1.png";
import wear2 from "../assets/wear2.png";
import wear3 from "../assets/wear3.png";
import wear4 from "../assets/wear4.png";
import wear5 from "../assets/wear5.png";

const wearImages = [wear1, wear2, wear3, wear4, wear5];

export default function WearScroll() {
  const allImages = [...wearImages, ...wearImages]; // full loop

  return (
    <section className="wear-scroll-container">
      <h2 className="wear-title">Trending Fashion Picks</h2>

      <div className="wear-track">
        {allImages.map((src, i) => (
          <img key={i} src={src} alt="" />
        ))}
      </div>
    </section>
  );
}
