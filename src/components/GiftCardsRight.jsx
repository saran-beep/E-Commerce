import React from "react";
import "../styles/GiftCardsRight.css";

/* ===== IMAGES ===== */
import banner from "../assets/giftcards/banner.png";
import giftcard from "../assets/giftcards/giftcard.png";
import corporate from "../assets/giftcards/corporate.png";
import redeem from "../assets/giftcards/redeem.png";
import voucher from "../assets/giftcards/voucher.png";

/* Reusable item component */
function GCItem({ img, label }) {
  return (
    <div className="gc-item">
      <img src={img} className="gc-icon" alt={label} />
      <span>{label}</span>
    </div>
  );
}

export default function GiftCardsRight() {
  return (
    <div className="gc-wrapper">

      {/* Banner */}
      <img src={banner} className="gc-banner" alt="Gift Cards Banner" />

      {/* Title */}
      {/* <h2 className="gc-title">Gift Cards</h2> */}

      {/* Gifts section */}
      {/* <h3 className="gc-sub">Gifts</h3> */}

      <div className="gc-grid">
        <GCItem img={giftcard} label="Gift Cards" />
        <GCItem img={corporate} label="Corporate Gift Cards" />
        <GCItem img={redeem} label="Redeem Gift Card" />
        <GCItem img={voucher} label="Brand Vouchers" />
      </div>

    </div>
  );
}
