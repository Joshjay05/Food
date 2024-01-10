import React from "react";
import porridge from "../../Image/Porridge.png";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import "./porridge.css";

const Porridge = () => {
  return (
    <section>
      <article className="rice-order">
        <div className="display">
          <img src={porridge} alt="" />
          <p>Porridge</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
        {/* <div className="display">
          <img src={rice} alt="" />
          <p>Rice</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div> */}
      </article>
    </section>
  );
};

export default Porridge;
