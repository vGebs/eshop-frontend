import React from "react";
import "./roundedButton.css"

const RoundedButton = ({ title, url }) => {
  return (
    <a href={url}>
      <button className="rounded-button">{title}</button>
    </a>
  );
};

export default RoundedButton;
