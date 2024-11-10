import React from 'react'
import './FeaturedCar.css'

function FCReuse(props) {
  return (
    <div style={{margin: "30px 10px", }}>
      <div style={{border: "1px solid #ddd"}}>
      <img style={{padding: "70px 30px", margin: "50px 10px"}} src={props.image} alt="" />
      <p style={{color: "#9097A0", padding: "20px 5px", borderTop: "1px solid #ddd"}}>{props.model}</p>
      </div>
      
      <h3 style={{color: "#444A57", margin: "20px", fontWeight: "500"}}>{props.heading}</h3>
      <h6 style={{color: "#444A57", fontSize: "16px", fontWeight: "600", marginBottom: "20px"}}>{props.price}</h6>
      <p style={{color: "#9097A0", lineHeight: "30px"}}>{props.description}</p>
    </div>
  )
}

export default FCReuse
