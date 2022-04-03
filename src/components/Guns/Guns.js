import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Guns.css';

const Guns = ({ handleAddToCart }) => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/azalamin/react-gun-bank/main/public/data.json"
    )
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="guns-container">
      {guns.map((gun) => (
        <Gun handleAddToCart={handleAddToCart} gun={gun}></Gun>
      ))}
    </div>
  );
};

export default Guns;