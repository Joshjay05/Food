import React from "react";
import coke from "../../Image/CokeDrink.png";
import fanta from "../../Image/Fanta.png";
import Sprite from "../../Image/Sprite.png";
import pepsi from "../../Image/Pepsi.png";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import "./drink.css";

const Drinks = () => {
  return (
    <section>
      <article className="drink-order">
        <div className="drink-display">
          <img src={coke} alt="" />
          <p>Coke</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
        <div className="drink-display">
          <img src={fanta} alt="" />
          <p>Fanta</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
      </article>
      <article className="rice-order">
        <div className="drink-display">
          <img src={Sprite} alt="" />
          <p>Sprite</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
        <div className="drink-display">
          <img src={pepsi} alt="" />
          <p>Pepsi</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Drinks;
