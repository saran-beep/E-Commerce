import React from "react";
import Marquee from "react-fast-marquee";
import "../styles/PSScroller.css";
import ps1 from "../assets/ps1.jpeg";
import ps2 from "../assets/ps2.jpeg";
import ps3 from "../assets/ps3.jpeg";
import ps4 from "../assets/ps4.jpeg";
import ps5 from "../assets/ps5.jpeg";
import ps6 from "../assets/ps6.jpeg";
import ps7 from "../assets/ps7.jpeg";

const images = [ps1, ps2, ps3, ps4, ps5, ps6, ps7];


export default function PSScroller() {
  return (
    <div className="ps-wrapper">
      <Marquee
        speed={25}
        gradient={false}
        pauseOnHover={true}
        loop={0}
      >
        {images.concat(images).map((img, i) => (
          <div key={i} className="ps-card">
          <img src={img} alt="" />

          </div>
        ))}
      </Marquee>
    </div>
  );
}
