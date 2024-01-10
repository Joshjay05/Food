import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const FoodModal = ({ cancelModal }) => {
  return (
    <section className="Overlay">
      <article className="modal-content">
        <li className="m-head">
          <p className="title"> Jollof rice</p>
          <IoIosCloseCircleOutline
            onClick={() => {
              cancelModal(false);
            }}
          />
        </li>
        <li className="m-desc">
          <p>Portion</p>
          <p className="Sesc">
            <button className="l-btn">-</button>
            <input type="text" placeholder="#10000" className="" />
            <button className="r-btn">+</button>
          </p>
        </li>
        <ul>
          <p>Add Protein to your Meal</p>

          <li className="R-desc">
            <div className="left-desc">
              <input type="radio" /> <p>Chicken</p>
            </div>
            <div className="desc">
              <span className="item-amount">#10000</span>
              <span className="i-btn">
                <button>-</button>
                <input type="text" placeholder="1" value="1" className="" />
                <button>+</button>
              </span>
            </div>
          </li>

          <li className="R-desc">
            <div className="left-desc">
              <input type="radio" /> <p>Chicken</p>
            </div>
            <div className="desc">
              <span className="item-amount">#10000</span>
              <span className="i-btn">
                <button>-</button>
                <input type="text" placeholder="1" value="1" className="" />
                <button>+</button>
              </span>
            </div>
          </li>

          <li className="R-desc">
            <div className="left-desc">
              <input type="radio" /> <p>Chicken</p>
            </div>
            <div className="desc">
              <span className="item-amount">#10000</span>
              <span className="i-btn">
                <button>-</button>
                <input type="text" placeholder="1" value="1" className="" />
                <button>+</button>
              </span>
            </div>
          </li>

          <li className="R-desc">
            <div className="left-desc">
              <input type="radio" /> <p>Chicken</p>
            </div>
            <div className="desc">
              <span className="item-amount">#10000</span>
              <span className="i-btn">
                <button>-</button>
                <input type="text" placeholder="1" value="1" className="" />
                <button>+</button>
              </span>
            </div>
          </li>
        </ul>
        <div className="d-desc">
          <li className="bottom-desc">
            <IoIosCloseCircleOutline /> <p>clear All</p>
          </li>
          <li className="action-btn">
            <button>Add to Order</button> | <p>#100000</p>
          </li>
        </div>
      </article>
    </section>
  );
};

export default FoodModal;
