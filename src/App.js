import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Guns from './components/Guns/Guns';

function App() {
  const [guns, setGuns] = useState([])
  const handleAddToCart = (gun) => {
    const newCart = [...guns, gun];
    setGuns(newCart);
  };
  return (
    <div className="App">
      <div className="guns-cart-container">
        <Guns handleAddToCart={handleAddToCart}></Guns>
        <Cart guns={guns}></Cart>
      </div>
    </div>
  );
}

export default App;
