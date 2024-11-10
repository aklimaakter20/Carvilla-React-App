import React from "react";

function ClientReuse(props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        margin: "0 30px",
        padding: "40px 20px",
      }}
    >
      <img style={{ padding: "30px 0" }} src={props.Client} alt="" />
      <p
        style={{
          fontSize: "20px",
          color: "#8C93A1",
          lineHeight: "30px",
          marginBottom: "20px",
        }}
      >
        {props.description}
      </p>
      <h3 style={{ color: "#4F5561", fontSize: "18px", marginBottom: "10px" }}>
        {props.name}
      </h3>
      <h3 style={{ color: "#4F5561", fontSize: "18px" }}>{props.address}</h3>
    </div>
  );
}

export default ClientReuse;
