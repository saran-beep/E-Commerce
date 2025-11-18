import React, { useState } from "react";
import "../styles/PromoScroll.css";

// import all images
import ps1 from "../assets/ps1.jpeg";
import ps2 from "../assets/ps2.jpeg";
import ps3 from "../assets/ps3.jpeg";
import ps4 from "../assets/ps4.jpeg";
import ps5 from "../assets/ps5.jpeg";
import ps6 from "../assets/ps6.jpeg";
import ps7 from "../assets/ps7.jpeg";

const images = [ps1, ps2, ps3, ps4, ps5, ps6, ps7, ps1, ps2, ps3, ps4, ps5, ps6, ps7];

export default function PromoScroll() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="promo-scroll-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={() => setIsPaused((p) => !p)}
    >
      <div
        className="promo-scroll-content"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`promo-${i}`} />
        ))}
        {images.map((src, i) => (
          <img key={`dup-${i}`} src={src} alt={`promo-dup-${i}`} />
        ))}
      </div>
    </section>
  );
}
