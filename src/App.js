import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './styles.css';
import Img from './assets/coffee4.png';


export default function App() {

  const [coffee, setCoffee] = useState(0);

  function addCoffee() {
    setCoffee(coffee +1);
  }

  function removeCoffee() {
    if (coffee !== 0) {
      setCoffee(coffee -1);
    }
  }  
  

  return(
    <div className="container">
    <div className="main_div">
      <h1>Coffee Lover <FaHeart size={35} /> </h1>
      <h2> {coffee} cafés!</h2>
      <div className="btn">
        <button type="button" onClick={removeCoffee}>Ops! Errei na conta.</button>
        <button type="button" onClick={addCoffee}>Opa! Mais um!</button>
      </div>
      <div className="coffee_img">
        <img src={Img} alt='coffee' />
      </div>
    </div>
    </div>
  )
}