import React from "react";
import "./GunDetails.css";

const GunDetails = ({ gun }) => {
  return (
    <div className="gun-cart">
      <h3>{gun.name}</h3>
      <h3>${gun.price}</h3>
    </div>
  );
};

export default GunDetails;
