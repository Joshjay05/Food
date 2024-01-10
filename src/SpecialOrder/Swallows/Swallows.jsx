import React from "react";
import amala from "../../Image/Amala.png";
import eba from "../../Image/Eba.png";
import poundedyam from "../../Image/Pounded Yam.png";
import fufu from "../../Image/fufu.png";
import "./swallow.css";

import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Swallows = () => {
  return (
    <section>
      <article className="rice-order">
        <div className="display">
          <img src={amala} alt="" />
          <p>Amala</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
        <div className="display">
          <img src={fufu} alt="" />
          <p>Fufu</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
      </article>
      <article className="rice-order">
        <div className="display">
          <img src={eba} alt="" />
          <p>Eba</p>
          <div className="ratings">
            <li>
              <AiOutlineStar /> <span> 4.8</span>
            </li>
            <AiOutlineHeart />
          </div>
        </div>
        <div className="display">
          <img src={poundedyam} alt="" />
          <p>Pounded Yam</p>
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

export default Swallows;
