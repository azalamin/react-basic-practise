import React from 'react';

const Cart = ({ guns }) => {
  return (
    <div>
      <h2>Order summary</h2>
      {guns.map(gun => <li>{gun.name}</li>)}
    </div>
  );
};

export default Cart;