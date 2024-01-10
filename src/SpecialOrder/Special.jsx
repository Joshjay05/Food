import React, { useState } from "react";
// import rice from "../Image/White Rice 1.png";
import rice from "../Image/rice.png";

import Swallow from "../Image/Amala.png";
import Porridges from "../Image/Porridge.png";
import Drink from "../Image/CokeDrink.png";
// import Rice from "./Rice/Rice";
import Rice from "./Rice/Rice";
import Swallows from "./Swallows/Swallows";
import Drinks from "./Drinks/Drinks";
import Porridge from "./Porridge/Porridge";
import "./special.css";

const Special = () => {
  const [riceOrder, setRiceOrder] = useState(true);
  const [swallowOrder, setSwallowOrder] = useState(false);
  const [porridgeOrder, setporridgeOrder] = useState(false);
  const [drinkOrder, setdrinkOrder] = useState(false);
  return (
    <div>
      <h1 className="Cat-title">Menu Category</h1>
      <article className="menus-category">
        <div
          className="menu-cat"
          onClick={() => {
            setRiceOrder(true);
            setdrinkOrder(false);
            setporridgeOrder(false);
            setSwallowOrder(false);
          }}
        >
          <img src={rice} alt="" />
          <p>Rice</p>
        </div>
        <div
          className="menu-cat"
          onClick={() => {
            setRiceOrder(false);
            setdrinkOrder(false);
            setporridgeOrder(false);
            setSwallowOrder(true);
          }}
        >
          <img src={Swallow} alt="" />
          <p>Swallows</p>
        </div>
        <div
          className="menu-cat"
          onClick={() => {
            setRiceOrder(false);
            setdrinkOrder(false);
            setporridgeOrder(true);
            setSwallowOrder(false);
          }}
        >
          <img src={Porridges} alt="" />
          <p>Porridge</p>
        </div>
        <div
          className="menu-cat"
          onClick={() => {
            setRiceOrder(false);
            setdrinkOrder(true);
            setporridgeOrder(false);
            setSwallowOrder(false);
          }}
        >
          <img src={Drink} alt="" />
          <p>Drink</p>
        </div>
      </article>

      <article>
        {riceOrder && <Rice />}
        {swallowOrder && <Swallows />}
        {drinkOrder && <Drinks />}
        {porridgeOrder && <Porridge />}
      </article>
    </div>
  );
};

export default Special;
