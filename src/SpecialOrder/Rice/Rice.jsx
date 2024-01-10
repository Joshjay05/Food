import React, { useState } from "react";
// import rice from "../../Image/rice.png";
import w_rice from "../../Image/White Rice 1.png";
import j_rice from "../../Image/jollofRice.png";
import f_rice from "../../Image/friedRice.png";
import mixedrice from "../../Image/FriedJollof.png";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import "./rice.css";
import FoodModal from "../FoodModal";

const Rice = () => {
  const [modal, setModal] = useState(false);
  return (
    <section>
      <article className="rice-order">
        <div
          className="display"
          onClick={() => {
            setModal(true);
          }}
        >
          <img src={j_rice} alt="" />
          <p>Jollof Rice</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
        <div
          className="display"
          onClick={() => {
            setModal(true);
          }}
        >
          <img src={f_rice} alt="" />
          <p> Fried Rice</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
      </article>
      <article className="rice-order">
        <div
          className="display"
          onClick={() => {
            setModal(true);
          }}
        >
          <img src={w_rice} alt="" />
          <p>White Rice</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
        <div
          className="display"
          onClick={() => {
            setModal(true);
          }}
        >
          <img src={mixedrice} alt="" />
          <p>Jollof & Fried Rice</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
        {modal && <FoodModal cancelModal={setModal} />}
      </article>
    </section>
  );
};

export default Rice;
