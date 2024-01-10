import React from "react";
import ring from "../Image/Ring.png";
import rice from "../Image/chicken_rice.png";
import happy_woman from "../Image/happyWoman.png";
import "./default.css";

const Default = () => {
  return (
    <section className="order-section">
      <article className="order-container_one">
        <li className="">
          <p>
            <b>Special Order</b> <br /> for our staff
          </p>
          <p>Cashback</p>
          <span>100%</span>
        </li>
        <div>
          <img src={happy_woman} alt="" className="hp" />
        </div>
      </article>

      <article className="order-container_two">
        <div>
          <li>
            <p>Total Item</p>
            <p>21</p>
          </li>
          <li>
            <p>category</p>
            <p>4</p>
          </li>
        </div>

        <div>
          <img src={rice} alt="" className="hps" />
        </div>
      </article>

      <article className="order-container_three">
        <div className="txt-two">
          <p> Are you hungry?</p>
          <b>Don't Wait!</b>
          <p>Let's start to order now</p>
          <button className="btn">Special order</button>
        </div>

        <div>
          <img src={ring} alt="" className="hps_2" />
        </div>
      </article>
    </section>
  );
};

export default Default;
