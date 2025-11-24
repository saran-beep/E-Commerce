import React from "react";
import "../styles/bpCategories.css";

/* --------------------
   IMPORT ALL IMAGES
-----------------------*/
import banner from "../assets/bnp/banner.png";

/* Face Care */
import faceWash from "../assets/bnp/face-wash.png";
import sunscreen from "../assets/bnp/sunscreen.png";
import faceCream from "../assets/bnp/face-cream.png";
import serums from "../assets/bnp/serums.png";
import lotions from "../assets/bnp/lotions.png";
import scrub from "../assets/bnp/scrub.png";

/* Hair Care */
import shampoo from "../assets/bnp/shampoo.png";
import hairOil from "../assets/bnp/hair-oil.png";
import hairSerum from "../assets/bnp/hair-serum.png";
import conditioner from "../assets/bnp/conditioner.png";
import hairColor from "../assets/bnp/hair-color.png";

/* Daily Essentials */
import bathSpa from "../assets/bnp/bath-spa.png";
import oralCare from "../assets/bnp/oral-care.png";
import hygiene from "../assets/bnp/women-hygiene.png";
import mensGroom from "../assets/bnp/mens-groom.png";
import shaving from "../assets/bnp/shaving.png";
import soaps from "../assets/bnp/soaps.png";

/* Brands */
import loreal from "../assets/bnp/loreal.png";
import tresemme from "../assets/bnp/tresemme.png";
import himalaya from "../assets/bnp/himalaya.png";
import colgate from "../assets/bnp/colgate.png";
import stayfree from "../assets/bnp/stayfree.png";

/* Kid's Fashion */
import boysTshirt from "../assets/bnp/boys-tshirt.png";
import boysShorts from "../assets/bnp/boys-shorts.png";
import boysJeans from "../assets/bnp/boys-jeans.png";
import kidsShoes from "../assets/bnp/kids-shoes.png";
import girlTshirt from "../assets/bnp/girl-tshirt.png";
import girlsDress from "../assets/bnp/girls-dress.png";
import schoolBags from "../assets/bnp/school-bags.png";


/* --------------------
   CATEGORY SECTIONS
-----------------------*/
const SECTIONS = [
  {
    title: "Face Care",
    items: [
      { img: faceWash, label: "Face Wash" },
      { img: sunscreen, label: "Sunscreen" },
      { img: faceCream, label: "Face Creams" },
      { img: serums, label: "Serums" },
      { img: lotions, label: "Lotions" },
      { img: scrub, label: "Scrub" },
    ],
  },

  {
    title: "Hair Care",
    items: [
      { img: shampoo, label: "Shampoo" },
      { img: hairOil, label: "Hair Oil" },
      { img: hairSerum, label: "Hair Serum" },
      { img: conditioner, label: "Conditioner" },
      { img: hairColor, label: "Hair Color" },
    ],
  },

  {
    title: "Daily Essentials",
    items: [
      { img: bathSpa, label: "Bath & Spa" },
      { img: oralCare, label: "Oral Care" },
      { img: hygiene, label: "Women Hygiene" },
      { img: mensGroom, label: "Men’s Grooming" },
      { img: shaving, label: "Shaving Essentials" },
      { img: soaps, label: "Soaps" },
    ],
  },

  {
    title: "Brands",
    items: [
      { img: loreal, label: "Shop now" },
      { img: tresemme, label: "Shop now" },
      { img: himalaya, label: "Shop now" },
      { img: colgate, label: "Shop now" },
      { img: stayfree, label: "Shop now" },
    ],
  },

  {
    title: "Kid's Fashion",
    items: [
      { img: boysTshirt, label: "Boys T-Shirt" },
      { img: boysShorts, label: "Boys Shorts" },
      { img: boysJeans, label: "Boys Jeans" },
      { img: kidsShoes, label: "Kids Shoes" },
      { img: girlTshirt, label: "Girl T-Shirt" },
      { img: girlsDress, label: "Girls Dresses" },
      { img: schoolBags, label: "School Bags" },
    ],
  },
];


/* --------------------
   COMPONENT
-----------------------*/
export default function BpCategories() {
  return (
    <div className="bp-wrapper">
      <img src={banner} className="bp-banner" alt="banner" />

      {SECTIONS.map((section, sIndex) => (
        <div key={sIndex} className="bp-section">
          <h3 className="bp-section-title">{section.title}</h3>

          <div className="bp-grid">
            {section.items.map((item, iIndex) => (
              <div key={iIndex} className="bp-item">
                <img src={item.img} className="bp-icon" alt={item.label} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}
