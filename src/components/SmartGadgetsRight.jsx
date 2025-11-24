import React from "react";
import "../styles/SmartGadgetsRight.css";

/* ---- IMPORT IMAGES ---- */
import banner from "../assets/smartgadgets/banner.png";

/* Gaming */
import controllers from "../assets/smartgadgets/controllers.png";
import consoleImg from "../assets/smartgadgets/gaming-console.png";
import charging from "../assets/smartgadgets/charging-station.png";
import metafort from "../assets/smartgadgets/metaphor.png";

/* Headphones & speakers */
import bluetoothHeadset from "../assets/smartgadgets/bluetooth-headphones.png";
import neckband from "../assets/smartgadgets/neckband.png";
import partySpeaker from "../assets/smartgadgets/party-speaker.png";
import soundbar from "../assets/smartgadgets/soundbar.png";
import mobileSpeaker from "../assets/smartgadgets/mobile-speaker.png";

/* Mobile accessories */
import charger from "../assets/smartgadgets/mobile-charger.png";
import cable from "../assets/smartgadgets/mobile-cables.png";
import holder from "../assets/smartgadgets/mobile-holder.png";
import selfieStick from "../assets/smartgadgets/selfie-stick.png";
import ringLight from "../assets/smartgadgets/ring-light.png";
import powerbank from "../assets/smartgadgets/powerbank.png";

/* Smart home automation */
import smartSwitch from "../assets/smartgadgets/smart-switch.png";
import firetv from "../assets/smartgadgets/firetv-stick.png";
import smartCamera from "../assets/smartgadgets/smart-camera.png";
import doorbell from "../assets/smartgadgets/smart-doorbell.png";

export default function SmartGadgetsRight() {
  return (
    <div className="sg-wrapper">

      {/* Banner */}
      <img src={banner} className="sg-banner" alt="Smart Gadgets Banner" />

      {/* Title */}
      {/* <h2 className="sg-title">Smart Gadgets</h2> */}

      {/* ============ GAMING ============ */}
      <h3 className="sg-sub">Gaming</h3>
      <div className="sg-grid">
        <Item img={controllers} label="Controllers" />
        <Item img={consoleImg} label="Gaming Consoles" />
        <Item img={charging} label="Charging Station" />
        <Item img={metafort} label="Metafort" />
      </div>

      {/* ============ HEADPHONES & SPEAKERS ============ */}
      <h3 className="sg-sub">Headphones & Speakers</h3>
      <div className="sg-grid">
        <Item img={bluetoothHeadset} label="Bluetooth Headphone" />
        <Item img={neckband} label="Neckbands" />
        <Item img={partySpeaker} label="Party speakers" />
        <Item img={soundbar} label="Soundbar" />
        <Item img={mobileSpeaker} label="Mobile speakers" />
      </div>

      {/* ============ MOBILE ACCESSORIES ============ */}
      <h3 className="sg-sub">Mobile Accessories</h3>
      <div className="sg-grid">
        <Item img={charger} label="Mobile Charger" />
        <Item img={cable} label="Mobile Cables" />
        <Item img={holder} label="Mobile Holder" />
        <Item img={selfieStick} label="Selfie stick" />
        <Item img={ringLight} label="Ring Lights" />
        <Item img={powerbank} label="Powerbanks" />
      </div>

      {/* ============ SMART HOME AUTOMATION ============ */}
      <h3 className="sg-sub">Smart Home Automation</h3>
      <div className="sg-grid">
        <Item img={smartSwitch} label="Smart Switches" />
        <Item img={firetv} label="FireTV Stick" />
        <Item img={smartCamera} label="Smart Camera" />
        <Item img={doorbell} label="Video Door Bell" />
      </div>
    </div>
  );
}

/* ---- REUSABLE ITEM COMPONENT ---- */
function Item({ img, label }) {
  return (
    <div className="sg-item">
      <img src={img} className="sg-icon" alt={label} />
      <span>{label}</span>
    </div>
  );
}
