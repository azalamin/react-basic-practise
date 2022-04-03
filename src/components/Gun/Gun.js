import React from 'react';
import './Gun.css';

const Gun = ({ gun, handleAddToCart }) => {
  return (
    <div className="gun-container">
      <h2>{gun.name}</h2>
      <h1>${gun.price}</h1>
      <img style={{ width: "300px" }} src={gun.img} alt="" />
      <button onClick={()=> handleAddToCart(gun)} className="add-to-cart">
        Add To Cart
      </button>
    </div>
  );
};

export default Gun;