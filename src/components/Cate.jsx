import React, { useState } from "react";

import "./../styles/categories.css";
import "./../styles/leftCategories.css";
import "./../styles/rightCategories.css";

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
