import React from "react";
import "../styles/ElectronicsRight.css";

/* ====== IMPORT IMAGES ====== */
import banner from "../assets/electronics/banner.png";

/* Computer Peripheral */
import monitors from "../assets/electronics/monitors.png";
import printers from "../assets/electronics/printers.png";
import projectors from "../assets/electronics/projectors.png";
import inks from "../assets/electronics/printer-inks.png";
import gamingMonitor from "../assets/electronics/gaming-monitor.png";
import laptop from "../assets/electronics/laptop.png";

/* Computer Accessories */
import mouse from "../assets/electronics/mouse.png";
import keyboard from "../assets/electronics/keyboard.png";
import routers from "../assets/electronics/routers.png";
import ups from "../assets/electronics/ups.png";
import processor from "../assets/electronics/processor.png";

/* Storage */
import ssd from "../assets/electronics/ssd.png";
import pendrive from "../assets/electronics/pendrive.png";
import memoryCard from "../assets/electronics/memory-card.png";


/* ---- REUSABLE ITEM ---- */
function Item({ img, label }) {
  return (
    <div className="el-item">
      <img src={img} className="el-icon" alt={label} />
      <span>{label}</span>
    </div>
  );
}

export default function ElectronicsRight() {
  return (
    <div className="el-wrapper">

      {/* Banner */}
      <img src={banner} alt="" className="el-banner" />

      {/* Title */}
      {/* <h2 className="el-title">Electronics</h2> */}

      {/* ===== Computer Peripheral Section ===== */}
      <h3 className="el-sub">Computer Peripheral</h3>
      <div className="el-grid">
        <Item img={monitors} label="Monitors" />
        <Item img={printers} label="Printers" />
        <Item img={projectors} label="Projectors" />
        <Item img={inks} label="Printer Inks & Toners" />
        <Item img={gamingMonitor} label="Gaming Monitor" />
        <Item img={laptop} label="Laptops" />
      </div>

      {/* ===== Computer Accessories ===== */}
      <h3 className="el-sub">Computer Accessories</h3>
      <div className="el-grid">
        <Item img={mouse} label="Mouse" />
        <Item img={keyboard} label="Keyboard" />
        <Item img={routers} label="Routers" />
        <Item img={ups} label="UPS" />
        <Item img={processor} label="Processor" />
      </div>

      {/* ===== Storage ===== */}
      <h3 className="el-sub">Storage</h3>
      <div className="el-grid">
        <Item img={ssd} label="External SSD" />
        <Item img={pendrive} label="Pendrives" />
        <Item img={memoryCard} label="Memory Cards" />
      </div>
    </div>
  );
}
