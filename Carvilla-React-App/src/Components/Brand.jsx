import React from "react";
import Brand1 from "../assets/images/brand/br1.png";
import Brand2 from "../assets/images/brand/br2.png";
import Brand3 from "../assets/images/brand/br3.png";
import Brand4 from "../assets/images/brand/br4.png";
import Brand5 from "../assets/images/brand/br5.png";
import Brand6 from "../assets/images/brand/br6.png";

function Brand() {
  return (
    <div>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "100px",
          }}
          className="brand"
        >
          <img src={Brand1} alt="" />
          <img src={Brand2} alt="" />
          <img src={Brand3} alt="" />
          <img src={Brand4} alt="" />
          <img src={Brand5} alt="" />
          <img src={Brand6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Brand;
