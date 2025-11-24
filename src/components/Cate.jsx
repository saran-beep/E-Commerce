import React, { useState } from "react";

import "../styles/categories.css";
import "../styles/leftCategories.css";
import "../styles/rightCategories.css";
import "../styles/bpCategories.css";
import "../styles/SmartGadgetsRight.css";
import "../styles/ElectronicsRight.css"
import "../styles/MobileRight.css"
import "../styles/GiftCardsRight.css"

import Subheader from "./Subheader";
import CategoriesLeft from "./CategoriesLeft";
import CategoriesRight from "./CategoriesRight";

export default function Cate() {
  const [activeMenu, setActiveMenu] = useState("For You");

  return (
    <div className="body-frame">
      <Subheader />

      <div className="category-layout">
        <CategoriesLeft active={activeMenu} onChange={setActiveMenu} />
        <CategoriesRight active={activeMenu} />
      </div>
    </div>
  );
}
