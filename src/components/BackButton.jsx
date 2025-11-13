import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BackButton.css";
import backIcon from "../assets/back.svg";

const BackButton = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
    else navigate(-1);
  };

  return (
    <button className="navback-btn" onClick={handleClick}>
      <img src={backIcon} alt="Go Back" className="navback-icon" />
    </button>
  );
};

export default BackButton;
