import React, { useState } from "react";
import "./dashboard.css";
import Default from "../Home/Default";
import o_logo from "../Image/Order.png";
import DefaultOrder from "../DefaultOrder/DefaultOrder";
import Special from "../SpecialOrder/Special";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [home, setHome] = useState(true);
  const [defaultOrder, setDefault] = useState(false);
  const [specialOrder, setSpecialOrder] = useState(false);

  return (
    <section className="dashboard">
      <article className="left-menu">
        <div className="order">
          <p className="order-title">select Order Type</p>
          <span className="buttons">
            <button
              className="btn"
              onClick={() => {
                setDefault(true);
                setHome(false);
                setSpecialOrder(false);
              }}
            >
              Default Order
            </button>{" "}
            <button
              className="btn"
              onClick={() => {
                setSpecialOrder(true);
                setDefault(false);
                setHome(false);
              }}
            >
              {" "}
              Special Oder
            </button>
          </span>
        </div>
        <section className="scroll_by">
          <p className="order-heading">Latest Order</p>
          <div className="scroll">
            <div className="scroll_content">
              <li className="orders">
                <img src={o_logo} alt="" />{" "}
                <div className="food-content">
                  <b className="orderfood">Jollof</b>
                  <span className="orderfood-date">1st May 2023 </span>
                </div>
              </li>
              <li className="orders">
                <img src={o_logo} alt="" />{" "}
                <div className="food-content">
                  <b className="orderfood">Jollof</b>
                  <span className="orderfood-date">1st May 2023 </span>
                </div>
              </li>
              <li className="orders">
                <img src={o_logo} alt="" />{" "}
                <div className="food-content">
                  <b className="orderfood">Jollof</b>
                  <span className="orderfood-date">1st May 2023 </span>
                </div>
              </li>
              <li className="orders">
                <img src={o_logo} alt="" />{" "}
                <div className="food-content">
                  <b className="orderfood">Jollof</b>
                  <span className="orderfood-date">1st May 2023 </span>
                </div>
              </li>
              <li className="orders">
                <img src={o_logo} alt="" />{" "}
                <div className="food-content">
                  <b className="orderfood">Jollof</b>
                  <span className="orderfood-date">1st May 2023 </span>
                </div>
              </li>{" "}
              <li className="orders">
                <img src={o_logo} alt="" />{" "}
                <div className="food-content">
                  <b className="orderfood">Jollof</b>
                  <span className="orderfood-date">1st May 2023 </span>
                </div>
              </li>
              <li className="orders">
                <img src={o_logo} alt="" />{" "}
                <div className="food-content">
                  <b className="orderfood">Jollof</b>
                  <span className="orderfood-date">1st May 2023 </span>
                </div>
              </li>
              <li className="orders">
                <img src={o_logo} alt="" />{" "}
                <div className="food-content">
                  <b className="orderfood">Jollof</b>
                  <span className="orderfood-date">1st May 2023 </span>
                </div>
              </li>
            </div>
          </div>
        </section>
      </article>
      <article className="middle-menu">
        {/* <div></div> */}
        <section className="count-down">
          <div className="date">
            <span className="day">8</span>

            <span className="month">May</span>
          </div>
          <div className="timer">
            <span className="deadline">Deadline</span>
            <span class="time"> 0Days : 2Hours : 58Minutes : 6sec</span>
          </div>
        </section>

        <article className="default">
          {home && <Default />}
          {defaultOrder && <DefaultOrder />}
          {specialOrder && <Special />}
        </article>
      </article>

      <article className="right-menu">
        <div className="right-container">
          <div className="right-preview">
            <span>Order Summary</span> <span>Order #24</span>{" "}
          </div>
          {/* <img src={no_order} alt="" /> */}
          <div className="middle-right_content">
            <span>No Item Yet</span>
            <p>Looks like you haven't made your order yet</p>
          </div>

          <div>
            <li>
              <p>Cashback</p> <p>-&#8358; 10,00</p>{" "}
            </li>
          </div>
        </div>
       <Link to="payment"><button>Checkout</button> </Link> 
      </article>
    </section>
  );
};

export default Dashboard;
