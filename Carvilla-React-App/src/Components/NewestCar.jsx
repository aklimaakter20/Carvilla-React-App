import React from "react";
import "./NewestCar.css";
import ncm3 from "../assets/images/new-cars-model/ncm3.png";

function NewestCar() {
  return (
    <div>
      <div className="checkout-section">
        <h4>checkout the latest cars</h4>
        <h1>newest cars</h1>
        <div className="line"></div>
      </div>
      <div className="new-car-info">
        <img src={ncm3} alt="" />
        <div className="car-info">
          <h1>Ferrari 488 SuperFast</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            fugit! Facere aliquid autem itaque vitae soluta deserunt veritatis!
          </p>
          <button className="btn">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default NewestCar;
