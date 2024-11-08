import React from 'react'
import './Card.css'
import { FaCar } from "react-icons/fa6";

function Card() {
  return (
    <div>
        <div className="">
        <div className="cards">
            <div className="card">
                <div className="car-img">
                <FaCar />
                </div>
                <div className="card-title">
                    <h3>largest dealership of cars</h3>
                </div>
                <div className="card-p">
                    <p>Nemo enim ipsam voluptatem quia <br /> voluptas sit aspernatur aut odit aut <br /> den fugit sed quia.</p>
                </div>
                <div className="line"></div>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Card
