import React from 'react';
import GunDetails from '../GunDetails/GunDetails';

const Cart = ({ guns }) => {
  return (
    <div>
      <h2>Order summary</h2>
      {guns.length === 4 ? <p>You added 4 items</p> : <p>Please add more</p>}
      {guns.map((gun) => (
        <GunDetails gun={gun} guns={guns}></GunDetails>
      ))}
      {guns.length >= 2 ? <button>Remove Item</button> : <p>Add more items</p>}
    </div>
  );
};

export default Cart;